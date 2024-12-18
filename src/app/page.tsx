import { headers } from "next/headers";
import Contact from "./(contact)/Contact";
import { Faqs } from "./(faqs)/Faqs";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Sites from "./(sites)/Sites";
import Blog from "./Blog";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";

async function getData() {
  // Force dynamic rendering
  headers();

  // Fetch from a real endpoint that has delay
  const res = await fetch("https://dummyjson.com/products/1", {
    cache: "no-store", // Disable caching
  });

  return res.json();
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
