// Renders real recorded progress and topics needing review on progress.html.

(function () {
  const S = window.TusomeStorage;
  if (!S) return;

  function render() {
    const state = S.load();
    const lessons = state.completedLessons || [];
    const attempts = state.attempts || [];
    const correctCount = attempts.filter(function (a) { return a.correct; }).length;
    const rate = attempts.length > 0 ? Math.round((correctCount / attempts.length) * 100) + "%" : "—";

    document.getElementById("prog-lessons").textContent = String(lessons.length);
    document.getElementById("prog-attempts").textContent = String(attempts.length);
    document.getElementById("prog-correct").textContent = String(correctCount);
    document.getElementById("prog-rate").textContent = rate;

    const lessonsList = document.getElementById("completed-lessons-list");
    lessonsList.textContent = "";
    if (lessons.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No lessons marked complete yet.";
      lessonsList.appendChild(li);
    } else {
      lessons.forEach(function (l) {
        const li = document.createElement("li");
        li.textContent = l.title + " (" + l.subject + ")";
        lessonsList.appendChild(li);
      });
    }

    const missedCounts = {};
    attempts.forEach(function (a) {
      if (!a.correct) {
        const key = a.topic || a.subject || "General topic";
        missedCounts[key] = (missedCounts[key] || 0) + 1;
      }
    });

    const reviewList = document.getElementById("review-topics-list");
    reviewList.textContent = "";
    const topics = Object.keys(missedCounts);
    if (topics.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No review topics flagged right now. Keep practising to build confidence.";
      reviewList.appendChild(li);
    } else {
      topics.forEach(function (topic) {
        const li = document.createElement("li");
        li.textContent = topic + " — " + missedCounts[topic] + " missed attempt(s)";
        reviewList.appendChild(li);
      });
    }
  }

  const resetBtn = document.getElementById("reset-progress-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      S.reset();
      render();
    });
  }

  render();
})();
