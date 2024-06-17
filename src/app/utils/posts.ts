import postMarkdowns from "./postMarkdowns";

interface Post {
  slug: string;
  title: string;
  content: string;
  summary: string;
}

export const getAllPosts = (): Post[] => {
  return [
    {
      slug: "trade-alapok",
      title: "Trade Alapok",
      content:
        postMarkdowns.find((post) => post.title === "Trade Alapok")?.content ||
        "",
      summary: "Tanuldd meg a tradelés alapjait",
    },
    {
      slug: "scam-leiras",
      title: "Scam Leírás",
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
