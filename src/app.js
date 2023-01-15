import "./app.css";

const navShow = document.querySelector(".fa-bars");
const navClose = document.querySelector(".fa-x");
const navWrapper = document.querySelector(".nav-wrapper");

navShow.addEventListener("click", () => {
  navWrapper.classList.remove("hidden");
});

navClose.addEventListener("click", () => {
  navWrapper.classList.add("hidden");
});
