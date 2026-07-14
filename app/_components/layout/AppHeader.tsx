"use client";
import { type NavLink } from "@/app/_types/nav-link";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppHeader() {
    const pathname = usePathname();

    const navLinks: NavLink[] = [
        {
            id: 1,
            title: "Home",
            path: "/",
            isActive: false,
        },
        {
            id: 2,
            title: "Add New Book",
            path: "/add-new-book",
            isActive: false,
        },
    ];

    navLinks.forEach((link: NavLink) => {
        if (link.path == pathname) {
            link.isActive = true;
        }
    });

    return (
        <header className="bg-white py-4 border-b border-[#C7C4D8]">
            <div
                className="container flex justify-between items-center
            "
            >
                <Link
                    href="/"
                    className="text-xl text-(--blue-color) font-bold"
                >
                    OpenShelf
                </Link>
                <ul className="flex gap-3">
                    {navLinks.map((link: NavLink) => (
                        <li
                            key={link.id}
                            className={`${
                                link.isActive
                                    ? "text-(--blue-color) border-b-2"
                                    : "text-(--secondary-text-color)"
                            } py-1 hover:text-(--blue-color)`}
                        >
                            <Link href={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
