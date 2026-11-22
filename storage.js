// Shared local state for TUSOME (English-only, flat-folder ready).
// Tracks Grade 10 learner profile, selected subjects, completed lessons,
// practice/math attempts, and recent learning activity.

(function () {
  const STORAGE_KEY = "tusome_state_v1";

  const DEFAULT_STATE = {
    profile: {
      name: "",
      grade: "10",
      pathway: "stem",
      selectedSubjects: [],
      onboarded: false
    },
    completedLessons: [],
    attempts: [],
    recentActivity: [],
    lastItem: null
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return cloneDefault();
      const parsed = JSON.parse(raw);
      return {
        profile: Object.assign({}, DEFAULT_STATE.profile, parsed.profile || {}),
        completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
        attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
        recentActivity: Array.isArray(parsed.recentActivity) ? parsed.recentActivity : [],
        lastItem: parsed.lastItem || null
      };
    } catch (e) {
      return cloneDefault();
    }
  }

  function cloneDefault() {
    return {
      profile: Object.assign({}, DEFAULT_STATE.profile, {
        selectedSubjects: DEFAULT_STATE.profile.selectedSubjects.slice()
      }),
      completedLessons: [],
      attempts: [],
      recentActivity: [],
      lastItem: null
    };
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // Ignore storage quota or private-mode errors
    }
  }

  function saveProfile(updates) {
    const state = loadState();
    state.profile = Object.assign({}, state.profile, updates, {
      grade: "10",
      onboarded: true
    });
    saveState(state);
    return state;
  }

  function recordActivity(entry) {
    const state = loadState();
    const item = {
      id: entry.id || String(Date.now()),
      title: entry.title || "Learning activity",
      subject: entry.subject || "General",
      type: entry.type || "activity",
      url: entry.url || "dashboard.html",
      correct: typeof entry.correct === "boolean" ? entry.correct : null,
      topic: entry.topic || entry.subject || "General",
      timestamp: new Date().toISOString()
    };

    state.lastItem = {
      title: item.title,
      subject: item.subject,
      url: item.url,
      type: item.type
    };

    state.recentActivity.unshift(item);
    if (state.recentActivity.length > 15) {
      state.recentActivity = state.recentActivity.slice(0, 15);
    }

    if (entry.markLessonComplete && entry.lessonKey) {
      const exists = state.completedLessons.some(function (l) {
        return l.key === entry.lessonKey;
      });
      if (!exists) {
        state.completedLessons.push({
          key: entry.lessonKey,
          title: item.title,
          subject: item.subject,
          completedAt: item.timestamp
        });
      }
    }

    if (entry.recordAttempt) {
      state.attempts.push({
        title: item.title,
        subject: item.subject,
        topic: item.topic,
        correct: Boolean(entry.correct),
        timestamp: item.timestamp
      });
    }

    saveState(state);
    return state;
  }

  function resetState() {
    const fresh = cloneDefault();
    saveState(fresh);
    return fresh;
  }

  window.TusomeStorage = {
    load: loadState,
    save: saveState,
    saveProfile: saveProfile,
    recordActivity: recordActivity,
    reset: resetState
  };
})();
