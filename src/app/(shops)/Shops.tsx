import Image from "next/image";
import Link from "next/link";
import buff_market from "/public/assets/images/sites/buff_market.webp";
import cs_float from "/public/assets/images/sites/cs_float.webp";
import cs_money from "/public/assets/images/sites/cs_money.svg";
import gamerpay from "/public/assets/images/sites/gamerpay.png";
import skinbid from "/public/assets/images/sites/skinbid.png";

const shops = [
  {
    name: "BUFF Market",
    image: buff_market,
    url: "https://buff.market/share/shop/U1093218891",
  },
  {
    name: "CS Money",
    image: cs_money,
    url: "https://cs.money/market/buy/?steamId=76561199021366803",
  },
  {
    name: "GamerPay",
    image: gamerpay,
    url: "https://gamerpay.gg/shop/evertson01",
  },
  {
    name: "SkinBid",
    image: skinbid,
    url: "https://skinbid.com/shop/8c0fcb09485fc1ed",
  },
  {
    name: "CS Float",
    image: cs_float,
    url: "https://csfloat.com/stall/76561199021366803",
  },
];

const Shops = () => {
  return (
    <section id="shopok" className="py-28">
      <div className="mx-auto max-w-8xl px-6 lg:px-8 space-y-14">
        <h2 className="text-center leading-8">Shopok</h2>
        <div className="mx-auto mt-10 grid max-w-lg max-[500px]:grid-cols-2 grid-cols-4 items-center gap-16 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {shops.map((shop, index) => (
            <div key={index} className="col-span-2 lg:col-span-1">
              <Link
                href={shop.url}
                target="_blank"
                className="block hover:opacity-60 transition-opacity"
              >
                <Image
                  className="max-h-12 w-full object-contain"
                  src={shop.image}
                  alt={shop.name}
                  width={158}
                  height={48}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shops;
