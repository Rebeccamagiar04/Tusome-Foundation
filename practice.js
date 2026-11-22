// Non-repetitive, single-subject Grade 10 practice engine for TUSOME.
// Combines procedural question generation for Mathematics with deck-shuffled
// question banks and continuous question numbering for other subjects.

(function () {
  "use strict";

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleArray(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function buildShuffledOptions(correctText, distractors) {
    var uniqueDistractors = [];
    for (var i = 0; i < distractors.length; i++) {
      var d = String(distractors[i]);
      if (d !== String(correctText) && uniqueDistractors.indexOf(d) === -1) {
        uniqueDistractors.push(d);
      }
      if (uniqueDistractors.length === 3) break;
    }

    var fallbackPool = ["2", "4", "6", "8", "10", "12", "15", "18", "20", "24"];
    var fIdx = 0;
    while (uniqueDistractors.length < 3 && fIdx < fallbackPool.length) {
      var fb = fallbackPool[fIdx++];
      if (fb !== String(correctText) && uniqueDistractors.indexOf(fb) === -1) {
        uniqueDistractors.push(fb);
      }
    }

    var combined = [String(correctText)].concat(uniqueDistractors.slice(0, 3));
    var shuffled = shuffleArray(combined);
    return {
      options: shuffled,
      correctIndex: shuffled.indexOf(String(correctText))
    };
  }

  function generated(subject, topic, question, correct, distractors, explanation) {
    var options = shuffleArray([String(correct)].concat(distractors.map(String)).filter(function (v, i, a) { return a.indexOf(v) === i; }).slice(0, 4));
    return {
      id: subject.toLowerCase().replace(/[^a-z]/g, "") + "-gen-" + Date.now() + "-" + randInt(1, 999999),
      subject: subject,
      topic: topic,
      question: question,
      options: options,
      correctIndex: options.indexOf(String(correct)),
      explanation: explanation
    };
  }

  var MATH_GENERATORS = [
    function () {
      var base = randInt(2, 9), m = randInt(1, 4), n = randInt(1, 3);
      var answer = Math.pow(base, m + n);
      return generated("Core Mathematics", "Indices and Logarithms", "Simplify " + base + "^" + m + " × " + base + "^" + n + ".", answer,
        [Math.pow(base, m * n), Math.pow(base, m + n + 1), base * (m + n)],
        "When multiplying powers with the same base, add the indices: " + base + "^(" + m + " + " + n + ") = " + answer + ".");
    },
    function () {
      var a = randInt(1, 8), x = randInt(2, 9), b = randInt(1, 8);
      var answer = a * x * x + b;
      return generated("Core Mathematics", "Quadratic Expressions and Equations", "Evaluate " + a + "x² + " + b + " when x = " + x + ".", answer,
        [a * x + b, a * (x + b) * (x + b), a * x * x - b],
        "Substitute x = " + x + ": " + a + " × " + x + "² + " + b + " = " + answer + ".");
    },
    function () {
      var scale = randInt(2, 5), area = randInt(3, 12), answer = area * scale * scale;
      return generated("Core Mathematics", "Similarity and Enlargement", "A similar shape has an area of " + area + " cm². It is enlarged by a linear scale factor of " + scale + ". Find its new area.", answer + " cm²",
        [(area * scale) + " cm²", (area * scale * 2) + " cm²", (area + scale) + " cm²"],
        "Area scale factor = " + scale + "² = " + (scale * scale) + ". New area = " + area + " × " + (scale * scale) + " = " + answer + " cm².");
    },
    function () {
      var values = [randInt(2, 12), randInt(2, 12), randInt(2, 12), randInt(2, 12)];
      var sum = values.reduce(function (a, b) { return a + b; }, 0), answer = sum / values.length;
      return generated("Core Mathematics", "Statistics", "Find the mean of " + values.join(", ") + ".", answer,
        [answer + 1, Math.max(1, answer - 2), sum],
        "Mean = total ÷ number of values = " + sum + " ÷ 4 = " + answer + ".");
    },
    function () {
      var red = randInt(1, 5), blue = randInt(1, 5), total = red + blue;
      return generated("Core Mathematics", "Probability", "A bag contains " + red + " red counters and " + blue + " blue counters. What is the probability of picking a red counter?", red + "/" + total,
        [blue + "/" + total, "1/" + total, total + "/" + red],
        "Probability = favourable outcomes ÷ total outcomes = " + red + "/" + total + ".");
    },
    function () {
      var angle = [30, 45, 60][randInt(0, 2)];
      var answer = angle === 30 ? "1/2" : angle === 45 ? "√2/2" : "√3/2";
      return generated("Core Mathematics", "Trigonometry", "In a right-angled triangle, what is the exact value of sin " + angle + "°?", answer,
        ["0", "1", "√3"],
        "The standard exact value is sin " + angle + "° = " + answer + ".");
    }
  ];

  var SUBJECT_GENERATORS = {
    "Biology": [
      function () {
        var items = [
          ["Which cell structure controls movement of substances into and out of a cell?", "Cell membrane", ["Nucleus", "Ribosome", "Mitochondrion"], "The cell membrane is selectively permeable and regulates movement into and out of the cell."],
          ["Which organelle contains chlorophyll for trapping light during photosynthesis?", "Chloroplast", ["Mitochondrion", "Nucleus", "Vacuole"], "Chloroplasts contain chlorophyll, which absorbs light energy for photosynthesis."],
          ["Which cell structure contains most of the genetic material?", "Nucleus", ["Cell wall", "Cytoplasm", "Cell membrane"], "The nucleus contains the cell's genetic material and helps control cell activities."],
          ["Which test is commonly used to identify starch in a food sample?", "Iodine solution", ["Benedict's solution", "Biuret reagent", "Ethanol emulsion"], "Iodine solution turns blue-black when starch is present."]
        ];
        var v = items[randInt(0, items.length - 1)];
        return generated("Biology", "Cell Structure and Specialisation / Chemicals of Life", v[0], v[1], v[2], v[3]);
      },
      function () {
        var tools = [
          ["small insects moving through grass", "sweep net", ["thermometer", "measuring cylinder", "microscope slide"], "A sweep net is used to collect small insects from vegetation."],
          ["tiny insects from a narrow hiding place", "pooter (aspirator)", ["metre rule", "stopwatch", "funnel"], "A pooter (aspirator) helps collect small insects safely by suction."],
          ["small crawling animals on the ground", "pitfall trap", ["test tube holder", "balance", "hand lens"], "A pitfall trap can collect small crawling animals moving across the ground."]
        ];
        var v = tools[randInt(0, tools.length - 1)];
        return generated("Biology", "Specimen Collection and Preservation", "Which apparatus is suitable for collecting " + v[0] + "?", v[1], v[2], v[3]);
      },
      function () {
        var plants = [
          ["Which plant structure mainly absorbs water and mineral salts from the soil?", "Root hair", ["Stoma", "Petal", "Leaf cuticle"], "Root hairs provide a large surface area for absorbing water and mineral salts."],
          ["Which tiny openings allow gaseous exchange in many leaves?", "Stomata", ["Xylem vessels", "Root caps", "Pollen grains"], "Stomata are pores that allow gaseous exchange; guard cells regulate their opening."],
          ["Which tissue transports water and mineral salts from roots to other plant parts?", "Xylem", ["Phloem", "Epidermis", "Palisade tissue"], "Xylem transports water and dissolved mineral salts through the plant."]
        ];
        var v = plants[randInt(0, plants.length - 1)];
        return generated("Biology", "Anatomy and Physiology of Plants", v[0], v[1], v[2], v[3]);
      },
      function () {
        var animal = [
          ["Which type of insect mouthpart is adapted for siphoning nectar?", "Siphoning mouthpart", ["Biting and chewing", "Piercing and sucking", "Scraping"], "Butterflies and moths use a long siphoning proboscis to take in nectar."],
          ["What is the main function of red blood cells in mammals?", "Transport oxygen", ["Produce hormones", "Digest proteins", "Filter urine"], "Red blood cells contain haemoglobin, which carries oxygen."]
        ];
        var v = animal[randInt(0, animal.length - 1)];
        return generated("Biology", "Anatomy and Physiology of Animals", v[0], v[1], v[2], v[3]);
      }
    ],
    "Chemistry": [
      function () {
        var elements = [["Hydrogen","H",1],["Helium","He",2],["Lithium","Li",3],["Beryllium","Be",4],["Boron","B",5],["Carbon","C",6],["Nitrogen","N",7],["Oxygen","O",8],["Fluorine","F",9],["Neon","Ne",10],["Sodium","Na",11],["Magnesium","Mg",12],["Aluminium","Al",13],["Silicon","Si",14],["Phosphorus","P",15],["Sulfur","S",16],["Chlorine","Cl",17],["Argon","Ar",18],["Potassium","K",19],["Calcium","Ca",20]];
        var e = elements[randInt(0, elements.length - 1)];
        var others = shuffleArray(elements.filter(function (x) { return x[1] !== e[1]; })).slice(0, 3).map(function (x) { return x[1]; });
        return generated("Chemistry", "The Atom and the Periodic Table", "What is the chemical symbol for " + e[0] + " (atomic number " + e[2] + ")?", e[1], others,
          e[0] + " has the chemical symbol " + e[1] + " and atomic number " + e[2] + ".");
      },
      function () {
        var p = randInt(2, 18), n = randInt(1, 20), mass = p + n;
        return generated("Chemistry", "The Atom", "An atom has " + p + " protons and " + n + " neutrons. What is its mass number?", mass,
          [p, n, mass + 1],
          "Mass number = number of protons + number of neutrons = " + p + " + " + n + " = " + mass + ".");
      },
      function () {
        var tests = [
          ["Blue litmus paper is placed in an acidic solution. What happens?", "It turns red", ["It turns blue", "It turns green", "It becomes a metal"], "Acids turn blue litmus paper red."],
          ["Which products are formed when an acid reacts with a suitable base in neutralisation?", "Salt and water", ["Hydrogen and oxygen", "Carbon dioxide and water", "Salt and hydrogen"], "A typical acid-base neutralisation produces a salt and water."],
          ["Which pH value is acidic at room temperature?", "3", ["7", "9", "12"], "A pH below 7 indicates an acidic solution."]
        ];
        var v = tests[randInt(0, tests.length - 1)];
        return generated("Chemistry", "Acids and Bases", v[0], v[1], v[2], v[3]);
      },
      function () {
        return generated("Chemistry", "Chemical Bonding", "Which type of chemical bond forms when atoms share pairs of electrons?", "Covalent bond",
          ["Ionic bond", "Metallic bond", "Hydrogen bond"],
          "A covalent bond forms when atoms share one or more pairs of electrons.");
      }
    ],
    "Physics": [
      function () {
        var force = randInt(20, 100) * 10, area = randInt(2, 10), pressure = force / area;
        return generated("Physics", "Pressure", "A force of " + force + " N acts normally on an area of " + area + " m². Calculate the pressure.", pressure + " Pa",
          [(force * area) + " Pa", (force + area) + " Pa", (force / (area + 1)) + " Pa"],
          "Pressure = force ÷ area = " + force + " ÷ " + area + " = " + pressure + " Pa.");
      },
      function () {
        var mass = randInt(2, 12), height = randInt(2, 8), g = 10, work = mass * g * height;
        return generated("Physics", "Energy, Work, Power and Machines", "A " + mass + " kg load is lifted vertically through " + height + " m. Use g = 10 N/kg. How much work is done against gravity?", work + " J",
          [(mass * height) + " J", (mass * g) + " J", (work + 10) + " J"],
          "Work done = mgh = " + mass + " × 10 × " + height + " = " + work + " J.");
      },
      function () {
        var distance = randInt(20, 100) * 5, time = randInt(5, 20), speed = distance / time;
        return generated("Physics", "Introduction to Physics", "A learner covers " + distance + " m in " + time + " s. What is the average speed?", speed + " m/s",
          [(distance * time) + " m/s", (time / distance) + " m/s", (speed + 2) + " m/s"],
          "Average speed = distance ÷ time = " + distance + " ÷ " + time + " = " + speed + " m/s.");
      },
      function () {
        var f = randInt(2, 12), t = randInt(2, 8), moment = f * t;
        return generated("Physics", "Moments and Equilibrium", "A force of " + f + " N acts perpendicular to a pivot at a distance of " + t + " m. What is its moment?", moment + " N m",
          [(f + t) + " N m", (f / t) + " N m", (moment + f) + " N m"],
          "Moment = force × perpendicular distance from pivot = " + f + " × " + t + " = " + moment + " N m.");
      },
      function () {
        var frequency = randInt(2, 10) * 2, period = 1 / frequency;
        return generated("Physics", "Properties of Waves", "A wave has a frequency of " + frequency + " Hz. What is its period?", period + " s",
          [(1 / (frequency + 1)) + " s", frequency + " s", (frequency * 2) + " s"],
          "Period T = 1 ÷ frequency = 1 ÷ " + frequency + " = " + period + " s.");
      },
      function () {
        var mass = randInt(2, 8), volume = mass * randInt(2, 5), density = mass / volume;
        return generated("Physics", "Mechanical Properties of Materials", "A sample has mass " + mass + " kg and volume " + volume + " m³. What is its density?", density + " kg/m³",
          [(mass * volume) + " kg/m³", (volume / mass) + " kg/m³", (density + 1) + " kg/m³"],
          "Density = mass ÷ volume = " + mass + " ÷ " + volume + " = " + density + " kg/m³.");
      }
    ],
    "English": [
      function () {
        var subjects = ["The learner", "The learners", "My sister", "The players", "Each student"];
        var singular = [true, false, true, false, true];
        var idx = randInt(0, subjects.length - 1);
        var correct = singular[idx] ? "is" : "are";
        return generated("English", "Grammar in Use: Subject-Verb Agreement", subjects[idx] + " ___ ready for the activity.", correct,
          [correct === "is" ? "are" : "is", "be", "were"],
          "The subject " + subjects[idx] + " takes " + correct + " in this present-tense sentence.");
      },
      function () {
        var nouns = [["team", "collective noun"], ["honesty", "abstract noun"], ["Nairobi", "proper noun"], ["teacher", "common noun"]];
        var item = nouns[randInt(0, nouns.length - 1)];
        return generated("English", "Grammar in Use: Nouns", "Identify the noun type of the word " + item[0] + ".", item[1],
          ["proper noun", "common noun", "abstract noun", "collective noun"].filter(function (x) { return x !== item[1]; }).slice(0, 3),
          item[0] + " is a " + item[1] + ".");
      },
      function () {
        var pairs = [
          ["She is interested ___ science.", "in", ["on", "at", "by"]],
          ["The books are ___ the table.", "on", ["at", "into", "between"]],
          ["We arrived ___ school early.", "at", ["in", "on", "by"]],
          ["He has lived here ___ 2022.", "since", ["for", "during", "by"]]
        ];
        var p = pairs[randInt(0, pairs.length - 1)];
        return generated("English", "Grammar in Use: Simple Prepositions", p[0], p[1], p[2],
          "The correct preposition is " + p[1] + " in this context.");
      },
      function () {
        var items = [
          ["Which linking word best shows contrast?", "However", ["Furthermore", "Therefore", "For example"], "However introduces a contrasting idea."],
          ["Which sentence uses the correct past tense?", "They went to the library yesterday.", ["They go to the library yesterday.", "They gone to the library yesterday.", "They going to the library yesterday."], "Went is the simple past tense of go."],
          ["Which feature helps connect ideas across a paragraph?", "Cohesive linking words", ["Random topic changes", "Repeated unrelated details", "Missing punctuation"], "Cohesive devices make relationships between ideas clear."]
        ];
        var p = items[randInt(0, items.length - 1)];
        return generated("English", "Writing: Cohesion and Grammar in Use", p[0], p[1], p[2], p[3]);
      }
    ]
  };

  var STATIC_BANKS = {
    "Biology": [
      {
        id: "bio-1",
        subject: "Biology",
        topic: "Cell Structure & Function",
        question: "Which cell organelle is mainly responsible for releasing usable energy during respiration?",
        options: ["Mitochondrion", "Cell wall", "Vacuole", "Ribosome"],
        correctIndex: 0,
        explanation: "Mitochondria release usable energy through cellular respiration."
      },
      {
        id: "bio-2",
        subject: "Biology",
        topic: "Cell Structure & Function",
        question: "Which structure controls movement of substances into and out of a cell?",
        options: ["Cell membrane", "Nucleus", "Cytoplasm", "Cell wall"],
        correctIndex: 0,
        explanation: "The cell membrane is selectively permeable and controls what enters or leaves the cell."
      },
      {
        id: "bio-3",
        subject: "Biology",
        topic: "Plant vs. Animal Cells",
        question: "Which structure is present in plant cells but absent in animal cells?",
        options: ["Cell wall", "Mitochondrion", "Cell membrane", "Cytoplasm"],
        correctIndex: 0,
        explanation: "Plant cells have a rigid cellulose cell wall outside the cell membrane."
      },
      {
        id: "bio-4",
        subject: "Biology",
        topic: "Plant vs. Animal Cells",
        question: "Where does photosynthesis occur in a green plant cell?",
        options: ["Chloroplast", "Nucleus", "Mitochondrion", "Ribosome"],
        correctIndex: 0,
        explanation: "Chloroplasts contain chlorophyll, which traps light energy for photosynthesis."
      },
      {
        id: "bio-5",
        subject: "Biology",
        topic: "Cell Organisation",
        question: "What is a group of similar cells working together to perform a specific function called?",
        options: ["A tissue", "An organism", "A habitat", "A system"],
        correctIndex: 0,
        explanation: "Similar cells grouped to perform a common function form a tissue."
      },
      {
        id: "bio-6",
        subject: "Biology",
        topic: "Cell Organisation",
        question: "Which level of organisation comes immediately after an organ?",
        options: ["Organ system", "Cell", "Tissue", "Atom"],
        correctIndex: 0,
        explanation: "Cells form tissues, tissues form organs, and organs working together form an organ system."
      }
    ],

    "Chemistry": [
      {
        id: "chem-1",
        subject: "Chemistry",
        topic: "Acids, Bases & Indicators",
        question: "What colour does blue litmus paper turn in an acidic solution?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctIndex: 0,
        explanation: "Acids turn blue litmus paper red."
      },
      {
        id: "chem-2",
        subject: "Chemistry",
        topic: "Acids, Bases & Indicators",
        question: "What colour does red litmus paper turn in a basic (alkaline) solution?",
        options: ["Blue", "Red", "Colourless", "Orange"],
        correctIndex: 0,
        explanation: "Bases/alkalis turn red litmus paper blue."
      },
      {
        id: "chem-3",
        subject: "Chemistry",
        topic: "Neutralisation",
        question: "What are the products of neutralisation between an acid and a base?",
        options: ["Salt and water", "Water only", "Salt and hydrogen", "Carbon dioxide and salt"],
        correctIndex: 0,
        explanation: "An acid reacts with a base to form a salt and water."
      },
      {
        id: "chem-4",
        subject: "Chemistry",
        topic: "States & Properties of Matter",
        question: "In which state of matter are particles closely packed in a fixed arrangement and only vibrate?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        correctIndex: 0,
        explanation: "Particles in a solid are tightly packed in fixed positions and vibrate about fixed points."
      },
      {
        id: "chem-5",
        subject: "Chemistry",
        topic: "States & Properties of Matter",
        question: "Why can gases be compressed more easily than liquids or solids?",
        options: [
          "There are large spaces between gas particles",
          "Gas particles have no mass",
          "Gas particles are locked in a crystal grid",
          "Gases cannot change volume"
        ],
        correctIndex: 0,
        explanation: "Gas particles are far apart with large spaces between them, allowing compression."
      },
      {
        id: "chem-6",
        subject: "Chemistry",
        topic: "Laboratory Safety & Indicators",
        question: "Why do chemists use universal indicator instead of single-colour litmus alone?",
        options: [
          "It shows a range of colours to estimate pH strength",
          "It replaces eye protection",
          "It turns solids into liquids",
          "It measures temperature in Kelvin"
        ],
        correctIndex: 0,
        explanation: "Universal indicator displays multiple colours across a pH scale to show how acidic or basic a solution is."
      }
    ],

    "Physics": [
      { id: "phy-1", subject: "Physics", topic: "Measurement", question: "Which SI unit is used to measure length?", options: ["Metre (m)", "Kilogram (kg)", "Second (s)", "Kelvin (K)"], correctIndex: 0, explanation: "The metre (m) is the SI base unit for length." },
      { id: "phy-2", subject: "Physics", topic: "Measurement", question: "Which instrument is most suitable for measuring the diameter of a thin wire accurately?", options: ["Micrometer screw gauge", "Stopwatch", "Thermometer", "Measuring cylinder"], correctIndex: 0, explanation: "A micrometer screw gauge is designed for measuring very small thicknesses or diameters." },
      { id: "phy-3", subject: "Physics", topic: "Motion", question: "A learner walks 20 metres in 5 seconds. What is the learner's average speed?", options: ["4 m/s", "15 m/s", "25 m/s", "100 m/s"], correctIndex: 0, explanation: "Average speed = distance ÷ time = 20 m ÷ 5 s = 4 m/s." },
      { id: "phy-4", subject: "Physics", topic: "Forces", question: "What is the SI unit of force?", options: ["Newton (N)", "Joule (J)", "Watt (W)", "Pascal (Pa)"], correctIndex: 0, explanation: "Force is measured in newtons (N)." },
      { id: "phy-5", subject: "Physics", topic: "Energy", question: "Which energy store increases when a book is lifted onto a high shelf?", options: ["Gravitational potential energy", "Chemical energy", "Sound energy", "Nuclear energy"], correctIndex: 0, explanation: "Lifting an object increases its gravitational potential energy because its height increases." },
      { id: "phy-6", subject: "Physics", topic: "Density", question: "A block has a mass of 200 g and a volume of 50 cm³. What is its density?", options: ["4 g/cm³", "10 g/cm³", "150 g/cm³", "250 g/cm³"], correctIndex: 0, explanation: "Density = mass ÷ volume = 200 g ÷ 50 cm³ = 4 g/cm³." }
    ],

    "English": [
      {
        id: "eng-1",
        subject: "English",
        topic: "Paragraph Structure",
        question: "What does a topic sentence do in a paragraph?",
        options: [
          "States the main idea of the paragraph",
          "Lists unrelated ideas",
          "Replaces every example",
          "Ends the essay"
        ],
        correctIndex: 0,
        explanation: "A topic sentence expresses the central idea that the rest of the paragraph supports."
      },
      {
        id: "eng-2",
        subject: "English",
        topic: "Supporting Sentences",
        question: "What is the role of supporting sentences in a paragraph?",
        options: [
          "Explain, prove, or illustrate the topic sentence",
          "Introduce random unrelated topics",
          "Repeat only the title",
          "Remove transitions"
        ],
        correctIndex: 0,
        explanation: "Supporting sentences develop the topic sentence with reasons, details, or examples."
      },
      {
        id: "eng-3",
        subject: "English",
        topic: "Clarity & Coherence",
        question: "Why do writers use linking or transition words like 'however' or 'for example'?",
        options: [
          "To show logical connections between ideas",
          "To make sentences harder to read",
          "To avoid punctuation",
          "To double the word count without meaning"
        ],
        correctIndex: 0,
        explanation: "Transition words guide the reader smoothly from one idea or example to the next."
      },
      {
        id: "eng-4",
        subject: "English",
        topic: "Paragraphing",
        question: "When should you begin a new paragraph?",
        options: [
          "When shifting to a new main point or stage of your argument",
          "After every single sentence",
          "Only on the last line of the page",
          "Before reading the prompt"
        ],
        correctIndex: 0,
        explanation: "Starting a new paragraph signals a clear shift to a new point or step in your writing."
      },
      {
        id: "eng-5",
        subject: "English",
        topic: "Clarity & Precision",
        question: "Which sentence is clearest and most concise?",
        options: [
          "She finished her homework before dinner.",
          "She completed the act of finishing her homework prior to the time of dinner.",
          "Homework was what she was doing before dinner time happened.",
          "Before dinner, doing homework is what she did."
        ],
        correctIndex: 0,
        explanation: "Direct, active phrasing communicates the idea clearly without wordiness."
      },
      {
        id: "eng-6",
        subject: "English",
        topic: "Reading Comprehension",
        question: "What is the best first step when answering a comprehension question?",
        options: [
          "Identify what the question specifically asks and locate relevant evidence",
          "Guess without reading the passage",
          "Copy the first sentence blindly",
          "Skip punctuation completely"
        ],
        correctIndex: 0,
        explanation: "Reading the question carefully helps you find the exact evidence needed from the passage."
      }
    ]
  };

  var subjectSelect = document.getElementById("practice-subject-select");
  var subjectChips = document.querySelectorAll("#practice-subject-chips .chip");
  var badgeEl = document.getElementById("practice-subject-badge");
  var progressLabel = document.getElementById("practice-progress-label");
  var questionEl = document.getElementById("practice-question-text");
  var optionsEl = document.getElementById("practice-options");
  var form = document.getElementById("practice-form");
  var retryBtn = document.getElementById("practice-retry-btn");
  var nextBtn = document.getElementById("practice-next-btn");
  var feedbackEl = document.getElementById("practice-feedback");

  if (!form || !optionsEl || !questionEl) return;

  var subjects = ["Core Mathematics", "English", "Biology", "Chemistry", "Physics"];
  var requestedSubject = new URLSearchParams(window.location.search).get("subject");
  var subjectNames = { maths: "Core Mathematics", english: "English", biology: "Biology", chemistry: "Chemistry", physics: "Physics" };
  var activeSubject = subjectNames[requestedSubject] && subjects.indexOf(subjectNames[requestedSubject]) !== -1 ? subjectNames[requestedSubject] : subjects[0];
  var questionCounter = 0;
  var currentQuestion = null;
  var lastMathSignature = "";
  var decks = {};

  function recordSafe(payload) {
    try {
      var S = window.TusomeStorage;
      if (S && typeof S.recordActivity === "function") {
        S.recordActivity(payload);
      }
    } catch (err) {}
  }

  function refillDeck(subj) {
    var bank = STATIC_BANKS[subj] || [];
    decks[subj] = shuffleArray(bank);
  }

  var lastGeneratedSignatures = {};
  function nextQuestionForSubject(subj) {
    var generators = subj === "Core Mathematics" ? MATH_GENERATORS : SUBJECT_GENERATORS[subj];
    if (generators && generators.length) {
      var attempts = 0, candidate = null;
      while (attempts < 12) {
        candidate = generators[randInt(0, generators.length - 1)]();
        if (!lastGeneratedSignatures[subj] || candidate.question !== lastGeneratedSignatures[subj]) {
          lastGeneratedSignatures[subj] = candidate.question;
          return candidate;
        }
        attempts++;
      }
      return candidate;
    }
    if (!decks[subj] || decks[subj].length === 0) refillDeck(subj);
    return decks[subj].pop();
  }

  function syncSubjectUI() {
    if (subjectSelect) subjectSelect.value = activeSubject;
    subjectChips.forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-subject") === activeSubject);
    });
  }

  function renderCurrentQuestion() {
    if (!currentQuestion) return;

    syncSubjectUI();
    if (badgeEl) badgeEl.textContent = currentQuestion.subject + " • " + currentQuestion.topic;
    if (progressLabel) {
      progressLabel.textContent = currentQuestion.subject + " — Question " + questionCounter + " (Continuous practice)";
    }
    questionEl.textContent = currentQuestion.question;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";

    optionsEl.textContent = "";
    currentQuestion.options.forEach(function (optText, optIdx) {
      var label = document.createElement("label");
      label.className = "option-card";

      var radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "practiceOption";
      radio.value = String(optIdx);

      var span = document.createElement("span");
      span.textContent = optText;

      label.appendChild(radio);
      label.appendChild(span);
      optionsEl.appendChild(label);
    });
  }

  function advanceQuestion(resetCounter) {
    if (resetCounter) {
      questionCounter = 1;
    } else {
      questionCounter += 1;
    }
    currentQuestion = nextQuestionForSubject(activeSubject);
    renderCurrentQuestion();
  }

  function selectSubject(subjName) {
    if (subjects.indexOf(subjName) === -1) return;
    activeSubject = subjName;
    advanceQuestion(true);
  }

  if (subjectSelect) {
    subjects.forEach(function (subj) {
      var opt = document.createElement("option");
      opt.value = subj;
      opt.textContent = subj;
      subjectSelect.appendChild(opt);
    });
    subjectSelect.addEventListener("change", function () {
      selectSubject(subjectSelect.value);
    });
  }

  subjectChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      selectSubject(chip.getAttribute("data-subject"));
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!currentQuestion) return;

    var chosen = form.querySelector('input[name="practiceOption"]:checked');
    feedbackEl.className = "feedback";

    if (!chosen) {
      feedbackEl.textContent = "Select one option first, then click Submit answer.";
      feedbackEl.classList.add("is-wrong");
      return;
    }

    var selectedIdx = Number(chosen.value);
    var isCorrect = selectedIdx === currentQuestion.correctIndex;

    recordSafe({
      id: "practice-" + currentQuestion.id + "-" + Date.now(),
      title: "Practice (" + currentQuestion.subject + "): " + currentQuestion.question,
      subject: currentQuestion.subject,
      topic: currentQuestion.topic,
      type: "practice",
      url: "practice.html",
      recordAttempt: true,
      correct: isCorrect
    });

    if (isCorrect) {
      feedbackEl.textContent = "Correct! " + currentQuestion.explanation;
      feedbackEl.classList.add("is-correct");
    } else {
      feedbackEl.textContent = "Not quite yet: " + currentQuestion.explanation;
      feedbackEl.classList.add("is-wrong");
    }
  });

  if (retryBtn) {
    retryBtn.addEventListener("click", function () {
      renderCurrentQuestion();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      advanceQuestion(false);
    });
  }

  Object.keys(STATIC_BANKS).forEach(function (subj) {
    refillDeck(subj);
  });

  advanceQuestion(true);
})();
