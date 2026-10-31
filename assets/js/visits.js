/* The visitor total, in the footer of every page.

   GoatCounter's public counter returns {"count": "123"} and allows any origin.
   If the site owner has not enabled public counts, the request returns 403 and
   the line stays hidden — a missing number is better than a broken one.

   Nothing is stored in the browser here; this only reads a total. */
(function () {
  function fill() {
    var box = document.querySelector(".visits");
    var num = document.querySelector(".visits-n");
    if (!box || !num) return;
    fetch("https://monan.goatcounter.com/counter/TOTAL.json", { mode: "cors", cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j || j.count === undefined) return;
        var n = Number(j.count);
        if (!isFinite(n)) return;
        num.textContent = n.toLocaleString("en-US");
        box.hidden = false;
      })
      .catch(function () {});
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill);
  else fill();
})();
