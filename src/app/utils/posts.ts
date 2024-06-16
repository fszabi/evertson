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
      summary: "Összetett útmutató a tradeléshez",
    },
    {
      slug: "scam-leiras",
      title: "Scam Leírás",
      content: ``,
      summary: "Kerüldd el a csalókat a tradelés során",
    },
    {
      slug: "third",
      title: "My Third Post",
      content: ``,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
    },
    {
      slug: "fourth-post",
      title: "My Fourth Post",
      content: ``,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
    },
    {
      slug: "fifth-post",
      title: "My Fifth Post",
      content: ``,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
    },
  ];
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
};
