import { NoSymbolIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Korhatár",
    description:
      "A szerveren való játékhoz minimum 14 éves kor szükséges. Amennyiben fiatalabb vagy, kérjük, hogy tartsd tiszteletben ezt a szabályt, és ne használd a mikrofon-t.",
    icon: NoSymbolIcon,
  },
  {
    name: "Csalás",
    description:
      "Semmilyen csalás nem megengedett a szerveren. Ez magában foglalja, de nem korlátozódik a szoftveres és hardveres eszközökre, hackekre vagy bármilyen más módosításra, amely előnyt biztosítana más játékosokkal szemben. A csalókat azonnali kitiltással büntetjük.",
    icon: NoSymbolIcon,
  },
  {
    name: "Segédeszközök használata",
    description:
      "Tilos bármilyen segédeszköz használata, amely a játékmenetet befolyásolja. Ide tartozik minden olyan program, script, vagy hardver, amely előnyt jelentene a játékban.",
    icon: NoSymbolIcon,
  },
  {
    name: "Viselkedés",
    description:
      "Kérjük, hogy a szerveren mindig kulturált és normális emberi módon viselkedj. A szóbeli  bántalmazás, rasszizmus, sértegetés, hergelés, vagy bármilyen más, a közösségi normákat sértő viselkedés nem elfogadható. Tartsd tiszteletben a többi játékost és a szerver adminisztrátorait.",
    icon: NoSymbolIcon,
  },
  {
    name: "Általános szabályok",
    description:
      "Tiszteld a szerver szabályait és a többi játékost. Bármilyen szabálysértés a játékból való kizárást eredményezheti. Ha problémád vagy kérdésed van, fordulj bizalommal az adminisztrátorokhoz.",
    icon: NoSymbolIcon,
  },
  {
    name: "Szerveren való BUG kihasználás",
    description:
      "Ha a játékos hibát talál a szerveren és azt kihasználja ahelyett, hogy jelentéssel jelezné az adminoknak, ugyanúgy büntetést von maga után, mint a többi szabályszegés. Ez alól nincs kivétel. Például: Ha egy játékos Silence mute-ot kapott, és ezt megkerülve '!' jelet használva kommunikál, az azonnali ban szankciót von maga után.",
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
            A szabályok nem tudása nem jogosít fel a be nem tartása alól!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-zinc-800 rounded-2xl flex flex-col p-6"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-red-600"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Rules;
