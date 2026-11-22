// Central Grade 10 pilot data for TUSOME.
// Curriculum labels are transcribed from KICD Grade 10 subject designs (2025).
// TUSOME is an independent learning project and is not endorsed by KICD.
window.TUSOME_DATA = {
  pathways: [
    { id: "core", title: "Core Subjects" },
    { id: "stem", title: "STEM" }
  ],
  tracks: { core: "Core Subject", pure: "STEM" },
  curriculumSource: "https://kicd.ac.ke/cbc-materials/curriculum-designs/senior-school-designs/",
  notes: {
    "note.maths": "Core Mathematics practice with generated questions, worked steps, and feedback."
  },
  subjects: [
    { id: "english", name: "English", icon: "📖", pathway: "core", track: "core", link: "lesson.html?subject=english", availability: "Grade 10 learning topics and practice" },
    { id: "maths", name: "Core Mathematics", icon: "📐", pathway: "stem", track: "pure", noteKey: "note.maths", link: "mathematics.html", availability: "Generated practice across selected Grade 10 topics" },
    { id: "biology", name: "Biology", icon: "🧬", pathway: "stem", track: "pure", link: "lesson.html?subject=biology", availability: "Grade 10 learning topics and practice" },
    { id: "chemistry", name: "Chemistry", icon: "⚗️", pathway: "stem", track: "pure", link: "lesson.html?subject=chemistry", availability: "Grade 10 learning topics and practice" },
    { id: "physics", name: "Physics", icon: "⚡", pathway: "stem", track: "pure", link: "lesson.html?subject=physics", availability: "Grade 10 learning topics and practice" }
  ],
  curriculum: {
    english: {
      title: "English",
      source: "KICD Grade 10 English Curriculum Design (2025)",
      strands: [
        { name: "Listening and Speaking", topics: ["Extensive listening", "Critical listening", "Intensive listening", "Selective listening", "Interactive listening", "Responsive listening", "Speaking etiquette", "Conversational skills", "Speaking fluency", "Face-to-face and online meetings"] },
        { name: "Reading", topics: ["Reading fluency", "Extensive reading", "Reference materials", "Study skills", "Library skills", "Intensive reading and comprehension", "Critical reading", "Paraphrasing, summarising and note-making"] },
        { name: "Grammar in Use", topics: ["Nouns and pronouns", "Main and auxiliary verbs", "Tense and aspect", "Adjectives and simple prepositions", "Determiners", "Phrases", "Adverbs", "Clauses", "Sentence patterns and types", "Active and passive voice", "Subject-verb agreement", "Count and non-count nouns", "Sentence fluency and comma use"] },
        { name: "Writing", topics: ["Spelling rules, abbreviations and acronyms", "Paragraphing, cohesion and linking words", "Essay structure and writing process", "Punctuation", "Functional writing: memos, diaries and journals", "Narrative and descriptive essays", "Emails and letter writing", "Argumentative and expository essays", "Short reports and questionnaires"] }
      ],
      themes: ["Etiquette", "Environment", "Artificial intelligence and society", "Healthcare", "Travel", "Careers", "Culture", "Income: types and sources"]
    },
    maths: {
      title: "Core Mathematics",
      source: "KICD Grade 10 Core Mathematics Curriculum Design (2025)",
      strands: [
        { name: "Numbers and Algebra", topics: ["Real Numbers", "Indices and Logarithms", "Quadratic Expressions and Equations"] },
        { name: "Measurements and Geometry", topics: ["Similarity and Enlargement", "Reflection and Congruence", "Rotation", "Trigonometry"] },
        { name: "Statistics and Probability", topics: ["Statistics", "Probability"] }
      ]
    },
    biology: {
      title: "Biology",
      source: "KICD Grade 10 Biology Curriculum Design (2025)",
      strands: [
        { name: "Cell Biology and Biodiversity", topics: ["Introduction to Biology", "Specimen Collection and Preservation", "Cell Structure and Specialisation", "Chemicals of Life"] },
        { name: "Anatomy and Physiology of Plants", topics: ["Nutrition", "Transport", "Gaseous Exchange and Respiration"] },
        { name: "Anatomy and Physiology of Animals", topics: ["Nutrition", "Transport", "Gaseous Exchange and Respiration"] }
      ]
    },
    chemistry: {
      title: "Chemistry",
      source: "KICD Grade 10 Chemistry Curriculum Design (2025)",
      strands: [
        { name: "Inorganic Chemistry", topics: ["Introduction to Chemistry", "The Atom", "The Periodic Table", "Chemical Bonding", "Periodicity"] },
        { name: "Physical Chemistry", topics: ["Acids and Bases", "Introduction to Salts"] },
        { name: "Organic Chemistry", topics: ["Organic Chemistry (strand overview; detailed sub-strands to be verified before adding lessons)"] }
      ]
    },
    physics: {
      title: "Physics",
      source: "KICD Grade 10 Physics Curriculum Design (2025)",
      strands: [
        { name: "Mechanics and Thermal Physics", topics: ["Introduction to Physics", "Pressure", "Mechanical Properties of Materials", "Temperature and Thermal Expansion", "Moments and Equilibrium", "Energy, Work, Power and Machines"] },
        { name: "Waves and Optics", topics: ["Properties of Waves", "Radioactivity and Stability of Isotopes"] },
        { name: "Electricity and Magnetism", topics: ["Electrostatics", "Current Electricity", "Introduction to Electronics"] },
        { name: "Environmental and Space Physics", topics: ["Greenhouse Effect and Climate Change", "Introduction to Space Physics"] }
      ]
    }
  },
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
