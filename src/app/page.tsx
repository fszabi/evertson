import Contact from "./(contact)/Contact";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Partners from "./(partners)/Partners";
import Shops from "./(shops)/Shops";
import Sites from "./(sites)/Sites";
import Stats from "./(stats)/Stats";
import Blog from "./Blog";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Sites />
      <Partners />
      {/* <Shops /> */}
      {/* <Stats /> */}
      <Contact />
      <ScrollArrow />
    </>
  );
}
