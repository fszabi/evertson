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
import Image, { StaticImageData } from "next/image";
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
import awp from "/public/assets/images/icons/awp.webp";
import onevsone from "/public/assets/images/icons/onevsone.webp";
import pub from "/public/assets/images/icons/pub.webp";
import {
  GiftIcon,
  ShieldExclamationIcon,
  LightBulbIcon,
  UserCircleIcon,
  AcademicCapIcon,
  PercentBadgeIcon,
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  ArrowsRightLeftIcon,
  ListBulletIcon,
  ChatBubbleLeftEllipsisIcon,
  PencilSquareIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

type Link = {
  name: string;
  href?: string;
  linkIcon?: React.ReactNode;
  groupIcon?: React.ReactNode;
  items?: {
    name: string;
    href: string;
    itemIcon?: React.ReactNode;
    siteIcon?: StaticImageData;
    alt?: string;
  }[];
};

const links: Link[] = [
  {
    name: "Árlista",
    href: "#arlista",
    linkIcon: <BanknotesIcon className="w-5 h-5" />,
  },
  {
    name: "Szolgáltatások",
    groupIcon: <WrenchScrewdriverIcon className="w-5 h-5" />,
    items: [
      {
        name: "Skin Kereskedés",
        href: "/szolgaltatasok/skin-kereskedes",
        itemIcon: <ArrowsRightLeftIcon className="w-5 h-5" />,
      },
      {
        name: "Skin Bérlés",
        href: "/szolgaltatasok/skin-berles",
        itemIcon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
      },
      {
        name: "Trade-Up",
        href: "/szolgaltatasok/trade-up",
        itemIcon: <ArrowPathIcon className="w-5 h-5" />,
      },
      {
        name: "CS2 Fogadás",
        href: "/szolgaltatasok/cs2-fogadas",
        itemIcon: <PercentBadgeIcon className="w-5 h-5" />,
      },
      {
        name: "CS2 Tanfolyam",
        href: "/szolgaltatasok/cs2-tanfolyam",
        itemIcon: <AcademicCapIcon className="w-5 h-5" />,
      },
    ],
  },
  {
    name: "Blog",
    groupIcon: <DevicePhoneMobileIcon className="w-5 h-5" />,
    items: [
      {
        name: "Rólam",
        href: "/blog/rolam",
        itemIcon: <UserCircleIcon className="w-5 h-5" />,
      },
      {
        name: "Trade Alapok",
        href: "/blog/trade-alapok",
        itemIcon: <LightBulbIcon className="w-5 h-5" />,
      },
      {
        name: "Scam Leírás",
        href: "/blog/scam-leiras",
        itemIcon: <ShieldExclamationIcon className="w-5 h-5" />,
      },
      {
        name: "Nyereményjátékok",
        href: "/blog/nyeremenyjatekok",
        itemIcon: <GiftIcon className="w-5 h-5" />,
      },
      {
        name: "AWP Szerver",
        href: "/blog/awp-szerver",
        itemIcon: (
          <Image
            src={awp}
            alt="awp szerver ikon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "1v1 Szerver",
        href: "/blog/1v1-szerver",
        itemIcon: (
          <Image
            src={onevsone}
            alt="1v1 szerver ikon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        ),
      },
      {
        name: "Public Szerver",
        href: "/blog/public-szerver",
        itemIcon: (
          <Image
            src={pub}
            alt="public szerver ikon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        ),
      },
    ],
  },
  {
    name: "Oldalak",
    groupIcon: <GlobeAltIcon className="w-5 h-5" />,
    items: [
      {
        name: "CS Money",
        href: "https://cs.money/market/buy/?utm_source=mediabuy&utm_medium=zoltan&utm_campaign=referral&utm_content=link",
        siteIcon: cs_money,
        alt: "cs money ikon",
      },
      {
        name: "GamerPay",
        href: "https://gamerpay.gg/partner/evertson01",
        siteIcon: gamerpay,
        alt: "gamerpay ikon",
      },
      {
        name: "CS Float",
        href: "https://csfloat.com/ref/evertson",
        siteIcon: cs_float,
        alt: "cs float ikon",
      },
      {
        name: "BUFF163",
        href: "https://buff.163.com/invite/U1106635008?code=3HKP6",
        siteIcon: buff163,
        alt: "buff163 ikon",
      },
      {
        name: "Skinflow",
        href: "https://skinflow.gg/?referral=evertson",
        siteIcon: skinflow,
        alt: "skinflow ikon",
      },
      {
        name: "Tradeit.gg",
        href: "https://tradeit.gg/?aff=evertson01",
        siteIcon: tradeitgg,
        alt: "tradeit gg ikon",
      },
      {
        name: "500 Casino",
        href: "https://500.casino/r/REF8983OEYBG08SZ",
        siteIcon: casino_500,
        alt: "500 casino ikon",
      },
      {
        name: "Waxpeer",
        href: "https://waxpeer.com/r/evertson",
        siteIcon: waxpeer,
        alt: "waxpeer ikon",
      },
      {
        name: "GGBET",
        href: "https://ggbetpro.com/l/66601f6f577465cd7f0db2c8",
        siteIcon: ggbet,
        alt: "ggbet ikon",
      },
      {
        name: "HaloSkins",
        href: "https://www.haloskins.com/?channelCode=evertson",
        siteIcon: haloskins,
        alt: "haloskins ikon",
      },
      {
        name: "SkinSwap",
        href: "https://skinswap.com/r/evertson01",
        siteIcon: skinswap,
        alt: "skinswap ikon",
      },
      {
        name: "Rapidskins",
        href: "https://rapidskins.com/a/evertson01",
        siteIcon: rapidskins,
        alt: "rapidskins ikon",
      },
      {
        name: "Swap.gg",
        href: "https://swap.gg/?r=jxjkUxNdxL",
        siteIcon: swapgg,
        alt: "swap gg ikon",
      },
      {
        name: "ShadowPay",
        href: "https://shadowpay.com/?utm_campaign=ybovAaEWac6HoGr",
        siteIcon: shadowpay,
        alt: "shadowpay ikon",
      },
      {
        name: "BitSkins",
        href: "https://bitskins.com/?ref_alias=evertson01",
        siteIcon: bitskins,
        alt: "bitskins ikon",
      },
      {
        name: "Skinport",
        href: "https://skinport.com/r/evertson01",
        siteIcon: skinport,
        alt: "skinport ikon",
      },
      {
        name: "Pricempire",
        href: "https://pricempire.com/?r=76561199021366803",
        siteIcon: pricempire,
        alt: "pricempire ikon",
      },
      {
        name: "Whitemarket",
        href: "https://white.market/invite/d811a7b4b3e50f37",
        siteIcon: whitemarket,
        alt: "whitemarket ikon",
      },
    ],
  },
  {
    name: "Kapcsolat",
    href: "#kapcsolat",
    linkIcon: <PencilSquareIcon className="w-5 h-5" />,
  },
  {
    name: "Gyakori kérdések",
    href: "#gyakori-kerdesek",
    linkIcon: <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />,
  },
  {
    name: "Szerverek",
    href: "/szerverek",
    linkIcon: <ListBulletIcon className="w-5 h-5" />,
  },
];

const mobileLinks = [
  {
    name: "Árlista",
    href: "#arlista",
    linkIcon: <BanknotesIcon className="w-5 h-5" />,
  },
  {
    name: "Szolgáltatások",
    href: "#szolgaltatasok",
    linkIcon: <WrenchScrewdriverIcon className="w-5 h-5" />,
  },
  {
    name: "Blog",
    href: "#blog",
    linkIcon: <DevicePhoneMobileIcon className="w-5 h-5" />,
  },
  {
    name: "Oldalak",
    href: "#oldalak",
    linkIcon: <GlobeAltIcon className="w-5 h-5" />,
  },
  {
    name: "Kapcsolat",
    href: "#kapcsolat",
    linkIcon: <PencilSquareIcon className="w-5 h-5" />,
  },
  {
    name: "Gyakori kérdések",
    href: "#gyakori-kerdesek",
    linkIcon: <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />,
  },
  {
    name: "Szerverek",
    href: "/szerverek",
    linkIcon: <ListBulletIcon className="w-5 h-5" />,
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="bg-zinc-800 shadow-md sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between flex-wrap gap-x-6 gap-y-3 py-3 px-6 lg:px-8"
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
        <div className="hidden lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-3">
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
                <button className="flex items-center gap-2 rounded-md text-sm/6 font-semibold hover:opacity-80 transition-opacity">
                  {link.groupIcon}
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
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm/6 font-semibold hover:bg-zinc-500 transition-colors"
                        >
                          {item.itemIcon ||
                            (item.siteIcon && (
                              <Image
                                src={item.siteIcon}
                                alt={item.alt!}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                              />
                            ))}
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
                href={link.href!}
                className="flex items-center gap-2 font-semibold text-sm/6 hover:opacity-80 transition-opacity"
              >
                {link.linkIcon}
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
                  className="flex items-center gap-2 rounded-lg -mx-3 px-3 py-2 font-semibold leading-7 hover:bg-zinc-800 transition-colors"
                >
                  {link.linkIcon}
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
