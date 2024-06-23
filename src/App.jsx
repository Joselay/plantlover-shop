import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Plant from "./components/Plant";
import TopSelling from "./components/TopSelling";
import CustomerReview from "./components/CustomerReview";
import RecentViews from "./components/RecentViews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Plant
        src="/images/buston_fern.svg"
        title="Our Trendy Plants"
        margin=" mt-24"
      />
      <Plant src="images/rose_gold.svg" />
      <h1 className="mt-12 mb-8 text-4xl font-bold text-center">
        Our Top Selling
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 w-[90%] mx-auto">
        <TopSelling
          initialX={100}
          src="images/arecaPalm.svg"
          title="Our Top Selling"
        />
        <TopSelling initialX={-100} src="images/pothos_plant.svg" />
        <TopSelling initialX={100} src="images/Philodendron.svg" />
        <TopSelling initialX={-100} src="images/boston_fern.svg" />
        <TopSelling initialX={100} src="images/arecaPalm.svg" />
        <TopSelling initialX={-100} src="images/anthurium.svg" />
      </section>
      <h1 className="mt-24 mb-8 text-4xl font-bold text-center">
        Customer Review
      </h1>
      <section className="grid grid-cols-1 gap-y-8 w-[80%] mx-auto md:grid-cols-2 ">
        <CustomerReview
          initialX={100}
          color="blue"
          name="Jose"
          src="images/sasuke.webp"
          comment='"Astonishing variety of plants made my selection effortless. The
          expert advice ensured I chose the perfect addition to my home. Highly
          recommend for all plant enthusiasts!"'
        />
        <CustomerReview
          initialX={100}
          color="blue"
          name="Jose"
          src="images/sasuke.webp"
          comment='"Astonishing variety of plants made my selection effortless. The
          expert advice ensured I chose the perfect addition to my home. Highly
          recommend for all plant enthusiasts!"'
        />
        <CustomerReview
          initialX={-100}
          color="yellow"
          name="John"
          src="images/boruto.webp"
          comment='"Great experience shopping for plants online. Quality plants, smooth navigation, and helpful advice. Highly recommend this site to fellow plant lovers!"'
        />
        <CustomerReview
          initialX={100}
          color="pink"
          name="Rose"
          src="images/sarada.webp"
          comment='"Impressed with the variety and quality of plants. The website is user-friendly, and the expert advice provided valuable insights. Happy customer!"'
        />
      </section>
      <section>
        <h1 className="mt-24 text-4xl font-bold text-center ">Recent Views</h1>
        <RecentViews />
      </section>
      <Footer />
    </>
  );
};

export default App;
