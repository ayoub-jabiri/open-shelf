import { type Book } from "@/app/_types/book";
import Link from "next/link";

interface BookCardProps {
    book: Book;
}

export default function BookCard({ book }: BookCardProps) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3 self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-300 inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch relative flex flex-col justify-center items-start overflow-hidden">
                <img
                    className="self-stretch w-full h-96 relative"
                    src={book.image}
                    alt={book.title}
                />
                {book.status == "available" ? (
                    <div className="px-2 py-1 right-[10px] top-[12px] absolute bg-emerald-100 rounded-md flex flex-col justify-start items-start">
                        <div className="justify-center text-emerald-800 text-xs font-semibold font-['Inter'] leading-4">
                            {book.status}
                        </div>
                    </div>
                ) : (
                    <div className="size- px-2 py-1 right-[10px] top-[12px] absolute bg-rose-200 rounded-md inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-amber-900 text-xs font-semibold font-['Inter'] leading-4">
                            Borrowed
                        </div>
                    </div>
                )}
            </div>
            <div className="self-stretch p-4 flex flex-col justify-between items-start">
                <div className="self-stretch pb-1 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch justify-center text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">
                            {book.title}
                        </div>
                    </div>
                </div>
                <div className="self-stretch pb-2 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                            {book.author}
                        </div>
                    </div>
                </div>
                <div className="self-stretch pb-4 flex flex-col justify-start items-start">
                    <div className="self-stretch inline-flex justify-start items-center gap-2">
                        <div className="size- px-2 py-0.5 bg-gray-100 rounded-sm inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-gray-700 text-[10px] font-normal font-['Inter'] uppercase leading-4 tracking-wide">
                                {book.category}
                            </div>
                        </div>
                        <div className="size- inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-gray-500 text-xs font-normal font-['Inter'] leading-4">
                                {book.yearOfPublication}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <Link
                        href={`/books/${book.id}`}
                        className="self-stretch py-2 bg-indigo-700 rounded-md inline-flex justify-center items-center"
                    >
                        <div className="text-center justify-center text-white text-sm font-medium font-['Inter'] leading-5">
                            View Details
                        </div>
                    </Link>
                    <div className="self-stretch inline-flex justify-center items-start gap-2">
                        <button className="size- max-md:w-[calc(50%-4px)] md:w-[100px] py-1.5 rounded-md outline outline-1 outline-offset-[-1px] outline-indigo-700 inline-flex flex-col justify-center items-center cursor-pointer">
                            <div className="text-center justify-center text-indigo-700 text-xs font-semibold font-['Inter'] leading-4 tracking-wide">
                                Edit
                            </div>
                        </button>
                        <button className="size- max-md:w-[calc(50%-4px)] md:w-[100px] py-1.5 rounded-md outline outline-1 outline-offset-[-1px] outline-red-700 inline-flex flex-col justify-center items-center cursor-pointer">
                            <div className="text-center justify-center text-red-700 text-xs font-semibold font-['Inter'] leading-4 tracking-wide">
                                Delete
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
