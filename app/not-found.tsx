import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">This page could not be found.</p>
      <Link href="/" className="text-primary hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
