"use client";

import Header2 from "@/app/(header)/Header2";
import { getPostBySlug } from "@/app/utils/posts";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import CustomListItem from "./CustomListItem";

const PostContent = () => {
  const { slug } = useParams();

  const post = getPostBySlug(slug as string);

  if (!post) {
    return (
      <div className="text-center text-2xl text-gray-500 mt-12">
        Nem található a blogposzt.
      </div>
    );
  }

  return (
    <>
      <Header2 />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-28 rounded-lg min-h-screen">
        <article className="prose lg:prose-xl space-y-10">
          <header className="space-y-6">
            <p className="bg-red-600 rounded-md px-3 py-[6px] text-sm w-fit block">
              {post.date}
            </p>
            <h1>{post.title}</h1>
          </header>
          <section className="space-y-10">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm, remarkBreaks]}
              components={{
                a: ({ node, ...props }) => <CustomLink {...props} />,
                img: ({ node, ...props }) => <CustomImage {...props} />,
                span: ({ node, ...props }) => (
                  <span className="text-red-600" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="space-y-5" {...props} />
                ),
                li: ({ node, ...props }) => <CustomListItem {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </section>
        </article>
      </div>
    </>
  );
};

export default PostContent;
