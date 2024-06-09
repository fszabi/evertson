import Image from "next/image";
import banner from "/public/assets/images/banner.webp";
import Link from "next/link";

const services = [
  "Skin Eladás",
  "Trade-Up",
  "CS2 Fogadás",
  "CS2 Tanfolyam",
  "Skin Bérlés",
];

const Services = () => {
  return (
    <section id="szolgaltatasok" className="py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-8">
        <h2 className="leading-8">Szolgáltatások</h2>
        <div className="grid grid-cols-1 min-[400px]:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-x-8 gap-y-20">
          {services.map((service, index) => (
            <div className="group relative" key={index}>
              <div className="relative h-80 w-full overflow-hidden rounded-xl bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-60 transition-opacity sm:h-64">
                <Image
                  src={banner}
                  alt="banner"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-zinc-300">
                <Link href="#">
                  <span className="absolute inset-0"></span>
                  {service}
                </Link>
              </h3>
              <p className="text-base font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
