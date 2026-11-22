// Rich, structured Grade 10 lessons with outcomes, short concept sections,
// worked steps, common pitfalls, inline checks, and alternative explanations.

(function () {
  const S = window.TusomeStorage;
  const D = window.TUSOME_DATA;

  const LESSONS = [
    {
      key: "maths-linear-equations",
      subjectId: "maths",
      subjectName: "Mathematics",
      title: "Solving Two-Step Linear Equations",
      summary: "Break down equations with one unknown so you can isolate the variable cleanly without guessing.",
      outcomes: [
        "Explain what it means to keep both sides of an equation balanced.",
        "Undo addition or subtraction before undoing multiplication or division.",
        "Check a solution by substituting the value back into the original equation."
      ],
      sections: [
        {
          heading: "1. What an equation really means",
          body: "An equals sign (=) means the expression on the left has the exact same value as the expression on the right. Whenever you change one side, you must apply the exact same operation to the other side."
        },
        {
          heading: "2. Why order matters when undoing operations",
          body: "When solving an equation like 2x + 3 = 11, x has first been multiplied by 2 and then had 3 added. To unwrap x, we usually reverse the steps—removing the added or subtracted term first, then dividing out the multiplier."
        },
        {
          heading: "3. Always verify your answer",
          body: "Once you find a value for x, plug it back into the starting equation. If the left side equals the right side, your working is solid."
        }
      ],
      exampleTitle: "Worked Example: Solve 3x + 2 = 17",
      exampleSteps: [
        "Start with 3x + 2 = 17.",
        "Subtract 2 from both sides: 3x = 15.",
        "Divide both sides by 3: x = 5.",
        "Check: 3(5) + 2 = 15 + 2 = 17. It balances."
      ],
      pitfall: "Common mistake: Dividing by 3 before subtracting 2, or stopping at 3x = 15 without dividing by 3 at the end.",
      checkQuestion: "In the equation 4x - 6 = 14, what should you do first?",
      checkOptions: [
        "Add 6 to both sides to get 4x = 20",
        "Divide only 14 by 4",
        "Subtract 14 from 6"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Spot on! Adding 6 removes -6 cleanly so 4x = 20, making the next division step straightforward.",
      checkFeedbackWrong: "Not quite—start by undoing -6 by adding 6 to both sides so 4x sits alone on the left.",
      altExplanation: "Picture a weighing scale with a bag of 3x and 2 single weights on one side, balancing 17 single weights on the other. Take away 2 weights from both sides: 3x balances 15 weights. Split those 15 weights into 3 equal groups—each group has 5."
    },
    {
      key: "biology-cells",
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
      key: "business-needs-wants",
      subjectId: "business-studies",
      subjectName: "Business Studies",
      title: "Needs, Wants, and Scarcity",
      summary: "See why scarcity forces choices for individuals, households, and businesses every day.",
      outcomes: [
        "Distinguish clearly between basic human needs and wants.",
        "Explain why scarcity exists even when people work hard.",
        "Identify opportunity cost when choosing between alternatives."
      ],
      sections: [
        {
          heading: "1. Needs vs. wants",
          body: "Needs are essentials required for survival—food, water, shelter, and basic clothing. Wants are desires that make life more comfortable or enjoyable, which can expand endlessly."
        },
        {
          heading: "2. Scarcity and choice",
          body: "Resources like money, time, and raw materials are limited (scarce), while human wants are unlimited. Because we cannot have everything at once, we must make choices."
        },
        {
          heading: "3. Opportunity cost",
          body: "Every choice has a trade-off. The opportunity cost of a decision is the value of the next-best alternative you had to give up."
        }
      ],
      exampleTitle: "Worked Example: Deciding How to Use Limited Study & Work Time",
      exampleSteps: [
        "Suppose you have 2 hours this evening: you can either revise Mathematics or help restock a family kiosk.",
        "Because time is scarce, choosing one means giving up the other for tonight.",
        "If your next-best option was revising Mathematics, missing that revision is the opportunity cost."
      ],
      pitfall: "Common mistake: Treating 'wants' as useless or confusing scarcity (limited resources relative to wants) with temporary shortages.",
      checkQuestion: "What is opportunity cost?",
      checkOptions: [
        "The next-best alternative given up when a choice is made",
        "The total price of all items in a shop",
        "A resource that never runs out"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Exactly! Opportunity cost is what you give up by choosing your preferred option over the next-best alternative.",
      checkFeedbackWrong: "Not quite—opportunity cost specifically refers to the next-best alternative you sacrifice when making a choice.",
      altExplanation: "If you have KES 100 and must choose between buying a notebook for revision or a snack, picking the notebook means your opportunity cost is the snack you passed up."
    },
    {
      key: "english-paragraph-structure",
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
    }
  ];

  const selectEl = document.getElementById("lesson-select");
  const subjectTag = document.getElementById("lesson-subject-tag");
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
  const initial = LESSONS.find(function (l) { return l.subjectId === paramSubj; }) || LESSONS[0];
  renderLesson(initial);

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
