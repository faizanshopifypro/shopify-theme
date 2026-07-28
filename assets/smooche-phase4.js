(() => {
  /* Testimonials carousel + read more */
  document.querySelectorAll('[data-smooche-testimonials]').forEach((root) => {
    const track = root.querySelector('[data-testimonials-track]');
    const prev = root.querySelector('[data-testimonials-prev]');
    const next = root.querySelector('[data-testimonials-next]');
    const progress = root.querySelector('[data-testimonials-progress]');
    if (!track) return;

    const updateControls = () => {
      const max = track.scrollWidth - track.clientWidth;
      const left = track.scrollLeft;
      if (prev) prev.disabled = left <= 4;
      if (next) next.disabled = left >= max - 4;
      if (progress) {
        const pct = max <= 0 ? 100 : Math.min(100, ((left + track.clientWidth) / track.scrollWidth) * 100);
        progress.style.width = `${pct}%`;
      }
    };

    const scrollByCard = (dir) => {
      const card = track.querySelector('.smooche-testimonials__slide');
      const amount = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
      track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    prev?.addEventListener('click', () => scrollByCard(-1));
    next?.addEventListener('click', () => scrollByCard(1));
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    updateControls();

    root.querySelectorAll('[data-testimonial-card]').forEach((card) => {
      const text = card.querySelector('[data-testimonial-text]');
      const btn = card.querySelector('[data-testimonial-more]');
      if (!text || !btn) return;

      const p = text.querySelector('p');
      const checkClamp = () => {
        if (!p) {
          btn.hidden = true;
          return;
        }
        const wasExpanded = text.classList.contains('is-expanded');
        text.classList.remove('is-expanded');
        const needsMore = p.scrollHeight > p.clientHeight + 2;
        btn.hidden = !needsMore && !wasExpanded;
        if (wasExpanded) text.classList.add('is-expanded');
        btn.textContent = text.classList.contains('is-expanded') ? 'Read Less' : 'Read More';
      };

      btn.addEventListener('click', () => {
        const open = !text.classList.contains('is-expanded');
        text.classList.toggle('is-expanded', open);
        btn.textContent = open ? 'Read Less' : 'Read More';
      });

      checkClamp();
      window.addEventListener('resize', checkClamp);
    });
  });

  /* Sticky ATC visibility */
  const sticky = document.querySelector('[data-smooche-sticky-atc]');

  if (sticky) {
    document.body.classList.add('has-smooche-sticky-atc');
    const observerTarget = document.querySelector('.smooche-buy-box__atc') || document.querySelector('.smooche-buy-box');
    if (observerTarget && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          sticky.classList.toggle('is-visible', show);
        },
        { threshold: 0 }
      );
      io.observe(observerTarget);
    } else {
      sticky.classList.add('is-visible');
    }

    sticky.querySelectorAll('[data-sticky-shop-now]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const anchor = document.querySelector('[data-smooche-buy-anchor], .smooche-buy-box__form, .smooche-buy-box');
        if (!anchor) return;
        e.preventDefault();
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }
})();
