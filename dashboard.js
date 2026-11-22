// Renders real saved profile, subjects, and activity on dashboard.html.

(function () {
  const D = window.TUSOME_DATA;
  const S = window.TusomeStorage;
  if (!D || !S) return;

  const state = S.load();
  const profile = state.profile || {};

  const welcomeEl = document.getElementById("dash-welcome");
  if (welcomeEl) {
    const label = profile.name ? profile.name : "learner";
    welcomeEl.textContent = "Welcome, " + label + "! Ready to discover something new today?";
  }

  const lessonsCount = state.completedLessons.length;
  const attemptsCount = state.attempts.length;
  const correctCount = state.attempts.filter(function (a) { return a.correct; }).length;
  const accuracy = attemptsCount > 0 ? Math.round((correctCount / attemptsCount) * 100) + "%" : "—";
  const subjectIds = profile.selectedSubjects || [];

  const statLessons = document.getElementById("stat-lessons");
  const statAttempts = document.getElementById("stat-attempts");
  const statAccuracy = document.getElementById("stat-accuracy");
  const statSubjects = document.getElementById("stat-subjects");
  if (statLessons) statLessons.textContent = String(lessonsCount);
  if (statAttempts) statAttempts.textContent = String(attemptsCount);
  if (statAccuracy) statAccuracy.textContent = accuracy;
  if (statSubjects) statSubjects.textContent = String(subjectIds.length);

  const continueText = document.getElementById("continue-text");
  const continueLink = document.getElementById("continue-link");
  if (state.lastItem && continueText && continueLink) {
    continueText.textContent = "Last visited: " + state.lastItem.title + " (" + state.lastItem.subject + ")";
    continueLink.href = state.lastItem.url || "mathematics.html";
    continueLink.textContent = "Resume: " + state.lastItem.title;
  }

  const grid = document.getElementById("my-subjects-grid");
  if (grid) {
    grid.textContent = "";
    if (subjectIds.length === 0) {
      const p = document.createElement("p");
      p.textContent = "No subjects selected yet. Choose your subjects during setup to see them here.";
      grid.appendChild(p);
    } else {
      subjectIds.forEach(function (id) {
        const subj = D.getSubject(id);
        if (!subj) return;

        const card = document.createElement("article");
        card.className = "experience";

        const h3 = document.createElement("h3");
        h3.textContent = subj.icon + " " + subj.name;

        const p = document.createElement("p");
        p.textContent = "Pathway: " + (D.tracks[subj.track] || subj.pathway);

        const a = document.createElement("a");
        a.href = subj.link || ("subject-detail.html?id=" + encodeURIComponent(subj.id));
        a.textContent = "Open learning space →";

        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(a);
        grid.appendChild(card);
      });
    }
  }

  const activityList = document.getElementById("recent-activity-list");
  if (activityList) {
    activityList.textContent = "";
    if (state.recentActivity.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No activities recorded yet. Open a lesson or try an interactive math question to begin.";
      activityList.appendChild(li);
    } else {
      state.recentActivity.slice(0, 8).forEach(function (item) {
        const li = document.createElement("li");
        const when = new Date(item.timestamp).toLocaleDateString();
        li.textContent = item.title + " — " + item.subject + " (" + when + ")";
        activityList.appendChild(li);
      });
    }
  }
})();
