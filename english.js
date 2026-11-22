// English course-map and guided-lesson renderer.
// Curriculum structure is supplied by english-data.js; all DOM content is inserted safely.
(function () {
  "use strict";
  const D = window.ENGLISH;
  const grid = document.getElementById("english-course-map");
  const sourceLink = document.getElementById("english-source-link");
  if (sourceLink && D && D.source) { sourceLink.href = D.source.url; sourceLink.textContent = "Read " + D.source.title; }
  if (!D || !grid) return;

  const search = document.getElementById("english-search");
  const filters = document.getElementById("english-strand-filters");
  const count = document.getElementById("english-count");
  const mapPanel = grid;
  const lessonPanel = document.getElementById("english-lesson-panel");
  let activeStrand = "All strands";
  let currentLesson = null;

  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined && text !== null) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function allItems() {
    return D.themes.flatMap(theme => theme.items.map(item => ({ theme, item })));
  }
  function buildFilters() {
    const names = ["All strands"].concat(D.strands.map(s => s.name));
    names.forEach(name => {
      const b = el("button", name, "chip" + (name === activeStrand ? " is-active" : ""));
      b.type = "button";
      b.addEventListener("click", () => {
        activeStrand = name;
        buildFilters();
        renderMap();
      });
      filters.appendChild(b);
    });
  }
  function renderMap() {
    const q = search.value.trim().toLowerCase();
    const rows = allItems().filter(({theme,item}) => {
      const strandOK = activeStrand === "All strands" || item.strand === activeStrand;
      const text = [theme.title, theme.topic, item.strand, item.name, item.focus].join(" ").toLowerCase();
      return strandOK && (!q || text.includes(q));
    });
    grid.textContent = "";
    count.textContent = "Showing " + rows.length + " of " + allItems().length + " course-map topics. " +
      allItems().length + " topic-specific guided lessons are available, each with explanations, a worked example and knowledge checks.";
    rows.forEach(({theme,item}) => {
      const card = el("article", null, "experience");
      card.appendChild(el("span", "THEME " + theme.no + " • " + theme.topic.toUpperCase(), "tag"));
      card.appendChild(el("h3", theme.title));
      card.appendChild(el("p", item.strand + " • " + item.name));
      card.appendChild(el("p", item.focus));
      if (item.lesson) {
        const lesson = D.lessons.find(x => x.id === item.lesson);
        if (lesson) {
          const b = el("button", "Open guided lesson →", "btn btn-primary");
          b.type = "button";
          b.addEventListener("click", () => openLesson(buildTopicLesson(theme, item)));
          card.appendChild(b);
        } else {
          card.appendChild(el("p", "Lesson content is being prepared.", "curriculum-source"));
        }
      } else {
        card.appendChild(el("p", "Course-map topic • guided lesson coming soon", "curriculum-source"));
      }
      grid.appendChild(card);
    });
  }

  // Build a separate guided lesson for each curriculum sub-strand. The shared
  // lessons above remain useful reference material, but course-map cards must
  // never send different topics to one generic lesson.
  function buildTopicLesson(theme, item) {
    const slug = (item.name + "-" + item.focus).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const common = [
      { title: "Start with the learning focus", text: item.focus + " This lesson breaks that focus into manageable ideas, shows how to apply them, and gives you a chance to check your understanding." },
      { title: "Notice the skill in context", text: "Look at the purpose, audience and situation before choosing a language skill. Ask what the speaker, reader or writer needs to communicate, then identify the language choices that make the meaning clear." }
    ];
    let specific, example, outcomes, questions;
    if (item.strand === "Listening and Speaking") {
      outcomes = ["Identify the main skill in " + item.name.toLowerCase() + ".", "Use context and purpose to choose an appropriate listening or speaking strategy.", "Apply the skill in a short, respectful real-life exchange."];
      specific = [
        { title: "Listen actively and respond purposefully", text: "Before listening, identify why you are listening: to understand the main idea, find a detail, follow instructions, evaluate an argument or respond to another person. During listening, note key words rather than trying to write every word. After listening, check what you understood and ask for clarification when necessary.", list: ["Give the speaker your attention and avoid interrupting.", "Notice signposts such as first, however, because and finally.", "Separate what was actually said from your own assumptions.", "When speaking, use a clear voice, suitable pace and language appropriate to the audience."] },
        { title: "Practise with a real situation", text: "Imagine a class representative explaining a clean-up activity. Listen for the date, meeting place, materials needed and reason for the activity. When responding, summarise the important information and ask one relevant question." }
      ];
      example = { title: "A learner gives instructions for a school activity", steps: ["First decide what information you need: time, place, materials and sequence.", "Listen for signal words such as at 8 a.m., bring, next and finally.", "Write short notes: 8 a.m. — assembly ground — gloves — collect litter.", "Repeat the key details politely to confirm that you understood."], pitfall: "Do not confuse listening with simply hearing sounds. Effective listening involves attention, interpretation and an appropriate response." };
      questions = [
        { q: "When listening for a particular detail, what should you do first?", options: ["Know what information you need", "Write down every word", "Ignore the speaker's purpose", "Prepare your reply without listening"], answer: 0, why: "A clear listening purpose helps you recognise the relevant detail." },
        { q: "Which response best shows active listening?", options: ["Interrupting to change the subject", "Summarising the point and asking for clarification", "Looking away and guessing", "Repeating unrelated information"], answer: 1, why: "Summarising and clarifying show attention and help prevent misunderstanding." },
        { q: "Why should a speaker consider the audience?", options: ["To use the longest words possible", "To avoid giving examples", "To choose suitable language and tone", "To speak as quickly as possible"], answer: 2, why: "Audience and situation guide the choice of vocabulary, tone and level of formality." }
      ];
    } else if (item.strand === "Reading") {
      outcomes = ["Choose a reading approach suited to the purpose.", "Locate and interpret relevant information in a text.", "Support an interpretation with evidence from the text."];
      specific = [
        { title: "Choose how to read", text: "Preview a text by checking its title, headings, layout and source. Skim when you need the general idea. Scan when you need a particular name, date, number or key term. Read closely when you must understand how ideas connect or evaluate the writer's message.", list: ["Use the title and headings to predict the subject.", "Identify unfamiliar words, then use context or a reference source.", "Notice linking words that show contrast, cause, sequence or example.", "Return to the relevant sentence before answering a comprehension question."] },
        { title: "Build meaning from evidence", text: "A strong reader distinguishes the writer's stated facts from opinions and inferences. An inference is a reasonable conclusion based on clues in the text; it should not be a guess unsupported by evidence." }
      ];
      example = { title: "Read a short notice about a community tree-planting day", steps: ["Preview the heading to identify the topic and likely purpose.", "Skim the notice to understand that it invites residents to take part.", "Scan for the date, starting time, meeting place and items participants should bring.", "Answer a question about the writer's purpose using details from the notice."], pitfall: "Do not use skimming when a question requires an exact detail. Scan for the detail, then read the surrounding sentence carefully." };
      questions = [
        { q: "Which strategy is best when searching a passage for a date?", options: ["Scanning", "Reading aloud slowly", "Guessing from the title", "Copying the whole passage"], answer: 0, why: "Scanning helps locate a specific item such as a date or name." },
        { q: "What makes an inference reliable?", options: ["It is the reader's first thought", "It is supported by clues in the text", "It repeats the title", "It ignores the passage"], answer: 1, why: "An inference must be supported by textual evidence." },
        { q: "What should you do when a question asks for the writer's purpose?", options: ["Count the paragraphs only", "Choose the longest sentence", "Consider the audience, message and context", "Ignore the text type"], answer: 2, why: "Purpose is understood by considering what the writer wants to achieve and for whom." }
      ];
    } else if (item.strand === "Grammar in Use") {
      outcomes = ["Recognise the grammatical feature named in the topic.", "Explain how the feature contributes to meaning and accuracy.", "Use the feature correctly in an original sentence."];
      specific = [
        { title: "Study how the sentence works", text: "Grammar explains how words and groups of words combine to communicate meaning. Identify the role each word or phrase plays rather than memorising labels alone. Check how the form changes when the subject, tense or intended meaning changes.", list: ["Find the main verb and ask who or what performs the action or has the state.", "Check whether modifiers are placed next to the words they describe.", "Use punctuation to show the relationship between complete ideas.", "Read the sentence aloud to check whether its meaning is clear."] },
        { title: "Compare and improve", text: "Compare an unclear sentence with a revised version. Identify the exact change and explain why it improves grammar or meaning. Then create a new sentence using the same pattern." }
      ];
      example = { title: "Improve a sentence by checking its grammatical structure", steps: ["Read: “The learners in the library are preparing a report.”", "Identify the subject: “The learners in the library.”", "Identify the verb phrase: “are preparing.”", "Identify the object: “a report.”", "Check that the sentence expresses a complete and clear idea."], pitfall: "Do not identify a word's grammatical role from the word alone. Its function depends on how it is used in the sentence." };
      questions = [
        { q: "What is the best way to check a grammatical feature in a sentence?", options: ["Look at the word in isolation only", "Examine how the word functions in context", "Ignore the surrounding words", "Choose a label at random"], answer: 1, why: "A word's grammatical function depends on its relationship with the other words in the sentence." },
        { q: "Which sentence is complete?", options: ["Because the rain was heavy.", "When the lesson ended.", "The class discussed the results.", "Although they arrived early."], answer: 2, why: "The third option expresses a complete thought; the others are dependent clauses presented as fragments." },
        { q: "After learning a grammar rule, what is the best way to check that you can use it?", options: ["Create and explain your own example", "Memorise the heading only", "Skip all practice", "Copy a sentence without examining it"], answer: 0, why: "Creating and explaining an example demonstrates that you can apply the rule." }
      ];
    } else {
      outcomes = ["Identify the purpose and audience of the writing task.", "Organise ideas in a clear and logical order.", "Revise language, spelling and punctuation before sharing the final text."];
      specific = [
        { title: "Plan before writing", text: "Effective writing begins with a clear purpose and an understanding of the reader. Decide what the reader needs to know or do, select relevant information, and arrange the ideas in a logical order.", list: ["Choose a suitable format and level of formality.", "Group related ideas into paragraphs or clearly labelled sections.", "Use linking words to show sequence, contrast, addition or cause.", "Check spelling, punctuation, grammar and tone during editing."] },
        { title: "Draft, revise and edit", text: "A first draft is not usually the final version. Revise for meaning and organisation first. Then edit individual sentences for accuracy, clarity and appropriate vocabulary. Finally, check the layout and presentation." }
      ];
      example = { title: "Plan a short piece of writing for a clear audience", steps: ["Purpose: inform the school community about a planned activity.", "Audience: learners, teachers and other school community members.", "Select only useful details: activity, date, time, venue and action required.", "Arrange the details under a clear heading and use short, direct sentences.", "Proofread names, dates, punctuation and spelling before sharing."], pitfall: "Do not begin drafting before you know the purpose and audience. Unplanned writing often repeats ideas or leaves out important details." };
      questions = [
        { q: "What should a writer establish before drafting?", options: ["The purpose and audience", "The number of pages only", "The final punctuation only", "The colour of the paper"], answer: 0, why: "Purpose and audience determine what information and tone are appropriate." },
        { q: "What is the main purpose of revising a draft?", options: ["To make it longer", "To improve ideas, order and clarity", "To remove every paragraph", "To avoid proofreading"], answer: 1, why: "Revision improves the content and organisation before detailed editing." },
        { q: "Which is an important final editing check?", options: ["Whether every sentence is the same length", "Whether the title is decorative", "Spelling, punctuation and grammar", "Whether the writer used the most difficult words"], answer: 2, why: "Editing checks language accuracy and presentation so the reader can understand the message." }
      ];
    }
    return {
      id: "topic-" + theme.no + "-" + slug,
      title: item.name + " — " + theme.title,
      where: "Theme " + theme.no + ": " + theme.title + " • " + item.strand,
      outcomes: outcomes,
      blocks: common.concat(specific),
      example: example,
      alt: ["Begin by explaining the focus in your own words. Then find one example in a conversation, text, sentence or piece of writing.", "Practise the skill in a new situation and explain why your choice is suitable."],
      questions: questions
    };
  }

  function openLesson(lesson) {
    currentLesson = lesson;
    mapPanel.hidden = true;
    document.querySelector(".card-panel").hidden = true;
    count.hidden = true;
    lessonPanel.hidden = false;
    document.getElementById("english-lesson-where").textContent = lesson.where;
    document.getElementById("english-lesson-title").textContent = lesson.title;
    const outcomes = document.getElementById("english-outcomes");
    outcomes.textContent = "";
    lesson.outcomes.forEach(x => outcomes.appendChild(el("li", x)));
    const blocks = document.getElementById("english-blocks");
    blocks.textContent = "";
    lesson.blocks.forEach((block, i) => {
      const section = el("section", null, "lesson-section");
      section.appendChild(el("h3", (i + 1) + ". " + block.title));
      section.appendChild(el("p", block.text));
      if (block.list && block.list.length) {
        const ul = el("ul");
        block.list.forEach(x => ul.appendChild(el("li", x)));
        section.appendChild(ul);
      }
      blocks.appendChild(section);
    });
    document.getElementById("english-example-title").textContent = lesson.example.title;
    const steps = document.getElementById("english-example-steps");
    steps.textContent = "";
    lesson.example.steps.forEach(x => steps.appendChild(el("li", x)));
    document.getElementById("english-pitfall").textContent = lesson.example.pitfall || "";
    const qs = document.getElementById("english-questions");
    qs.textContent = "";
    document.getElementById("english-feedback").textContent = "";
    lesson.questions.forEach((q, i) => {
      const wrap = el("fieldset", null, "english-question");
      wrap.appendChild(el("legend", (i + 1) + ". " + q.q));
      q.options.forEach((option, j) => {
        const label = el("label", null, "option-row");
        const input = document.createElement("input");
        input.type = "radio"; input.name = "english-q-" + i; input.value = String(j);
        label.appendChild(input); label.appendChild(document.createTextNode(option));
        wrap.appendChild(label);
      });
      const check = el("button", "Check answer", "btn btn-secondary");
      check.type = "button";
      check.addEventListener("click", () => {
        const chosen = wrap.querySelector('input[name="english-q-' + i + '"]:checked');
        const feedback = document.getElementById("english-feedback");
        if (!chosen) { feedback.textContent = "Choose an answer first."; feedback.className = "feedback is-wrong"; return; }
        const correct = Number(chosen.value) === q.answer;
        feedback.textContent = (correct ? "Correct. " : "Not quite. ") + q.why;
        feedback.className = "feedback " + (correct ? "is-correct" : "is-wrong");
      });
      wrap.appendChild(check);
      qs.appendChild(wrap);
    });
    const altList = document.getElementById("english-alt-list");
    altList.textContent = "";
    lesson.alt.forEach(x => altList.appendChild(el("li", x)));
    document.getElementById("english-status").textContent = "";
    // Bring the selected guided lesson into view instead of sending learners to the page top.
    lessonPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  document.getElementById("english-back-btn").addEventListener("click", () => {
    lessonPanel.hidden = true; mapPanel.hidden = false;
    document.querySelector(".card-panel").hidden = false;
    count.hidden = false;
    window.scrollTo(0, 0);
  });
  document.getElementById("english-alt-btn").addEventListener("click", () => {
    document.getElementById("english-alt").hidden = false;
  });
  document.getElementById("english-complete-btn").addEventListener("click", () => {
    if (!currentLesson) return;
    const key = "tusome-english-completed";
    const done = JSON.parse(localStorage.getItem(key) || "[]");
    if (!done.includes(currentLesson.id)) done.push(currentLesson.id);
    localStorage.setItem(key, JSON.stringify(done));
    document.getElementById("english-status").textContent = "Lesson marked complete on this device.";
    try {
      if (window.TusomeStorage && typeof window.TusomeStorage.recordActivity === "function") {
        window.TusomeStorage.recordActivity({id:"english-"+currentLesson.id,title:currentLesson.title,subject:"English",topic:currentLesson.where,type:"lesson",url:"english.html",completed:true});
      }
    } catch (e) {}
  });
  search.addEventListener("input", renderMap);
  buildFilters();
  renderMap();
})();