(() => {
  document.querySelectorAll('[data-smooche-ingredients]').forEach((root) => {
    const track = root.querySelector('[data-ingredients-track]');
    const prev = root.querySelector('[data-ingredients-prev]');
    const next = root.querySelector('[data-ingredients-next]');
    const progress = root.querySelector('[data-ingredients-progress]');
    if (!track) return;

    const update = () => {
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
      const card = track.querySelector('.smooche-ingredients__slide');
      const amount = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.85;
      track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    prev?.addEventListener('click', () => scrollByCard(-1));
    next?.addEventListener('click', () => scrollByCard(1));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();
