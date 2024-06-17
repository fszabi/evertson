import Header2 from "@/app/(header)/Header2";
import CustomImage from "@/app/components/CustomImage";
import CustomLink from "@/app/components/CustomLink";
import CustomListItem from "@/app/components/CustomListItem";
import { getServiceBySlug } from "@/app/utils/services";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

interface Props {
  slug: string;
}

const ServiceContent = ({ slug }: Props) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="text-center text-2xl text-gray-500 mt-12">
        Nem található a szolgáltatás.
      </div>
    );
  }

  return (
    <>
      <Header2 />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-28 rounded-lg min-h-screen">
        <article className="prose lg:prose-xl space-y-10">
          <header className="space-y-6">
            <h1>{service.title}</h1>
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
                  <ul className="space-y-10" {...props} />
                ),
                li: ({ node, ...props }) => <CustomListItem {...props} />,
              }}
            >
              {service.content}
            </ReactMarkdown>
          </section>
        </article>
      </div>
    </>
  );
};

export default ServiceContent;
