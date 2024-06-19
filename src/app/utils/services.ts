import { StaticImageData } from "next/image";
import serviceMarkdowns from "./serviceMarkdowns";
import cs2_fogadas from "/public/assets/images/services/cs2_fogadas/cs2_fogadas.png";
import cs2_tanfolyam from "/public/assets/images/services/cs2_tanfolyam/cs2_tanfolyam.webp";
import skin_renting from "/public/assets/images/services/skin_renting/skin_renting.webp";
import skin_selling from "/public/assets/images/services/skin_selling/skin_selling.webp";
import trade_up from "/public/assets/images/services/trade_up/trade_up.webp";

interface Service {
  slug: string;
  title: string;
  src: StaticImageData;
  content: string;
  summary: string;
}

export const getAllServices = (): Service[] => {
  return [
    {
      slug: "skin-eladas",
      title: "Skin Eladás",
      src: skin_selling,
      content:
        serviceMarkdowns.find((service) => service.title === "Skin Eladás")
          ?.content || "",
      summary: "Adj el skineket nekem!",
    },
    {
      slug: "skin-berles",
      title: "Skin Bérlés",
      src: skin_renting,
      content:
        serviceMarkdowns.find((service) => service.title === "Skin Bérlés")
          ?.content || "",
      summary: "Bérelj skineket tőlem!",
    },
    {
      slug: "trade-up",
      title: "Trade-Up",
      src: trade_up,
      content:
        serviceMarkdowns.find((service) => service.title === "Trade-Up")
          ?.content || "",
      summary: "Realizálj jelentős profitokat!",
    },
    {
      slug: "cs2-fogadas",
      title: "CS2 Fogadás",
      src: cs2_fogadas,
      content:
        serviceMarkdowns.find((service) => service.title === "CS2 Fogadás")
          ?.content || "",
      summary: "Fogadj meccsekre és nyerj!",
    },
    {
      slug: "cs2-tanfolyam",
      title: "CS2 Tanfolyam",
      src: cs2_tanfolyam,
      content:
        serviceMarkdowns.find((service) => service.title === "CS2 Tanfolyam")
          ?.content || "",
      summary: "Tanulj meg mindent a tradelésről!",
    },
  ];
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return getAllServices().find((service) => service.slug === slug);
};
