document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll(
    '.srv-tab, .testi, .faq, .about-pillar, .process-step, .contact-item'
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

  // ── Service tabs ──
  const tabs  = document.querySelectorAll('.srv-tab');
  const panes = document.querySelectorAll('.srv-pane');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t  => t.classList.remove('srv-tab--active'));
      panes.forEach(p => p.classList.remove('srv-pane--active'));
      tab.classList.add('srv-tab--active');
      panes[+tab.dataset.tab].classList.add('srv-pane--active');
    });
  });

});
