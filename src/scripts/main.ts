import "../styles/style.scss";
import "./swiper.ts";

document.querySelectorAll(".questions-box-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".questions-box-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

document.querySelectorAll(".faq-box-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-box-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("transition-disabled");
});

document.querySelectorAll(".conditions-box-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".conditions-box-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("transition-disabled");
});


// HAMBURGER

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  const backButton = document.querySelector('.back-button');

  function toggleMenu() {
    menu?.classList.toggle('open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  if (backButton) {
    backButton.addEventListener('click', toggleMenu);
  }
});
