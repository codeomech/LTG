"use client";

import Image from "next/image";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Banner from "./components/Banner";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  }, [pathname]);

  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="products" className="mt-16 md:mt-0">
        <ProductList />
      </section>
      <section id="banner">
        <Banner />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
}
