import ScrollArrow from "@/app/ScrollArrow";
import ServiceContent from "./ServiceContent";

interface Props {
  params: { slug: string };
}

const ServicePage = ({ params }: Props) => {
  return (
    <>
      <ServiceContent slug={params.slug} />
      <ScrollArrow />
    </>
  );
};

export default ServicePage;
