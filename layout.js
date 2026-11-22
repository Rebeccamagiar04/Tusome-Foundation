// Builds the header (navigation) and footer that appear on EVERY page,
// so we write them once instead of copying them into each HTML file.
//
// Depends on: js/data.js (for the Subjects menu).
// Each page must contain <div id="site-header"></div> and <div id="site-footer"></div>.
// Loads BEFORE js/language.js, which then translates the text we create here.

(function () {
  const D = window.TUSOME_DATA;
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");

  const LOGO = '<svg class="logo" viewBox="0 0 48 48" aria-hidden="true">' +
    '<rect width="48" height="48" rx="12" fill="#2457D6"/>' +
    '<path d="M10 16c5-2 10-1 14 2v18c-4-3-9-4-14-2z" fill="#fff"/>' +
    '<path d="M38 16c-5-2-10-1-14 2v18c4-3 9-4 14-2z" fill="#EFF5FF"/>' +
    '<path d="M33 5l1.8 4.2L39 11l-4.2 1.8L33 17l-1.8-4.2L27 11l4.2-1.8z" fill="#FF8A00"/>' +
    '</svg>';

  // ---------- HEADER ----------
  if (headerSlot) {
    headerSlot.innerHTML =
      '<a class="skip-link" href="#main" data-i18n="skip.link">Skip to content</a>' +
      '<header class="site-header">' +
        '<div class="container header-inner">' +
          '<a class="brand" href="index.html" aria-label="Tusome home">' + LOGO +
            '<span class="brand-name">Tusome</span></a>' +
          '<button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" ' +
            'aria-controls="site-nav" data-i18n="nav.menu">Menu</button>' +
          '<nav class="site-nav" id="site-nav" aria-label="Main">' +
            '<ul class="nav-list">' +
              '<li><a href="index.html" data-page="index.html" data-i18n="nav.home">Home</a></li>' +
              '<li class="has-menu"><details id="subjects-menu">' +
                '<summary data-i18n="nav.subjects">Subjects</summary>' +
                '<div class="mega" id="mega"></div>' +
              '</details></li>' +
              '<li><a href="index.html#how" data-i18n="nav.how">How it works</a></li>' +
            '</ul>' +
            '<div class="nav-tools">' +
              '<div class="tool">' +
                '<label for="grade-select" class="sr-only" data-i18n="grade.label">Grade</label>' +
                '<select id="grade-select">' +
                  '<option value="10" data-i18n="grade.10">Grade 10</option>' +
                  '<option value="11" data-i18n="grade.11">Grade 11 (coming later)</option>' +
                  '<option value="12" data-i18n="grade.12">Grade 12 (coming later)</option>' +
                '</select>' +
              '</div>' +
              '<div class="tool">' +
                '<label for="lang-select" class="sr-only" data-i18n="lang.label">Language</label>' +
                '<select id="lang-select">' +
                  '<option value="en">English</option>' +
                  '<option value="sw">Kiswahili</option>' +
                '</select>' +
              '</div>' +
            '</div>' +
          '</nav>' +
        '</div>' +
        '<p class="notice" id="grade-notice" role="status" hidden data-i18n="grade.notice"></p>' +
      '</header>';

    buildSubjectsMenu();
    setupMobileMenu();
    setupGradeSwitch();
    markCurrentPage();
  }

  // The Subjects menu lists EVERY subject, grouped by pathway.
  function buildSubjectsMenu() {
    const mega = document.getElementById("mega");
    D.pathways.forEach(function (pw) {
      const group = document.createElement("div");
      group.className = "mega-group";

      const heading = document.createElement("p");
      heading.className = "mega-title";
      heading.dataset.i18n = pw.key;
      group.appendChild(heading);

      const list = document.createElement("ul");
      D.inPathway(pw.id).forEach(function (s) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "subject-detail.html?id=" + encodeURIComponent(s.id);
        a.textContent = s.name;
        li.appendChild(a);
        list.appendChild(li);
      });
      group.appendChild(list);
      mega.appendChild(group);
    });

    const all = document.createElement("a");
    all.className = "mega-all";
    all.href = "subjects.html";
    all.dataset.i18n = "nav.all";
    mega.appendChild(all);
  }

  // Phone menu: the button shows and hides the navigation.
  function setupMobileMenu() {
    const button = document.getElementById("menu-toggle");
    const nav = document.getElementById("site-nav");
    const menu = document.getElementById("subjects-menu");

    function setOpen(open) {
      nav.classList.toggle("open", open);
      button.setAttribute("aria-expanded", String(open));   // tells screen readers the state
      if (!open) menu.removeAttribute("open");
    }

    button.addEventListener("click", function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    // Escape closes menus (helps keyboard users)
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        menu.removeAttribute("open");
        if (button.getAttribute("aria-expanded") === "true") setOpen(false);
      }
    });

    // Clicking outside the Subjects menu closes it
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target)) menu.removeAttribute("open");
    });
  }

  // Only Grade 10 is ready. Choosing another grade explains this and goes back to Grade 10.
  function setupGradeSwitch() {
    const select = document.getElementById("grade-select");
    const notice = document.getElementById("grade-notice");
    let timer = null;

    select.addEventListener("change", function () {
      if (select.value !== "10") {
        select.value = "10";
        notice.hidden = false;
        clearTimeout(timer);
        timer = setTimeout(function () { notice.hidden = true; }, 8000);
      }
    });
  }

  // Mark the link of the page we are on (screen readers announce "current page")
  function markCurrentPage() {
    const file = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-page]").forEach(function (a) {
      if (a.dataset.page === file) a.setAttribute("aria-current", "page");
    });
  }

  // ---------- FOOTER ----------
  if (footerSlot) {
    footerSlot.innerHTML =
      '<footer class="site-footer">' +
        '<div class="container footer-grid">' +
          '<div>' +
            '<p class="footer-brand">Tusome</p>' +
            '<p data-i18n="footer.tagline">Understand more. Achieve more.</p>' +
            '<p data-i18n="footer.brand">Let\'s learn, explore and grow together.</p>' +
          '</div>' +
          '<div>' +
            '<p class="footer-heading" data-i18n="footer.links">Links</p>' +
            '<ul class="footer-links">' +
              '<li><a href="index.html" data-i18n="nav.home">Home</a></li>' +
              '<li><a href="subjects.html" data-i18n="nav.subjects">Subjects</a></li>' +
              '<li><a href="https://kicd.ac.ke/cbc-materials/curriculum-designs/senior-school-designs/" ' +
                'target="_blank" rel="noopener" data-i18n="footer.kicd">KICD Senior School curriculum designs</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="container"><p class="footer-note" data-i18n="footer.note">' +
          'Tusome is a student project and is not officially approved by KICD.</p></div>' +
      '</footer>';
  }
})();
