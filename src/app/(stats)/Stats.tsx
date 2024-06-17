import classNames from "classnames";

const stats = [
  { id: 1, name: "Tranzakció", value: "21521" },
  { id: 2, name: "Eladott item", value: "398 326" },
  { id: 3, name: "Elégedett vásárló", value: "2000+" },
  { id: 4, name: "Vélemény", value: "1200+" },
];

const Stats = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl max-xl:max-w-5xl px-6 lg:px-8">
        <dl className="grid max-[875px]:grid-cols-1 min-[875px]:grid-cols-2 gap-x-10 gap-y-16 text-center xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="max-xl:w-96 max-xl:mx-auto flex flex-col gap-y-4 bg-zinc-800 ring-1 ring-inset ring-zinc-700 p-4 rounded-lg"
            >
              <dt className="text-base leading-7 text-zinc-300">{stat.name}</dt>
              <dd className="order-first text-5xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
