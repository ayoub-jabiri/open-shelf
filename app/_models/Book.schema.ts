import { Schema, model, Document, models } from "mongoose";

interface BookI extends Document {
    image: string;
    title: string;
    author: string;
    isbn: string;
    category: string;
    status: string;
    yearOfPublication: number;
    description: string;
}

const bookschema = new Schema<BookI>(
    {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            minLength: [3, "Title must be at least 3 characters"],
        },
        author: {
            type: String,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["available", "borrowed"],
        },
        yearOfPublication: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
            minLength: [10, "Description must be at least 10 characters"],
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform(doc, ret) {
                const { _id, ...rest } = ret;

                return {
                    id: _id.toHexString(),
                    ...rest,
                };
            },
        },
    }
);

export default models.Book || model<BookI>("Book", bookschema);
