import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-white">
          Hibás adatok
        </h2>
        <Link
          className="text-center block w-full font-medium bg-red-600 px-4 py-2 rounded-md hover:bg-red-400 transition-colors"
          href="/bejelentkezes"
        >
          Próbáld újra
        </Link>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div>
    </div>
  );
}
