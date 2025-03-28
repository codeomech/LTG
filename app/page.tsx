import Image from "next/image";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export default function Page() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="products">
        <ProductList />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
}
