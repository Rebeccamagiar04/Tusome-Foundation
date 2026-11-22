// Handles Grade 10 onboarding and subject selection.

(function () {
  const D = window.TUSOME_DATA;
  const S = window.TusomeStorage;
  const form = document.getElementById("onboarding-form");
  if (!D || !S || !form) return;

  const state = S.load();
  const nameInput = document.getElementById("learner-name");
  const pathwaySelect = document.getElementById("learner-pathway");
  const choicesContainer = document.getElementById("subject-choices");
  const errorEl = document.getElementById("onboarding-error");

  let selectedSet = new Set(state.profile.selectedSubjects || []);
  let activeFilter = "all";

  if (state.profile.name) nameInput.value = state.profile.name;
  if (state.profile.pathway) pathwaySelect.value = state.profile.pathway;

  function renderChoices() {
    choicesContainer.textContent = "";
    const filtered = activeFilter === "all"
      ? D.subjects
      : D.inPathway(activeFilter);

    filtered.forEach(function (subj) {
      const label = document.createElement("label");
      label.className = "choice-card" + (selectedSet.has(subj.id) ? " is-selected" : "");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = subj.id;
      checkbox.checked = selectedSet.has(subj.id);

      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          selectedSet.add(subj.id);
          label.classList.add("is-selected");
        } else {
          selectedSet.delete(subj.id);
          label.classList.remove("is-selected");
        }
      });

      const icon = document.createElement("span");
      icon.className = "choice-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = subj.icon;

      const textWrap = document.createElement("span");
      textWrap.className = "choice-text";

      const title = document.createElement("strong");
      title.textContent = subj.name;

      const meta = document.createElement("small");
      meta.textContent = D.tracks[subj.track] || subj.pathway;

      textWrap.appendChild(title);
      textWrap.appendChild(meta);

      label.appendChild(checkbox);
      label.appendChild(icon);
      label.appendChild(textWrap);
      choicesContainer.appendChild(label);
    });
  }

  document.querySelectorAll(".filter-bar .chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll(".filter-bar .chip").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      renderChoices();
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const chosen = Array.from(selectedSet);

    if (chosen.length === 0) {
      errorEl.textContent = "Please choose at least one subject to set up your dashboard.";
      errorEl.className = "feedback is-wrong";
      errorEl.hidden = false;
      return;
    }

    errorEl.hidden = true;
    const cleanName = nameInput.value.trim();

    S.saveProfile({
      name: cleanName,
      grade: "10",
      pathway: pathwaySelect.value,
      selectedSubjects: chosen
    });

    S.recordActivity({
      id: "onboarding-" + Date.now(),
      title: "Completed Grade 10 learning setup",
      subject: "Setup",
      type: "onboarding",
      url: "dashboard.html"
    });

    window.location.href = "dashboard.html";
  });

  renderChoices();
})();
