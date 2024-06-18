import { StaticImageData } from "next/image";
import postMarkdowns from "./postMarkdowns";
import scam from "/public/assets/images/blog/scam/scam.webp";
import tradeguide from "/public/assets/images/blog/tradeguide/tradeguide.webp";

interface Post {
  slug: string;
  title: string;
  src: StaticImageData;
  content: string;
  summary: string;
}

export const getAllPosts = (): Post[] => {
  return [
    {
      slug: "trade-alapok",
      title: "Trade Alapok",
      src: tradeguide,
      content:
        postMarkdowns.find((post) => post.title === "Trade Alapok")?.content ||
        "",
      summary: "Tanuldd meg a tradelés alapjait",
    },
    {
      slug: "scam-leiras",
      title: "Scam Leírás",
      src: scam,
      content:
        postMarkdowns.find((post) => post.title === "Scam Leírás")?.content ||
        "",
      summary: "Kerüldd el a csalókat a tradelés során",
    },
  ];
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
};
