import { StaticImageData } from "next/image";
import postMarkdowns from "./postMarkdowns";
import giveaway from "/public/assets/images/blog/giveaway/giveaway.webp";
import scam from "/public/assets/images/blog/scam/scam.webp";
import tradeguide from "/public/assets/images/blog/tradeguide/tradeguide.webp";
import awpserver from "/public/assets/images/blog/awpserver/awpserver.webp";

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
      summary: "Tanuld meg a tradelés alapjait!",
    },
    {
      slug: "scam-leiras",
      title: "Scam Leírás",
      src: scam,
      content:
        postMarkdowns.find((post) => post.title === "Scam Leírás")?.content ||
        "",
      summary: "Kerüld el a csalókat a tradelés során!",
    },
    {
      slug: "nyeremenyjatekok",
      title: "Nyereményjátékok",
      src: giveaway,
      content:
        postMarkdowns.find((post) => post.title === "Nyereményjátékok")
          ?.content || "",
      summary: "Vegyél részt a nyereményjátékokon!",
    },
    {
      slug: "awp-szerver",
      title: "AWP Szerver",
      src: awpserver,
      content:
        postMarkdowns.find((post) => post.title === "AWP Szerver")?.content ||
        "",
      summary: "Játssz az AWP szerveren!",
    },
  ];
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
};
