/* The visitor total, in the footer of every page.

   Two sources, in this order:

   1. data/visits.json — a same-origin file updated daily by a scheduled
      workflow. It cannot be blocked by an ad blocker, so the number is always
      visible, at most a day old.
   2. GoatCounter's live total, when the browser allows it. If it answers, the
      fresher number replaces the baked one.

   A blocked request is not an error to show the reader: the chip simply keeps
   whatever it already has, and stays hidden only if it has nothing. */
(function () {
  function render(n) {
    var box = document.querySelector(".visits");
    var num = document.querySelector(".visits-n");
    if (!box || !num || !isFinite(n)) return false;
    num.textContent = Number(n).toLocaleString("en-US");
    box.hidden = false;
    return true;
  }

  function live() {
    fetch("https://monan.goatcounter.com/counter/TOTAL.json", { mode: "cors", cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (j && j.count !== undefined) render(Number(j.count)); })
      .catch(function () { /* blocked or offline — the baked number stands */ });
  }

  /* The baked file sits at the site root; this script lives in assets/js/, so the
     path is taken from the script's own URL. That way the same file works on the
     guide, on /roads.html, and two levels down on a directory page. */
  function bakedUrl() {
    var el = document.currentScript || document.querySelector('script[src*="visits.js"]');
    try { return new URL("../../data/visits.json", el ? el.src : location.href).href; }
    catch (e) { return "data/visits.json"; }
  }

  function start() {
    fetch(bakedUrl(), { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        var shown = j && j.count !== undefined ? render(Number(j.count)) : false;
        if (!shown) live();      // nothing baked: try the live total only
        else live();             // baked shown: refresh it if the browser allows
      })
      .catch(function () { live(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
