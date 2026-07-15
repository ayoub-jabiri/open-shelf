import mongoose from "mongoose";

const DATABASE_URL: string = process.env.DATABASE_URL!;

export async function dbConnect() {
    try {
        await mongoose.connect(DATABASE_URL);

        console.log("Database Connected!");
    } catch (error) {
        console.log(error);
    }
}
