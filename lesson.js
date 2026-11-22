// Rich, structured Grade 10 lessons with outcomes, short concept sections,
// worked steps, common pitfalls, inline checks, and alternative explanations.

(function () {
  const S = window.TusomeStorage;
  const D = window.TUSOME_DATA;

  const LESSONS = [
    {
      key: "maths-indices-logarithms",
      curriculumTopic: "Numbers and Algebra → Indices and Logarithms",
      subjectId: "maths",
      subjectName: "Core Mathematics",
      title: "Indices and Logarithms",
      summary: "Explore how indices represent repeated multiplication and how logarithms help us find an unknown exponent.",
      outcomes: [
        "Explain an index as a number of repeated equal factors.",
        "Apply basic laws of indices when multiplying and dividing powers with the same base.",
        "Recognise that a logarithm is the inverse operation of exponentiation."
      ],
      sections: [
        {
          heading: "1. Understanding indices",
          body: "In 2³, the number 2 is the base and 3 is the index (or exponent). It means 2 × 2 × 2, which equals 8. The index tells us how many times the base is used as a factor; it does not mean 2 × 3."
        },
        {
          heading: "2. Basic laws of indices",
          body: "When multiplying powers with the same non-zero base, add the indices: aᵐ × aⁿ = aᵐ⁺ⁿ. When dividing powers with the same non-zero base, subtract the indices: aᵐ ÷ aⁿ = aᵐ⁻ⁿ, provided the denominator is not zero. A power raised to another power uses multiplication of indices: (aᵐ)ⁿ = aᵐⁿ."
        },
        {
          heading: "3. What a logarithm means",
          body: "A logarithm answers the question: 'What power gives this number?' For example, log₂ 8 = 3 because 2³ = 8. In general, logₐ b = c means aᶜ = b, where a is positive and not equal to 1, and b is positive."
        }
      ],
      exampleTitle: "Worked Example: Simplify 2³ × 2² ÷ 2¹",
      exampleSteps: [
        "The powers have the same base, 2, so use the multiplication and division laws.",
        "Add the indices when multiplying: 3 + 2 = 5.",
        "Subtract the index when dividing: 5 − 1 = 4.",
        "Therefore, 2³ × 2² ÷ 2¹ = 2⁴ = 16.",
        "A related logarithm fact is log₂ 16 = 4, because 2⁴ = 16."
      ],
      pitfall: "Common mistake: Adding or subtracting indices when the bases are different, or treating 2³ as 2 × 3. The index laws shown here require the same base.",
      checkQuestion: "Simplify 3² × 3⁴.",
      checkOptions: [
        "3⁶",
        "3⁸",
        "3²",
        "9⁶"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Correct! The bases are the same, so add the indices: 2 + 4 = 6. The result is 3⁶.",
      checkFeedbackWrong: "Look at the bases first. Since both are 3, keep the base and add the indices: 2 + 4.",
      altExplanation: "Think of 3² as two 3s multiplied together and 3⁴ as four more 3s. Putting them together gives six factors of 3, which is 3⁶."
    },
    {
      key: "biology-cells",
      curriculumTopic: "Cell Biology and Biodiversity → Cell Structure and Specialisation",
      subjectId: "biology",
      subjectName: "Biology",
      title: "Cell Structure and Organelle Functions",
      summary: "Understand how major cell structures work together as a coordinated system in living organisms.",
      outcomes: [
        "Identify the roles of the cell membrane, nucleus, cytoplasm, and mitochondria.",
        "Compare plant-specific features (such as cell wall and chloroplasts) with animal cells.",
        "Connect organelle function to real biological processes like energy release."
      ],
      sections: [
        {
          heading: "1. The cell as a living system",
          body: "Every living organism is made of one or more cells. Inside a cell, specialised structures called organelles carry out distinct tasks so the cell can survive, grow, and respond to changes."
        },
        {
          heading: "2. Control and transport",
          body: "The nucleus stores genetic instructions that guide cell activities, while the cell membrane controls which substances move into and out of the cell. The jelly-like cytoplasm holds organelles and hosts many chemical reactions."
        },
        {
          heading: "3. Energy and plant adaptations",
          body: "Mitochondria release usable energy (ATP) from food molecules. Plant cells additionally have a rigid cell wall for structural support and chloroplasts containing chlorophyll to capture light energy."
        }
      ],
      exampleTitle: "Worked Example: Tracing Energy in a Leaf Cell",
      exampleSteps: [
        "Chloroplasts capture light energy and help produce sugars during photosynthesis.",
        "Mitochondria break down energy-rich molecules to release usable energy for cell work.",
        "The cell membrane regulates nutrient uptake and waste removal across the boundary."
      ],
      pitfall: "Common mistake: Saying chloroplasts 'create energy from nothing' or confusing mitochondria (energy release) with the nucleus (genetic control).",
      checkQuestion: "Which structure controls what enters and leaves a cell?",
      checkOptions: [
        "Cell membrane",
        "Nucleus",
        "Cell wall"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Correct! The cell membrane acts as a selective gatekeeper regulating movement in and out of the cell.",
      checkFeedbackWrong: "Close—the nucleus controls cell activities, while the cell membrane regulates passage in and out.",
      altExplanation: "Think of a school compound: the nucleus is the administration office with the master plan, the gate/security post is the cell membrane checking who enters or leaves, and the power room generating electricity is the mitochondrion."
    },
    {
      key: "chemistry-acids-bases",
      curriculumTopic: "Physical Chemistry → Acids and Bases",
      subjectId: "chemistry",
      subjectName: "Chemistry",
      title: "Acids, Bases, and Indicators",
      summary: "Learn how to distinguish acidic, basic (alkaline), and neutral solutions and how indicators show the difference.",
      outcomes: [
        "Describe practical differences between acidic, basic, and neutral solutions.",
        "Use indicators (like litmus or universal indicator) to interpret solution properties.",
        "Explain what happens during a basic neutralisation reaction."
      ],
      sections: [
        {
          heading: "1. Acids and bases in everyday life",
          body: "Many familiar substances are acidic or basic. Lemon juice and vinegar contain acids, while soap solutions and wood ash extracts show basic (alkaline) properties."
        },
        {
          heading: "2. Why we use indicators",
          body: "Because many clear liquids look identical, chemists use indicators—substances that change colour depending on whether a solution is acidic, neutral, or basic."
        },
        {
          heading: "3. Neutralisation",
          body: "When an acid reacts with a suitable base, they neutralise each other, forming a salt and water and moving the mixture closer to neutral."
        }
      ],
      exampleTitle: "Worked Example: Testing Unknown Solutions with Litmus",
      exampleSteps: [
        "Dip red litmus and blue litmus into Solution A: blue litmus turns red, red stays red → acidic.",
        "Dip both papers into Solution B: red litmus turns blue, blue stays blue → basic/alkaline.",
        "Dip both papers into pure water: neither paper changes colour → neutral."
      ],
      pitfall: "Common mistake: Guessing a liquid's acidity by smell or taste instead of using safe indicators and proper lab observation.",
      checkQuestion: "If blue litmus paper turns red when dipped into a solution, what does that indicate?",
      checkOptions: [
        "The solution is acidic",
        "The solution is strongly basic",
        "The litmus paper is dry"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Right! Blue litmus turning red is a classic sign of an acidic solution.",
      checkFeedbackWrong: "Not quite—blue litmus turning red points to an acidic solution, whereas red turning blue points to a base.",
      altExplanation: "A simple memory hook: Acid turns Blue litmus Red (A → B → R). If you test a sample and blue becomes red, you are looking at an acid."
    },
    {
      key: "english-paragraph-structure",
      curriculumTopic: "Writing → Paragraphing, cohesion and linking words",
      subjectId: "english",
      subjectName: "English",
      title: "Structuring Clear, Focused Paragraphs",
      summary: "Build paragraphs with a clear main idea, supporting evidence, and smooth flow.",
      outcomes: [
        "Write a focused topic sentence that states the main point of a paragraph.",
        "Support claims with specific examples or explanations rather than vague filler.",
        "Keep each paragraph centered on one main idea."
      ],
      sections: [
        {
          heading: "1. Start with a clear topic sentence",
          body: "A topic sentence tells the reader what the paragraph is about right away. It sets the focus and boundary for the sentences that follow."
        },
        {
          heading: "2. Develop with explanation and examples",
          body: "Do not just repeat your topic sentence in different words. Explain how or why your point works, and give a concrete example or detail to back it up."
        },
        {
          heading: "3. Tie back to the main idea",
          body: "End the paragraph cleanly so it feels complete before you introduce a new point in the next paragraph."
        }
      ],
      exampleTitle: "Worked Example: Building a 3-Part Paragraph",
      exampleSteps: [
        "Topic sentence: Practising a few focused questions daily builds confidence faster than cramming once a week.",
        "Explanation & example: Solving one or two problems each day helps you spot small errors early and remember the method.",
        "Closing thought: Over a few weeks, steady daily practice turns difficult topics into familiar habits."
      ],
      pitfall: "Common mistake: Stuffing three unrelated points into one long paragraph, making it hard for a reader to follow the main argument.",
      checkQuestion: "What makes a supporting sentence effective in a paragraph?",
      checkOptions: [
        "It explains or gives an example connected to the topic sentence",
        "It introduces a completely unrelated subject",
        "It copies the exact same words over and over"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Well done! Good supporting sentences clarify, prove, or illustrate the paragraph's main idea.",
      checkFeedbackWrong: "Not quite—supporting sentences should explain or illustrate the main idea stated in the topic sentence.",
      altExplanation: "Think of a paragraph like a mini-meal: the topic sentence is the main dish, supporting details are the ingredients that give it substance, and the closing line wraps it up neatly."
    },
    {
      key: "physics-pressure",
      curriculumTopic: "Mechanics and Thermal Physics → Pressure",
      subjectId: "physics",
      subjectName: "Physics",
      title: "Pressure",
      summary: "Learn how force and area determine pressure, and why the same force can have different effects on different surfaces.",
      outcomes: [
        "Define pressure as force acting normally per unit area.",
        "Use pressure = force ÷ area to solve straightforward problems.",
        "State the SI unit of pressure and explain how area affects pressure."
      ],
      sections: [
        {
          heading: "1. What pressure means",
          body: "Pressure describes how concentrated a force is over a surface. The same force produces greater pressure when it acts on a smaller area, and lower pressure when it is spread over a larger area."
        },
        {
          heading: "2. The formula and unit",
          body: "For a force acting normally on a surface, pressure (P) = force (F) ÷ area (A). The SI unit is the pascal (Pa). One pascal is one newton per square metre (1 Pa = 1 N/m²)."
        },
        {
          heading: "3. Pressure in everyday situations",
          body: "A sharp nail has a very small tip area, so a given force creates high pressure and helps it enter a surface. Wide snowshoes spread a person's weight over a larger area, reducing pressure on the snow."
        }
      ],
      exampleTitle: "Worked Example: Calculating Pressure",
      exampleSteps: [
        "A force of 200 N acts normally on an area of 0.5 m².",
        "Write the formula: pressure = force ÷ area.",
        "Substitute: pressure = 200 N ÷ 0.5 m².",
        "Calculate: pressure = 400 N/m² = 400 Pa."
      ],
      pitfall: "Common mistake: Multiplying force by area instead of dividing, or giving the answer without the unit pascal (Pa). Make sure the area is in square metres when using SI units.",
      checkQuestion: "A force of 100 N acts normally on an area of 2 m². What pressure is produced?",
      checkOptions: [
        "50 Pa",
        "200 Pa",
        "102 Pa",
        "0.02 Pa"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Correct! Pressure = 100 N ÷ 2 m² = 50 N/m², which is 50 Pa.",
      checkFeedbackWrong: "Use pressure = force ÷ area. Divide 100 by 2, then write the unit as pascals (Pa).",
      altExplanation: "Imagine pressing your palm and then one fingertip against soft dough with the same force. Your fingertip touches a smaller area, so the force is concentrated and makes a deeper mark. That is greater pressure."
    }
  ];

  const selectEl = document.getElementById("lesson-select");
  const subjectTag = document.getElementById("lesson-subject-tag");
  const curriculumSourceEl = document.getElementById("lesson-curriculum-source");
  const titleEl = document.getElementById("lesson-title");
  const summaryEl = document.getElementById("lesson-summary");
  const outcomesEl = document.getElementById("lesson-outcomes");
  const blocksEl = document.getElementById("lesson-blocks");
  const exTitleEl = document.getElementById("lesson-example-title");
  const exStepsEl = document.getElementById("lesson-example-steps");
  const pitfallEl = document.getElementById("lesson-pitfall");
  const checkQEl = document.getElementById("check-question");
  const checkOptsEl = document.getElementById("check-options");
  const checkBtn = document.getElementById("check-answer-btn");
  const checkFeedbackEl = document.getElementById("check-feedback");
  const confusedBtn = document.getElementById("confused-btn");
  const altBox = document.getElementById("alt-explanation-box");
  const altText = document.getElementById("alt-explanation-text");
  const completeBtn = document.getElementById("complete-lesson-btn");
  const statusEl = document.getElementById("lesson-status");

  if (!titleEl || !selectEl) return;

  let activeLesson = LESSONS[0];

  LESSONS.forEach(function (lesson, idx) {
    const opt = document.createElement("option");
    opt.value = String(idx);
    opt.textContent = lesson.subjectName + " — " + lesson.title;
    selectEl.appendChild(opt);
  });

  function renderLesson(lesson) {
    activeLesson = lesson;
    const subjObj = D && D.getSubject ? D.getSubject(lesson.subjectId) : null;
    const subjLabel = subjObj ? subjObj.name : lesson.subjectName;
    const curriculumInfo = D && D.curriculum ? D.curriculum[lesson.subjectId] : null;
    if (curriculumSourceEl) curriculumSourceEl.textContent = curriculumInfo && curriculumInfo.source ? curriculumInfo.source : "Grade 10 subject design";
    const curriculumTopicEl = document.getElementById("lesson-curriculum-topic");
    if (curriculumTopicEl) curriculumTopicEl.textContent = lesson.curriculumTopic || "Selected Grade 10 topic";

    subjectTag.textContent = "GRADE 10 • " + subjLabel.toUpperCase();
    titleEl.textContent = lesson.title;
    summaryEl.textContent = lesson.summary;

    outcomesEl.textContent = "";
    lesson.outcomes.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      outcomesEl.appendChild(li);
    });

    blocksEl.textContent = "";
    lesson.sections.forEach(function (sec) {
      const wrap = document.createElement("div");
      wrap.className = "lesson-block";

      const h3 = document.createElement("h3");
      h3.textContent = sec.heading;

      const p = document.createElement("p");
      p.textContent = sec.body;

      wrap.appendChild(h3);
      wrap.appendChild(p);
      blocksEl.appendChild(wrap);
    });

    exTitleEl.textContent = lesson.exampleTitle;
    exStepsEl.textContent = "";
    lesson.exampleSteps.forEach(function (stepText) {
      const li = document.createElement("li");
      li.textContent = stepText;
      exStepsEl.appendChild(li);
    });

    pitfallEl.textContent = lesson.pitfall;

    checkQEl.textContent = lesson.checkQuestion;
    checkOptsEl.textContent = "";
    lesson.checkOptions.forEach(function (optLabel, idx) {
      const label = document.createElement("label");
      label.className = "option-card";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "lessonCheck";
      radio.value = String(idx);

      const span = document.createElement("span");
      span.textContent = optLabel;

      label.appendChild(radio);
      label.appendChild(span);
      checkOptsEl.appendChild(label);
    });

    checkFeedbackEl.textContent = "";
    checkFeedbackEl.className = "feedback";

    altText.textContent = lesson.altExplanation;
    altBox.hidden = true;
    statusEl.textContent = "";
    statusEl.className = "feedback";

    const idx = LESSONS.indexOf(lesson);
    if (idx >= 0) selectEl.value = String(idx);

    if (S) {
      S.recordActivity({
        id: "lesson-open-" + lesson.key,
        title: "Opened lesson: " + lesson.title,
        subject: subjLabel,
        topic: lesson.title,
        type: "lesson",
        url: "lesson.html?subject=" + encodeURIComponent(lesson.subjectId)
      });
    }
  }

  const paramSubj = new URLSearchParams(location.search).get("subject");
  const initial = LESSONS.find(function (l) { return l.subjectId === paramSubj; });
  if (initial) {
    renderLesson(initial);
  } else if (paramSubj) {
    titleEl.textContent = "Lesson coming soon";
    summaryEl.textContent = "This subject is listed in the wider Senior School curriculum, but its guided lesson has not been added to this TUSOME pilot yet.";
    subjectTag.textContent = "GRADE 10 • CONTENT IN DEVELOPMENT";
    if (blocksEl) blocksEl.textContent = "Please choose one of the available lessons from the subject selector, or return to the subject directory.";
    if (selectEl) selectEl.disabled = true;
  } else {
    renderLesson(LESSONS[0]);
  }

  selectEl.addEventListener("change", function () {
    const chosen = LESSONS[Number(selectEl.value)] || LESSONS[0];
    renderLesson(chosen);
  });

  if (checkBtn) {
    checkBtn.addEventListener("click", function () {
      const selected = document.querySelector('input[name="lessonCheck"]:checked');
      checkFeedbackEl.className = "feedback";

      if (!selected) {
        checkFeedbackEl.textContent = "Choose an option above first so we can check your answer.";
        checkFeedbackEl.classList.add("is-wrong");
        return;
      }

      const isRight = Number(selected.value) === activeLesson.checkCorrect;
      if (S) {
        S.recordActivity({
          id: "lesson-check-" + activeLesson.key + "-" + Date.now(),
          title: "Quick check (" + activeLesson.title + ")",
          subject: activeLesson.subjectName,
          topic: activeLesson.title,
          type: "lesson-check",
          url: "lesson.html?subject=" + encodeURIComponent(activeLesson.subjectId),
          recordAttempt: true,
          correct: isRight
        });
      }

      if (isRight) {
        checkFeedbackEl.textContent = "✓ " + activeLesson.checkFeedbackRight;
        checkFeedbackEl.classList.add("is-correct");
      } else {
        checkFeedbackEl.textContent = "✗ " + activeLesson.checkFeedbackWrong;
        checkFeedbackEl.classList.add("is-wrong");
      }
    });
  }

  if (confusedBtn) {
    confusedBtn.addEventListener("click", function () {
      altBox.hidden = false;
      statusEl.textContent = "Here is another way to look at it—take your time and try the quick check whenever you're ready.";
      statusEl.className = "feedback is-correct";
    });
  }

  if (completeBtn) {
    completeBtn.addEventListener("click", function () {
      if (S) {
        S.recordActivity({
          id: "lesson-done-" + activeLesson.key,
          title: "Completed lesson: " + activeLesson.title,
          subject: activeLesson.subjectName,
          topic: activeLesson.title,
          type: "lesson",
          url: "lesson.html?subject=" + encodeURIComponent(activeLesson.subjectId),
          markLessonComplete: true,
          lessonKey: activeLesson.key
        });
      }
      statusEl.textContent = "✓ Lesson marked complete! Your Dashboard and Progress pages have been updated.";
      statusEl.className = "feedback is-correct";
    });
  }
})();
