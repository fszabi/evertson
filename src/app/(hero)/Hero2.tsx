import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import awpserver from "/public/assets/images/blog/awpserver/awpserver.png";
import Image from "next/image";

const features = [
  {
    name: "Lorem ipsum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];

const Hero2 = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto sm:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
            Szeretnél egy jó közösséghez tartozni?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Akkor gyere és játssz szervereinken!
          </p>
        </div>
      </div>
      {/* <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            alt="awp szerver"
            src={awpserver}
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl ring-1 ring-zinc-800 shadow"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-zinc-900 pt-[7%]" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero2;
