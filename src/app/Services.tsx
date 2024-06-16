import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "./utils/services";
import banner from "/public/assets/images/banner.webp";

const Services = () => {
  const services = getAllServices();

  return (
    <section id="szolgaltatasok" className="py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-8">
        <h2 className="leading-8">Szolgáltatások</h2>
        <div className="grid grid-cols-1 min-[400px]:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-x-8 gap-y-20">
          {services.map((service) => (
            <div key={service.slug} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-xl sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-60 transition-opacity sm:h-64">
                <Image
                  src={banner}
                  alt="banner"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 mb-1 text-sm text-zinc-300">
                <Link href={`/szolgaltatasok/${service.slug}`}>
                  <span className="absolute inset-0"></span>
                  {service.title}
                </Link>
              </h3>
              {/* <p className="font-semibold">{service.summary}</p>  */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
