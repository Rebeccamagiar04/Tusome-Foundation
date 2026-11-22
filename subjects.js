// Renders the selected Grade 10 pilot subjects with KICD strand/topic references.
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
      const curriculum = D.curriculum[s.id];
      const topicText = curriculum ? curriculum.strands.map(function (x) { return x.name + " " + x.topics.join(" "); }).join(" ") : "";
      const matchesQuery = !query || (s.name + " " + topicText).toLowerCase().includes(query);
      return matchesPath && matchesQuery;
    });

    if (countEl) countEl.textContent = "Showing " + filtered.length + " of " + D.subjects.length + " pilot subjects.";
    grid.textContent = "";
    if (!filtered.length) {
      const p = document.createElement("p");
      p.textContent = "No subjects or topics match your search. Try another keyword or clear the search.";
      grid.appendChild(p);
      return;
    }

    filtered.forEach(function (s) {
      const card = document.createElement("article");
      card.className = "experience";
      const curriculum = D.curriculum[s.id];

      const badge = document.createElement("span");
      badge.className = "tag";
      badge.textContent = D.tracks[s.track] || s.pathway;
      const h3 = document.createElement("h3");
      h3.textContent = s.icon + " " + s.name;
      h3.style.marginTop = "0.6rem";
      const p = document.createElement("p");
      p.textContent = s.availability || "Learning activities are being prepared.";
      card.appendChild(badge);
      card.appendChild(h3);
      card.appendChild(p);

      if (curriculum) {
        const details = document.createElement("details");
        details.className = "curriculum-topics";
        const summary = document.createElement("summary");
        summary.textContent = "Explore Grade 10 strands and topics";
        details.appendChild(summary);
        curriculum.strands.forEach(function (strand) {
          const section = document.createElement("section");
          const heading = document.createElement("h4");
          heading.textContent = strand.name;
          const list = document.createElement("ul");
          strand.topics.forEach(function (topic) {
            const item = document.createElement("li");
            item.textContent = topic;
            list.appendChild(item);
          });
          section.appendChild(heading);
          section.appendChild(list);
          details.appendChild(section);
        });
        const source = document.createElement("p");
        source.className = "curriculum-source";
        source.textContent = curriculum.source + ". Topic labels are based on the KICD design; learning activities are being developed progressively.";
        details.appendChild(source);
        const officialLink = document.createElement("a");
        officialLink.href = D.curriculumSource;
        officialLink.target = "_blank";
        officialLink.rel = "noopener noreferrer";
        officialLink.textContent = "View official KICD curriculum designs";
        details.appendChild(officialLink);
        card.appendChild(details);
      }

      const a = document.createElement("a");
      a.href = s.link || ("lesson.html?subject=" + encodeURIComponent(s.id));
      a.textContent = s.id === "maths" ? "Explore course and practice →" : "Open course map →";
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
  if (searchInput) searchInput.addEventListener("input", render);
  render();
})();
