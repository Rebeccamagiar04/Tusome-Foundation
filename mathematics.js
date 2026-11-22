(function () {
  "use strict";

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function recordSafe(payload) {
    try {
      var S = window.TusomeStorage;
      if (S && typeof S.recordActivity === "function") {
        S.recordActivity(payload);
      }
    } catch (err) {
      // Ignore storage errors so practice still works
    }
  }

  var TOPIC_GENERATORS = {
    realNumbers: {
      name: "Real Numbers",
      generate: function () {
        var a = randInt(2, 9) * randInt(2, 4);
        var b = randInt(2, 9) * randInt(2, 4);
        function gcd(x, y) { return y ? gcd(y, x % y) : x; }
        var answer = gcd(a, b);
        return {
          topicKey: "realNumbers", topicName: "Real Numbers",
          promptHeading: "Find the highest common factor (HCF):",
          equation: "HCF of " + a + " and " + b,
          context: "Find the greatest whole number that divides both numbers exactly.",
          answerLabel: "Your answer: HCF =",
          answer: answer, midValue: null,
          generalHint: "List the factors of both numbers and choose the greatest factor they share.",
          steps: [
            { label: "Factors of " + a + ":", expr: factors(a).join(", "), spoken: "The factors of " + a + " are " + factors(a).join(", ") + "." },
            { label: "Factors of " + b + ":", expr: factors(b).join(", "), spoken: "The factors of " + b + " are " + factors(b).join(", ") + "." },
            { label: "Highest common factor:", expr: "HCF = " + answer, spoken: "The greatest common factor is " + answer + "." }
          ]
        };
        function factors(n) {
          var out = [];
          for (var i = 1; i <= n; i++) if (n % i === 0) out.push(i);
          return out;
        }
      }
    },
    indices: {
      name: "Indices and Logarithms",
      generate: function () {
        var base = [2, 3, 5][randInt(0, 2)];
        var exponent = randInt(2, 4);
        var value = Math.pow(base, exponent);
        if (Math.random() < 0.5) {
          return {
            topicKey: "indices", topicName: "Indices and Logarithms",
            promptHeading: "Simplify and evaluate:",
            equation: base + "^2 × " + base + "^" + exponent,
            context: "The bases are the same. Add the indices, then evaluate the power.",
            answerLabel: "Your answer: Value =",
            answer: Math.pow(base, exponent + 2), midValue: exponent + 2,
            midHint: "You combined the indices correctly. Now evaluate " + base + "^" + (exponent + 2) + ".",
            generalHint: "For the same base, add the indices when multiplying: 2 + " + exponent + ".",
            steps: [
              { label: "Given:", expr: base + "^2 × " + base + "^" + exponent, spoken: "We have powers with the same base." },
              { label: "Add indices:", expr: base + "^(2 + " + exponent + ") = " + base + "^" + (exponent + 2), spoken: "Add the indices to get " + (exponent + 2) + "." },
              { label: "Evaluate:", expr: "= " + Math.pow(base, exponent + 2), spoken: "The answer is " + Math.pow(base, exponent + 2) + "." }
            ]
          };
        }
        return {
          topicKey: "indices", topicName: "Indices and Logarithms",
          promptHeading: "Evaluate the logarithm:",
          equation: "log base " + base + " of " + value,
          context: "Ask: what power must the base " + base + " be raised to in order to get " + value + "?",
          answerLabel: "Your answer: exponent =",
          answer: exponent, midValue: null,
          generalHint: "Rewrite the logarithm as a power: " + base + "^? = " + value + ".",
          steps: [
            { label: "Write as a power:", expr: base + "^? = " + value, spoken: "A logarithm asks which exponent gives the value." },
            { label: "Recall the power:", expr: base + "^" + exponent + " = " + value, spoken: base + " to the power " + exponent + " equals " + value + "." },
            { label: "Therefore:", expr: "log base " + base + " of " + value + " = " + exponent, spoken: "The logarithm equals " + exponent + "." }
          ]
        };
      }
    },
    quadratics: {
      name: "Quadratic Expressions and Equations",
      generate: function () {
        var b = randInt(2, 8);
        var c = randInt(1, 8);
        var x = randInt(1, 5);
        var x2 = x * x;
        var bx = b * x;
        var answer = x2 + bx + c;
        return {
          topicKey: "quadratics", topicName: "Quadratic Expressions and Equations",
          promptHeading: "Evaluate the quadratic expression:",
          equation: "x² + " + b + "x + " + c + " when x = " + x,
          context: "Substitute the given value of x, then evaluate each term using the order of operations.",
          answerLabel: "Your answer: Value =",
          answer: answer, midValue: x2,
          midHint: "You calculated x². Now add " + bx + " and " + c + " to complete the expression.",
          generalHint: "Substitute " + x + " for x: (" + x + ")² + " + b + "(" + x + ") + " + c + ".",
          steps: [
            { label: "Substitute:", expr: "(" + x + ")² + " + b + "(" + x + ") + " + c, spoken: "Substitute " + x + " for x." },
            { label: "Evaluate powers and products:", expr: x2 + " + " + bx + " + " + c, spoken: "x squared is " + x2 + " and " + b + " times " + x + " is " + bx + "." },
            { label: "Add:", expr: "= " + answer, spoken: "The final value is " + answer + "." }
          ]
        };
      }
    },
    enlargement: {
      name: "Similarity and Enlargement",
      generate: function () {
        var scale = randInt(2, 4);
        var isArea = Math.random() < 0.5;
        var original = randInt(3, 12);
        var factor = isArea ? scale * scale : scale * scale * scale;
        var answer = original * factor;
        return {
          topicKey: "enlargement", topicName: "Similarity and Enlargement",
          promptHeading: isArea ? "Find the enlarged area:" : "Find the enlarged volume:",
          equation: (isArea ? "Original area = " : "Original volume = ") + original + (isArea ? " cm²" : " cm³") + "; linear scale factor = " + scale,
          context: isArea ? "Area scale factor is the square of the linear scale factor." : "Volume scale factor is the cube of the linear scale factor.",
          answerLabel: isArea ? "Your answer: area (cm²) =" : "Your answer: volume (cm³) =",
          answer: answer, midValue: original * scale,
          midHint: "Remember to square the linear scale factor for area or cube it for volume.",
          generalHint: (isArea ? "Use " + scale + "² = " + factor : "Use " + scale + "³ = " + factor) + ", then multiply by " + original + ".",
          steps: [
            { label: "Linear scale factor:", expr: scale, spoken: "The linear scale factor is " + scale + "." },
            { label: isArea ? "Area scale factor:" : "Volume scale factor:", expr: scale + (isArea ? "² = " : "³ = ") + factor, spoken: "The scale factor becomes " + factor + "." },
            { label: "New measurement:", expr: original + " × " + factor + " = " + answer, spoken: "Multiply " + original + " by " + factor + " to get " + answer + "." }
          ]
        };
      }
    },
    reflection: {
      name: "Reflection and Congruence",
      generate: function () {
        var x = randInt(1, 8) * (Math.random() < 0.5 ? -1 : 1);
        var y = randInt(1, 8) * (Math.random() < 0.5 ? -1 : 1);
        return {
          topicKey: "reflection", topicName: "Reflection and Congruence",
          promptHeading: "Reflect the point in the x-axis:",
          equation: "Point P(" + x + ", " + y + ") → find the y-coordinate of P′",
          context: "A reflection in the x-axis keeps the x-coordinate and changes the sign of the y-coordinate.",
          answerLabel: "Your answer: new y-coordinate =",
          answer: -y, midValue: null,
          generalHint: "For reflection in the x-axis, change y to its opposite: " + y + " becomes " + (-y) + ".",
          steps: [
            { label: "Original point:", expr: "(" + x + ", " + y + ")", spoken: "The original point has coordinates " + x + " and " + y + "." },
            { label: "Reflection rule:", expr: "(x, y) → (x, −y)", spoken: "Reflection in the x-axis changes the sign of the y-coordinate." },
            { label: "Image point:", expr: "(" + x + ", " + (-y) + ")", spoken: "The reflected point is " + x + " comma " + (-y) + "." }
          ]
        };
      }
    },
    rotation: {
      name: "Rotation",
      generate: function () {
        var x = randInt(1, 7);
        var y = randInt(1, 7);
        return {
          topicKey: "rotation", topicName: "Rotation",
          promptHeading: "Rotate the point 90° anticlockwise about the origin:",
          equation: "Point P(" + x + ", " + y + "); find the new x-coordinate",
          context: "A 90° anticlockwise rotation about the origin maps (x, y) to (−y, x).",
          answerLabel: "Your answer: new x-coordinate =",
          answer: -y, midValue: null,
          generalHint: "Use the rule (x, y) → (−y, x). The new x-coordinate is the opposite of the original y-coordinate.",
          steps: [
            { label: "Original point:", expr: "(" + x + ", " + y + ")", spoken: "The original point is " + x + " comma " + y + "." },
            { label: "Rotation rule:", expr: "(x, y) → (−y, x)", spoken: "For 90 degrees anticlockwise, the coordinates become negative y comma x." },
            { label: "Image point:", expr: "(" + (-y) + ", " + x + ")", spoken: "The image point is " + (-y) + " comma " + x + "." }
          ]
        };
      }
    },
    trigonometry: {
      name: "Trigonometry",
      generate: function () {
        var items = [
          { q: "sin 30°", value: 0.5, fraction: "1/2" },
          { q: "cos 60°", value: 0.5, fraction: "1/2" },
          { q: "tan 45°", value: 1, fraction: "1" }
        ];
        var item = items[randInt(0, items.length - 1)];
        return {
          topicKey: "trigonometry", topicName: "Trigonometry",
          promptHeading: "Find the exact trigonometric value:",
          equation: item.q,
          context: "Recall the standard trigonometric ratios for special angles.",
          answerLabel: "Your answer (decimal) =",
          answer: item.value, midValue: null,
          generalHint: item.q + " = " + item.fraction + " = " + item.value + ".",
          steps: [
            { label: "Identify the ratio:", expr: item.q, spoken: "We need the value of " + item.q + "." },
            { label: "Use the standard value:", expr: item.fraction, spoken: "The standard exact value is " + item.fraction + "." },
            { label: "Decimal form:", expr: "= " + item.value, spoken: "In decimal form, this is " + item.value + "." }
          ]
        };
      }
    },
    statistics: {
      name: "Statistics",
      generate: function () {
        var values = [randInt(2, 12), randInt(2, 12), randInt(2, 12), randInt(2, 12)];
        var sum = values.reduce(function (a, b) { return a + b; }, 0);
        var mean = sum / values.length;
        return {
          topicKey: "statistics", topicName: "Statistics",
          promptHeading: "Find the mean of the data:",
          equation: values.join(", "),
          context: "Add all the values and divide by the number of values.",
          answerLabel: "Your answer: mean =",
          answer: mean, midValue: sum,
          midHint: "You found the total. Divide " + sum + " by 4 because there are four values.",
          generalHint: "Mean = (" + values.join(" + ") + ") ÷ 4 = " + mean + ".",
          steps: [
            { label: "Add the values:", expr: values.join(" + ") + " = " + sum, spoken: "The sum of the values is " + sum + "." },
            { label: "Count the values:", expr: "4 values", spoken: "There are four values." },
            { label: "Calculate the mean:", expr: sum + " ÷ 4 = " + mean, spoken: "Divide " + sum + " by 4 to get " + mean + "." }
          ]
        };
      }
    },
    probability: {
      name: "Probability",
      generate: function () {
        var favourable = randInt(1, 5);
        var other = randInt(1, 5);
        var total = favourable + other;
        var answer = Math.round((favourable / total) * 100) / 100;
        return {
          topicKey: "probability", topicName: "Probability",
          promptHeading: "Find the probability as a decimal:",
          equation: "A bag has " + favourable + " blue counters and " + other + " red counters. Find P(blue).",
          context: "Probability = number of favourable outcomes ÷ total number of equally likely outcomes.",
          answerLabel: "Your answer (2 d.p.) =",
          answer: answer, midValue: favourable,
          midHint: "You identified the favourable outcomes. Divide " + favourable + " by " + total + " and round to 2 decimal places.",
          generalHint: "P(blue) = " + favourable + " ÷ " + total + " = " + answer + ".",
          steps: [
            { label: "Total counters:", expr: favourable + " + " + other + " = " + total, spoken: "There are " + total + " counters altogether." },
            { label: "Set up probability:", expr: favourable + " / " + total, spoken: "There are " + favourable + " favourable outcomes out of " + total + "." },
            { label: "Decimal:", expr: "= " + answer, spoken: "The probability as a decimal is " + answer + "." }
          ]
        };
      }
    }
  };

  function init() {
    try {
      var topicChips = document.querySelectorAll("#math-topic-chips .chip");
      var newBtn = document.getElementById("math-new-btn");
      var subtopicBadge = document.getElementById("math-subtopic-badge");
      var promptHeadingEl = document.getElementById("math-q-heading");
      var equationEl = document.getElementById("math-equation");
      var contextEl = document.getElementById("math-context");
      var answerLabelEl = document.getElementById("math-answer-label");
      var form = document.getElementById("math-form");
      var answerInput = document.getElementById("math-answer");
      var feedbackEl = document.getElementById("math-feedback");
      var showStepsBtn = document.getElementById("math-show-steps-btn");
      var similarBtn = document.getElementById("math-similar-btn");
      var stepsListEl = document.getElementById("math-steps-list");

      var canvas = document.getElementById("math-canvas");
      var ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
      var replayCanvasBtn = document.getElementById("canvas-replay-btn");
      var stepCanvasBtn = document.getElementById("canvas-step-btn");

      var playVoiceBtn = document.getElementById("voice-play-btn");
      var pauseVoiceBtn = document.getElementById("voice-pause-btn");
      var replayVoiceBtn = document.getElementById("voice-replay-btn");
      var voiceStatusEl = document.getElementById("voice-status");

      if (!form || !answerInput || !equationEl || !feedbackEl || !stepsListEl) return;

      var activeTopicKey = "realNumbers";
      var currentProblem = null;
      var visibleStepCount = 0;
      var completedLinesOnCanvas = 0;
      var animFrameId = null;

      function stopSpeech() {
        try {
          if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
          }
        } catch (err) {}
      }

      function speakSteps(steps) {
        try {
          if (!("speechSynthesis" in window)) {
            if (voiceStatusEl) voiceStatusEl.textContent = "Speech narration is not supported on this browser.";
            return;
          }
          stopSpeech();
          var text = steps.map(function (s) { return s.spoken; }).join(" ");
          var utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "en-KE";
          utterance.rate = 0.95;
          utterance.onstart = function () {
            if (voiceStatusEl) voiceStatusEl.textContent = "Speaking step-by-step explanation...";
          };
          utterance.onend = function () {
            if (voiceStatusEl) voiceStatusEl.textContent = "Finished reading explanation.";
          };
          window.speechSynthesis.speak(utterance);
        } catch (err) {}
      }

      function drawNotebookBase() {
        if (!ctx || !canvas) return;
        var w = canvas.width;
        var h = canvas.height;
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#FFFDF9";
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = "#DCE7FF";
        ctx.lineWidth = 1;
        for (var y = 52; y < h; y += 34) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }

        ctx.strokeStyle = "#FF8A00";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(64, 0);
        ctx.lineTo(64, h);
        ctx.stroke();
      }

      function drawStaticLine(step, lineIndex) {
        if (!ctx || !step) return;
        var y = 86 + lineIndex * 78;
        ctx.font = "700 17px Nunito, sans-serif";
        ctx.fillStyle = "#2457D6";
        ctx.fillText(step.label, 80, y);

        ctx.font = "800 22px Nunito, sans-serif";
        ctx.fillStyle = "#172554";
        ctx.fillText(step.expr, 245, y + 2);
      }

      function drawPenTip(x, y) {
        if (!ctx) return;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-0.45);
        ctx.fillStyle = "#2457D6";
        ctx.fillRect(0, -18, 34, 8);
        ctx.fillStyle = "#FF8A00";
        ctx.beginPath();
        ctx.moveTo(0, -18);
        ctx.lineTo(-9, -14);
        ctx.lineTo(0, -10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      function animateLine(step, lineIndex, onDone) {
        if (!ctx || !currentProblem || !step) {
          if (onDone) onDone();
          return;
        }
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = null;
        }

        var fullText = step.label + "   " + step.expr;
        var y = 86 + lineIndex * 78;
        var startX = 80;
        var totalChars = fullText.length;
        var progress = 0;

        function frame() {
          drawNotebookBase();
          for (var i = 0; i < lineIndex; i++) {
            if (currentProblem.steps[i]) drawStaticLine(currentProblem.steps[i], i);
          }

          progress += 0.9;
          var charsToShow = Math.min(totalChars, Math.floor(progress));
          ctx.font = "800 21px Nunito, sans-serif";
          ctx.fillStyle = "#172554";
          var partial = fullText.slice(0, charsToShow);
          ctx.fillText(partial, startX, y);
          drawPenTip(startX + ctx.measureText(partial).width, y);

          if (charsToShow < totalChars) {
            animFrameId = requestAnimationFrame(frame);
          } else {
            drawNotebookBase();
            for (var j = 0; j <= lineIndex; j++) {
              if (currentProblem.steps[j]) drawStaticLine(currentProblem.steps[j], j);
            }
            completedLinesOnCanvas = Math.max(completedLinesOnCanvas, lineIndex + 1);
            animFrameId = null;
            if (onDone) onDone();
          }
        }

        animFrameId = requestAnimationFrame(frame);
      }

      function animateAllSteps(speakAfter) {
        if (!currentProblem) return;
        completedLinesOnCanvas = 0;
        drawNotebookBase();

        function runAt(idx) {
          if (idx >= currentProblem.steps.length) {
            if (speakAfter) speakSteps(currentProblem.steps);
            return;
          }
          animateLine(currentProblem.steps[idx], idx, function () {
            runAt(idx + 1);
          });
        }

        runAt(0);
      }

      function renderStepsList() {
        if (!currentProblem) return;
        stepsListEl.textContent = "";
        currentProblem.steps.slice(0, visibleStepCount).forEach(function (st) {
          var li = document.createElement("li");
          li.textContent = st.label + " ";
          var strong = document.createElement("span");
          strong.className = "math";
          strong.textContent = st.expr;
          li.appendChild(strong);
          stepsListEl.appendChild(li);
        });
      }

      function generateForTopic(topicKey) {
        stopSpeech();
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = null;
        }

        activeTopicKey = TOPIC_GENERATORS[topicKey] ? topicKey : "realNumbers";
        currentProblem = TOPIC_GENERATORS[activeTopicKey].generate();
        visibleStepCount = 0;
        completedLinesOnCanvas = 0;

        topicChips.forEach(function (chip) {
          chip.classList.toggle("is-active", chip.getAttribute("data-topic") === activeTopicKey);
        });

        if (subtopicBadge) subtopicBadge.textContent = currentProblem.topicName;
        if (promptHeadingEl) promptHeadingEl.textContent = currentProblem.promptHeading;
        equationEl.textContent = currentProblem.equation;
        if (contextEl) contextEl.textContent = currentProblem.context;
        if (answerLabelEl) answerLabelEl.textContent = currentProblem.answerLabel;

        answerInput.value = "";
        feedbackEl.textContent = "";
        feedbackEl.className = "feedback";
        if (similarBtn) similarBtn.hidden = true;
        stepsListEl.textContent = "";

        drawNotebookBase();
        if (ctx) {
          ctx.font = "700 17px Nunito, sans-serif";
          ctx.fillStyle = "#172554";
          ctx.fillText("Topic: " + currentProblem.topicName, 80, 86);
          ctx.fillText("Enter your answer or tap 'Show worked steps' to animate.", 80, 124);
        }

        recordSafe({
          id: "math-gen-" + activeTopicKey + "-" + Date.now(),
          title: "Practised " + currentProblem.topicName + ": " + currentProblem.equation,
          subject: "Core Mathematics",
          topic: currentProblem.topicName,
          type: "math",
          url: "mathematics.html"
        });
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!currentProblem) return;

        var raw = answerInput.value.trim();
        var numeric = Number(raw);
        feedbackEl.className = "feedback";

        if (raw === "" || isNaN(numeric)) {
          feedbackEl.textContent = "Please enter a number first so we can check your working.";
          feedbackEl.classList.add("is-wrong");
          return;
        }

        var isCorrect = Math.abs(numeric - currentProblem.answer) < 0.05;

        recordSafe({
          id: "math-attempt-" + activeTopicKey + "-" + Date.now(),
          title: currentProblem.topicName + ": " + currentProblem.equation + (isCorrect ? " (Correct)" : " (Needs review)"),
          subject: "Mathematics",
          topic: currentProblem.topicName,
          type: "math",
          url: "mathematics.html",
          recordAttempt: true,
          correct: isCorrect
        });

        if (isCorrect) {
          feedbackEl.textContent = "Correct! " + currentProblem.answer + " is right. Want another question?";
          feedbackEl.classList.add("is-correct");
          if (similarBtn) similarBtn.hidden = false;
          visibleStepCount = currentProblem.steps.length;
          renderStepsList();
          animateAllSteps(false);
        } else if (typeof currentProblem.midValue === "number" && Math.abs(numeric - currentProblem.midValue) < 0.05) {
          feedbackEl.textContent = currentProblem.midHint;
          feedbackEl.classList.add("is-wrong");
          if (similarBtn) similarBtn.hidden = false;
          visibleStepCount = Math.max(visibleStepCount, 2);
          renderStepsList();
          animateLine(currentProblem.steps[1], 1, function () {
            speakSteps(currentProblem.steps.slice(0, 2));
          });
        } else {
          feedbackEl.textContent = "Not quite yet: " + currentProblem.generalHint;
          feedbackEl.classList.add("is-wrong");
          if (similarBtn) similarBtn.hidden = false;
          visibleStepCount = Math.max(visibleStepCount, 1);
          renderStepsList();
          animateLine(currentProblem.steps[0], 0, function () {
            speakSteps([currentProblem.steps[0]]);
          });
        }
      });

      topicChips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          generateForTopic(chip.getAttribute("data-topic"));
        });
      });

      if (newBtn) {
        newBtn.addEventListener("click", function () {
          generateForTopic(activeTopicKey);
        });
      }

      if (showStepsBtn) {
        showStepsBtn.addEventListener("click", function () {
          if (!currentProblem) return;
          visibleStepCount = currentProblem.steps.length;
          renderStepsList();
          if (similarBtn) similarBtn.hidden = false;
          animateAllSteps(true);
        });
      }

      if (similarBtn) {
        similarBtn.addEventListener("click", function () {
          generateForTopic(activeTopicKey);
          answerInput.focus();
        });
      }

      if (replayCanvasBtn) {
        replayCanvasBtn.addEventListener("click", function () {
          if (!currentProblem) return;
          visibleStepCount = currentProblem.steps.length;
          renderStepsList();
          animateAllSteps(false);
        });
      }

      if (stepCanvasBtn) {
        stepCanvasBtn.addEventListener("click", function () {
          if (!currentProblem) return;
          var nextIdx = Math.min(completedLinesOnCanvas, currentProblem.steps.length - 1);
          visibleStepCount = Math.max(visibleStepCount, nextIdx + 1);
          renderStepsList();
          animateLine(currentProblem.steps[nextIdx], nextIdx, function () {
            speakSteps([currentProblem.steps[nextIdx]]);
          });
        });
      }

      if (playVoiceBtn) {
        playVoiceBtn.addEventListener("click", function () {
          if (currentProblem) speakSteps(currentProblem.steps);
        });
      }

      if (pauseVoiceBtn) {
        pauseVoiceBtn.addEventListener("click", function () {
          try {
            if ("speechSynthesis" in window) {
              if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
                if (voiceStatusEl) voiceStatusEl.textContent = "Resumed narration.";
              } else if (window.speechSynthesis.speaking) {
                window.speechSynthesis.pause();
                if (voiceStatusEl) voiceStatusEl.textContent = "Paused narration.";
              }
            }
          } catch (err) {}
        });
      }

      if (replayVoiceBtn) {
        replayVoiceBtn.addEventListener("click", function () {
          if (currentProblem) speakSteps(currentProblem.steps);
        });
      }

      generateForTopic("realNumbers");
    } catch (fatalErr) {
      var eq = document.getElementById("math-equation");
      var fb = document.getElementById("math-feedback");
      if (eq) eq.textContent = "2x + 3 = 11";
      if (fb) {
        fb.textContent = "Script notice: " + (fatalErr && fatalErr.message ? fatalErr.message : "check mathematics.js");
        fb.className = "feedback is-wrong";
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
