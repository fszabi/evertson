import ScrollArrow from "@/app/ScrollArrow";
import PostContent from "./PostContent";

interface Props {
  params: { slug: string };
}

const BlogPost = async ({ params }: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <>
      <PostContent slug={params.slug} />
      <ScrollArrow />
    </>
  );
};

export default BlogPost;
