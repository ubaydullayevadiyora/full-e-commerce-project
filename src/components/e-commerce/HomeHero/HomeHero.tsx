"use client";

import { useState } from "react";
import "./HomeHero.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/images/hero1.png", "/images/hero1.png", "/images/hero1.png"];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="hero">
      <div className="hero__slider">
        <img src={images[index]} alt="banner" />

        <button className="nav left" onClick={prev}>
          <ChevronLeft />
        </button>
        <button className="nav right" onClick={next}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
