// Handles English / Kiswahili switching.
// Depends on: js/translations.js (must load first).
// Any element with data-i18n="some.key" gets its text replaced from the translations.

(function () {
  const STORAGE_KEY = "tusome-lang";
  const DEFAULT_LANG = "en";
  const all = window.TUSOME_TRANSLATIONS;
  let current = DEFAULT_LANG;

  // t("key") returns the text in the current language.
  // t("key", {n: 3}) also fills in {n} inside the text.
  function t(key, params) {
    const table = all[current] || {};
    let text = table[key];
    if (text === undefined) text = all[DEFAULT_LANG][key];   // fall back to English
    if (text === undefined) text = key;                      // last resort: show the key
    if (params) {
      Object.keys(params).forEach(function (name) {
        text = text.split("{" + name + "}").join(params[name]);
      });
    }
    return text;
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    const select = document.getElementById("lang-select");
    if (select) select.value = current;
    // Tell other scripts (like the maths demo) that the language changed
    document.dispatchEvent(new CustomEvent("languagechange"));
  }

  function setLanguage(lang) {
    if (!all[lang]) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage may be blocked */ }
    apply();
  }

  // Remember the learner's choice from last time
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && all[saved]) current = saved;
  } catch (e) { /* ignore */ }

  window.Tusome = { t: t, setLanguage: setLanguage };

  const select = document.getElementById("lang-select");
  if (select) {
    select.addEventListener("change", function () { setLanguage(select.value); });
  }

  apply();
})();
