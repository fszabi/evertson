import Hero from "./(hero)/Hero";
import Header from "./(header)/Header";
import Sites from "./(sites)/Sites";
import Contact from "./(contact)/Contact";
import Services from "./Services";
import Blog from "./Blog";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Sites />
      <Contact />
    </>
  );
}
