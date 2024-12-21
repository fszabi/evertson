import ScrollArrow from "@/app/ScrollArrow";
import PostContent from "./PostContent";

interface Props {
  params: { slug: string };
}

const BlogPost = async ({ params }: Props) => {
  return (
    <>
      <PostContent slug={params.slug} />
      <ScrollArrow />
    </>
  );
};

export default BlogPost;
