import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FaqType } from "../types";

const faqs: FaqType[] = [
  {
    question: "Hol találom a trade linkem?",
    answer: [
      "Nyisd meg a Steam alkalmazást vagy a Steam weboldalát.",
      "Kattints a felső menüsorban a nevedre (jobb felső sarokban) és válaszd ki az Inventory opciót.",
      "Az Inventory oldalon kattints a 'Trade Offers' (Csereajánlatok) lehetőségre, ami a jobb oldalon található.",
      "Az új oldalon kattints a 'Who can send me Trade Offers?' (Ki küldhet nekem csereajánlatot?) linkre. Ez egy listaoldalra irányít.",
      "Ezen az oldalon megtalálod a 'Trade URL' mezőt, ahol a saját trade linked van. Itt kimásolhatod a linkedet.",
    ],
  },
  {
    question: "Biztonságos kártyaszámot megadni utalásnál?",
    answer:
      "A bankkártyaszám megadása utalásnál biztonságosnak tekinthető viszont soha ne oszd meg másokkal a kártyád CVV kódját. Amennyiben csak a bankkártyád számát és a lejárati dátumot adod meg addig csak pénzt lehet utalni a kártyádra. Fizetni semmiféleképpen nem lehet CVV kód nélkül.",
  },
  {
    question: "Mennyi időn belül szoktál válaszolni?",
    answer:
      "Természetesen megpróbálok a legrövidebb időn belül válaszolni viszont átlagos válaszidő 1 nap, hétvégén általában lassabban válaszolok. Ha folyamatosan írsz akkor még lassabban fogok válaszolni mivel ilyenkor a lista elejére kerülsz és én mindig a végéről kezdem. Semmiféleképpen ne hívj fel kérdés nélkül messengeren vagy discordon mert letiltásra kerülsz.",
  },
  {
    question: "Hogyan és mekkora tőkével kezdjem el a tradelést?",
    answer:
      "Nézz YouTube videókat, csatlakozz CS2 közösségekhez és próbálj mindenhonnan tudást szerezni. Építs kapcsolatokat és szerezz tőkét amivel el tudod kezdeni a kereskedést. Elsősorban több száz euróval éri meg elkezdeni de inkább több ezerrel. A sikeres kereskedés türelmet és tudást igényel, de ha okosan csinálod, akkor hosszútávon profitálhatsz belőle. Amennyiben komolyan gondolod a kereskedést írj rám nyugodtan.",
  },
  {
    question: "Miért nem tudok azonnal kereskedni egy új tárggyal?",
    answer:
      "Újonnan vásárolt tárgyak (például a Steam Piacon vásárolt tárgyak vagy ládából nyitott tárgyak) általában 7 napos kereskedési tiltás alá esnek. Ez a korlátozás a csalások és lopások megelőzésére szolgál.",
  },
  {
    question: "Miért nem látják mások az új tárgyakat az inventorymban?",
    answer:
      "Azért mert az újonnan szerzett vagy vásárolt tárgyak 10 napig láthatatlanok az inventorydban.",
  },
  {
    question: "Vásárolsz új skineket?",
    answer: "Nem vásárolok új itemeket legalább 3 hónapig.",
  },
  {
    question: "Cserélni szeretném a skinjeimet, van erre lehetőségem?",
    answer:
      "Természetesen! Küldj elsősorban egy trade linket ami alapján megmondom hogy mennyibe számolom be a skinjeid majd küldök egy árlistát.",
  },
  {
    question: "El szeretném adni a skinjeim, hogyan tudsz fizetni?",
    answer:
      "Crypto (USDT-TRC20)/Banki utalás/Bankkártya számra utalás/Revolut utalás lehetséges EUR/HUF-ban.",
  },
];

export function Faqs() {
  return (
    <section id="gyakori-kerdesek" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-y divide-white/10 space-y-14">
          <h2 className="leading-8">Gyakori kérdések</h2>
          <dl className="space-y-6 divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>

                <DisclosurePanel
                  as="dd"
                  transition
                  className="mt-2 origin-top pr-12 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                >
                  {index === 0 && Array.isArray(faq.answer) ? (
                    <ul className="space-y-2">
                      {faq.answer.map((step, index) => (
                        <li
                          key={index}
                          className="list-decimal list-inside text-base leading-7 text-gray-300"
                        >
                          {step}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base leading-7 text-gray-300">
                      {faq.answer}
                    </p>
                  )}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
