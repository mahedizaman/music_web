import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold tracking-tight text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>

      <p className="mt-3 max-w-md text-gray-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}
