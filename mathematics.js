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
    linear: {
      name: "Linear Equations",
      generate: function () {
        var a = randInt(2, 7);
        var x = randInt(2, 12);
        var isAdd = Math.random() < 0.5;
        var b = randInt(2, 15);
        var c = isAdd ? (a * x + b) : (a * x - b);
        var mid = isAdd ? (c - b) : (c + b);
        var opWord = isAdd ? "Subtract" : "Add";
        var sign = isAdd ? "+" : "-";

        return {
          topicKey: "linear",
          topicName: "Linear Equations",
          promptHeading: "Solve for x:",
          equation: a + "x " + sign + " " + b + " = " + c,
          context: "Undo " + (isAdd ? "addition" : "subtraction") + " first, then divide both sides by " + a + ".",
          answerLabel: "Your answer: x =",
          answer: x,
          midValue: mid,
          midHint: "Good start! " + a + "x = " + mid + " is before the final division. Now divide " + mid + " by " + a + " to get x.",
          generalHint: opWord + " " + b + " " + (isAdd ? "from" : "to") + " both sides first so " + a + "x is alone.",
          steps: [
            { label: "Given:", expr: a + "x " + sign + " " + b + " = " + c, spoken: "We start with " + a + " x " + (isAdd ? "plus " : "minus ") + b + " equals " + c + "." },
            { label: opWord + " " + b + ":", expr: a + "x = " + mid, spoken: opWord + " " + b + " on both sides to get " + a + " x equals " + mid + "." },
            { label: "Divide by " + a + ":", expr: "x = " + x, spoken: "Divide both sides by " + a + ". " + mid + " divided by " + a + " gives x equals " + x + "." }
          ]
        };
      }
    },

    substitution: {
      name: "Algebraic Substitution",
      generate: function () {
        var a = randInt(2, 6);
        var x = randInt(2, 8);
        var b = randInt(1, 12);
        var isAdd = Math.random() < 0.5;
        var prod = a * x;
        var ans = isAdd ? (prod + b) : (prod - b);
        var sign = isAdd ? "+" : "-";

        return {
          topicKey: "substitution",
          topicName: "Algebraic Substitution",
          promptHeading: "Evaluate the expression:",
          equation: a + "x " + sign + " " + b + "  (when x = " + x + ")",
          context: "Replace x with " + x + ", multiply first, then " + (isAdd ? "add " : "subtract ") + b + ".",
          answerLabel: "Your answer: Value =",
          answer: ans,
          midValue: prod,
          midHint: "You multiplied " + a + " * " + x + " = " + prod + " correctly! Next " + (isAdd ? "add " : "subtract ") + b + ".",
          generalHint: "Substitute x = " + x + " into " + a + "(" + x + ") " + sign + " " + b + " and multiply first.",
          steps: [
            { label: "Substitute x = " + x + ":", expr: a + "(" + x + ") " + sign + " " + b, spoken: "Substitute x equals " + x + " into the expression." },
            { label: "Multiply:", expr: prod + " " + sign + " " + b, spoken: a + " times " + x + " equals " + prod + "." },
            { label: "Simplify:", expr: "= " + ans, spoken: prod + " " + (isAdd ? "plus " : "minus ") + b + " equals " + ans + "." }
          ]
        };
      }
    },

    indices: {
      name: "Indices & Powers",
      generate: function () {
        var isDiv = Math.random() < 0.45;
        var base = randInt(2, 5);

        if (!isDiv) {
          var m = randInt(2, 4);
          var n = randInt(1, 3);
          var totalPow = m + n;
          var ans = Math.pow(base, totalPow);

          return {
            topicKey: "indices",
            topicName: "Indices & Powers",
            promptHeading: "Simplify and evaluate:",
            equation: base + "^" + m + " * " + base + "^" + n,
            context: "Same base (" + base + "): add the powers (" + m + " + " + n + "), then evaluate.",
            answerLabel: "Your answer: Value =",
            answer: ans,
            midValue: totalPow,
            midHint: "You found the combined power " + totalPow + "! Now evaluate " + base + "^" + totalPow + ".",
            generalHint: "Add indices " + m + " + " + n + " = " + totalPow + ", then find " + base + " to the power " + totalPow + ".",
            steps: [
              { label: "Given:", expr: base + "^" + m + " * " + base + "^" + n, spoken: base + " to the power " + m + " times " + base + " to the power " + n + "." },
              { label: "Add indices:", expr: base + "^(" + m + "+" + n + ") = " + base + "^" + totalPow, spoken: "Add " + m + " and " + n + " to get " + base + " to the power " + totalPow + "." },
              { label: "Evaluate:", expr: "= " + ans, spoken: base + " to the power " + totalPow + " equals " + ans + "." }
            ]
          };
        }

        var nDiv = randInt(2, 3);
        var mDiv = nDiv + randInt(1, 2);
        var diffPow = mDiv - nDiv;
        var ansDiv = Math.pow(base, diffPow);

        return {
          topicKey: "indices",
          topicName: "Indices & Powers",
          promptHeading: "Simplify and evaluate:",
          equation: base + "^" + mDiv + " / " + base + "^" + nDiv,
          context: "Same base (" + base + "): subtract the powers (" + mDiv + " - " + nDiv + "), then evaluate.",
          answerLabel: "Your answer: Value =",
          answer: ansDiv,
          midValue: diffPow,
          midHint: "You found the power " + diffPow + "! Now calculate " + base + "^" + diffPow + ".",
          generalHint: "Subtract indices: " + mDiv + " - " + nDiv + " = " + diffPow + ", then evaluate " + base + "^" + diffPow + ".",
          steps: [
            { label: "Given:", expr: base + "^" + mDiv + " / " + base + "^" + nDiv, spoken: base + " to the power " + mDiv + " divided by " + base + " to the power " + nDiv + "." },
            { label: "Subtract indices:", expr: base + "^(" + mDiv + "-" + nDiv + ") = " + base + "^" + diffPow, spoken: "Subtract " + nDiv + " from " + mDiv + " to get " + base + " to the power " + diffPow + "." },
            { label: "Evaluate:", expr: "= " + ansDiv, spoken: base + " to the power " + diffPow + " equals " + ansDiv + "." }
          ]
        };
      }
    },

    quadratics: {
      name: "Quadratic Expressions I",
      generate: function () {
        var r1 = randInt(1, 4);
        var r2 = randInt(1, 4);
        var x = randInt(2, 6);
        var b = r1 + r2;
        var c = r1 * r2;
        var ans = (x + r1) * (x + r2);
        var xSq = x * x;

        return {
          topicKey: "quadratics",
          topicName: "Quadratic Expressions I",
          promptHeading: "Evaluate the quadratic expression:",
          equation: "x^2 + " + b + "x + " + c + "  (when x = " + x + ")",
          context: "Substitute x = " + x + ": compute x^2, then " + b + "x, then add " + c + ".",
          answerLabel: "Your answer: Value =",
          answer: ans,
          midValue: xSq,
          midHint: "x^2 = " + xSq + " is right! Next add " + b + " * " + x + " (" + (b * x) + ") and " + c + ".",
          generalHint: "Substitute x = " + x + ": (" + x + ")^2 + " + b + "(" + x + ") + " + c + ".",
          steps: [
            { label: "Substitute x = " + x + ":", expr: "(" + x + ")^2 + " + b + "(" + x + ") + " + c, spoken: "Substitute x equals " + x + " into the quadratic expression." },
            { label: "Compute terms:", expr: xSq + " + " + (b * x) + " + " + c, spoken: "x squared is " + xSq + ", " + b + " times " + x + " is " + (b * x) + ", plus " + c + "." },
            { label: "Total:", expr: "= " + ans, spoken: "Adding all terms gives " + ans + "." }
          ]
        };
      }
    },

    enlargement: {
      name: "Similarity & Enlargement",
      generate: function () {
        var lsf = randInt(2, 4);
        var useVolume = Math.random() < 0.45;
        var origVal = useVolume ? randInt(4, 12) : randInt(5, 18);
        var factor = useVolume ? Math.pow(lsf, 3) : Math.pow(lsf, 2);
        var ans = origVal * factor;

        return {
          topicKey: "enlargement",
          topicName: "Similarity & Enlargement",
          promptHeading: useVolume ? "Find the enlarged Volume:" : "Find the enlarged Area:",
          equation: (useVolume ? "Original Volume = " + origVal + " cm^3" : "Original Area = " + origVal + " cm^2") + ", L.S.F = " + lsf,
          context: useVolume
            ? "Volume Scale Factor (V.S.F) = (L.S.F)^3 = " + lsf + "^3 = " + factor + "."
            : "Area Scale Factor (A.S.F) = (L.S.F)^2 = " + lsf + "^2 = " + factor + ".",
          answerLabel: useVolume ? "New Volume (cm^3) =" : "New Area (cm^2) =",
          answer: ans,
          midValue: origVal * lsf,
          midHint: "Multiplying by " + lsf + " only scales one dimension. Use " + (useVolume ? "V.S.F = " + lsf + "^3 = " + factor : "A.S.F = " + lsf + "^2 = " + factor) + ".",
          generalHint: "First find " + (useVolume ? "V.S.F = " + lsf + "^3 = " + factor : "A.S.F = " + lsf + "^2 = " + factor) + ", then multiply by " + origVal + ".",
          steps: [
            { label: "Linear Scale Factor:", expr: "L.S.F = " + lsf, spoken: "The linear scale factor is " + lsf + "." },
            { label: useVolume ? "V.S.F = (L.S.F)^3:" : "A.S.F = (L.S.F)^2:", expr: lsf + (useVolume ? "^3 = " : "^2 = ") + factor, spoken: (useVolume ? "Cube " : "Square ") + lsf + " to get " + factor + "." },
            { label: "Enlarged value:", expr: origVal + " * " + factor + " = " + ans, spoken: "Multiply " + origVal + " by " + factor + " to get " + ans + "." }
          ]
        };
      }
    },

    ratios: {
      name: "Ratios & Proportions",
      generate: function () {
        var r1 = randInt(2, 5);
        var r2 = randInt(3, 7);
        var multiplier = randInt(4, 12);
        var total = (r1 + r2) * multiplier;
        var sumParts = r1 + r2;
        var share1 = r1 * multiplier;
        var share2 = r2 * multiplier;

        return {
          topicKey: "ratios",
          topicName: "Ratios & Proportions",
          promptHeading: "Share in a given ratio:",
          equation: "Share " + total + " in ratio " + r1 + " : " + r2 + " (first share)",
          context: "Add the parts (" + r1 + " + " + r2 + "), divide " + total + " by the total parts, then multiply by " + r1 + ".",
          answerLabel: "Your answer: First share =",
          answer: share1,
          midValue: multiplier,
          midHint: "You found 1 part = " + multiplier + "! Now multiply " + multiplier + " by " + r1 + " for the first share.",
          generalHint: "Total parts = " + sumParts + ". Divide " + total + " / " + sumParts + " = " + multiplier + ", then multiply by " + r1 + ".",
          steps: [
            { label: "Total parts:", expr: r1 + " + " + r2 + " = " + sumParts + " parts", spoken: "Add " + r1 + " and " + r2 + " to get " + sumParts + " parts." },
            { label: "One part:", expr: total + " / " + sumParts + " = " + multiplier, spoken: "Divide " + total + " by " + sumParts + " to get " + multiplier + "." },
            { label: "First share:", expr: r1 + " * " + multiplier + " = " + share1 + "  (second: " + share2 + ")", spoken: "Multiply " + r1 + " by " + multiplier + " to get " + share1 + "." }
          ]
        };
      }
    },

    geometry: {
      name: "Area & Perimeter",
      generate: function () {
        var isArea = Math.random() < 0.6;
        var length = randInt(6, 16);
        var width = randInt(3, length - 1);

        if (isArea) {
          var area = length * width;
          var perim = 2 * (length + width);
          return {
            topicKey: "geometry",
            topicName: "Area & Perimeter",
            promptHeading: "Calculate the Area (cm^2):",
            equation: "Rectangle: length = " + length + " cm, width = " + width + " cm",
            context: "Area = length * width.",
            answerLabel: "Your answer: Area (cm^2) =",
            answer: area,
            midValue: perim,
            midHint: perim + " cm is the perimeter. For Area, multiply " + length + " * " + width + ".",
            generalHint: "Multiply length * width = " + length + " * " + width + ".",
            steps: [
              { label: "Formula:", expr: "Area = length * width", spoken: "Area of a rectangle is length times width." },
              { label: "Substitute:", expr: "Area = " + length + " * " + width, spoken: length + " times " + width + "." },
              { label: "Result:", expr: "Area = " + area + " cm^2", spoken: "Equals " + area + " square centimetres." }
            ]
          };
        }

        var perim2 = 2 * (length + width);
        var halfPerim = length + width;
        return {
          topicKey: "geometry",
          topicName: "Area & Perimeter",
          promptHeading: "Calculate the Perimeter (cm):",
          equation: "Rectangle: length = " + length + " cm, width = " + width + " cm",
          context: "Perimeter = 2(length + width).",
          answerLabel: "Your answer: Perimeter (cm) =",
          answer: perim2,
          midValue: halfPerim,
          midHint: halfPerim + " cm is one length plus one width—multiply by 2 for all four sides.",
          generalHint: "Add " + length + " + " + width + " = " + halfPerim + ", then multiply by 2.",
          steps: [
            { label: "Formula:", expr: "P = 2(length + width)", spoken: "Perimeter is 2 times length plus width." },
            { label: "Add sides:", expr: "P = 2(" + length + " + " + width + ") = 2(" + halfPerim + ")", spoken: length + " plus " + width + " is " + halfPerim + "." },
            { label: "Result:", expr: "P = " + perim2 + " cm", spoken: "2 times " + halfPerim + " equals " + perim2 + " centimetres." }
          ]
        };
      }
    },

    probability: {
      name: "Probability I",
      generate: function () {
        var fav = randInt(2, 5);
        var other = randInt(3, 5);
        var total = fav + other;
        var dec = Math.round((fav / total) * 10) / 10;

        return {
          topicKey: "probability",
          topicName: "Probability I",
          promptHeading: "Probability as a decimal (1 d.p.):",
          equation: "Bag has " + fav + " blue balls and " + other + " red balls. P(blue) = ?",
          context: "P(blue) = favourable outcomes / total outcomes (" + fav + " / " + total + ").",
          answerLabel: "Your answer (1 d.p.) =",
          answer: dec,
          midValue: fav,
          midHint: fav + " is the number of blue balls. Divide " + fav + " by total balls (" + total + ").",
          generalHint: "Total balls = " + fav + " + " + other + " = " + total + ". Divide " + fav + " / " + total + " to 1 decimal place.",
          steps: [
            { label: "Total outcomes:", expr: fav + " + " + other + " = " + total + " balls", spoken: "There are " + total + " balls in total." },
            { label: "Probability:", expr: "P(blue) = " + fav + " / " + total, spoken: fav + " blue balls out of " + total + " total balls." },
            { label: "Decimal (1 d.p.):", expr: "= " + dec, spoken: fav + " divided by " + total + " is about " + dec + "." }
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

      var activeTopicKey = "linear";
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

        activeTopicKey = TOPIC_GENERATORS[topicKey] ? topicKey : "linear";
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
          subject: "Mathematics",
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

      generateForTopic("linear");
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
