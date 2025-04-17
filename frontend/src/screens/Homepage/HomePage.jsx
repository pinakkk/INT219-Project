import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { AboutTheProject } from "./AboutTheProject";
import { BannerWrapper } from "./BannerWrapper";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";


export function HomePage() {
  return (
    <>

    <Navbar/>
    <Hero/>

    {/* <AboutTheProject/>
    <BannerWrapper/> */}
    <HowItWorks/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default HomePage
