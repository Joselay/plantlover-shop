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
      <div className="xl:mt-[-10rem]">
        <Plant
          src="/images/buston_fern.svg"
          title="Our Trendy Plants"
          margin=" mt-24"
        />
        <Plant src="images/rose_gold.svg" />
      </div>
      <h1 className="mt-12 mb-8 text-4xl font-bold text-center 2xl:text-5xl">
        Our Top Selling
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-4 w-[90%] mx-auto xl:grid-cols-3">
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
      <h1 className="mt-24 mb-8 text-4xl font-bold text-center 2xl:text-5xl">
        Customer Review
      </h1>
      <section className="grid grid-cols-1 gap-y-8 w-[80%] mx-auto md:grid-cols-2 md:gap-x-4 md:gap-y-6 2xl:grid-cols-3 2xl:gap-6">
        <CustomerReview
          delay={0.2}
          color="blue"
          name="Sasuke"
          src="images/sasuke.webp"
          comment='"Astonishing variety of plants made my selection effortless. The
          expert advice ensured I chose the perfect addition to my home. Highly
          recommend for all plant enthusiasts!"'
        />
        <CustomerReview
          delay={0.4}
          color="red"
          name="Muzan"
          src="images/muzan.jpg"
          comment='"The wide array of plants made my selection a breeze. The expert tips ensured I chose the perfect one for my home. Highly recommend to all plant lovers!"'
        />
        <CustomerReview
          delay={0.6}
          color="green"
          name="Kawaki"
          src="images/kawaki.webp"
          comment='"The incredible diversity of plants made my choice simple. The expert guidance ensured I picked the ideal addition for my home. Highly recommend to all plant aficionados!"'
        />
        <CustomerReview
          delay={0.2}
          color="gray"
          name="Itachi"
          src="images/itachi.jpg"
          comment='"The amazing range of plants made it easy for me to choose. The knowledgeable advice helped me pick the perfect one for my home. I highly recommend it to all plant lovers!"'
        />
        <CustomerReview
          delay={0.4}
          color="yellow"
          name="Boruto"
          src="images/boruto.webp"
          comment='"Great experience shopping for plants online. Quality plants, smooth navigation, and helpful advice. Highly recommend this site to fellow plant lovers!"'
        />
        <CustomerReview
          delay={0.6}
          color="pink"
          name="Sarada"
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
