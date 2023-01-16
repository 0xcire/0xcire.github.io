import "./app.css";

const navShow = document.querySelector(".fa-bars");
const navClose = document.querySelector(".fa-x");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".nav-links");

navShow.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});

navClose.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
});
