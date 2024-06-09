import Link from "next/link";
import { getAllPosts } from "../utils/posts";
import Image from "next/image";
import banner from "/public/assets/images/banner.webp";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <section id="blog" className="py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-8">
        <h2 className="leading-8">Blog</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-x-8 gap-y-20">
          {posts.map((post) => (
            <div key={post.slug} className="group relative space-y-6">
              <div className="relative h-80 w-full overflow-hidden rounded-xl sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-60 transition-opacity sm:h-64">
                <Image
                  src={banner}
                  alt="banner"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="space-y-4">
                <time
                  dateTime={post.date}
                  className="bg-red-600 rounded-md px-3 py-[6px] text-xs w-fit block"
                >
                  {post.date}
                </time>
                <h3 className="text-lg font-semibold">
                  <Link href={`/${post.slug}`}>
                    <span className="absolute inset-0"></span>
                    {post.title}
                  </Link>
                </h3>
              </div>
              {/* <p className="text-sm text-zinc-300">{post.content}</p> */}
              <p className="text-sm text-zinc-300">
                {post.content.slice(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
