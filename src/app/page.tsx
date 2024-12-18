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

  // Fetch 1000 posts - this will be slow
  await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store",
  });

  // Fetch 1000 photos - even slower
  await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store",
  });

  // Fetch 10000 todos - very slow
  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  await fetch("https://dummyjson.com/todos?limit=150&skip=0", {
    cache: "no-store",
  });

  return null;
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
