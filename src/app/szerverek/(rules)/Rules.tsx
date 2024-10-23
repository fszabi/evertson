import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  NoSymbolIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Lorem ipsum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: NoSymbolIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: NoSymbolIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
    icon: NoSymbolIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
    icon: NoSymbolIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
    icon: NoSymbolIcon,
  },
  {
    name: "Lorem ipsum.",
    description:
      "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    icon: NoSymbolIcon,
  },
];

const Rules = () => {
  return (
    <section id="szabalyok" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            Szabályok
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            A szabályok betartása kötelező, kérjük olvasd el őket figyelmesen.
            Megszegésük következményeket von maga után.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-red-600"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline text-zinc-300">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Rules;
