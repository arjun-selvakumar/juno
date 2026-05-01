const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.activeElement.blur();
  });
});

function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  const threshold = window.innerHeight * 0.85;

  elements.forEach((element) => {
    const bounding = element.getBoundingClientRect();
    if (bounding.top < threshold) {
      element.classList.add('reveal-visible');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });
});
