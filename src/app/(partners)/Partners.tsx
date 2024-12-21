import React from "react";
import borsdia from "/public/assets/images/partners/borsdia.webp";
import benccce from "/public/assets/images/partners/benccce.webp";
import ibally from "/public/assets/images/partners/ibally.webp";
import negroacsaszar from "/public/assets/images/partners/negroacsaszar.webp";
import karthas from "/public/assets/images/partners/karthas.jpg";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "borsdia",
    image: borsdia,
    twitch: "https://www.twitch.tv/borsdia",
  },
  {
    name: "Benccce",
    image: benccce,
    twitch: "https://www.twitch.tv/benccce",
  },
  {
    name: "iBALLY",
    image: ibally,
    twitch: "https://www.twitch.tv/ibally",
  },
  {
    name: "NegroACsaszar",
    image: negroacsaszar,
    twitch: "https://www.twitch.tv/negroacsaszar",
  },
  {
    name: "Karthas",
    image: karthas,
    twitch: "https://www.twitch.tv/karthas",
  },
];

const Partners = () => {
  return (
    <section id="partnerek" className="py-28">
      <div className="mx-auto max-w-8xl px-6 lg:px-8 space-y-14">
        <h2 className="text-center leading-8">Partnerek</h2>
        <div className="grid grid-cols-1 min-[400px]:grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] gap-x-8 gap-y-20 place-items-center">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.twitch}
              target="_blank"
              className="space-y-4 hover:opacity-60 transition-opacity"
            >
              <Image
                className="rounded-full"
                width={150}
                height={150}
                src={partner.image}
                alt={partner.name}
              />
              <h4 className="text-center">{partner.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
