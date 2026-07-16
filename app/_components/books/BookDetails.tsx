import { type Book } from "@/app/_types/book";

export default function BookDetails({ book }: { book: Book }) {
    return (
        <>
            <div className="max-md:col-span-12 md:col-span-4">
                <div className="self-stretch max-md:w-full p-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-center">
                    <div className="self-stretch pb-4 flex flex-col justify-start items-start">
                        <div className="self-stretch relative bg-gray-100 rounded-lg shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md flex flex-col justify-center items-start overflow-hidden">
                            <img
                                className="self-stretch h-96 relative"
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
                    </div>
                    <div className="self-stretch pt-2 flex flex-col justify-start items-start gap-4">
                        <div className="self-stretch px-3 pt-3 pb-3.5 bg-gray-100 rounded-lg flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-slate-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-wide">
                                    ISBN
                                </div>
                            </div>
                            <div className="justify-center text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">
                                {book.isbn}
                            </div>
                        </div>
                        <div className="self-stretch px-3 pt-3 pb-3.5 bg-gray-100 rounded-lg flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-slate-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-wide">
                                    LIBRARY ID
                                </div>
                            </div>
                            <div className="justify-center text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">
                                {book.id}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-md:col-span-12 md:col-span-8">
                <div className="self-stretch w-full p-8 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <h1 className="self-stretch justify-center text-zinc-900 text-4xl font-bold font-['Inter'] leading-10">
                                {book.title}
                            </h1>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <h2 className="self-stretch justify-center text-slate-600 text-2xl font-semibold font-['Inter'] leading-8">
                                by {book.author}
                            </h2>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                        <div className="self-stretch px-3 py-1 bg-blue-100 rounded-full inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-slate-600 text-xs font-semibold font-['Inter'] leading-4 tracking-wide">
                                {book.category}
                            </div>
                        </div>
                        <div className="self-stretch px-3 py-1 bg-blue-100 rounded-full inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-slate-600 text-xs font-semibold font-['Inter'] leading-4 tracking-wide">
                                {book.yearOfPublication}
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">
                                Description
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <p className="self-stretch justify-center text-gray-700 text-base font-normal font-['Inter'] leading-6">
                                {book.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
