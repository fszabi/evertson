import ScrollArrow from "@/app/ScrollArrow";
import ServiceContent from "./ServiceContent";

interface Props {
  params: { slug: string };
}

const ServicePage = async ({ params }: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <>
      <ServiceContent slug={params.slug} />
      <ScrollArrow />
    </>
  );
};

export default ServicePage;
