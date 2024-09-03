import { StaticImageData } from "next/image";
import postMarkdowns from "./postMarkdowns";
import giveaway from "/public/assets/images/blog/giveaway/giveaway.webp";
import scam from "/public/assets/images/blog/scam/scam.webp";
import tradeguide from "/public/assets/images/blog/tradeguide/tradeguide.webp";
import awpserver from "/public/assets/images/blog/awpserver/awpserver.webp";
import onevsoneserver from "/public/assets/images/blog/onevsoneserver/onevsoneserver.webp";
import story from "/public/assets/images/blog/story/story.png";
import giveaway_1 from "/public/assets/images/blog/giveaway_1/giveaway_1.webp";

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
      slug: "rolam",
      title: "Rólam",
      src: story,
      content:
        postMarkdowns.find((post) => post.title === "Rólam")?.content || "",
      summary: "Hogyan kezdtem a kereskedést?",
    },
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
    {
      slug: "1v1-szerver",
      title: "1v1 Szerver",
      src: onevsoneserver,
      content:
        postMarkdowns.find((post) => post.title === "1v1 Szerver")?.content ||
        "",
      summary: "Hamarosan...",
    },
  ];
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
};
