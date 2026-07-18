import z from "zod";

export const bookSchema = z.object({
    title: z
        .string()
        .min(3, "The book title is required and must be at least 3 characters"),
    author: z.string().min(1, { error: "The book author is required" }),
    image: z.string().min(1, { error: "The book image is required" }),
    isbn: z.string().min(1, { error: "The book ISBN is required" }),
    category: z.string().min(1, { error: "The book category is required" }),
    status: z.enum(["available", "borrowed"], {
        message:
            "The book status is required and must be either 'available' or 'borrowed'",
    }),
    yearOfPublication: z.string().min(1, {
        message: "The book year of publication is required",
    }),
    description: z
        .string({ error: "The book description is required" })
        .min(10, "Description is required and must be at least 10 characters"),
});
