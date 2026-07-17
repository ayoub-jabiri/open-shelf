"use client";
import { useState } from "react";
import AlertPopup from "../global/AlertPopup";
import { Book } from "@/app/_types/book";
import axios from "axios";

export default function EditBookModal({
    book,
    setShowEditModal,
    getBooks,
}: {
    book: Book;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    getBooks: () => void;
}) {
    const [newBookData, setNewBookData] = useState<Book>({
        image: book?.image || "",
        title: book?.title || "",
        author: book?.author || "",
        isbn: book?.isbn || "",
        category: book?.category || "",
        status: book?.status || "available",
        yearOfPublication: book?.yearOfPublication || "",
        description: book?.description || "",
    });
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    function handleChange(e: React.ChangeEvent): void {
        setNewBookData((prevData: Book) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    function handleCancel() {
        setShowEditModal(false);
    }

    async function handleSaveBook(e: React.SubmitEvent): Promise<void> {
        e.preventDefault();

        if (Object.values(newBookData).every(Boolean)) {
            try {
                await axios.put(`/api/books/${book.id}`, newBookData);

                getBooks();
                setShowEditModal(false);
            } catch (error: unknown) {
                console.log(error.response);
                setErrorMessage(
                    error.response?.data?.message || "Something went wrong!"
                );
            }
        }
    }

    return (
        <div className="fixed inset-0 min-h-screen z-50 bg-(--bg-color) overflow-auto">
            <div className="container py-8 flex flex-col justify-start items-start gap-6">
                <section className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-zinc-900 text-4xl font-bold font-['Inter'] leading-10">
                            Edit Book: {book?.title}
                        </div>
                    </div>
                </section>
                <form
                    onSubmit={handleSaveBook}
                    className="bg-white w-full p-6 border border-[#C7C4D8] flex flex-col gap-5 rounded-md"
                >
                    <fieldset>
                        <legend className="fieldset-legend">Title</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="e.g. The Architecture of Silence"
                            name="title"
                            value={newBookData.title}
                            onChange={handleChange}
                        />
                    </fieldset>

                    <div className="flex justify-between">
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">Author</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="e.g. Julian Vayne"
                                name="author"
                                value={newBookData.author}
                                onChange={handleChange}
                            />
                        </fieldset>
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">Image</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="e.g. http://image.com"
                                name="image"
                                value={newBookData.image}
                                onChange={handleChange}
                            />
                        </fieldset>
                    </div>
                    <div className="flex justify-between">
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Category
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="e.g. http://image.com"
                                name="category"
                                value={newBookData.category}
                                onChange={handleChange}
                            />
                        </fieldset>
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">ISBN</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="978-3-16-148410-0"
                                name="isbn"
                                value={newBookData.isbn}
                                onChange={handleChange}
                            />
                        </fieldset>
                    </div>
                    <div className="flex justify-between">
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">Status</legend>
                            <select
                                className="select w-full"
                                name="status"
                                value={newBookData.status}
                                onChange={handleChange}
                            >
                                <option value="available">Available</option>
                                <option value="borrowed">Borrowed</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset w-[49%]">
                            <legend className="fieldset-legend">
                                Year of Publication
                            </legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="2026"
                                name="yearOfPublication"
                                value={newBookData.yearOfPublication}
                                onChange={handleChange}
                            />
                        </fieldset>
                    </div>
                    <fieldset>
                        <legend className="fieldset-legend">Description</legend>
                        <textarea
                            className="textarea w-full resize-none"
                            placeholder="Enter a comprehensive summary of the book..."
                            name="description"
                            value={newBookData.description}
                            onChange={handleChange}
                        ></textarea>
                    </fieldset>
                    <div className="self-stretch pt-4 mt-4 border-t border-slate-300 inline-flex justify-end items-center gap-4">
                        <button
                            className="size- px-6 py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-indigo-700 inline-flex flex-col justify-center items-center cursor-pointer"
                            onClick={handleCancel}
                        >
                            <div className="text-center justify-center text-indigo-700 text-sm font-medium font-['Inter'] leading-5">
                                Cancel
                            </div>
                        </button>
                        <button className="size- px-8 py-2.5 bg-indigo-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-2 cursor-pointer">
                            <div className="text-center justify-center text-white text-sm font-medium font-['Inter'] leading-5">
                                Save Changes
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            {errorMessage && (
                <AlertPopup
                    isSuccess={false}
                    message={errorMessage}
                    setMessage={setErrorMessage}
                />
            )}
        </div>
    );
}
