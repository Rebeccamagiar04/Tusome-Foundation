// Interactive sample algebra question on the landing page (English-only).

(function () {
  const questions = [
    {
      equation: "2x + 3 = 11",
      answer: 4,
      mid: 8,
      steps: [
        { text: "Subtract 3 from both sides:", math: "2x = 8" },
        { text: "Divide both sides by 2:", math: "x = 4" }
      ]
    },
    {
      equation: "3x + 2 = 17",
      answer: 5,
      mid: 15,
      steps: [
        { text: "Subtract 2 from both sides:", math: "3x = 15" },
        { text: "Divide both sides by 3:", math: "x = 5" }
      ]
    }
  ];

  const form = document.getElementById("demo-form");
  const input = document.getElementById("demo-answer");
  const equationEl = document.getElementById("demo-equation");
  const feedbackEl = document.getElementById("demo-feedback");
  const stepsEl = document.getElementById("demo-steps");
  const nextBtn = document.getElementById("demo-next");
  const againBtn = document.getElementById("demo-again");
  if (!form || !input || !equationEl || !feedbackEl || !stepsEl) return;

  let qIndex = 0;
  let state = { status: "idle", stepsShown: 0 };

  function render() {
    const q = questions[qIndex];
    equationEl.textContent = q.equation;

    feedbackEl.className = "feedback";
    let message = "";

    if (state.status === "invalid") {
      message = "Type a number to check your answer.";
      feedbackEl.classList.add("is-wrong");
    } else if (state.status === "correct") {
      message = "✓ Correct! You found x = " + q.answer + ". Want to try a similar one?";
      feedbackEl.classList.add("is-correct");
    } else if (state.status === "wrong") {
      message = "✗ Not quite yet, and that's okay. Let's work through it together.";
      feedbackEl.classList.add("is-wrong");
    } else if (state.status === "forgot") {
      message = "✗ Good start! You subtracted correctly and got " + q.mid + ". That is the value of the x-term, so one more step is needed: divide to find x.";
      feedbackEl.classList.add("is-wrong");
    }

    feedbackEl.textContent = message;

    stepsEl.textContent = "";
    q.steps.slice(0, state.stepsShown).forEach(function (step) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(step.text + " "));
      const math = document.createElement("span");
      math.className = "math";
      math.textContent = step.math;
      li.appendChild(math);
      stepsEl.appendChild(li);
    });

    const missed = state.status === "wrong" || state.status === "forgot";
    const allShown = state.stepsShown >= q.steps.length;
    if (nextBtn) nextBtn.hidden = !(missed && !allShown);
    if (againBtn) againBtn.hidden = !(state.status === "correct" || (missed && allShown));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const q = questions[qIndex];
    const text = input.value.trim();
    const value = Number(text);

    state.stepsShown = 0;
    if (text === "" || Number.isNaN(value)) {
      state.status = "invalid";
    } else if (value === q.answer) {
      state.status = "correct";
    } else if (value === q.mid) {
      state.status = "forgot";
    } else {
      state.status = "wrong";
    }
    render();
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      state.stepsShown += 1;
      render();
    });
  }

  if (againBtn) {
    againBtn.addEventListener("click", function () {
      qIndex = (qIndex + 1) % questions.length;
      state = { status: "idle", stepsShown: 0 };
      input.value = "";
      render();
      input.focus();
    });
  }

  render();
})();
