// Central data for TUSOME (Grade 10 pilot structure, English-only).
// Keep this file in the root folder alongside your HTML/CSS/JS files.

window.TUSOME_DATA = {
  pathways: [
    { id: "core", title: "Core Subjects" },
    { id: "stem", title: "STEM" }
  ],

  tracks: { core: "Core Subject", pure: "STEM" },

  notes: {
    "note.maths": "Mathematics learning with dynamic questions, worked steps, and interactive feedback."
  },

  // TUSOME's current Grade 10 pilot is limited to these five subjects.
  subjects: [
    { id: "english", name: "English", icon: "📖", pathway: "core", track: "core", link: "lesson.html?subject=english", availability: "Guided lesson and practice questions" },
    { id: "maths", name: "Mathematics", icon: "📐", pathway: "stem", track: "pure", noteKey: "note.maths", link: "mathematics.html", availability: "Interactive questions, hints, and worked solutions" },
    { id: "biology", name: "Biology", icon: "🧬", pathway: "stem", track: "pure", link: "lesson.html?subject=biology", availability: "Guided lesson and practice questions" },
    { id: "chemistry", name: "Chemistry", icon: "⚗️", pathway: "stem", track: "pure", link: "lesson.html?subject=chemistry", availability: "Guided lesson and practice questions" },
    { id: "physics", name: "Physics", icon: "⚡", pathway: "stem", track: "pure", link: "lesson.html?subject=physics", availability: "Introductory guided lesson and practice" }
  ],

  getSubject: function (id) {
    return this.subjects.find(function (s) { return s.id === id; }) || null;
  },

  inPathway: function (pathwayId) {
    return this.subjects.filter(function (s) { return s.pathway === pathwayId; });
  },

  tracksOf: function (pathwayId) {
    const seen = [];
    this.inPathway(pathwayId).forEach(function (s) {
      if (seen.indexOf(s.track) === -1) seen.push(s.track);
    });
    return seen;
  }
};
