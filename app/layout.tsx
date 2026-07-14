import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Open Shelf",
    description:
        "A library has a catalog containing hundreds of books. To facilitate the management of this catalog, an application is needed to add, modify, view, and delete books.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
