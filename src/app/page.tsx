import { Suspense } from "react";
import Contact from "./(contact)/Contact";
import { Faqs } from "./(faqs)/Faqs";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Sites from "./(sites)/Sites";
import Blog from "./Blog";
import LoadingState from "./LoadingState";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";
import Events from "./(events)/Events";
import Inventory from "./(inventory)/Inventory";

export const dynamic = "force-dynamic";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Home() {
  await getData();

  return (
    <Suspense fallback={<LoadingState />}>
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Sites />
      <Contact />
      <Faqs />
      <ScrollArrow />
    </Suspense>
  );
}
