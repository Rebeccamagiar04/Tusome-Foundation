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

  var MATH_GENERATORS = [
    function () {
      var a = randInt(2, 7);
      var x = randInt(2, 12);
      var b = randInt(2, 15);
      var isAdd = Math.random() < 0.5;
      var c = isAdd ? (a * x + b) : (a * x - b);
      var mid = isAdd ? (c - b) : (c + b);
      var sign = isAdd ? "+" : "-";
      var built = buildShuffledOptions(String(x), [mid, x + 1, Math.max(1, x - 1), x + 2]);

      return {
        id: "math-lin-" + Date.now() + "-" + randInt(1, 999),
        subject: "Mathematics",
        topic: "Linear Equations",
        question: "Solve for x: " + a + "x " + sign + " " + b + " = " + c,
        options: built.options,
        correctIndex: built.correctIndex,
        explanation: (isAdd ? "Subtract " : "Add ") + b + " to get " + a + "x = " + mid + ", then divide by " + a + " to get x = " + x + "."
      };
    },
    function () {
      var a = randInt(2, 6);
      var x = randInt(2, 8);
      var b = randInt(1, 10);
      var isAdd = Math.random() < 0.5;
      var prod = a * x;
      var ans = isAdd ? (prod + b) : (prod - b);
      var sign = isAdd ? "+" : "-";
      var built = buildShuffledOptions(String(ans), [prod, ans + a, Math.max(1, ans - b), ans + 3]);

      return {
        id: "math-sub-" + Date.now() + "-" + randInt(1, 999),
        subject: "Mathematics",
        topic: "Algebraic Substitution",
        question: "Evaluate " + a + "x " + sign + " " + b + " when x = " + x + ".",
        options: built.options,
        correctIndex: built.correctIndex,
        explanation: "Substitute x = " + x + ": " + a + "(" + x + ") " + sign + " " + b + " = " + ans + "."
      };
    },
    function () {
      var base = randInt(2, 5);
      var m = randInt(2, 4);
      var n = randInt(1, 3);
      var totalPow = m + n;
      var ans = Math.pow(base, totalPow);
      var wrongMult = Math.pow(base, m * n);
      var built = buildShuffledOptions(String(ans), [wrongMult, Math.pow(base, totalPow - 1), base * totalPow, ans + base]);

      return {
        id: "math-idx-" + Date.now() + "-" + randInt(1, 999),
        subject: "Mathematics",
        topic: "Indices & Powers",
        question: "Simplify and evaluate " + base + "^" + m + " * " + base + "^" + n + ".",
        options: built.options,
        correctIndex: built.correctIndex,
        explanation: "Add the indices: " + base + "^(" + m + " + " + n + ") = " + base + "^" + totalPow + " = " + ans + "."
      };
    },
    function () {
      var r1 = randInt(2, 5);
      var r2 = randInt(3, 6);
      var mult = randInt(3, 10);
      var total = (r1 + r2) * mult;
      var share1 = r1 * mult;
      var share2 = r2 * mult;
      var built = buildShuffledOptions(String(share1), [share2, mult, total, share1 + mult]);

      return {
        id: "math-rat-" + Date.now() + "-" + randInt(1, 999),
        subject: "Mathematics",
        topic: "Ratios & Proportions",
        question: "Share " + total + " in the ratio " + r1 + " : " + r2 + ". What is the first share?",
        options: built.options,
        correctIndex: built.correctIndex,
        explanation: "Total parts = " + (r1 + r2) + ". One part = " + total + " / " + (r1 + r2) + " = " + mult + ". First share = " + r1 + " * " + mult + " = " + share1 + "."
      };
    },
    function () {
      var length = randInt(6, 15);
      var width = randInt(3, length - 1);
      var area = length * width;
      var perim = 2 * (length + width);
      var built = buildShuffledOptions(area + " cm^2", [perim + " cm^2", (area + width) + " cm^2", Math.max(4, area - width) + " cm^2"]);

      return {
        id: "math-geo-" + Date.now() + "-" + randInt(1, 999),
        subject: "Mathematics",
        topic: "Area & Perimeter",
        question: "Find the area of a rectangle of length " + length + " cm and width " + width + " cm.",
        options: built.options,
        correctIndex: built.correctIndex,
        explanation: "Area = length * width = " + length + " * " + width + " = " + area + " cm^2."
      };
    },
    function () {
      var lsf = randInt(2, 4);
      var origArea = randInt(5, 16);
      var asf = lsf * lsf;
      var ans = origArea * asf;
      var built = buildShuffledOptions(ans + " cm^2", [(origArea * lsf) + " cm^2", (origArea * (asf + 1)) + " cm^2", (ans + lsf) + " cm^2"]);

      return {
        id: "math-enl-" + Date.now() + "-" + randInt(1, 999),
        subject: "Mathematics",
        topic: "Similarity & Enlargement",
        question: "A shape of area " + origArea + " cm^2 is enlarged by linear scale factor " + lsf + ". What is the new area?",
        options: built.options,
        correctIndex: built.correctIndex,
        explanation: "Area scale factor = " + lsf + "^2 = " + asf + ". New area = " + origArea + " * " + asf + " = " + ans + " cm^2."
      };
    }
  ];

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

    "Business Studies": [
      {
        id: "biz-1",
        subject: "Business Studies",
        topic: "Needs, Wants & Scarcity",
        question: "Which item is a basic human need rather than a want?",
        options: ["Clean drinking water", "A smartphone", "A wristwatch", "Designer clothes"],
        correctIndex: 0,
        explanation: "Clean water, food, and shelter are basic needs essential for survival."
      },
      {
        id: "biz-2",
        subject: "Business Studies",
        topic: "Scarcity & Choice",
        question: "What is opportunity cost?",
        options: [
          "The next-best alternative forgone when making a choice",
          "The total money in a bank account",
          "The price of a free sample",
          "Money earned before expenses"
        ],
        correctIndex: 0,
        explanation: "Opportunity cost is the next-best alternative given up when you choose one option over another."
      },
      {
        id: "biz-3",
        subject: "Business Studies",
        topic: "Scarcity & Choice",
        question: "Why must individuals and businesses make choices?",
        options: [
          "Resources are scarce while human wants are unlimited",
          "Goods never cost money",
          "Time is unlimited",
          "Wants never change"
        ],
        correctIndex: 0,
        explanation: "Scarcity of resources relative to unlimited wants forces people to prioritise and choose."
      },
      {
        id: "biz-4",
        subject: "Business Studies",
        topic: "Goods & Services",
        question: "How does a service differ from a physical good?",
        options: [
          "A service is an intangible action or task performed for someone",
          "A service can always be stored in a warehouse",
          "A service has weight in kilograms",
          "A service is always free"
        ],
        correctIndex: 0,
        explanation: "Services are intangible activities or benefits (such as transport, teaching, or hairdressing) rather than physical objects."
      },
      {
        id: "biz-5",
        subject: "Business Studies",
        topic: "Production & Enterprise",
        question: "What is the main purpose of business activity in a community?",
        options: [
          "To satisfy human needs and wants while creating value",
          "To waste scarce materials",
          "To avoid customer feedback",
          "To stop trade completely"
        ],
        correctIndex: 0,
        explanation: "Businesses organise resources to produce goods or services that meet needs and wants."
      },
      {
        id: "biz-6",
        subject: "Business Studies",
        topic: "Decision Making",
        question: "If a student has KSh 200 and chooses a revision guide instead of a snack, what is the opportunity cost?",
        options: [
          "The snack they gave up",
          "The KSh 200 change",
          "The revision guide itself",
          "Zero"
        ],
        correctIndex: 0,
        explanation: "The opportunity cost is the alternative item (the snack) given up to get the revision guide."
      }
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

  var subjects = ["Mathematics"].concat(Object.keys(STATIC_BANKS));
  var activeSubject = subjects[0];
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

  function nextQuestionForSubject(subj) {
    if (subj === "Mathematics") {
      var attempts = 0;
      var candidate = null;
      while (attempts < 8) {
        var gen = MATH_GENERATORS[randInt(0, MATH_GENERATORS.length - 1)];
        candidate = gen();
        if (candidate.question !== lastMathSignature) {
          lastMathSignature = candidate.question;
          break;
        }
        attempts++;
      }
      return candidate;
    }

    if (!decks[subj] || decks[subj].length === 0) {
      refillDeck(subj);
    }
    var item = decks[subj].pop();
    if (currentQuestion && item && item.id === currentQuestion.id && decks[subj].length > 0) {
      decks[subj].unshift(item);
      item = decks[subj].pop();
    }
    return item;
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
