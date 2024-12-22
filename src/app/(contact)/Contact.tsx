import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import steam from "/public/assets/images/steam.png";
import discord_2 from "/public/assets/images/svgs/discord_2.svg";
import facebook from "/public/assets/images/svgs/facebook.svg";
import twitch from "/public/assets/images/svgs/twitch.svg";
import tiktok from "/public/assets/images/tiktok.png";
import webrebirth_logo from "/public/assets/logo/webrebirth_logo.png";

const contacts = [
  {
    name: "Steam",
    alt: "steam logo",
    href: "https://steamcommunity.com/id/evertson01",
    icon: steam,
  },
  {
    name: "Discord",
    alt: "discord logo 2",
    href: "https://discord.com/invite/2Yf3zP7CMQ",
    icon: discord_2,
  },
  {
    name: "Twitch",
    alt: "twitch logo",
    href: "https://www.twitch.tv/evertson01",
    icon: twitch,
  },
  {
    name: "Facebook",
    alt: "facebook logo",
    href: "https://www.facebook.com/groups/csgohungary",
    icon: facebook,
  },
  {
    name: "TikTok",
    alt: "tiktok logo",
    href: "https://www.tiktok.com/@evertsonservers",
    icon: tiktok,
  },
];

const Contact = () => {
  return (
    <section id="kapcsolat" className="py-28">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 px-6 lg:px-8">
        <div className="space-y-10">
          <header className="space-y-6">
            <h2>Lépjünk kapcsolatba</h2>
            <p className="sm:text-lg leading-loose text-zinc-300 max-w-lg">
              Ha szeretnéd igénybevenni bármely szolgáltatásomat, akkor keress
              fel az alábbi email címen, vagy töltsd ki a kapcsolatfelvételi
              űrlapot.
            </p>
          </header>
          <div className="space-y-7">
            <Link
              className="flex gap-3 hover:opacity-60 transition-opacity"
              href="mailto:evertson139@gmail.com"
              target="_blank"
            >
              <EnvelopeIcon className="h-6 w-6" />
              evertson139@gmail.com
            </Link>
            {contacts.map((contact) => (
              <Link
                key={contact.name}
                href={contact.href}
                target="_blank"
                className="flex gap-3 hover:opacity-60 transition-opacity"
              >
                <Image
                  src={contact.icon}
                  alt={contact.alt}
                  className="h-6 w-6"
                />
                {contact.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 w-fit">
            <p className="text-center">A weboldalt készítette</p>
            <Link
              className="block mx-auto w-fit hover:opacity-50 transition-opacity"
              href="https://webrebirth.hu/"
              target="_blank"
            >
              <Image height={35} src={webrebirth_logo} alt="webrebirth logo" />
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
