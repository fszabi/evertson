import PostContent from "./PostContent";

interface Props {
  params: { slug: string };
}

const BlogPost = ({ params }: Props) => {
  return <PostContent slug={params.slug} />;
};

export default BlogPost;
