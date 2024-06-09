import Image from "next/image";
import awp_lightning from "/public/assets/images/awp_lightning.png";
import ak47_nightwish from "/public/assets/images/ak47_nightwish.png";
import m9_marble from "/public/assets/images/m9_marble.png";
import Link from "next/link";
import hero from "/public/assets/images/hero.webp";
import hero2 from "/public/assets/images/hero2.webp";

const Hero = () => {
  return (
    <section id="hero" className="py-28">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 items-center max-w-7xl px-6 lg:px-8 mx-auto max-lg:space-y-20">
        <div className="space-y-8">
          <h1>Evertson Trade</h1>
          <p className="max-w-xl text-xl font-medium text-zinc-300">
            Fedezd fel a legnagyobb magyar Counter Strike 2 trading platformot.
            Akár vásárolni, eladni vagy cserélni szeretnél, szolgáltatásaink
            zökkenőmentesek és biztonságosak.
          </p>
          <Link
            href="#kapcsolat"
            className="block w-fit bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 transition-colors"
          >
            Kapcsolatfelvétel
          </Link>
        </div>

        <Image
          className="object-cover object-left rounded-lg w-full lg:h-[65vh] min-[2000px]:h-[40vh]"
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
