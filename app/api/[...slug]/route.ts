import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Path not found!" }, { status: 404 });
}
