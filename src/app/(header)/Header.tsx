"use client";

import {
  Dialog,
  DialogPanel,
  MenuItem,
  Menu,
  MenuButton,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "/public/assets/logo/logo.webp";
import logo2 from "/public/assets/logo/logo2.png";
import { AnimatePresence, motion } from "motion/react";
import casino_500 from "/public/assets/images/icons/500.png";
import bitskins from "/public/assets/images/icons/bitskins.png";
import buff163 from "/public/assets/images/icons/buff163.png";
import cs_float from "/public/assets/images/icons/cs_float.png";
import cs_money from "/public/assets/images/icons/cs_money.ico";
import gamerpay from "/public/assets/images/icons/gamerpay.png";
import ggbet from "/public/assets/images/icons/ggbet.png";
import haloskins from "/public/assets/images/icons/haloskins.png";
import pricempire from "/public/assets/images/icons/pricempire.png";
import rapidskins from "/public/assets/images/icons/rapidskins.png";
import shadowpay from "/public/assets/images/icons/shadowpay.png";
import skinflow from "/public/assets/images/icons/skinflow.png";
import skinport from "/public/assets/images/icons/skinport.png";
import skinswap from "/public/assets/images/icons/skinswap.webp";
import swapgg from "/public/assets/images/icons/swapgg.png";
import tradeitgg from "/public/assets/images/icons/tradeitgg.png";
import waxpeer from "/public/assets/images/icons/waxpeer.ico";
import whitemarket from "/public/assets/images/icons/whitemarket.png";

type Link = {
  name: string;
  href?: string;
  items?: {
    name: string;
    href: string;
  }[];
};

const links: Link[] = [
  {
    name: "Árlista",
    href: "#arlista",
  },
  {
    name: "Szolgáltatások",
    items: [
      {
        name: "Skin kereskedés",
        href: "/szolgaltatasok/skin-kereskedes",
      },
      {
        name: "Skin bérlés",
        href: "/szolgaltatasok/skin-berles",
      },
      {
        name: "Trade-Up",
        href: "/szolgaltatasok/trade-up",
      },
      {
        name: "CS2 Fogadás",
        href: "/szolgaltatasok/cs2-fogadas",
      },
      {
        name: "CS2 Tanfolyam",
        href: "/szolgaltatasok/cs2-tanfolyam",
      },
    ],
  },
  {
    name: "Blog",
    items: [
      {
        name: "Rólam",
        href: "/blog/rolam",
      },
      {
        name: "Trade Alapok",
        href: "/blog/trade-alapok",
      },
      {
        name: "Scam Leírás",
        href: "/blog/scam-leiras",
      },
      {
        name: "Nyereményjátékok",
        href: "/blog/nyeremenyjatekok",
      },
      {
        name: "AWP Szerver",
        href: "/blog/awp-szerver",
      },
      {
        name: "1v1 Szerver",
        href: "/blog/1v1-szerver",
      },
      {
        name: "Public Szerver",
        href: "/blog/public-szerver",
      },
    ],
  },
  {
    name: "Oldalak",
    items: [
      {
        name: "CS Money",
        href: "https://cs.money/market/buy/?utm_source=mediabuy&utm_medium=zoltan&utm_campaign=referral&utm_content=link",
      },
      {
        name: "GamerPay",
        href: "https://gamerpay.gg/partner/evertson01",
      },
      {
        name: "CS Float",
        href: "https://csfloat.com/ref/evertson",
      },
      {
        name: "BUFF163",
        href: "https://buff.163.com/invite/U1106635008?code=3HKP6",
      },
      {
        name: "Skinflow",
        href: "https://skinflow.gg/?referral=evertson",
      },
      {
        name: "Tradeit.gg",
        href: "https://tradeit.gg/?aff=evertson01",
      },
      {
        name: "500 Casino",
        href: "https://500.casino/r/REF8983OEYBG08SZ",
      },
      {
        name: "Waxpeer",
        href: "https://waxpeer.com/r/evertson",
      },
      {
        name: "GGBET",
        href: "https://ggbetpro.com/l/66601f6f577465cd7f0db2c8",
      },
      {
        name: "HaloSkins",
        href: "https://www.haloskins.com/?channelCode=evertson",
      },
      {
        name: "SkinSwap",
        href: "https://skinswap.com/r/evertson01",
      },
      {
        name: "Rapidskins",
        href: "https://rapidskins.com/a/evertson01",
      },
      {
        name: "Swap.gg",
        href: "https://swap.gg/?r=jxjkUxNdxL",
      },
      {
        name: "ShadowPay",
        href: "https://shadowpay.com/?utm_campaign=ybovAaEWac6HoGr",
      },
      {
        name: "BitSkins",
        href: "https://bitskins.com/?ref_alias=evertson01",
      },
      {
        name: "Skinport",
        href: "https://skinport.com/r/evertson01",
      },
      {
        name: "Pricempire",
        href: "https://pricempire.com/?r=76561199021366803",
      },
      {
        name: "Whitemarket",
        href: "https://white.market/invite/d811a7b4b3e50f37",
      },
    ],
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

const mobileLinks = [
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

const getIconForSite = (siteName: string) => {
  const iconMap: { [key: string]: any } = {
    "500 Casino": casino_500,
    BitSkins: bitskins,
    BUFF163: buff163,
    "CS Float": cs_float,
    "CS Money": cs_money,
    GamerPay: gamerpay,
    GGBET: ggbet,
    HaloSkins: haloskins,
    Pricempire: pricempire,
    Rapidskins: rapidskins,
    ShadowPay: shadowpay,
    Skinflow: skinflow,
    Skinport: skinport,
    SkinSwap: skinswap,
    "Swap.gg": swapgg,
    "Tradeit.gg": tradeitgg,
    Waxpeer: waxpeer,
    Whitemarket: whitemarket,
  };

  return iconMap[siteName];
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="bg-zinc-800 border-b shadow-md border-zinc-800 sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center max-lg:justify-between flex-wrap gap-x-12 gap-y-3 py-3 px-6 lg:px-8"
        aria-label="Global"
      >
        <div>
          <span className="sr-only">Evertson Logo</span>
          <Image className="w-48 h-auto" src={logo2} alt="evertson logo" />
        </div>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Navigációs menü megnyitása</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link) =>
            link.name === "Szolgáltatások" ||
            link.name === "Blog" ||
            link.name === "Oldalak" ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="inline-flex items-center gap-2 rounded-md text-sm/6 font-semibold hover:opacity-80 transition-opacity">
                  {link.name}
                  <ChevronDownIcon className="size-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute -bottom-6 left-0 right-0 h-6" />
                <AnimatePresence>
                  {hoveredItem === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 w-52 origin-top-right rounded-lg bg-zinc-700 p-1 mt-2 max-h-96 overflow-y-auto"
                    >
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-sm/6 font-semibold hover:bg-zinc-500 transition-colors"
                        >
                          {getIconForSite(item.name) && (
                            <Image
                              src={getIconForSite(item.name)}
                              alt={item.name}
                              width={32}
                              height={32}
                              className="w-6 h-6 object-contain"
                            />
                          )}
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href ?? ""}
                className="font-semibold text-sm/6 hover:opacity-80 transition-opacity"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </nav>
      <div
        className={`lg:hidden fixed inset-0 z-50 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/25"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`fixed inset-y-0 right-0 w-full transform overflow-y-auto bg-zinc-900 py-5 px-8 sm:max-w-sm sm:border-l sm:border-l-zinc-800 transition-transform duration-200 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="sr-only">Evertson Logo</span>
              <Image className="w-48 h-auto" src={logo2} alt="evertson logo" />
            </div>
            <button type="button" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Navigációs menü bezárása</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2">
              {mobileLinks.map((link) => (
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
        </div>
      </div>
    </header>
  );
};

export default Header;
