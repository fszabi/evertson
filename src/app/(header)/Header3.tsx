"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ArrowLeftIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "/public/assets/logo/logo.webp";
import logo2 from "/public/assets/logo/logo2.png";

const links = [
  {
    name: "Szerverek",
    href: "#szerverek",
  },
  {
    name: "Rangok",
    href: "https://evertson.tebex.io/category/rang-vasarlas",
    blank: true,
  },
  {
    name: "Skinek",
    href: "https://www.evertsonservers.com/ws/",
    blank: true,
  },
  {
    name: "Szankciók",
    href: "https://evertsonservers.com/bans",
    blank: true,
  },
  {
    name: "Szabályok",
    href: "#szabalyok",
  },
];

const Header3 = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between h-[88px] px-6 lg:px-8"
        aria-label="Global"
      >
        <button onClick={() => router.back()}>
          <ArrowLeftIcon className="h-7 w-7" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Navigációs menü megnyitása</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="hidden lg:flex lg:gap-x-12 justify-center flex-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.blank ? "_blank" : "_self"}
              className="font-semibold hover:opacity-80 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <Transition appear show={mobileMenuOpen}>
        <Dialog
          as="div"
          className="lg:hidden"
          onClose={() => setMobileMenuOpen(false)}
        >
          <TransitionChild
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="ease-out duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>
          <TransitionChild
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="ease-out duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-900 py-5 px-8 sm:max-w-sm sm:border-l sm:border-l-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="sr-only">Evertson Logo</span>
                  <Image
                    // className="h-10 w-10 rounded-lg"
                    className="w-48 h-auto"
                    src={logo2}
                    alt="evertson logo"
                  />
                </div>
                <button type="button" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Navigációs menü bezárása</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-zinc-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header3;
