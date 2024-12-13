import "../styles/style.scss";

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

// HAMBURGER

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  const backButton = document.querySelector('.back-button');

  function toggleMenu() {
    menu.classList.toggle('open');
  }

  hamburger.addEventListener('click', toggleMenu);
  backButton.addEventListener('click', toggleMenu);
});
