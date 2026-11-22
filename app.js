// Mobile navigation menu controller for TUSOME.

(function () {
  const button = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  }

  button.addEventListener("click", function () {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
})();
