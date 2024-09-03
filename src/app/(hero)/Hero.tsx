import Image from "next/image";
import Link from "next/link";
import hero2 from "/public/assets/images/hero2.webp";
import discord from "/public/assets/images/discord.webp";

const Hero = () => {
  return (
    <section id="hero" className="py-28">
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
            className="block w-fit bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 transition-colors"
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
          {/* <Link
            className="e-widget"
            href="https://gleam.io/3L0tt/awp-dragon-lore"
            rel="nofollow"
          >
            AWP Dragon Lore
          </Link> */}
        </div>

        <Image
          className="object-cover shadow rounded-lg w-full max-lg:max-h-[60vh] max-lg:w-auto"
          src={hero2}
          alt="hero kép"
        />
      </div>
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center overflow-hidden">
        
        <header className="space-y-5">
          <h1>Evertson Trade</h1>
          <p className="max-w-xl mx-auto text-xl font-medium text-zinc-300">
            Fedezd fel a legnagyobb magyar Counter Strike 2 trading platformot.
            Akár vásárolni, eladni vagy cserélni szeretnél, szolgáltatásaink
            zökkenőmentesek és biztonságosak.
          </p>
          <Link
            href="#kapcsolat"
            className="block w-fit mx-auto bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 transition-colors"
          >
            Kapcsolatfelvétel
          </Link>
        </header>
        <div className="flex justify-between">
          <Image
            className="animate-hover"
            src={ak47_nightwish}
            alt="ak47 nightwish"
          />
          <Image
            className="animate-hover-2"
            src={m9_marble}
            alt="m9 bayonet marble fade"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
