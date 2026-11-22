// Subject detail page controller (subject-detail.html?id=biology).

(function () {
  const D = window.TUSOME_DATA;
  if (!D) return;

  const id = new URLSearchParams(location.search).get("id");
  const subject = D.getSubject(id);

  const detailEl = document.getElementById("detail");
  const notFoundEl = document.getElementById("notfound");

  if (!subject) {
    if (notFoundEl) notFoundEl.hidden = false;
    return;
  }

  document.title = subject.name + " - TUSOME";
  const iconEl = document.getElementById("detail-icon");
  const nameEl = document.getElementById("detail-name");
  if (iconEl) iconEl.textContent = subject.icon;
  if (nameEl) nameEl.textContent = subject.name;

  const pathway = D.pathways.find(function (p) { return p.id === subject.pathway; });
  const badgePathway = document.getElementById("badge-pathway");
  const badgeTrack = document.getElementById("badge-track");
  if (badgePathway && pathway) badgePathway.textContent = pathway.title;
  if (badgeTrack) badgeTrack.textContent = D.tracks[subject.track] || subject.track;

  const noteEl = document.getElementById("detail-note");
  if (subject.noteKey && D.notes && D.notes[subject.noteKey] && noteEl) {
    noteEl.textContent = D.notes[subject.noteKey];
    noteEl.hidden = false;
  }

  const cardSoon = document.getElementById("card-soon");
  const cardLive = document.getElementById("card-live");
  const openLink = document.getElementById("open-link");
  if (subject.link && cardLive && openLink) {
    if (cardSoon) cardSoon.hidden = true;
    cardLive.hidden = false;
    openLink.href = subject.link;
  }

  const siblings = D.subjects.filter(function (s) {
    return s.track === subject.track && s.id !== subject.id;
  });

  const moreSection = document.getElementById("more");
  const moreList = document.getElementById("more-list");
  if (siblings.length > 0 && moreSection && moreList) {
    moreList.textContent = "";
    siblings.forEach(function (s) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "subject-card";
      a.href = "subject-detail.html?id=" + encodeURIComponent(s.id);

      const icon = document.createElement("span");
      icon.className = "subject-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = s.icon;

      const name = document.createElement("span");
      name.className = "subject-name";
      name.textContent = s.name;

      a.appendChild(icon);
      a.appendChild(name);
      li.appendChild(a);
      moreList.appendChild(li);
    });
    moreSection.hidden = false;
  }

  if (detailEl) detailEl.hidden = false;
})();
