import serviceMarkdowns from "./serviceMarkdowns";

interface Service {
  slug: string;
  title: string;
  content: string;
  summary: string;
}

export const getAllServices = (): Service[] => {
  return [
    {
      slug: "skin-eladas",
      title: "Skin Eladás",
      content:
        serviceMarkdowns.find((service) => service.title === "Skin Eladás")
          ?.content || "",
      summary: "Hogyan adj el skineket nekem?",
    },
    {
      slug: "skin-berles",
      title: "Skin Bérlés",
      content:
        serviceMarkdowns.find((service) => service.title === "Skin Bérlés")
          ?.content || "",
      summary: "Bérelj skineket tőlem",
    },
    {
      slug: "trade-up",
      title: "Trade-Up",
      content:
        serviceMarkdowns.find((service) => service.title === "Trade-Up")
          ?.content || "",
      summary: "Realizálj jelentős profitokat",
    },
    {
      slug: "cs2-fogadas",
      title: "CS2 Fogadás",
      content:
        serviceMarkdowns.find((service) => service.title === "CS2 Fogadás")
          ?.content || "",
      summary: "Fogadj meccsekre és nyerj",
    },
    {
      slug: "cs2-tanfolyam",
      title: "CS2 Tanfolyam",
      content:
        serviceMarkdowns.find((service) => service.title === "CS2 Tanfolyam")
          ?.content || "",
      summary: "Tanulj meg mindent a tradelésről",
    },
  ];
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return getAllServices().find((service) => service.slug === slug);
};
