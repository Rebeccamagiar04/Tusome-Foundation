// Renders searchable, filterable Grade 10 subjects from TUSOME_DATA.

(function () {
  const D = window.TUSOME_DATA;
  const grid = document.getElementById("subjects-grid");
  const searchInput = document.getElementById("subject-search");
  const countEl = document.getElementById("subject-count");
  if (!D || !grid) return;

  let activePathway = "all";

  function render() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filtered = D.subjects.filter(function (s) {
      const matchesPath = activePathway === "all" || s.pathway === activePathway;
      const matchesQuery = !query || s.name.toLowerCase().includes(query);
      return matchesPath && matchesQuery;
    });

    if (countEl) {
      countEl.textContent = "Showing " + filtered.length + " of " + D.subjects.length + " listed subjects.";
    }

    grid.textContent = "";
    if (filtered.length === 0) {
      const p = document.createElement("p");
      p.textContent = "No subjects match your current filter. Try clearing your search or choosing All Subjects.";
      grid.appendChild(p);
      return;
    }

    filtered.forEach(function (s) {
      const card = document.createElement("article");
      card.className = "experience";

      const badge = document.createElement("span");
      badge.className = "tag";
      badge.textContent = D.tracks[s.track] || s.pathway;

      const h3 = document.createElement("h3");
      h3.textContent = s.icon + " " + s.name;
      h3.style.marginTop = "0.6rem";

      const p = document.createElement("p");
      p.textContent = s.availability || "Learning activities are being prepared.";

      const a = document.createElement("a");
      a.href = s.link || ("lesson.html?subject=" + encodeURIComponent(s.id));
      a.textContent = "Open learning →";

      card.appendChild(badge);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(a);
      grid.appendChild(card);
    });
  }

  document.querySelectorAll(".filter-bar .chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      activePathway = btn.dataset.pathway;
      document.querySelectorAll(".filter-bar .chip").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", render);
  }

  render();
})();
