import BookSchema from "@/app/_models/book.schema";
import { type Book } from "../_types/book";

export const getBooks = async () => await BookSchema.find();

export const getSingleBook = async (query: { _id?: string; isbn?: string }) =>
    await BookSchema.findOne(query);

export const saveNewBook = async (book: Book) => await BookSchema.create(book);

export const updatedBook = async (bookId: string, newData: Book) => {
    const book = await BookSchema.findById(bookId);

    book.image = newData.image;
    book.title = newData.title;
    book.author = newData.author;
    book.isbn = newData.isbn;
    book.category = newData.category;
    book.status = newData.status;
    book.yearOfPublication = newData.yearOfPublication;
    book.description = newData.description;

    return await book.save();
};

export const deleteBook = async (bookId: string) => {
    await BookSchema.findByIdAndDelete(bookId);
    console.log("deleted");
};
