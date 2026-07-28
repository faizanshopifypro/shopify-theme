(() => {
  const bindAccordions = (root) => {
    root.querySelectorAll('[data-smooche-accordion]').forEach((item) => {
      if (item.dataset.smoocheBound === '1') return;
      item.dataset.smoocheBound = '1';
      const trigger = item.querySelector('[data-smooche-accordion-trigger]');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');
        const group = item.closest('[data-smooche-accordions]');
        if (group && willOpen) {
          group.querySelectorAll('[data-smooche-accordion].is-open').forEach((openItem) => {
            if (openItem !== item) {
              openItem.classList.remove('is-open');
              const btn = openItem.querySelector('[data-smooche-accordion-trigger]');
              if (btn) btn.setAttribute('aria-expanded', 'false');
            }
          });
        }
        item.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });
  };

  const bindModals = (root) => {
    root.querySelectorAll('[data-smooche-modal-open]').forEach((btn) => {
      if (btn.dataset.smoocheBound === '1') return;
      btn.dataset.smoocheBound = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-smooche-modal-open');
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.add('is-open');
        document.documentElement.style.overflow = 'hidden';
      });
    });

    root.querySelectorAll('[data-smooche-modal]').forEach((modal) => {
      if (modal.dataset.smoocheBound === '1') return;
      modal.dataset.smoocheBound = '1';
      modal.querySelectorAll('[data-smooche-modal-close]').forEach((el) => {
        el.addEventListener('click', () => {
          modal.classList.remove('is-open');
          document.documentElement.style.overflow = '';
        });
      });
    });
  };

  document.querySelectorAll('.smooche-buy-box, .smooche-phase3-section').forEach((root) => {
    bindAccordions(root);
    bindModals(root);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('[data-smooche-modal].is-open').forEach((modal) => {
      modal.classList.remove('is-open');
      document.documentElement.style.overflow = '';
    });
  });
})();
