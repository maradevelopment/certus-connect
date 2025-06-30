import * as THREE from "three";
import Lenis from "lenis";
import GLOBE from "vanta/src/vanta.globe.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

// Lenis, Vanta.js
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");

  GLOBE({
    el: "#hero",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minWidth: 320.0,
    minHeight: 500.0,
    color: "#f20a5c",
    backgroundColor: "#100005",
    THREE,
  });

  setTimeout(() => {
    preloader.classList.add("preloader--hidden");
  }, 5000);
});

const lenis = new Lenis({
  duration: 1.8,
  easing: (t) => t,
  smooth: true,
  lerp: 0.09,
  wheelMultiplier: 1.5,
  smoothTouch: true,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP

gsap.registerPlugin(ScrollTrigger);

// ABOUT
gsap.from("#about-image", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: -100,
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(["#about-title", "#about-mark", "#about-description"], {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.3,
});

// FEATURES

gsap.from("#features-title", {
  scrollTrigger: {
    trigger: "#features-header",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.utils.toArray("#features-list > div").forEach((elem, i) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2,
    ease: "power2.out",
  });
});
