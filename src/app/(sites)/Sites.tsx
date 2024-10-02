import Image from "next/image";
import Link from "next/link";
import bitskins from "/public/assets/images/sites/bitskins.svg";
import buff163 from "/public/assets/images/sites/buff163.png";
import casino_500 from "/public/assets/images/sites/casino_500.webp";
import cs_float from "/public/assets/images/sites/cs_float.webp";
import cs_money from "/public/assets/images/sites/cs_money.svg";
import gamerpay from "/public/assets/images/sites/gamerpay.png";
import ggbet from "/public/assets/images/sites/ggbet.webp";
import haloskins from "/public/assets/images/sites/haloskins.png";
import pricempire from "/public/assets/images/sites/pricempire.png";
import rapidskins from "/public/assets/images/sites/rapidskins.webp";
import shadowpay from "/public/assets/images/sites/shadowpay.webp";
import skinflow from "/public/assets/images/sites/skinflow.svg";
import skinswap from "/public/assets/images/sites/skinswap.webp";
import swapgg from "/public/assets/images/sites/swapgg.png";
import tradeitgg from "/public/assets/images/sites/tradeitgg.svg";
import waxpeer from "/public/assets/images/sites/waxpeer.webp";
import whitemarket from "/public/assets/images/sites/whitemarket.png";

const tradeSites = [
  {
    name: "CS Money",
    image: cs_money,
    url: "https://cs.money/market/buy/?utm_source=mediabuy&utm_medium=zoltan&utm_campaign=referral&utm_content=link",
  },
  {
    name: "GamerPay",
    image: gamerpay,
    url: "https://gamerpay.gg/partner/evertson01",
  },
  {
    name: "CS Float",
    image: cs_float,
    url: "https://csfloat.com/ref/evertson",
  },
  {
    name: "BUFF163",
    image: buff163,
    url: "https://buff.163.com/invite/U1106635008?code=3HKP6",
  },
  {
    name: "Skinflow",
    image: skinflow,
    url: "https://skinflow.gg/?referral=evertson",
  },
  {
    name: "Tradeit.gg",
    image: tradeitgg,
    url: "https://tradeit.gg/?aff=evertson01",
  },
  {
    name: "500 Casino",
    image: casino_500,
    url: "https://500.casino/r/REF8983OEYBG08SZ",
  },
  {
    name: "Waxpeer",
    image: waxpeer,
    url: "https://waxpeer.com/r/evertson",
  },
  {
    name: "GGBET",
    image: ggbet,
    url: "https://ggbetpro.com/l/66601f6f577465cd7f0db2c8",
  },
  {
    name: "HaloSkins",
    image: haloskins,
    url: "https://www.haloskins.com/?channelCode=evertson",
  },
  {
    name: "SkinSwap",
    image: skinswap,
    url: "https://skinswap.com/r/evertson01",
  },
  {
    name: "Rapidskins",
    image: rapidskins,
    url: "https://rapidskins.com/a/evertson01",
  },
  {
    name: "Swap.gg",
    image: swapgg,
    url: "https://swap.gg/?r=jxjkUxNdxL",
  },
  {
    name: "ShadowPay",
    image: shadowpay,
    url: "https://shadowpay.com/?utm_campaign=ybovAaEWac6HoGr",
  },
  {
    name: "BitSkins",
    image: bitskins,
    url: "https://bitskins.com/?ref_alias=evertson01",
  },
  {
    name: "Priceempire",
    image: pricempire,
    url: "https://pricempire.com/?r=76561199021366803",
  },
  {
    name: "Whitemarket",
    image: whitemarket,
    url: "https://white.market/invite/d811a7b4b3e50f37",
  },
];

const Sites = () => {
  return (
    <section id="oldalak" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-14">
        <h2 className="text-center leading-8">Oldalak</h2>
        <div className="mx-auto mt-10 grid max-w-lg max-[500px]:grid-cols-2 grid-cols-4 items-center gap-16 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {tradeSites.map((tradeSite, index) => (
            <div key={index} className="col-span-2 lg:col-span-1">
              {tradeSite.name === "Skinflow" ? (
                <Link
                  href={tradeSite.url}
                  target="_blank"
                  className="text-3xl font-bold tracking-wider leading-none whitespace-nowrap text-zinc-50 block hover:opacity-60 transition-opacity"
                >
                  <div className="mx-auto w-fit">
                    <span className="relative">S</span>kin
                    <span className="leading-none text-[#767CCF] inline-flex items-center">
                      fl
                      <Image
                        alt={tradeSite.name}
                        className="inline h-5 w-5 mt-1"
                        src={tradeSite.image}
                      />
                      w
                    </span>
                  </div>
                </Link>
              ) : (
                <Link
                  href={tradeSite.url}
                  target="_blank"
                  className="block hover:opacity-60 transition-opacity"
                >
                  <Image
                    className="max-h-12 w-full object-contain"
                    src={tradeSite.image}
                    alt={tradeSite.name}
                    width={158}
                    height={48}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sites;
