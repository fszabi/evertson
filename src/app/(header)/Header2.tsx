"use client";

import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

const Header2 = () => {
  const router = useRouter();

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-3xl items-center justify-between h-20 px-6 lg:px-8"
        aria-label="Global"
      >
        <button
          onClick={() => router.back()}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
        >
          <ArrowLeftIcon className="h-7 w-7" aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
};

export default Header2;
