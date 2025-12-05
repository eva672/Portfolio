import { useEffect } from 'react';

// Lightweight debug helper: opt-in via URL query ?debug=overlay
// When enabled it will search for elements that likely cover the viewport
// (fixed/sticky/absolute and large bounding rect or very large z-index).
// It logs findings and — only when enabled — sets pointerEvents='none'
// and a visible outline so you can confirm whether the element is the culprit.
export default function OverlayDetector() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const enabled = params.get('debug') === 'overlay';

    // Helper to parse z-index numeric value from computed style
    const zIndexOf = (el) => {
      const z = window.getComputedStyle(el).zIndex;
      const n = parseInt(z, 10);
      return Number.isNaN(n) ? 0 : n;
    };

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const candidates = [];

    const all = Array.from(document.querySelectorAll('body *'));
    all.forEach((el) => {
      try {
        const cs = window.getComputedStyle(el);
        const pos = cs.position;
        if (!pos || (pos !== 'fixed' && pos !== 'absolute' && pos !== 'sticky')) return;

        const rect = el.getBoundingClientRect();
        // element covering large portion of viewport
        const covers = rect.width >= vw * 0.85 && rect.height >= vh * 0.85;
        const offscreen = rect.bottom < 0 || rect.top > vh || rect.right < 0 || rect.left > vw;
        const zi = zIndexOf(el);

        if (covers || zi >= 1000) {
          candidates.push({ el, rect, zIndex: zi, covers, offscreen });
        }
      } catch (e) {
        // ignore cross-origin or other inaccessible nodes
      }
    });

    if (candidates.length === 0) {
      console.info('[OverlayDetector] no large fixed/high-z elements found');
      return;
    }

    console.group('[OverlayDetector] found candidate overlay elements');
    candidates.forEach((c, i) => {
      // log brief info
      console.log(`candidate #${i + 1}: z-index=${c.zIndex}, covers=${c.covers}, offscreen=${c.offscreen}`, c.el);
    });
    console.groupEnd();

    if (!enabled) {
      console.info("[OverlayDetector] passively detected candidates. Re-open page with '?debug=overlay' to disable their pointer-events temporarily.");
      return;
    }

    console.warn('[OverlayDetector] debug=overlay active — disabling pointer events on candidates and adding red outline');
    const applied = [];
    candidates.forEach((c) => {
      const { el } = c;
      // store original inline style values so we can revert if needed
      const prev = {
        pointerEvents: el.style.pointerEvents || '',
        outline: el.style.outline || '',
      };
      applied.push({ el, prev });
      el.style.pointerEvents = 'none';
      el.style.outline = '3px solid rgba(255,0,0,0.85)';
    });

    // Keep the change for a short while so you can interact; revert after 30s
    const t = setTimeout(() => {
      applied.forEach((a) => {
        a.el.style.pointerEvents = a.prev.pointerEvents;
        a.el.style.outline = a.prev.outline;
      });
      console.info('[OverlayDetector] reverted pointer-events and outline after timeout');
    }, 30000);

    // cleanup if component unmounts
    return () => {
      clearTimeout(t);
      applied.forEach((a) => {
        try {
          a.el.style.pointerEvents = a.prev.pointerEvents;
          a.el.style.outline = a.prev.outline;
        } catch (e) {}
      });
    };
  }, []);

  return null;
}
