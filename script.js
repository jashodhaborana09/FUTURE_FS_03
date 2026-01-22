// Scroll animation
const elements = document.querySelectorAll(".section, .service-card, .review");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

elements.forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});
// Page loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
