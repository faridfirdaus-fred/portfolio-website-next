import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2 font-outfit">
        404 — Routing Error
      </span>
      <h1 className="text-6xl font-extrabold tracking-tight font-outfit text-primary mb-3">
        Page Not Found
      </h1>
      <p className="text-base opacity-75 max-w-md mb-6">
        The requested endpoint or resource does not exist on this portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center font-semibold rounded-full px-6 py-2.5 text-sm bg-primary text-secondary hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
      >
        Return to Home
      </Link>
    </main>
  );
}
