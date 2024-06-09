"use client";

import { notFound, useParams } from "next/navigation";
import { getPostBySlug } from "@/app/utils/posts";

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
          {post.content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </section>
      </article>
    </div>
  );
};

export default PostContent;
