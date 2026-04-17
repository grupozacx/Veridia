// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll(
    '.card, .audience-card, .method-card, .section-header, .hero__content, .hero__expert, .lead, .btn--lg'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));
});
