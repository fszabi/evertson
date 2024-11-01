import Image from "next/image";
import Link from "next/link";
import discord from "/public/assets/images/discord.webp";
import hero from "/public/assets/images/hero.webp";
import Events from "../(events)/Events";

const Hero = () => {
  return (
    <section className="py-28 space-y-14">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 items-center max-w-7xl px-6 lg:px-8 mx-auto max-lg:space-y-20">
        <div className="space-y-8">
          <h1>Evertson Trade</h1>
          <p className="max-w-xl sm:text-lg text-zinc-300">
            Fedezd fel Magyarország legnagyobb Counter Strike 2 trading
            platformját. Akár vásárolni, eladni vagy cserélni szeretnél,
            szolgáltatásaim zökkenőmentesek és biztonságosak.
          </p>
          <Link
            href="#kapcsolat"
            className="block w-fit font-medium bg-red-600 px-4 py-2 rounded-md hover:bg-red-400 transition-colors"
          >
            Kapcsolatfelvétel
          </Link>
          <Link
            href="https://discord.com/invite/2Yf3zP7CMQ"
            target="_blank"
            className="flex items-center gap-3 hover:opacity-60 transition-opacity"
          >
            <Image
              className="w-10 h-10 object-cover"
              src={discord}
              alt="discord logo"
            />
            Csatlakozz a Discord szerverre
          </Link>
        </div>

        <Image
          className="object-cover shadow rounded-lg w-full max-lg:max-h-[60vh]"
          src={hero}
          alt="hero kép"
        />
      </div>
      <Events />
    </section>
  );
};

export default Hero;
