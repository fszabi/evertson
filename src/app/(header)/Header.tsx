"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "/public/assets/logo/logo.webp";

const links = [
  {
    name: "Árlista",
    href: "#arlista",
  },
  {
    name: "Szolgáltatások",
    href: "#szolgaltatasok",
  },
  {
    name: "Blog",
    href: "#blog",
  },
  {
    name: "Oldalak",
    href: "#oldalak",
  },
  {
    name: "Kapcsolat",
    href: "#kapcsolat",
  },
  {
    name: "Gyakori kérdések",
    href: "#gyakori-kerdesek",
  },
  {
    name: "Szerverek",
    href: "/szerverek",
  },
];

// const awpLinks = [
//   {
//     name: "Skinek",
//     description: "Állíts be skineket a szerveren",
//     href: "https://evertsonservers.com/ws",
//     icon: WrenchIcon,
//   },
//   {
//     name: "Banok",
//     description: "Tekintsd meg a szerveren kiosztott banokat",
//     href: "https://evertsonservers.com/bans",
//     icon: UsersIcon,
//   },
// ];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between h-[88px] px-6 lg:px-8"
        aria-label="Global"
      >
        <div>
          <span className="sr-only">Evertson Logo</span>
          <Image
            className="h-12 w-12 rounded-lg"
            src={logo}
            alt="evertson logo"
          />
        </div>
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
              scroll={false}
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
                    className="h-10 w-10 rounded-lg"
                    src={logo}
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
                      scroll={false}
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

export default Header;
