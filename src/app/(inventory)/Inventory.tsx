import Image from "next/image";
import getInventoryImage from "../utils/getInventoryImage";

const texts = [
  "💶 Az árak bal oldalt lent láthatóak HUF-ban, közvetlen felette pedig a float.",
  "🔫 Jobb fent a kondició látható (FN, MW, FT, WW, BS) illetve az (ST) ha Statrakos az item.",
  "💻 Bal fent a tradeban napok száma látható (1-7), ha nincs szám akkor tradelhető az adott item.",
  "💎 Középen fent a dopplerek (P1, P2, P3, P4) vagy a fade % található (80-100).",
  "👑 Jobb fent a kondíció alatti összeg pedig a matricák összértékét jelöli.",
];

const Inventory = async () => {
  const inventoryImage = await getInventoryImage();

  return (
    <section
      id="arlista"
      className="py-28 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/inventory.png')]"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-6 lg:px-8">
        <h2 className="leading-8">Árlista</h2>
        <div className="bg-zinc-800 rounded-2xl p-6">
          <ul className="space-y-4">
            {texts.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
        <Image
          className="object-cover shadow rounded-lg w-full h-full"
          width={1500}
          height={1500}
          src={inventoryImage?.imageUrl || ""}
          alt="Raktár kép"
        />
      </div>
    </section>
  );
};

export default Inventory;
