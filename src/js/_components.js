import * as THREE from "three";
import Lenis from "lenis";
import GLOBE from "vanta/src/vanta.globe.js";

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");

  GLOBE({
    el: "#hero",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minWidth: 200.0,
    minHeight: 200.0,
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
