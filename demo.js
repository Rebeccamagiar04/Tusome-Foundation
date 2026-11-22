// Interactive sample algebra question on the landing page (English-only).

(function () {
  const questions = [
    {
      equation: "2³ × 2² = ?",
      answer: 32,
      mid: 5,
      midMessage: "You correctly added the indices to get 5. Now evaluate 2⁵ to find the final value.",
      steps: [
        { text: "Multiply powers with the same base by adding their indices:", math: "2³ × 2² = 2^(3 + 2) = 2⁵" },
        { text: "Evaluate the power:", math: "2⁵ = 32" }
      ]
    },
    {
      equation: "log₂ 16 = ?",
      answer: 4,
      mid: 16,
      midMessage: "16 is the value produced by the power. A logarithm asks which exponent gives 16: 2^? = 16.",
      steps: [
        { text: "Rewrite the logarithm as a power:", math: "2^? = 16" },
        { text: "Since 2⁴ = 16, the exponent is:", math: "log₂ 16 = 4" }
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
      message = "✗ Good start! " + q.midMessage;
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
