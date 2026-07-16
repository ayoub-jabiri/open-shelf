"use client";
import BookDetails from "@/app/_components/books/BookDetails";
import Error from "@/app/_components/global/Error";
import Loading from "@/app/_components/global/Loading";
import { Book } from "@/app/_types/book";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";

interface DetailsProps {
    params: Promise<{ bookId: string }>;
}

export default function Details({ params }: DetailsProps) {
    const { bookId } = use(params);

    const [loading, setLoading] = useState<boolean>(true);
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const getBookData = async () => {
            try {
                const { data } = await axios.get(`/api/books/${bookId}`);
                setBook(data.book);
            } catch (error: unknown) {
                const errorMessage: string =
                    error.response?.data?.message ||
                    error.response?.statusText ||
                    "Something went wrong!";

                setError(errorMessage);
                setBook(null);
            } finally {
                setLoading(false);
            }
        };
        getBookData();
    }, []);

    return (
        <>
            <section className="mb-4">
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>Books</li>
                        <li>{book && book.title}</li>
                    </ul>
                </div>
            </section>
            <section className="grid grid-cols-12 max-md:gap-y-5 md:gap-x-20">
                {loading && <Loading />}
                {book && <BookDetails book={book} />}
                {error && <Error errorMessage={error} />}
            </section>
        </>
    );
}
