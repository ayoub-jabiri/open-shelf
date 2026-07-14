import { type Book } from "@/app/_types/book";
import BookCard from "./BookCard";

export default function BooksList() {
    const books: Book[] = [
        {
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            isbn: "978-0261102217",
            category: "Fantasy",
            status: "available",
            yearOfPublication: 1937,
            description:
                "A reluctant hobbit leaves his comfortable hole to embark on a quest to reclaim a lost treasure guarded by a dragon.",
        },
        {
            id: 2,
            image: "https://covers.openlibrary.org/b/id/14589993-L.jpg",
            title: "Neuromancer",
            author: "William Gibson",
            isbn: "978-0441569595",
            category: "Science Fiction",
            status: "borrowed",
            yearOfPublication: 1984,
            description:
                "A washed-up computer hacker is hired by a mysterious employer for one last, seemingly impossible hack.",
        },
        {
            id: 3,
            image: "https://covers.openlibrary.org/b/id/14421256-L.jpg",
            title: "The Silent Patient",
            author: "Alex Michaelides",
            isbn: "978-1250301697",
            category: "Thriller",
            status: "available",
            yearOfPublication: 2019,
            description:
                "A woman shoots her husband and then refuses to speak another word, leaving a criminal psychotherapist obsessed with uncovering her motive.",
        },
        {
            id: 4,
            image: "https://covers.openlibrary.org/b/id/14524458-L.jpg",
            title: "The Midnight Library",
            author: "Matt Haig",
            isbn: "978-0525559474",
            category: "Contemporary Fiction",
            status: "available",
            yearOfPublication: 2020,
            description:
                "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
        },
        {
            id: 5,
            image: "https://covers.openlibrary.org/b/id/10574885-L.jpg",
            title: "Project Hail Mary",
            author: "Andy Weir",
            isbn: "978-0593135204",
            category: "Science Fiction",
            status: "available",
            yearOfPublication: 2021,
            description:
                "The sole survivor on a desperate, last-chance mission to save both humanity and the earth wakes up with amnesia and must use science to solve an interstellar crisis.",
        },
    ];
    return (
        <div className="grid grid-cols-12 gap-3">
            {books.map((book: Book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}
