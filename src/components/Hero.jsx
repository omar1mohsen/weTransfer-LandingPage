/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeroCard from "./HeroCard";
import BrandName from "./BrandName";
import Pop from "./Pop";

function Hero() {
  return (
    <div className="hero">
      <HeroCard />
      <Pop />
      <BrandName />
    </div>
  );
}

export default Hero;
