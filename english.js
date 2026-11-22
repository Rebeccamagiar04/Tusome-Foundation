// English course-map and guided-lesson renderer.
// Curriculum structure is supplied by english-data.js; all DOM content is inserted safely.
(function () {
  "use strict";
  const D = window.ENGLISH;
  const grid = document.getElementById("english-course-map");
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
      D.lessons.length + " guided lessons currently have full explanations and checks.";
    rows.forEach(({theme,item}) => {
      const card = el("article", null, "experience");
      card.appendChild(el("span", "THEME " + theme.no + " • " + theme.topic.toUpperCase(), "tag"));
      card.appendChild(el("h3", theme.title));
      card.appendChild(el("p", item.strand + " • " + item.name));
      card.appendChild(el("p", item.focus));
      card.appendChild(el("p", "Suggested time: " + item.lessons + " lessons", "curriculum-source"));
      if (item.lesson) {
        const lesson = D.lessons.find(x => x.id === item.lesson);
        if (lesson) {
          const b = el("button", "Open guided lesson →", "btn btn-primary");
          b.type = "button";
          b.addEventListener("click", () => openLesson(lesson));
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
    window.scrollTo(0, 0);
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