import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "./_components/layout/AppHeader";
import AppFooter from "./_components/layout/AppFooter";

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
            <body className="min-h-full flex flex-col">
                <AppHeader />
                <main className="container min-h-[calc(100vh-60px)] py-8">
                    {children}
                </main>
                <AppFooter />
            </body>
        </html>
    );
}
