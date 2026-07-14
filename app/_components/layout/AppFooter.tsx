import Link from "next/link";

export default function AppFooter() {
    return (
        <footer className="bg-[#F2F4F6] py-4 border-t border-[#C7C4D8]">
            <div className="container flex justify-between items-center">
                <Link href="/" className="font-bold">
                    Open Shelf
                </Link>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="font-bold">Open Shelf</span> - All Rights
                    Reserved{" "}
                </p>
            </div>
        </footer>
    );
}
