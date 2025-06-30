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

// Lenis

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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      lenis.scrollTo(targetElement, { duration: 1.2, easing: (t) => t });
    }
  });
});

// GSAP

gsap.registerPlugin(ScrollTrigger);

// ABOUT
gsap.from("#about-image", {
  scrollTrigger: {
    trigger: "#about-section",
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
    trigger: "#about-section",
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

// CONTACT

gsap.from("#contact-title", {
  scrollTrigger: {
    trigger: "#contact-section",
    start: "top 80%", // когда верх секции достигнет 80% высоты экрана
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from("#contact-text", {
  scrollTrigger: {
    trigger: "#contact-section",
    start: "top 75%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from("#contact-button", {
  scrollTrigger: {
    trigger: "#contact-section",
    start: "top 70%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out",
});

// CTA

gsap.from("#get-started-title", {
  scrollTrigger: {
    trigger: "#get-started-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from("#get-started-text", {
  scrollTrigger: {
    trigger: "#get-started-section",
    start: "top 75%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});
