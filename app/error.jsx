"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
        ⚠️
      </div>

      <h2 className="text-2xl font-bold text-gray-900">
        Something went wrong!
      </h2>

      <p className="max-w-md text-gray-500">
        An unexpected error occurred. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95"
      >
        Try Again
      </button>
    </div>
  );
}
