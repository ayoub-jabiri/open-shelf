import { dbConnect } from "@/app/_lib/db";
import { getBooks } from "@/app/_services/book.service";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        const books = await getBooks();

        return NextResponse.json({ books }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    await dbConnect();

    const body = await req.json();

    try {
        return NextResponse.json({}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
