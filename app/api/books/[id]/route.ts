import { dbConnect } from "@/app/_lib/db";
import { getSingleBook } from "@/app/_services/book.service";
import { NextResponse } from "next/server";

interface RouteParams {
    params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params }: RouteParams) {
    await dbConnect();

    const { id } = await params;

    try {
        const book = await getSingleBook({ _id: id });

        return NextResponse.json({ book }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Internal error!", error: error },
            { status: 500 }
        );
    }
}
