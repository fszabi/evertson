import Contact from "./(contact)/Contact";
import Giveaway from "./(giveaway)/Giveaway";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Partners from "./(partners)/Partners";
import Sites from "./(sites)/Sites";
import Blog from "./Blog";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Giveaway />
      <Services />
      <Blog />
      <Sites />
      <Partners />
      <Contact />
      <ScrollArrow />
    </>
  );
}
