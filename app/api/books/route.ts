import { dbConnect } from "@/app/_lib/db";

export async function GET() {
    await dbConnect();
    return Response.json({ name: "Ahmed" });
}

export async function POST(req: Request) {
    await dbConnect();

    const body = await req.json();

    return Response.json({ name: "Ahmed" });
}
