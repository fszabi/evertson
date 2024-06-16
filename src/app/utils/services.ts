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
        serviceMarkdowns.find((service) => service.title === "Trade Alapok")
          ?.content || "",
      summary: "Hogyan adj el skineket nekem?",
    },
    {
      slug: "skin-berles",
      title: "Skin Bérlés",
      content: ``,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
    },
    {
      slug: "trade-up",
      title: "Trade-Up",
      content: ``,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
    },
    {
      slug: "cs2-fogadas",
      title: "CS2 Fogadás",
      content: ``,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
    },
    {
      slug: "cs2-tanfolyam",
      title: "CS2 Tanfolyam",
      content: ``,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
    },
  ];
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return getAllServices().find((service) => service.slug === slug);
};
