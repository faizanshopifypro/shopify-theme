(() => {
  const root = document.querySelector('[data-section-id].smooche-buy-box') || document.querySelector('.smooche-buy-box');
  if (!root) return;

  /* Gallery thumbs + arrows */
  const stage = root.querySelector('[data-gallery-stage] img, [data-gallery-stage] .smooche-buy-box__stage-img');
  const thumbs = [...root.querySelectorAll('[data-gallery-thumbs] [data-thumb-index]')];
  let activeIndex = Math.max(0, thumbs.findIndex((t) => t.classList.contains('is-active')));

  const setActiveThumb = (index) => {
    if (!thumbs.length) return;
    const next = (index + thumbs.length) % thumbs.length;
    const thumb = thumbs[next];
    const full = thumb.getAttribute('data-full-src');
    const srcset = thumb.getAttribute('data-srcset');
    const stageImg = root.querySelector('[data-gallery-stage] img');
    if (!stageImg || !full) return;

    stageImg.src = full;
    if (srcset) stageImg.srcset = srcset;
    activeIndex = next;

    thumbs.forEach((t, i) => {
      t.classList.toggle('is-active', i === next);
      if (i === next) t.setAttribute('aria-current', 'true');
      else t.removeAttribute('aria-current');
    });
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => setActiveThumb(index));
  });

  const prevBtn = root.querySelector('[data-gallery-prev]');
  const nextBtn = root.querySelector('[data-gallery-next]');
  if (prevBtn) prevBtn.addEventListener('click', () => setActiveThumb(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => setActiveThumb(activeIndex + 1));

  /* Quantity bundles */
  const qtyInput = root.querySelector('[data-smooche-qty]');
  const bundles = root.querySelectorAll('[data-bundle-option]');
  const propBundle = root.querySelector('[data-smooche-prop="bundle"]');
  const propDeal = root.querySelector('[data-smooche-prop="deal"]');
  const propPrice = root.querySelector('[data-smooche-prop="price"]');
  const priceSaleEl = root.querySelector('[data-smooche-price]');
  const priceCompareEl = root.querySelector('[data-smooche-compare]');

  const syncBundleProps = (option) => {
    const send = option.getAttribute('data-send-props') === 'true';
    const bundleLabel = option.getAttribute('data-prop-bundle') || '';
    const dealLabel = option.getAttribute('data-prop-deal') || '';
    const priceLabel = option.getAttribute('data-prop-price') || '';
    const compareLabel = option.querySelector('.smooche-bundle__compare')?.textContent?.trim() || '';

    [propBundle, propDeal, propPrice].forEach((input) => {
      if (!input) return;
      input.disabled = !send;
    });

    if (send) {
      if (propBundle) {
        propBundle.name = 'properties[2 bottles]';
        propBundle.value = bundleLabel;
      }
      if (propDeal) {
        propDeal.name = 'properties[Temporary deal]';
        propDeal.value = dealLabel;
      }
      if (propPrice) {
        /* Dynamic key so cart shows the exact selected price label */
        propPrice.name = `properties[${priceLabel}]`;
        propPrice.value = priceLabel;
      }
    }

    if (priceSaleEl && priceLabel) {
      priceSaleEl.textContent = priceLabel;
    }
    if (priceCompareEl && compareLabel) {
      priceCompareEl.textContent = compareLabel;
      priceCompareEl.hidden = false;
    }
  };

  bundles.forEach((option) => {
    const input = option.querySelector('input[type="radio"]');
    const apply = () => {
      bundles.forEach((o) => o.classList.toggle('is-selected', o === option));
      if (qtyInput) qtyInput.value = option.getAttribute('data-qty') || '1';
      syncBundleProps(option);
    };
    if (input) {
      input.addEventListener('change', apply);
      if (input.checked) apply();
    }
    option.addEventListener('click', () => {
      if (input && !input.checked) {
        input.checked = true;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  });

  /* Countdown — rolling window stored in sessionStorage */
  const countdown = root.querySelector('[data-smooche-countdown]');
  if (countdown) {
    const display = countdown.querySelector('[data-countdown-display]');
    const hours = Number(countdown.getAttribute('data-hours') || 6);
    const storageKey = 'smooche-countdown-end';
    let end = Number(sessionStorage.getItem(storageKey) || 0);
    const now = Date.now();

    if (!end || end <= now) {
      end = now + hours * 60 * 60 * 1000;
      sessionStorage.setItem(storageKey, String(end));
    }

    const pad = (n) => String(n).padStart(2, '0');

    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      const totalSec = Math.floor(diff / 1000);
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;
      if (display) display.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
      if (diff <= 0) {
        end = Date.now() + hours * 60 * 60 * 1000;
        sessionStorage.setItem(storageKey, String(end));
      }
    };

    tick();
    setInterval(tick, 1000);
  }

  /* Free shipping country label (best-effort, no geo API dependency) */
  const shipping = root.querySelector('[data-smooche-shipping]');
  if (shipping) {
    try {
      const locale = (Shopify && Shopify.country) || (navigator.language || 'US').slice(-2).toUpperCase();
      const code = (locale && locale.length === 2 ? locale : 'US').toUpperCase();
      const flags = {
        US: '🇺🇸',
        CA: '🇨🇦',
        GB: '🇬🇧',
        AU: '🇦🇺',
        PK: '🇵🇰',
        DE: '🇩🇪',
        FR: '🇫🇷',
        NL: '🇳🇱',
      };
      const flag = flags[code] || '📦';
      shipping.innerHTML = `${flag} <span class="shipping_usp">Free shipping to</span> <strong style="text-decoration:underline">${code}</strong>`;
    } catch (e) {
      /* keep fallback text */
    }
  }
})();
