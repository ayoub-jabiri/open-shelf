"use client";
import { RiSave2Line } from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";
import { type Book } from "../_types/book";
import axios, { AxiosError } from "axios";
import AlertPopup from "../_components/global/AlertPopup";

interface ZodError {
    origin: string;
    code: string;
    minimum: number;
    inclusive: boolean;
    path: string[];
    message: string;
}

interface FormErrors {
    title?: { error: string };
    author?: { error: string };
    image?: { error: string };
    isbn?: { error: string };
    category?: { error: string };
    status?: { error: string };
    yearOfPublication?: { error: string };
    description?: { error: string };
}

export default function AddNewBook() {
    const [newBookData, setNewBookData] = useState<Book>({
        image: "",
        title: "",
        author: "",
        isbn: "",
        category: "",
        status: "available",
        yearOfPublication: "",
        description: "",
    });
    const [formErrors, setFormErros] = useState<FormErrors | null>(null);
    const [successMessage, setSuccessMessage] = useState<null | string>(null);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    function handleChange(e: React.ChangeEvent): void {
        setNewBookData((prevData: Book) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSaveBook(e: React.SubmitEvent): Promise<void> {
        e.preventDefault();

        try {
            const { data } = await axios.post(`/api/books`, newBookData);

            setSuccessMessage(data.message);
            setFormErros(null);
        } catch (error: unknown) {
            if (error.response?.data?.errors) {
                const errors: FormErrors = {};

                error.response?.data?.errors.map((error: ZodError) => {
                    errors[error.path[0]] = {
                        error: error.message,
                    };
                });

                setFormErros(errors);
            }

            setErrorMessage(
                error.response?.data?.message || "Something went wrong!"
            );
        }
    }

    return (
        <>
            <div className="flex flex-col justify-start items-start gap-6">
                <section>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>Add New Book</li>
                        </ul>
                    </div>
                </section>
                <section className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <h1 className="self-stretch justify-center text-zinc-900 text-4xl font-bold font-['Inter'] leading-10">
                            Add New Book to Catalog
                        </h1>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <p className="self-stretch justify-center text-gray-700 text-base font-normal font-['Inter'] leading-6">
                            Fill in the professional details to index this
                            volume in the digital archives.
                        </p>
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
                        <p className="text-[#F44336] text-sm mt-2">
                            {formErrors?.title && `* ${formErrors.title.error}`}
                        </p>
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
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.author &&
                                    `* ${formErrors.author.error}`}
                            </p>
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
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.image &&
                                    `* ${formErrors.image.error}`}
                            </p>
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
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.category &&
                                    `* ${formErrors.category.error}`}
                            </p>
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
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.isbn &&
                                    `* ${formErrors.isbn.error}`}
                            </p>
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
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.status &&
                                    `* ${formErrors.status.error}`}
                            </p>
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
                            <p className="text-[#F44336] text-sm mt-2">
                                {formErrors?.yearOfPublication &&
                                    `* ${formErrors.yearOfPublication.error}`}
                            </p>
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
                        <p className="text-[#F44336] text-sm mt-2">
                            {formErrors?.description &&
                                `* ${formErrors.description.error}`}
                        </p>
                    </fieldset>
                    <div className="self-stretch pt-4 mt-4 border-t border-slate-300 inline-flex justify-end items-center gap-4">
                        <button className="size- px-8 py-2.5 bg-indigo-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-start items-center gap-2 cursor-pointer">
                            <div className="size- inline-flex flex-col justify-start items-center">
                                <RiSave2Line className="text-white" />
                            </div>
                            <div className="text-center justify-center text-white text-sm font-medium font-['Inter'] leading-5">
                                Save Book
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            {successMessage && (
                <AlertPopup
                    isSuccess={true}
                    message={successMessage}
                    setMessage={setSuccessMessage}
                />
            )}
            {errorMessage && (
                <AlertPopup
                    isSuccess={false}
                    message={errorMessage}
                    setMessage={setErrorMessage}
                />
            )}
        </>
    );
}
