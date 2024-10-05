import Contact from "./(contact)/Contact";
import Giveaway from "./(giveaway)/Giveaway";
import Header from "./(header)/Header";
import Hero from "./(hero)/Hero";
import Sites from "./(sites)/Sites";
import Blog from "./Blog";
import ScrollArrow from "./ScrollArrow";
import Services from "./Services";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Giveaway />
      <Services />
      <Blog />
      <Sites />
      <Contact />
      <ScrollArrow />
    </>
  );
}
