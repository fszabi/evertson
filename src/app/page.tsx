import Contact from "./(contact)/Contact";
import { Faqs } from "./(faqs)/Faqs";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Sites from "./(sites)/Sites";
import Blog from "./Blog";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";

export const dynamic = "force-dynamic";

export default async function Home() {
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
