"use client";

import Events from "@/app/(events)/Events";
import Link from "next/link";
import toast from "react-hot-toast";

const stats = [
  {
    id: 1,
    name: "[HUN] eVERTSON 🔴 AWP 🔴 !store • !vip • !ws • !knife",
    value: "213.181.206.25:21000",
  },
  {
    id: 2,
    name: "[HUN] eVERTSON 🔴 1v1 Aréna 🔴 !store • !vip • !ws",
    value: "213.181.206.25:22000",
  },
  {
    id: 3,
    name: "[HUN] eVERTSON 🔴 PUB-FUN 🔴 !store • !vip • !ws • !knife",
    value: "213.181.206.25:23000",
  },
];

const Servers = () => {
  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success(`Sikeres másolás`);
      })
      .catch((err) => {
        console.error("Sikertelen másolás: ", err);
      });
  };

  return (
    <section id="szerverek" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Szerverek
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Csatlakozz fel szervereinkre!
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center gap-3 bg-zinc-800 p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-zinc-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-2xl sm:text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
                <div className="flex max-xl:flex-col w-full gap-x-5 gap-y-3">
                  <button
                    onClick={() => handleCopy(stat.value)}
                    className="block w-full font-medium bg-red-600 px-4 py-2 rounded-md hover:bg-red-400 transition-colors"
                  >
                    IP Másolása
                  </button>
                  <Link
                    href={`steam://connect/${stat.value}`}
                    className="block w-full font-medium bg-red-600 px-4 py-2 rounded-md hover:bg-red-400 transition-colors"
                  >
                    Csatlakozás
                  </Link>
                </div>
              </div>
            ))}
          </dl>
          <Events />
        </div>
      </div>
    </section>
  );
};

export default Servers;
