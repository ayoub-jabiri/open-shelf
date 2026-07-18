import { dbConnect } from "@/app/_lib/db";
import { bookSchema } from "@/app/_schemas/book";
import {
    getSingleBook,
    getBooks,
    saveNewBook,
} from "@/app/_services/book.service";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export async function GET(req: NextRequest) {
    await dbConnect();

    const { searchParams } = req.nextUrl;

    const queries: { search?: string; filter?: string } = {};

    if (searchParams.has("search")) {
        if (searchParams.get("search")) {
            queries.search = searchParams.get("search");
        }
    }

    if (searchParams.has("status")) {
        if (searchParams.get("status")) {
            queries.status = searchParams.get("status");
        }
    }

    try {
        const books = await getBooks(queries);

        return NextResponse.json({ books }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Internal error!", error: error },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    await dbConnect();

    const {
        image,
        title,
        author,
        isbn,
        category,
        status,
        yearOfPublication,
        description,
    } = await req.json();

    try {
        const validateData = bookSchema.parse({
            image,
            title,
            author,
            isbn,
            category,
            status,
            yearOfPublication,
            description,
        });

        console.log(validateData);

        const bookCheck = await getSingleBook({ isbn });
        if (bookCheck) {
            return NextResponse.json(
                {
                    message: "The book is already saved!",
                },
                { status: 400 }
            );
        }

        const newBook = await saveNewBook({
            image,
            title,
            author,
            isbn,
            category,
            status,
            yearOfPublication,
            description,
        });
        return NextResponse.json(
            { message: "The book has been added successfully!", book: newBook },
            { status: 201 }
        );
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            console.log(error);
            return NextResponse.json(
                {
                    message: "Validation Failed!",
                    errors: [...JSON.parse(error)],
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Internal error!", error: error },
            { status: 500 }
        );
    }
}
