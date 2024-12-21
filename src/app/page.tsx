import Contact from "./(contact)/Contact";
import { Faqs } from "./(faqs)/Faqs";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Sites from "./(sites)/Sites";
import Blog from "./Blog";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";

export const dynamic = "force-dynamic";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Home() {
  await getData();

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Sites />
      <Contact />
      <Faqs />
      <ScrollArrow />
    </>
  );
}
