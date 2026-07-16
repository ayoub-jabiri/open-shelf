import { dbConnect } from "@/app/_lib/db";
import {
    deleteBook,
    getSingleBook,
    updatedBook,
} from "@/app/_services/book.service";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

interface RouteParams {
    params: Promise<{ id: string }>;
}

const bookNotFoundResponse = () => {
    return NextResponse.json({ message: "Book Not Found!" }, { status: 404 });
};

const invalideIdResponse = () => {
    return NextResponse.json(
        { message: "Invalid book ID format!" },
        { status: 400 }
    );
};

export async function GET(req: Request, { params }: RouteParams) {
    await dbConnect();

    const { id } = await params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return invalideIdResponse();

        const book = await getSingleBook({ _id: id });

        if (!book) {
            return bookNotFoundResponse();
        }

        return NextResponse.json({ book }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Internal error!", error: error },
            { status: 500 }
        );
    }
}

export async function PUT(req: Request, { params }: RouteParams) {
    await dbConnect();

    const { id } = await params;

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
        if (!mongoose.Types.ObjectId.isValid(id)) return invalideIdResponse();

        const bookCheck = await getSingleBook({ _id: id });
        if (!bookCheck) {
            return bookNotFoundResponse();
        }

        const book = await updatedBook(id, {
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
            { message: "The book has been updated successfully!", book },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Internal error!", error: error },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request, { params }: RouteParams) {
    await dbConnect();

    const { id } = await params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return invalideIdResponse();

        const book = await getSingleBook({ _id: id });

        if (!book) {
            return bookNotFoundResponse();
        }

        await deleteBook(id);

        return NextResponse.json(
            { message: "The book has been delted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Internal error!", error: error },
            { status: 500 }
        );
    }
}
