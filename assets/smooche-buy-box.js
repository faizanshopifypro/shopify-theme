(() => {
  const root = document.querySelector('[data-section-id].smooche-buy-box') || document.querySelector('.smooche-buy-box');
  if (!root) return;

  /* Gallery thumbs + arrows */
  const thumbs = [...root.querySelectorAll('[data-gallery-thumbs] [data-thumb-index]')];
  const thumbsTrack = root.querySelector('[data-gallery-thumbs]');
  let activeIndex = Math.max(0, thumbs.findIndex((t) => t.classList.contains('is-active')));
  let dragMoved = false;

  const setActiveThumb = (index) => {
    if (!thumbs.length) return;
    const next = ((index % thumbs.length) + thumbs.length) % thumbs.length;
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

    if (typeof thumb.scrollIntoView === 'function') {
      thumb.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
    }
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', (e) => {
      if (dragMoved) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      setActiveThumb(index);
    });
  });

  const prevBtn = root.querySelector('[data-gallery-prev]');
  const nextBtn = root.querySelector('[data-gallery-next]');
  if (prevBtn) prevBtn.addEventListener('click', () => setActiveThumb(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => setActiveThumb(activeIndex + 1));

  /* Drag-to-scroll thumbs without blocking thumb clicks */
  if (thumbsTrack) {
    let pointerId = null;
    let startX = 0;
    let startScroll = 0;
    const DRAG_THRESHOLD = 8;

    thumbsTrack.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerId = e.pointerId;
      dragMoved = false;
      startX = e.clientX;
      startScroll = thumbsTrack.scrollLeft;
    });

    thumbsTrack.addEventListener('pointermove', (e) => {
      if (pointerId !== e.pointerId) return;
      const dx = e.clientX - startX;
      if (!dragMoved && Math.abs(dx) < DRAG_THRESHOLD) return;

      if (!dragMoved) {
        dragMoved = true;
        try {
          thumbsTrack.setPointerCapture(e.pointerId);
        } catch (err) {
          /* ignore */
        }
      }

      thumbsTrack.scrollLeft = startScroll - dx;
      e.preventDefault();
    });

    const endDrag = (e) => {
      if (pointerId !== null && e && e.pointerId !== pointerId) return;
      pointerId = null;
      /* Keep dragMoved true through the following click event, then clear */
      if (dragMoved) {
        window.setTimeout(() => {
          dragMoved = false;
        }, 0);
      }
    };

    thumbsTrack.addEventListener('pointerup', endDrag);
    thumbsTrack.addEventListener('pointercancel', endDrag);
    thumbsTrack.addEventListener('lostpointercapture', endDrag);
  }

  /* Quantity option → variant id (qty always stays 1) */
  const qtyInput = root.querySelector('[data-smooche-qty]');
  const variantInput = root.querySelector('[data-smooche-variant-input]');
  const bundles = root.querySelectorAll('[data-bundle-option]');
  const giftProps = [...root.querySelectorAll('[data-smooche-gift-prop]')];
  const priceSaleEl = root.querySelector('[data-smooche-price]');
  const priceCompareEl = root.querySelector('[data-smooche-compare]');
  const atcBtn = root.querySelector('[data-smooche-atc]');
  const atcLabel = root.querySelector('[data-smooche-atc-label]');
  const atcDefaultLabel = atcLabel?.textContent?.trim() || 'Add to Cart';
  const soldOutLabel = (window.variantStrings && window.variantStrings.soldOut) || 'Sold Out';

  const applyBundle = (option) => {
    bundles.forEach((o) => o.classList.toggle('is-selected', o === option));

    if (qtyInput) qtyInput.value = '1';

    const variantId = option.getAttribute('data-variant-id');
    const available = option.getAttribute('data-variant-available') !== 'false';
    const sendGifts = option.getAttribute('data-send-gifts') === 'true';
    const priceLabel = option.getAttribute('data-price-label') || '';
    const compareLabel = option.getAttribute('data-compare-label') || '';

    if (variantInput && variantId) {
      variantInput.value = variantId;
      variantInput.disabled = !available;
    }

    giftProps.forEach((input) => {
      input.disabled = !sendGifts;
    });

    if (priceSaleEl && priceLabel) {
      priceSaleEl.textContent = priceLabel;
    }

    if (priceCompareEl) {
      if (compareLabel) {
        priceCompareEl.textContent = compareLabel;
        priceCompareEl.hidden = false;
        priceCompareEl.style.display = '';
      } else {
        priceCompareEl.hidden = true;
        priceCompareEl.style.display = 'none';
      }
    }

    if (atcBtn) {
      atcBtn.disabled = !available;
    }
    if (atcLabel) {
      atcLabel.textContent = available ? atcDefaultLabel : soldOutLabel;
    }
  };

  bundles.forEach((option) => {
    const input = option.querySelector('input[type="radio"]');
    if (input) {
      input.addEventListener('change', () => applyBundle(option));
      if (input.checked) applyBundle(option);
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
