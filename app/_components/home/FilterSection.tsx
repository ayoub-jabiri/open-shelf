"use client";
import axios from "axios";
import React, { useState } from "react";
import AlertPopup from "../global/AlertPopup";
import { type Book } from "@/app/_types/book";

export default function FilterSection({
    setBooks,
}: {
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}) {
    const [search, setSearch] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    async function handleApplyFilter() {
        try {
            const { data } = await axios.get(
                `/api/books?search=${search}&status=${status}`
            );

            setBooks(data.books);
        } catch (error: unknown) {
            console.log(error.response);
            setErrorMessage(
                error.response?.data?.message || "Something went wrong!"
            );
        }
    }

    return (
        <section className="bg-white p-4 mb-4 border border-[#C7C4D8] rounded-md">
            <div className="grid grid-cols-12 items-end gap-3">
                <fieldset className="fieldset col-span-12 md:col-span-5">
                    <legend className="fieldset-legend">Search Catalog</legend>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Enter title or author..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </fieldset>
                <fieldset className="fieldset col-span-12 md:col-span-4">
                    <legend className="fieldset-legend">Status</legend>
                    <select
                        className="select w-full"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="available">Available</option>
                        <option value="borrowed">Borrowed</option>
                    </select>
                </fieldset>
                <div className="col-span-12 md:col-span-3">
                    <button
                        className="btn w-full bg-(--blue-color) text-white"
                        onClick={handleApplyFilter}
                    >
                        Apply Filter
                    </button>
                </div>
            </div>
            {errorMessage && (
                <AlertPopup
                    isSuccess={false}
                    message={errorMessage}
                    setMessage={setErrorMessage}
                />
            )}
        </section>
    );
}
