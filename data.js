// Central Grade 10 pilot data for TUSOME.
// Curriculum labels are transcribed from KICD Grade 10 subject designs (2025).
// TUSOME is an independent learning project and is not endorsed by KICD.
window.TUSOME_DATA = {
  pathways: [
    { id: "core", title: "Core Subjects" },
    { id: "stem", title: "STEM" }
  ],
  tracks: { core: "Core Subjects", pure: "STEM" },
  curriculumSource: "https://kicd.ac.ke/cbc-materials/curriculum-designs/senior-school-designs/",
  notes: {
    "note.maths": "Core Mathematics practice with generated questions, worked steps, and feedback."
  },
  subjects: [
    { id: "english", name: "English", icon: "📖", pathway: "core", track: "core", link: "english.html", availability: "Grade 10 learning topics and practice" },
    { id: "maths", name: "Core Mathematics", icon: "📐", pathway: "stem", track: "pure", noteKey: "note.maths", link: "mathematics-learning.html", availability: "Detailed Grade 10 lessons and interactive mathematics practice" },
    { id: "biology", name: "Biology", icon: "🧬", pathway: "stem", track: "pure", link: "biology.html", availability: "Detailed explanations, biological applications and topic checks" },
    { id: "chemistry", name: "Chemistry", icon: "⚗️", pathway: "stem", track: "pure", link: "chemistry.html", availability: "Detailed explanations, chemical models and topic checks" },
    { id: "physics", name: "Physics", icon: "⚡", pathway: "stem", track: "pure", link: "physics.html", availability: "Detailed explanations, equations and worked applications" }
  ],
  curriculum: {
    english: {
      title: "English",
      source: "KICD Grade 10 English Curriculum Design (July 2025)",
      strands: [
        { name: "Listening and Speaking", topics: ["Extensive Listening", "Speaking Etiquette", "Critical Listening", "Conversational Skills", "Intensive Listening", "Speaking Fluency", "Selective Listening", "Face-to-Face and Online Meetings", "Responsive Listening", "Pronunciation and Word Stress", "Distinguishing Fact and Opinion", "Listening to Visuals", "Informative Speeches"] },
        { name: "Reading", topics: ["Reading Fluency", "Extensive Reading: Literary and Non-Literary Texts", "Reference Materials", "Study Skills and Library Skills", "Intensive Reading and Comprehension", "Oral Narrative and Descriptive Text", "SOAR, Paraphrasing, Summarising and Note-Making", "Critical Reading"] },
        { name: "Grammar in Use", topics: ["Nouns, Pronouns and Phrasal Quantifiers", "Main and Auxiliary Verbs", "Tense and Aspect", "Adjectives and Simple Prepositions", "Determiners", "Noun and Verb Phrases", "Adverbs and Adverb Phrases", "Adjective and Prepositional Phrases", "Relative Pronouns and Clauses", "Adverbial Clauses", "Noun Clauses", "Sentence Patterns and Types", "Active and Passive Voice", "Subject-Verb Agreement", "Count and Non-Count Nouns"] },
        { name: "Writing", topics: ["Sentence Fluency and Comma Use", "Spelling Rules, Abbreviations and Acronyms", "Paragraphing, Cohesion and Linking Words", "Essay Structure and Writing Process", "Punctuation and Euphemisms", "Functional Writing: Memos, Diaries and Journals", "Narrative and Descriptive Essays", "Emails and Letter Writing", "Argumentative and Expository Essays", "Reminders, Short Reports and Questionnaires"] }
      ],
      themes: ["Etiquette", "Environment", "Artificial Intelligence and Society: Healthcare", "Travel", "Careers", "Culture", "Sports and Games", "Health and Safety", "Income: Types and Sources"]
    },
    maths: {
      title: "Core Mathematics",
      source: "KICD Grade 10 Core Mathematics Curriculum Design (2025)",
      strands: [
        { name: "Numbers and Algebra", topics: ["Real Numbers", "Indices and Logarithms", "Quadratic Expressions and Equations"] },
        { name: "Measurements and Geometry", topics: ["Similarity and Enlargement", "Reflection and Congruence", "Rotation", "Angle Properties of a Circle", "Trigonometry 1", "Area of Polygons", "Area of a Part of a Circle", "Surface Area and Volume of Solids", "Linear Motion"] },
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
        { name: "Organic Chemistry", topics: ["Organic Chemistry"] }
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
