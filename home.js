// Populates pathway panels on the home page using TUSOME_DATA.

(function () {
  const D = window.TUSOME_DATA;
  if (!D) return;

  document.querySelectorAll(".path-panel").forEach(function (panel) {
    const pathwayId = panel.dataset.pathway;
    const countEl = panel.querySelector(".count-n");
    const list = panel.querySelector(".track-list");

    if (countEl) {
      countEl.textContent = D.inPathway(pathwayId).length;
    }

    if (list) {
      list.textContent = "";
      D.tracksOf(pathwayId).forEach(function (trackId) {
        const li = document.createElement("li");
        li.textContent = D.tracks[trackId] || trackId;
        list.appendChild(li);
      });
    }
  });
})();
