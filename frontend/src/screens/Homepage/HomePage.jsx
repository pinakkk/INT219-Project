import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Banner } from "./Banner";

export function HomePage() {
  return (
    <>

    <Navbar/>
    <Hero/>
    <Banner/>
    {/* <AboutTheProject/> */}
    </>
  );
}
