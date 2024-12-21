import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import servers from "/public/assets/images/servers.webp";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto sm:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
            Szeretnél egy jó közösséghez tartozni?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Akkor gyere és játssz szervereinken!
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-14">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <Image
            alt="awp szerver"
            src={servers}
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl ring-1 ring-zinc-800 shadow"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-zinc-900 pt-[7%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
