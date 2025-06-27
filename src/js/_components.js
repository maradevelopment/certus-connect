document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("preloader--hidden");
  }, 5000);
});
