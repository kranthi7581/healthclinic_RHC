import React from "react";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import DoctorsPreview from "../components/home/DoctorsPreview";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <DoctorsPreview />
      <Testimonials />
    </main>
  );
};

export default Home;
