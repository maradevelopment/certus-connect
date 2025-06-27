document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");

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
