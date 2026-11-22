# TUSOME
**Understand more. Achieve more.**

TUSOME is an independent, browser-based learning platform prototype designed to help Kenyan Grade 10 Senior School learners explore concepts, practise questions, receive feedback, and review their learning activity.

## Current pilot scope

The current Grade 10 pilot covers five subjects:
- English (Core Subject)
- Core Mathematics
- Biology
- Chemistry
- Physics

The interface and learning content in this version are in English. The pilot focuses on selected Core and STEM subjects; it is not a complete Senior School curriculum and does not cover every pathway or every Grade 10 learning outcome.

## What learners can try

- Set up a Grade 10 learner profile and select subjects.
- Browse the five-subject directory and search curriculum strands and topics.
- Explore an English course map organised into nine themes, four strands and 45 sub-strands, with 14 guided lessons.
- Explore the Grade 10 STEM topic maps: 14 Core Mathematics topics, 10 Biology topics, 8 Chemistry topics and 13 Physics topics.
- Open guided lessons with learning outcomes, explanations, worked examples, common mistakes, alternative explanations and quick checks.
- Practise subject questions and receive immediate feedback.
- Explore interactive Core Mathematics questions, hints, worked steps, handwriting-style working and optional voice narration.
- Review locally recorded lesson completions and practice attempts on the dashboard and progress page.
- Reopen cached core pages after an initial successful online visit, subject to browser support and cache availability.

## Curriculum references and content

The course maps are based on the Grade 10 subject designs listed in the Kenya Institute of Curriculum Development (KICD) Senior School curriculum library. The current map references the July 2025 Grade 10 designs where available. See [CURRICULUM-SOURCES.md](CURRICULUM-SOURCES.md) for the source links.

TUSOME's explanations, worked examples, activities and practice questions are independently prepared learning support. They are not copied from KICD curriculum designs or textbooks. Curriculum labels and learning content should be reviewed by qualified subject teachers before broad classroom use.

## Technology

TUSOME is built with HTML, CSS and vanilla JavaScript. Learner profile and activity data are stored locally in the browser using localStorage. A service worker provides basic caching for repeat visits and offline reopening.

## Run locally

1. Download or clone this repository.
2. Serve the repository folder with a local web server (rather than opening the HTML files directly).
3. Open `index.html` in a modern browser.
4. Visit the core pages while online once so the service worker can install and cache the listed files.

GitHub Pages deployment: https://rebeccamagiar04.github.io/Tusome-Foundation/

## Current limitations

- This is a prototype/pilot, not a complete Grade 10 course or a replacement for classroom teaching, approved learning materials or teacher guidance.
- The course maps are broader than the current guided lesson library. Related sub-strands may share a guided lesson, and some areas still need more detailed topic-specific activities, examples and assessments.
- Question generators use a finite set of templates; they do not create unlimited unique questions. Subject-teacher review and learner testing are still needed.
- Progress is stored in the current browser on the current device; it is not synced to an account or across devices.
- Offline support is basic. The first successful online visit is required to populate the cache, and external resources or network-dependent features may not work offline.
- The English interface and learning content are in English; this version does not attempt a full Kiswahili translation.
- TUSOME is an independent educational project and is not officially approved or endorsed by KICD.

## Project purpose

TUSOME aims to make learning more understandable and engaging through clear explanations, guided practice and accessible browser-based learning tools.


## Subject-specific learning pages (development branch)

The deep-subject-learning branch introduces dedicated learning pages for Biology, Chemistry, Physics and Core Mathematics, alongside the existing English learning page. These pages use a shared accessible presentation engine and the common `style.css`, while each subject has its own HTML page and subject-specific JavaScript content.

The new science and mathematics lessons are organised around learning outcomes, concept explanations, applications or worked examples, common misconceptions and checks for understanding. The existing Mathematics practice generator remains a separate practice experience.

This is an in-progress expansion, not a claim that every learning outcome has already received a complete lesson. Content must be checked against the current KICD Grade 10 designs, reviewed for scientific and mathematical accuracy, and tested on mobile before release.
