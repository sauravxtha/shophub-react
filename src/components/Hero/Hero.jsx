import React from "react";
import styles from "./Hero.module.css";
import { heroSlides } from "../../data/appData";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVissible, setIsVissible] = useState(false);

  useEffect(() => {
    setIsVissible(true);
    const interval = setInterval(() => {
      setIsVissible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsVissible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSliderControl = (index) => {
    setIsVissible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsVissible(true);
    }, 500);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div
          className={`${styles.textContent} ${
            isVissible ? styles.vissible : ""
          }`}
        >
          <h1 className={styles.title}>{heroSlides[currentSlide].title}</h1>
          <p className={styles.subTitle}>{heroSlides[currentSlide].subtitle}</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Shop Now</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
        <div
          className={`${styles.imageContainer} ${
            isVissible ? styles.vissible : ""
          }`}
        >
          <div className={styles.imageWrapper}>
            <img
              className={styles.heroImage}
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
            />
            <div className={styles.glassOverlay}></div>
          </div>
        </div>
        <div className={styles.sliderControls}>
          {heroSlides.map((slide, index) => (
            <span
              onClick={() => handleSliderControl(index)}
              key={index}
              className={`${styles.sliderControl} ${
                currentSlide === index ? styles.active : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
