// ---------------------------------------------------------------------------
// reveal.js — lightweight scroll-reveal for ORDER.NOTARIS.
// No dependencies. Progressive enhancement: if this script fails to run,
// every element is already visible by default (see .reveal in main.css),
// so nothing is ever permanently hidden.
//
// Behaviour:
//  - Elements already inside the viewport when the page loads are left
//    alone (no animation, no flash of invisible content).
//  - Elements below the fold fade + slide in the first time they scroll
//    into view, then stay visible (no re-hiding on scroll back up).
//  - Cards/items that share a parent (grids, lists) get a small staggered
//    delay so groups cascade in rather than popping in all at once.
//  - Respects prefers-reduced-motion.
// ---------------------------------------------------------------------------
(function () {
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var SELECTORS = [
    "main > section",
    ".pillar-card",
    ".pillar-photo",
    ".editorial-item",
    ".article-card",
    ".service-card",
    ".academy-card",
    ".resource-card",
    ".service-row",
    ".stat-box",
    ".numbered-item",
    ".philosophy-item",
  ].join(", ");

  var els = Array.prototype.slice.call(document.querySelectorAll(SELECTORS));
  if (!els.length) return;

  var vh = window.innerHeight || document.documentElement.clientHeight;
  var toObserve = [];
  var siblingIndex = new WeakMap();

  els.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    var alreadyVisible = rect.top < vh && rect.bottom > 0 && rect.height > 0;
    if (alreadyVisible) return; // nothing to animate — it's already on screen

    el.classList.add("reveal");

    // Stagger cards/items sharing a parent so groups cascade in rather than
    // popping in at once — capped at ~30ms/item and a ~200ms total budget
    // (VectorLab UI/UX Skills: interaction/transitions) so it reads as quick
    // and deliberate, not a slow theatrical cascade.
    var parent = el.parentElement;
    var idx = siblingIndex.has(parent) ? siblingIndex.get(parent) + 1 : 0;
    siblingIndex.set(parent, idx);
    if (idx > 0) el.style.transitionDelay = Math.min(idx * 30, 200) + "ms";

    toObserve.push(el);
  });

  if (!toObserve.length) return;

  if (!("IntersectionObserver" in window)) {
    toObserve.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  toObserve.forEach(function (el) {
    observer.observe(el);
  });
})();
