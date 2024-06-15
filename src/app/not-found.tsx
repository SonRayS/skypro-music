import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <div>
                <h1>Page not fond !</h1>
                <Link href="/">Go to main page</Link>
            </div>
        </>
    );
}
