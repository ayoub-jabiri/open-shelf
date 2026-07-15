import BookSchema from "@/app/_models/book.schema";
import { type Book } from "../_types/book";

export const getBooks = async () => await BookSchema.find();

export const saveNewBook = async (book: Book) => await BookSchema.create(book);
