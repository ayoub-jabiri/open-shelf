import { dbConnect } from "@/app/_lib/db";

export async function GET() {
    await dbConnect();
    return Response.json({ name: "Ahmed" });
}
