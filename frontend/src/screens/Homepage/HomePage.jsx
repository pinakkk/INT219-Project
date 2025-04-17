import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { AboutTheProject } from "./AboutTheProject";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";


export function HomePage() {
  return (
    <>

    <Navbar/>
    <Hero/>
    <AboutTheProject/>
    <HowItWorks/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default HomePage
