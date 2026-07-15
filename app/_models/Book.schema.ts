import { Schema, model } from "mongoose";

const bookschema = new Schema({
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
});

export default model("Book", bookschema);
