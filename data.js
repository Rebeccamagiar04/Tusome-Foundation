// Central data for TUSOME (Grade 10 pilot structure, English-only).
// Keep this file in the root folder alongside your HTML/CSS/JS files.

window.TUSOME_DATA = {
  pathways: [
    { id: "core", title: "Core Subjects" },
    { id: "stem", title: "STEM" },
    { id: "social", title: "Social Sciences" },
    { id: "arts", title: "Arts and Sports Science" }
  ],

  tracks: {
    core: "Core Subjects",
    pure: "Pure Sciences",
    applied: "Applied Sciences",
    technical: "Technical Studies",
    humbiz: "Humanities and Business",
    lang: "Languages and Literature",
    arts: "Arts",
    sports: "Sports"
  },

  notes: {
    "note.essmaths": "Essential Mathematics supports learners who need practical numeracy alongside their chosen pathway.",
    "note.maths": "Mathematics is designed for learners pursuing STEM pathways requiring strong analytical and quantitative foundations."
  },

  subjects: [
    // Core subjects
    { id: "english", name: "English", icon: "📖", pathway: "core", track: "core", link: "lesson.html?subject=english" },
    { id: "kiswahili", name: "Kiswahili / Kenya Sign Language", icon: "🗣️", pathway: "core", track: "core", link: "lesson.html?subject=kiswahili" },
    { id: "csl", name: "Community Service Learning", icon: "🤝", pathway: "core", track: "core", link: "lesson.html?subject=csl" },
    { id: "essential-maths", name: "Essential Mathematics", icon: "➗", pathway: "core", track: "core", noteKey: "note.essmaths", link: "mathematics.html" },

    // STEM: Pure Sciences
    { id: "maths", name: "Mathematics", icon: "📐", pathway: "stem", track: "pure", noteKey: "note.maths", link: "mathematics.html" },
    { id: "biology", name: "Biology", icon: "🧬", pathway: "stem", track: "pure", link: "lesson.html?subject=biology" },
    { id: "chemistry", name: "Chemistry", icon: "⚗️", pathway: "stem", track: "pure", link: "lesson.html?subject=chemistry" },
    { id: "physics", name: "Physics", icon: "⚡", pathway: "stem", track: "pure", link: "lesson.html?subject=physics" },
    { id: "general-science", name: "General Science", icon: "🔬", pathway: "stem", track: "pure", link: "lesson.html?subject=general-science" },

    // STEM: Applied Sciences
    { id: "agriculture", name: "Agriculture", icon: "🌱", pathway: "stem", track: "applied", link: "lesson.html?subject=agriculture" },
    { id: "computer-studies", name: "Computer Studies", icon: "💻", pathway: "stem", track: "applied", link: "lesson.html?subject=computer-studies" },
    { id: "home-science", name: "Home Science", icon: "🍳", pathway: "stem", track: "applied", link: "lesson.html?subject=home-science" },
    { id: "ict", name: "Information Communication Technology", icon: "🖥️", pathway: "stem", track: "applied", link: "lesson.html?subject=ict" },

    // STEM: Technical Studies
    { id: "power-mechanics", name: "Power Mechanics", icon: "⚙️", pathway: "stem", track: "technical", link: "lesson.html?subject=power-mechanics" },
    { id: "wood-technology", name: "Wood Technology", icon: "🪵", pathway: "stem", track: "technical", link: "lesson.html?subject=wood-technology" },
    { id: "media-technology", name: "Media Technology", icon: "🎬", pathway: "stem", track: "technical", link: "lesson.html?subject=media-technology" },
    { id: "marine-fisheries", name: "Marine and Fisheries Technology", icon: "🐟", pathway: "stem", track: "technical", link: "lesson.html?subject=marine-fisheries" },

    // Social Sciences: Humanities and Business
    { id: "business-studies", name: "Business Studies", icon: "💼", pathway: "social", track: "humbiz", link: "lesson.html?subject=business-studies" },
    { id: "history-citizenship", name: "History and Citizenship", icon: "🏛️", pathway: "social", track: "humbiz", link: "lesson.html?subject=history-citizenship" },
    { id: "geography", name: "Geography", icon: "🌍", pathway: "social", track: "humbiz", link: "lesson.html?subject=geography" },
    { id: "cre", name: "Christian Religious Education", icon: "📖", pathway: "social", track: "humbiz", link: "lesson.html?subject=cre" },
    { id: "ire", name: "Islamic Religious Education", icon: "📖", pathway: "social", track: "humbiz", link: "lesson.html?subject=ire" },
    { id: "hre", name: "Hindu Religious Education", icon: "📖", pathway: "social", track: "humbiz", link: "lesson.html?subject=hre" },

    // Social Sciences: Languages and Literature
    { id: "literature-english", name: "Literature in English", icon: "📚", pathway: "social", track: "lang", link: "lesson.html?subject=literature-english" },
    { id: "fasihi-kiswahili", name: "Fasihi ya Kiswahili", icon: "📜", pathway: "social", track: "lang", link: "lesson.html?subject=fasihi-kiswahili" },
    { id: "indigenous-languages", name: "Indigenous Languages", icon: "🗨️", pathway: "social", track: "lang", link: "lesson.html?subject=indigenous-languages" },
    { id: "arabic", name: "Arabic", icon: "🌐", pathway: "social", track: "lang", link: "lesson.html?subject=arabic" },
    { id: "french", name: "French", icon: "🌐", pathway: "social", track: "lang", link: "lesson.html?subject=french" },
    { id: "german", name: "German", icon: "🌐", pathway: "social", track: "lang", link: "lesson.html?subject=german" },
    { id: "mandarin", name: "Mandarin", icon: "🌐", pathway: "social", track: "lang", link: "lesson.html?subject=mandarin" },

    // Arts and Sports Science
    { id: "fine-arts", name: "Fine Arts", icon: "🎨", pathway: "arts", track: "arts", link: "lesson.html?subject=fine-arts" },
    { id: "music-dance", name: "Music and Dance", icon: "🎵", pathway: "arts", track: "arts", link: "lesson.html?subject=music-dance" },
    { id: "theatre-film", name: "Theatre and Film", icon: "🎭", pathway: "arts", track: "arts", link: "lesson.html?subject=theatre-film" },
    { id: "physical-education", name: "Physical Education", icon: "🏃", pathway: "arts", track: "sports", link: "lesson.html?subject=physical-education" },
    { id: "sports-recreation", name: "Sports and Recreation", icon: "⚽", pathway: "arts", track: "sports", link: "lesson.html?subject=sports-recreation" }
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
