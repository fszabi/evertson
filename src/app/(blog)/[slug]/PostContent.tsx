"use client";

import { getPostBySlug } from "@/app/utils/posts";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Image from "next/image";
import { FC } from "react";

const CustomLink: FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  ...props
}) => (
  <a
    className="text-red-600"
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {props.children}
  </a>
);

const CustomImage = ({ ...props }) => {
  if (!props.src) {
    console.error("Image source is required.");
    return null;
  }

  return (
    <Image
      className="rounded-lg"
      src={props.src}
      alt={props.alt || "Image"}
      width={800} // specify the width of the image
      height={600} // specify the height of the image
      layout="responsive"
      {...props}
    />
  );
};

const CustomListItem = ({ ...props }) => {
  return (
    <li className="relative pl-5" {...props}>
      <span className="absolute left-0 text-red-600">•</span>
      {props.children}
    </li>
  );
};

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
    <div className="max-w-4xl mx-auto p-6 rounded-lg min-h-screen">
      <article className="prose lg:prose-xl space-y-10">
        <header className="space-y-6">
          <p className="bg-red-600 rounded-md px-3 py-[6px] text-sm w-fit block">
            {post.date}
          </p>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        </header>
        <section className="space-y-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              a: ({ node, ...props }) => <CustomLink {...props} />,
              img: ({ node, ...props }) => <CustomImage {...props} />,
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
  );
};

export default PostContent;
