import Contact from "./(contact)/Contact";
import Events from "./(events)/Events";
import { Faqs } from "./(faqs)/Faqs";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Sites from "./(sites)/Sites";
import Blog from "./Blog";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      <Services />
      <Blog />
      <Sites />
      <Faqs />
      <Contact />
      <ScrollArrow />
    </>
  );
}
