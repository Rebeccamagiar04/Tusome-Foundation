# TUSOME
**Understand more. Achieve more.**

TUSOME is an independent, browser-based learning platform prototype designed to help Kenyan Grade 10 Senior School learners explore concepts, practise questions, receive feedback, and review their learning activity.

## Current pilot scope
The current pilot focuses on five subjects:
- Mathematics
- English
- Biology
- Chemistry
- Physics

The interface and learning content in this version are in English. The pilot is a focused demonstration, not a complete Senior School curriculum.

## What learners can try
- Set up a Grade 10 learner profile and select subjects.
- Browse the five-subject directory.
- Open guided lessons with learning outcomes, explanations, worked examples, and quick checks.
- Practise subject questions and receive immediate feedback.
- Explore interactive Mathematics questions, hints, worked steps, handwriting-style working, and optional voice narration.
- Review locally recorded lesson completions and practice attempts on the dashboard and progress page.
- Reopen cached core pages after an initial successful online visit, subject to browser support and cache availability.

## Technology
TUSOME is built with HTML, CSS, and vanilla JavaScript. Learner profile and activity data are stored locally in the browser using localStorage. A service worker provides basic caching for repeat visits and offline reopening.

## Run locally
1. Download or clone this repository.
2. Serve the repository folder with a local web server (rather than opening the HTML files directly).
3. Open `index.html` in a modern browser.
4. Visit the core pages while online once so the service worker can install and cache the listed files.

GitHub Pages deployment: https://rebeccamagiar04.github.io/Tusome-Foundation/

## Current limitations
- This is a prototype/pilot, not a complete Grade 10 course or a fully populated subject platform.
- Some subjects have introductory lesson and practice content only; content depth and curriculum mapping still need review.
- Progress is stored in the current browser on the current device; it is not synced to an account or across devices.
- Offline support is basic. The first successful online visit is required to populate the cache, and external resources or network-dependent features may not work offline.
- The English interface and learning content have not been presented as a Kiswahili translation in this version.
- TUSOME is an independent educational project and is not officially approved or endorsed by the Kenya Institute of Curriculum Development (KICD).

## Project purpose
TUSOME aims to make learning more understandable and engaging through clear explanations, guided practice, and accessible browser-based learning tools.
