export interface Book {
    id?: number;
    image: string;
    title: string;
    author: string;
    isbn: string;
    category: string;
    status: string;
    yearOfPublication: number | string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}
