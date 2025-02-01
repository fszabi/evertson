import Image from "next/image";
import Link from "next/link";
import cart_black from "/public/assets/images/hero/cart_black.png";
import cart_red_2 from "/public/assets/images/hero/cart_red_2.png";
import deal_black from "/public/assets/images/hero/deal_black.png";
import deal_red_2 from "/public/assets/images/hero/deal_red_2.png";
import discord_red from "/public/assets/images/hero/discord_red.png";
import money_black from "/public/assets/images/hero/money_black.png";
import money_red from "/public/assets/images/hero/money_red.png";
import cart_red from "/public/assets/images/hero/cart_red.png";
import deal_red from "/public/assets/images/hero/deal_red.png";
import reaching from "/public/assets/images/hero/reaching.png";
import verified from "/public/assets/images/hero/verified.png";

const buttons = [
  {
    title: "Vásárlás",
    icon_red: cart_red_2,
    icon_black: cart_black,
    alt_red: "kosár ikon piros 2",
    alt_black: "kosár ikon fekete",
    href: "/szolgaltatasok/skin-kereskedes",
    target: "_self",
  },
  {
    title: "Csere",
    icon_red: deal_red_2,
    icon_black: deal_black,
    alt_red: "üzlet ikon piros 2",
    alt_black: "üzlet ikon fekete",
    href: "https://steamcommunity.com/tradeoffer/new/?partner=1061101075&token=SLQ6lxob",
    target: "_blank",
  },
  {
    title: "Eladás",
    icon_red: money_red,
    icon_black: money_black,
    alt_red: "pénz ikon piros",
    alt_black: "pénz ikon fekete",
    href: "#kapcsolat",
    target: "_self",
  },
];

const Hero = () => {
  return (
    <section className="py-28 bg-cover bg-center min-h-[95vh] bg-no-repeat flex items-center bg-[url('/assets/images/hero/hero.png')]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-8 max-w-lg">
          <header className="space-y-2">
            <h1>
              Fedezd fel Magyarország{" "}
              <span className="text-[#d80001] animate-glow italic">
                legnagyobb
              </span>{" "}
              Counter Strike 2{" "}
              <span className="text-[#d80001] animate-glow italic">
                trading
              </span>{" "}
              platformját.
            </h1>
            <p className="text-[#7c7c7c] text-lg leading-snug font-medium drop-shadow-glow animate-glow">
              Akár vásárolni, eladni vagy cserélni szeretnél, szolgáltatásaim
              zökkenőmentesek és biztonságosak.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                target={button.target}
                className="max-w-xs relative overflow-hidden bg-gradient-to-r from-black/50 to-[#d80001] w-full space-y-1 p-4 rounded-2xl hover:opacity-70 transition-opacity shadow-2xl"
              >
                <Image
                  src={button.icon_red}
                  alt={button.alt_red}
                  className="w-10 h-10"
                />
                <span className="uppercase font-ethnocentric">
                  {button.title}
                </span>
                <Image
                  src={button.icon_black}
                  alt={button.alt_black}
                  className="w-20 h-20 opacity-20 absolute -right-4 -bottom-4"
                />
              </Link>
            ))}
          </div>
          <Link
            href="https://discord.com/invite/2Yf3zP7CMQ"
            target="_blank"
            className="flex justify-center items-center gap-2 hover:opacity-60 transition-opacity"
          >
            <Image
              className="w-14 h-14 object-cover"
              src={discord_red}
              alt="discord piros logo"
            />
            <span className="uppercase font-medium text-lg">
              Csatlakozz a Discord szerverre
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 font-bebasneue">
          <div className="flex gap-2">
            <Image
              src={deal_red}
              alt="kosár ikon piros"
              className="w-14 h-14"
            />
            <div className="space-y-2">
              <h3 className="uppercase font-ethnocentric">Összes kereskedés</h3>
              <p className="uppercase text-lg leading-snug text-shadow">
                Több mint{" "}
                <span className="text-[#d80001] drop-shadow-glow">26.000</span>{" "}
                cserét hajtottam eddig végre.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src={cart_red}
              alt="kosár ikon piros"
              className="w-14 h-14"
            />
            <div className="space-y-2">
              <h3 className="uppercase font-ethnocentric">Teljes vásárlás</h3>
              <p className="uppercase text-lg leading-snug text-shadow">
                Több mint{" "}
                <span className="text-[#d80001] drop-shadow-glow">
                  110.000.000 Ft
                </span>{" "}
                értékben vásároltam skineket.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src={verified}
              alt="tapasztalat ikon"
              className="w-14 h-14"
            />
            <div className="space-y-2">
              <h3 className="uppercase font-ethnocentric">2+ év tapasztalat</h3>
              <p className="uppercase text-lg leading-snug text-shadow">
                Az elmúlt két évben rengeteg mindent elértem. Folyamatos
                közösség építés, nyereményjátékok és három közösségi szervert is
                létrehoztam.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={reaching} alt="elérés ikon" className="w-14 h-14" />
            <div className="space-y-2">
              <h3 className="uppercase font-ethnocentric">150.000+ elérés</h3>
              <p className="uppercase text-lg leading-snug text-shadow">
                Rengetegszer találkozhattál már a nevemmel ha aktívan használod
                a Facebook, Discord csoportokat vagy gyakran követed a hazai
                Twitch és TikTok csatornákat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
