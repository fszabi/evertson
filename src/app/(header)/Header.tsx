"use client";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  UsersIcon,
  WrenchIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "/public/assets/logo/logo.webp";

const links = [
  {
    name: "Kereskedők",
    href: "#kereskedok",
  },
  {
    name: "Szolgáltatások",
    href: "#szolgaltatasok",
  },
  {
    name: "Oldalak",
    href: "#oldalak",
  },
  {
    name: "Blog",
    href: "#blog",
  },
  {
    name: "Kapcsolat",
    href: "#kapcsolat",
  },
];

const awpLinks = [
  {
    name: "Skinek",
    description: "Állíts be skineket a szerveren",
    href: "https://evertsontrade.com/ws",
    icon: WrenchIcon,
  },
  {
    name: "Banok",
    description: "Tekintsd meg a szerveren kiosztott banokat",
    href: "https://evertsontrade.com/bans",
    icon: UsersIcon,
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 lg:px-8"
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
              className="font-semibold hover:opacity-80 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex hover:opacity-80 transition-opacity items-center gap-x-1 font-semibold focus:outline-none">
                  Awp
                  <ChevronDownIcon
                    className={classNames({
                      "h-5 w-5 flex-none transition-transform": true,
                      "rotate-180": open,
                    })}
                    aria-hidden="true"
                  />
                </PopoverButton>

                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-72 xl:w-screen max-w-md overflow-hidden rounded-3xl bg-zinc-800 shadow-lg">
                    <div className="p-4">
                      {awpLinks.map((awpLink) => (
                        <PopoverButton
                          key={awpLink.name}
                          as={Link}
                          href={awpLink.href}
                          target="_blank"
                        >
                          <div className="relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-zinc-700 transition-colors">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-zinc-600">
                              <awpLink.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <p className="font-semibold">{awpLink.name}</p>
                              <span className="absolute inset-0" />

                              <p className="mt-1 text-zinc-300">
                                {awpLink.description}
                              </p>
                            </div>
                          </div>
                        </PopoverButton>
                      ))}
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>
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
                <div className="-my-6 divide-y divide-zinc-800">
                  <div className="space-y-2 py-6">
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
                  <div className="py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-zinc-800 transition-colors">
                            Awp
                            <ChevronDownIcon
                              className={classNames({
                                "h-5 w-5 flex-none transition-transform": true,
                                "rotate-180": open,
                              })}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <DisclosurePanel className="mt-2 space-y-2">
                              {awpLinks.map((awpLink) => (
                                <DisclosureButton
                                  key={awpLink.name}
                                  as={Link}
                                  target="_blank"
                                  href={awpLink.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-zinc-800 transition-colors"
                                >
                                  {awpLink.name}
                                </DisclosureButton>
                              ))}
                            </DisclosurePanel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  </div>
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
