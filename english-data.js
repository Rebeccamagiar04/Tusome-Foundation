// All Grade 10 English content lives in this file.
// english.js reads it and builds the page. To add a lesson later, add one object
// to ENGLISH.lessons and put its id in the "lesson" field of the matching course-map item.
//
// SOURCE: KICD Senior School Curriculum Design, Grade 10 English (July 2025)
// https://drive.google.com/file/d/1OFcHiuBagmwsfkqWe2aaDCaf_4JR4tt7/preview
// The course map (strands, themes and sub-strands) follows the 2025 design; suggested lesson
// numbers may differ by version. The wording of the outcomes, explanations, examples and questions is our own.

window.ENGLISH = {

  source: {
    title: "KICD Senior School Curriculum Design: Grade 10 English (July 2025)",
    url: "https://drive.google.com/file/d/1OFcHiuBagmwsfkqWe2aaDCaf_4JR4tt7/preview"
  },

  // The four strands and their suggested number of lessons
  strands: [
    { name: "Listening and Speaking", lessons: 64, text: "Listening for meaning, speaking fluently, pronunciation, and good manners when we talk." },
    { name: "Reading", lessons: 36, text: "Reading for speed, understanding, enjoyment and research, including study skills." },
    { name: "Grammar in Use", lessons: 40, text: "Word classes, phrases, clauses and sentences, and how they work together." },
    { name: "Writing", lessons: 40, text: "Spelling, punctuation, paragraphs, and creative and everyday (functional) writing." }
  ],

  // The nine themes. Each has five sub-strands (one or two per strand).
  // "lesson" is the id of an interactive lesson below, or null if it is coming soon.
  themes: [
    { no: 1, title: "Etiquette", topic: "Social", items: [
      { strand: "Listening and Speaking", name: "Extensive listening", lessons: 3, focus: "Picking out key information, characters, places and events from recordings.", lesson: "listening-for-meaning" },
      { strand: "Listening and Speaking", name: "Speaking: etiquette", lessons: 4, focus: "Using polite language in different settings; the sounds /ɒ/ and /ɔ:/.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Reading fluency", lessons: 4, focus: "Previewing, skimming and scanning; collocations and binomials.", lesson: "reading-fluency" },
      { strand: "Grammar in Use", name: "Word classes", lessons: 5, focus: "Nouns, pronouns and determiners.", lesson: "word-classes" },
      { strand: "Writing", name: "Sentence fluency", lessons: 4, focus: "Comma splices, run-on sentences and run-on lines.", lesson: "sentence-fluency" }
    ]},
    { no: 2, title: "Environment", topic: "Climate change", items: [
      { strand: "Listening and Speaking", name: "Critical listening", lessons: 3, focus: "Working out the speaker, context and intention; choosing key points; avoiding distractions.", lesson: "critical-listening" },
      { strand: "Listening and Speaking", name: "Conversational skills", lessons: 4, focus: "Discourse markers, idea connectors and clear conversational turn-taking.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Extensive reading", lessons: 4, focus: "Choosing and previewing non-literary texts to read for general understanding.", lesson: "sq4r" },
      { strand: "Grammar in Use", name: "Word classes", lessons: 5, focus: "Verbs (main, auxiliary, regular, irregular, phrasal) and adverbs of time, place and manner.", lesson: "word-classes" },
      { strand: "Writing", name: "Mechanics of writing: spelling", lessons: 4, focus: "Spelling rules; abbreviations and acronyms; commonly misspelt and confused words.", lesson: "spelling-and-punctuation" }
    ]},
    { no: 3, title: "Artificial Intelligence and Society", topic: "Healthcare", items: [
      { strand: "Listening and Speaking", name: "Intensive listening", lessons: 4, focus: "Listening for specific details such as keywords, facts, fixed phrases and figurative language.", lesson: "listening-for-meaning" },
      { strand: "Listening and Speaking", name: "Speaking fluency", lessons: 3, focus: "Clear pronunciation, homographs, public speaking and appropriate non-verbal cues.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Extensive reading", lessons: 4, focus: "Reference materials: dictionary, thesaurus, atlas, manual, newspaper, encyclopedia.", lesson: "reference-skills" },
      { strand: "Grammar in Use", name: "Word classes", lessons: 5, focus: "Adjectives and simple prepositions.", lesson: "verbs-adverbs" },
      { strand: "Writing", name: "Elements of effective writing", lessons: 4, focus: "Cohesion and paragraph development.", lesson: "paragraph-cohesion" }
    ]},
    { no: 4, title: "Travel", topic: "Adventure", items: [
      { strand: "Listening and Speaking", name: "Selective listening", lessons: 3, focus: "Picking out instructions and directions.", lesson: "selective-listening" },
      { strand: "Listening and Speaking", name: "Conversational skills", lessons: 4, focus: "Changing the topic, giving and receiving feedback, formal and informal register; the letter 's' and its sounds.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Study skills", lessons: 4, focus: "The SQ4R method, note making, summaries and reading visuals.", lesson: "sq4r" },
      { strand: "Grammar in Use", name: "Phrases", lessons: 4, focus: "Noun phrases and verb phrases.", lesson: "phrases-clauses-sentences" },
      { strand: "Writing", name: "Mechanics of writing: punctuation", lessons: 5, focus: "Quotation marks, dashes, hyphens, slashes and capital letters.", lesson: "spelling-and-punctuation" }
    ]},
    { no: 5, title: "Careers", topic: "Public sector", items: [
      { strand: "Listening and Speaking", name: "Interactive listening", lessons: 3, focus: "Turn-taking, negotiating and clarifying meaning, showing empathy.", lesson: "interactive-listening" },
      { strand: "Listening and Speaking", name: "Speaking: etiquette and pronunciation", lessons: 4, focus: "Conducting meetings politely; the sounds /tʃ/, /dʒ/ and /ʒ/.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Intensive reading", lessons: 4, focus: "Comprehension strategies; idioms, compound words and proverbs.", lesson: "sq4r" },
      { strand: "Grammar in Use", name: "Phrases", lessons: 5, focus: "Adverb, adjective and prepositional phrases.", lesson: "phrases-clauses-sentences" },
      { strand: "Writing", name: "The writing process", lessons: 4, focus: "Prewriting, drafting, revising, editing and publishing, for example an appreciation letter.", lesson: "writing-process" }
    ]},
    { no: 6, title: "Culture", topic: "Values and beliefs", items: [
      { strand: "Listening and Speaking", name: "Responsive listening", lessons: 3, focus: "Listening to solve problems and linking what we hear to our own experience.", lesson: "listening-for-meaning" },
      { strand: "Listening and Speaking", name: "Pronunciation and syllabic stress", lessons: 4, focus: "Stress in words; the sounds /ʊ/ and /u:/.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Reading fluency", lessons: 4, focus: "Expressive reading: expression, speed, accuracy, pace, volume and intonation.", lesson: "reading-fluency" },
      { strand: "Grammar in Use", name: "Clauses", lessons: 4, focus: "Relative clauses and adverbial clauses.", lesson: "phrases-clauses-sentences" },
      { strand: "Writing", name: "Creative writing", lessons: 5, focus: "Descriptive and narrative essays; verbs made from other word classes.", lesson: "creative-writing" }
    ]},
    { no: 7, title: "Sports and Games", topic: "Popular sports", items: [
      { strand: "Listening and Speaking", name: "Critical listening", lessons: 4, focus: "Telling facts from opinions.", lesson: "critical-listening" },
      { strand: "Listening and Speaking", name: "Pronunciation and emphatic stress", lessons: 4, focus: "Sentence stress and emphasis; the sounds /f/, /ŋ/ and /ŋg/.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Intensive reading", lessons: 4, focus: "Transition words; denotative and connotative meaning.", lesson: "sq4r" },
      { strand: "Grammar in Use", name: "Clauses", lessons: 4, focus: "Noun clauses.", lesson: "phrases-clauses-sentences" },
      { strand: "Writing", name: "Functional writing", lessons: 4, focus: "Letters of complaint, request and inquiry.", lesson: "functional-letters" }
    ]},
    { no: 8, title: "Health and Safety", topic: "Personal", items: [
      { strand: "Listening and Speaking", name: "Intensive listening and viewing", lessons: 4, focus: "Listening for understanding; using visuals and non-verbal cues.", lesson: "listening-for-meaning" },
      { strand: "Listening and Speaking", name: "Speaking fluency", lessons: 3, focus: "The sound /i:/; synonyms, antonyms and homophones; telling a story fluently.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Extensive reading: library skills", lessons: 4, focus: "Starting research and finding materials in a library.", lesson: "reference-skills" },
      { strand: "Grammar in Use", name: "Sentence structure", lessons: 4, focus: "Simple sentence patterns (SV, SVO, SVC, SVOO, SVOA) and compound sentences.", lesson: "phrases-clauses-sentences" },
      { strand: "Writing", name: "Functional writing", lessons: 5, focus: "Simple reports, memos and emails with attachments.", lesson: "functional-writing" }
    ]},
    { no: 9, title: "Income", topic: "Types and sources", items: [
      { strand: "Listening and Speaking", name: "Selective listening", lessons: 3, focus: "Filtering and extracting specific information.", lesson: "selective-listening" },
      { strand: "Listening and Speaking", name: "Speaking fluency", lessons: 4, focus: "Oral presentations and intonation; the sounds /ð/ and /θ/.", lesson: "speaking-etiquette" },
      { strand: "Reading", name: "Critical and close reading", lessons: 4, focus: "Purpose, audience and attitude; phrasal verbs and binomial expressions.", lesson: "sq4r" },
      { strand: "Grammar in Use", name: "Sentences", lessons: 4, focus: "Active and passive sentences; subject-verb agreement.", lesson: "sv-agreement" },
      { strand: "Writing", name: "Functional writing", lessons: 5, focus: "A notice of a meeting, an agenda and minutes.", lesson: "functional-writing" }
    ]}
  ],

  // ---------------------------------------------------------------
  // INTERACTIVE LESSONS
  // ---------------------------------------------------------------
  lessons: [

    // ===== 1. Word classes =====
    {
      id: "word-classes",
      title: "Nouns, pronouns and determiners",
      where: "Theme 1: Etiquette. Grammar in Use, Word classes",
      outcomes: [
        "Sort nouns into types: common or proper, count or non-count, concrete or abstract.",
        "Recognise the main kinds of pronouns.",
        "Tell whether a word is working as a pronoun or as a determiner."
      ],
      blocks: [
        { title: "Nouns name things", text: "A noun names a person, place, thing or idea. We can sort nouns in three useful ways.",
          list: [
            "Common or proper: girl, city (common) and Wanjiru, Nairobi (proper, with a capital letter).",
            "Count or non-count: we can count book, books, but not water or advice.",
            "Concrete or abstract: concrete nouns can be seen or touched (table); abstract nouns are ideas or feelings (honesty, freedom)."
          ] },
        { title: "Pronouns take the place of nouns", text: "A pronoun stands in for a noun so we do not repeat it. The main kinds are:",
          list: [
            "Personal: I, you, she, they, them",
            "Reflexive: myself, himself, themselves",
            "Reciprocal: each other, one another",
            "Demonstrative: this, that, these, those",
            "Relative: who, which, that (they join extra information to a noun)",
            "Interrogative: who, what, which (they ask questions)",
            "Indefinite: someone, everyone, nobody"
          ] },
        { title: "Determiners come before nouns", text: "A determiner sits before a noun to show which one or how many.",
          list: [
            "Articles: a, an, the",
            "Demonstratives: this boy, those books",
            "Possessives: my, your, their",
            "Quantifiers and numbers: some, many, few, two"
          ] },
        { title: "The big trick", text: "The same word can be a pronoun or a determiner. Look at what comes next. If a noun follows, the word is a determiner. If it stands alone, it is a pronoun.",
          list: [
            "That boy is new. (determiner: “boy” follows)",
            "That is new. (pronoun: it stands alone)"
          ] }
      ],
      example: {
        title: "Sort the words in: “Those books are mine, but this is yours.”",
        steps: [
          "“Those” is followed by the noun “books”, so it is a determiner.",
          "“Books” names things you can count and touch: a common, concrete, count noun.",
          "“Mine” stands alone and shows who owns the books: a possessive pronoun.",
          "“This” stands alone with no noun after it: a demonstrative pronoun.",
          "“Yours” also stands alone: a possessive pronoun."
        ],
        pitfall: "Common mistake: judging a word by itself. Always check whether a noun comes right after it."
      },
      alt: [
        "Think of a pronoun as a substitute player who takes a noun's place on the pitch. A determiner is more like a signpost standing in front of a noun, telling you which one or how many.",
        "Try the “noun test”. Say the word, then ask: is there a noun straight after it? If yes (“that boy”), it is a determiner. If no (“I like that”), it is a pronoun."
      ],
      questions: [
        { q: "In the sentence “Wanjiru lives in Nairobi”, what kind of noun is “Nairobi”?",
          options: ["Proper noun", "Common noun", "Abstract noun", "Pronoun"], answer: 0,
          why: "Nairobi names one particular place, so it is a proper noun. Proper nouns begin with a capital letter." },
        { q: "Which of these is a non-count noun?",
          options: ["bottle", "advice", "chair", "school"], answer: 1,
          why: "We can say “two bottles”, but not “two advices”. Non-count nouns cannot be counted one by one." },
        { q: "Which word is an abstract noun?",
          options: ["table", "honesty", "river", "phone"], answer: 1,
          why: "Honesty is a quality or idea. You cannot see or touch it. The other three are concrete nouns." },
        { q: "In “These mangoes are sweet”, the word “these” is a…",
          options: ["determiner", "pronoun", "verb", "conjunction"], answer: 0,
          why: "“These” comes before the noun “mangoes” and shows which ones. A word that does this is a determiner." },
        { q: "In “These are sweet”, the word “these” is a…",
          options: ["determiner", "pronoun", "verb", "conjunction"], answer: 1,
          why: "Here “these” stands alone and takes the place of a noun, so it is a (demonstrative) pronoun." },
        { q: "What type of pronoun is “himself” in “Brian taught himself to code”?",
          options: ["Reflexive", "Relative", "Interrogative", "Reciprocal"], answer: 0,
          why: "A reflexive pronoun turns the action back on the person doing it: Brian taught Brian." },
        { q: "In “The two friends helped each other”, “each other” is a…",
          options: ["reciprocal pronoun", "relative pronoun", "proper noun", "determiner"], answer: 0,
          why: "Reciprocal pronouns show that two or more people did the same thing to one another." },
        { q: "In which sentence is “that” a pronoun?",
          options: ["That girl is my cousin.", "I like that.", "That phone is old.", "That bag is heavy."], answer: 1,
          why: "In “I like that”, “that” stands alone in place of a noun. In the other sentences it comes before a noun, so it is a determiner." },
        { q: "Which word is a determiner in “She lost her phone”?",
          options: ["She", "lost", "her", "phone"], answer: 2,
          why: "“Her” comes before the noun “phone” and shows who owns it. It is a possessive determiner." },
        { q: "Choose the pronoun that fits: “Otieno and Achieng went home. ___ were tired.”",
          options: ["They", "Them", "Their", "Theirs"], answer: 0,
          why: "“They” takes the place of the two people and is the subject of the sentence." },
        { q: "Which noun is a count noun?",
          options: ["water", "rice", "mango", "sugar"], answer: 2,
          why: "We can count mangoes: one mango, two mangoes. Water, rice and sugar are usually non-count." },
        { q: "In “The girl who won the race is my sister”, which word is a relative pronoun?",
          options: ["girl", "who", "race", "sister"], answer: 1,
          why: "“Who” links the extra information (who won the race) back to the girl. Relative pronouns join a clause to a noun." }
      ]
    },

    // ===== 2. Subject-verb agreement and active/passive =====
    {
      id: "sv-agreement",
      title: "Subject-verb agreement, active and passive",
      where: "Theme 9: Income. Grammar in Use, Sentences",
      outcomes: [
        "Explain and apply the basic rules of subject-verb agreement.",
        "Tell active sentences from passive sentences.",
        "Change a sentence from active to passive and back."
      ],
      blocks: [
        { title: "The verb must match its subject", text: "A singular subject takes a singular verb. A plural subject takes a plural verb. In the present tense, the singular verb usually ends in -s.",
          list: [
            "The student writes neatly.",
            "The students write neatly."
          ] },
        { title: "Watch out for tricky cases", text: "Find the real subject first. Extra words in between do not change it.",
          list: [
            "The box of pencils is on the desk. (the subject is “box”, not “pencils”)",
            "Wanjiku and her brother are at school. (two subjects joined by “and” are plural)",
            "Each of the girls has a book. (each, everyone, nobody and someone are singular)",
            "The news is surprising. (“news” ends in s but is singular)"
          ] },
        { title: "Active and passive", text: "In an active sentence, the subject does the action. In a passive sentence, the subject receives the action.",
          list: [
            "Active: The girls cleaned the classroom.",
            "Passive: The classroom was cleaned by the girls."
          ] },
        { title: "How to make a passive sentence", text: "Follow three steps:",
          list: [
            "1. Move the object to the front. It becomes the new subject.",
            "2. Change the verb to a form of “be” plus the past participle (is cleaned, was cleaned).",
            "3. Put the old subject after “by”. You can leave it out if it is not important."
          ] }
      ],
      example: {
        title: "Change to the passive: “The farmer plants maize.”",
        steps: [
          "Find the object: “maize”. Move it to the front: Maize …",
          "The verb “plants” is present tense and “maize” is singular, so use “is planted”: Maize is planted …",
          "Put the old subject after “by”: Maize is planted by the farmer."
        ],
        pitfall: "Common mistake: forgetting to keep the tense. A present tense active sentence becomes is/are + past participle. A past tense sentence becomes was/were + past participle."
      },
      alt: [
        "Ask “who or what is the sentence about?” That is the subject. Then check: is it one or many? Match the verb to that, and ignore the words that come between the subject and the verb.",
        "For active and passive, ask “who is doing the action?” If the subject does it, the sentence is active. If the subject is on the receiving end (the window was broken), it is passive."
      ],
      questions: [
        { q: "Choose the correct verb: “The list of names ___ on the board.”",
          options: ["is", "are", "were", "be"], answer: 0,
          why: "The subject is “list”, which is singular. “Of names” only adds detail, so the verb stays singular: is." },
        { q: "“Wanjiku and her brother ___ at school.”",
          options: ["is", "are", "was", "has"], answer: 1,
          why: "Two subjects joined by “and” make a plural subject, so we use “are”." },
        { q: "“Each of the learners ___ a textbook.”",
          options: ["have", "has", "are having", "were having"], answer: 1,
          why: "“Each” is singular, so we use “has”." },
        { q: "“Everyone ___ welcome at the meeting.”",
          options: ["are", "is", "were", "have"], answer: 1,
          why: "“Everyone” is singular even though it means many people." },
        { q: "“My friends ___ football every weekend.”",
          options: ["plays", "play", "playing", "is playing"], answer: 1,
          why: "“Friends” is plural, so the verb has no -s: play." },
        { q: "Which sentence is in the passive voice?",
          options: ["Juma kicked the ball.", "The ball was kicked by Juma.", "Juma is kicking the ball.", "Juma will kick the ball."], answer: 1,
          why: "In a passive sentence the subject (the ball) receives the action. The verb is a form of “be” plus the past participle: was kicked." },
        { q: "Change to the passive: “The teacher marked the tests.”",
          options: ["The tests were marked by the teacher.", "The tests are marked by the teacher.", "The tests was marked by the teacher.", "The teacher was marked by the tests."], answer: 0,
          why: "The original is in the past tense and “tests” is plural, so we use “were marked”." },
        { q: "Change to the active: “The letter was written by Amina.”",
          options: ["Amina wrote the letter.", "Amina writes the letter.", "Amina has written the letter.", "The letter wrote Amina."], answer: 0,
          why: "Amina does the action, so she becomes the subject. “Was written” is past tense, so the active verb is “wrote”." },
        { q: "Which sentence is passive and does not say who did the action?",
          options: ["The window was broken.", "Someone broke the window.", "The window broke the glass.", "They are breaking the window."], answer: 0,
          why: "“Was broken” is passive and no doer is named. Passives are useful when the doer is unknown or not important." },
        { q: "“The bus ___ late every morning.”",
          options: ["arrive", "arrives", "arriving", "are arriving"], answer: 1,
          why: "“Bus” is singular, so the present tense verb takes -s: arrives." },
        { q: "“The news ___ surprising.”",
          options: ["is", "are", "were", "have been"], answer: 0,
          why: "Although “news” ends in s, it is treated as singular." },
        { q: "Change to the passive: “Farmers grow tea.”",
          options: ["Tea is grown by farmers.", "Tea was grown by farmers.", "Tea are grown by farmers.", "Farmers are grown by tea."], answer: 0,
          why: "“Grow” is present tense, so the passive uses is/are + grown. “Tea” is singular, so we say “is grown”." }
      ]
    },

    // ===== 3. Sentence fluency =====
    {
      id: "sentence-fluency",
      title: "Comma splices and run-on sentences",
      where: "Theme 1: Etiquette. Writing, Sentence fluency",
      outcomes: [
        "Spot comma splices and run-on sentences in a text.",
        "Rewrite them as clear, complete sentences.",
        "Explain why well-written sentences matter to the reader."
      ],
      blocks: [
        { title: "Complete ideas need proper joins", text: "A complete idea can stand alone as a sentence. Trouble starts when two complete ideas are joined badly.",
          list: [
            "Comma splice: two complete ideas joined by only a comma. “I was tired, I went to bed.”",
            "Run-on (fused) sentence: two complete ideas pushed together with nothing between them. “I was tired I went to bed.”",
            "Run-on line: a long stretch of writing that strings many ideas together without proper breaks."
          ] },
        { title: "Four ways to fix them", text: "Take the example “The match was cancelled, it rained heavily.” You can fix it like this:",
          list: [
            "Full stop: The match was cancelled. It rained heavily.",
            "Semicolon: The match was cancelled; it rained heavily.",
            "Comma + joining word (for, and, nor, but, or, yet, so): The match was cancelled, for it rained heavily.",
            "Make one idea depend on the other: The match was cancelled because it rained heavily."
          ] },
        { title: "A common trap", text: "Words like however, therefore, then and thus are not joining words in the same way as “and” or “but”. A comma before them still gives a comma splice.",
          list: [
            "Wrong: It was raining, however we went out.",
            "Right: It was raining; however, we went out.",
            "Right: It was raining, but we went out."
          ] }
      ],
      example: {
        title: "Fix: “Kamau likes football, Njeri likes netball.”",
        steps: [
          "Check each part. “Kamau likes football” is complete. “Njeri likes netball” is also complete.",
          "Two complete ideas joined by only a comma: this is a comma splice.",
          "Fix 1: Kamau likes football. Njeri likes netball.",
          "Fix 2: Kamau likes football, and Njeri likes netball.",
          "Fix 3: Kamau likes football; Njeri likes netball."
        ],
        pitfall: "Common mistake: thinking a comma is enough to join two sentences. A comma needs a joining word with it."
      },
      alt: [
        "Read the sentence out loud and listen for a place where you would stop for breath. If a comma sits where a full stop would fit, and the words on both sides could each stand alone, you probably have a comma splice.",
        "Try the “and test”: can you put a joining word like and, but or so after the comma? If you cannot, the writer needs a full stop or a semicolon instead."
      ],
      questions: [
        { q: "Which one is a comma splice?",
          options: ["I was late, so I ran.", "I was late, I ran.", "I was late. I ran.", "Because I was late, I ran."], answer: 1,
          why: "“I was late, I ran.” joins two complete sentences with only a comma. The other options join them correctly." },
        { q: "Which one is a run-on (fused) sentence?",
          options: ["We reached the station the train had left.", "We reached the station, but the train had left.", "We reached the station. The train had left.", "When we reached the station, the train had left."], answer: 0,
          why: "Two complete ideas are stuck together with no punctuation or joining word." },
        { q: "What is the best fix for: “The market was crowded, we left early.”?",
          options: ["The market was crowded, so we left early.", "The market was crowded we left early.", "The market was crowded, however we left early.", "The market was crowded, we left early!"], answer: 0,
          why: "A comma plus “so” joins the two ideas correctly. “However” is not a joining word, so the third option is still a comma splice." },
        { q: "Which sentence uses a semicolon correctly?",
          options: ["Amina studies hard; she wants to be a doctor.", "Amina studies hard; because she wants to be a doctor.", "Amina; studies hard she wants to be a doctor.", "Amina studies; hard, she wants to be a doctor."], answer: 0,
          why: "A semicolon can join two complete, closely related sentences. “Because she wants to be a doctor” is not complete on its own, so a semicolon does not fit there." },
        { q: "Which sentence is correct?",
          options: ["Kamau likes football, and Njeri likes netball.", "Kamau likes football, Njeri likes netball.", "Kamau likes football Njeri likes netball.", "Kamau likes football, Njeri, likes netball."], answer: 0,
          why: "A comma plus “and” joins two complete ideas correctly." },
        { q: "Which is NOT a correct way to fix a comma splice?",
          options: ["Use a full stop", "Add a comma and a joining word such as “but”", "Use a semicolon", "Add another comma"], answer: 3,
          why: "Adding more commas does not fix the problem. You need a full stop, a semicolon, or a comma with a joining word." },
        { q: "“It was raining, however we went out.” What is wrong with it?",
          options: ["It is a comma splice, because “however” does not join sentences after a comma", "Nothing, it is correct", "The word “raining” is spelt wrongly", "It is not a complete sentence"], answer: 0,
          why: "It could be fixed as “It was raining; however, we went out.” or “It was raining, but we went out.”" },
        { q: "Which sentence is correct?",
          options: ["I wanted to come, but I was ill.", "I wanted to come, I was ill.", "I wanted to come I was ill.", "I wanted to come, however I was ill."], answer: 0,
          why: "“But” is a joining word, so a comma plus “but” is correct. The other options are a comma splice or a run-on." },
        { q: "Which is the best rewrite of: “He was tired, he kept working.”?",
          options: ["Although he was tired, he kept working.", "He was tired he kept working.", "He was tired, although, he kept working.", "Tired he was, he kept working,"], answer: 0,
          why: "“Although” makes the first part depend on the second, so a comma after it is correct." },
        { q: "“The sun set the birds slept the village grew quiet.” How many complete ideas are run together?",
          options: ["1", "2", "3", "4"], answer: 2,
          why: "There are three: the sun set / the birds slept / the village grew quiet. We can fix it with punctuation: The sun set; the birds slept; the village grew quiet." },
        { q: "Which word can join two sentences after a comma?",
          options: ["but", "however", "therefore", "thus"], answer: 0,
          why: "“But” is a joining word (a coordinating conjunction). However, therefore and thus need a semicolon or a full stop before them." },
        { q: "Which sentence has no error?",
          options: ["The bell rang, and the learners went home.", "The bell rang, the learners went home.", "The bell rang the learners went home.", "The bell rang, then the learners went home."], answer: 0,
          why: "“And” is a joining word. “Then” is not, so a comma before it gives a comma splice." }
      ]
    },

    // ===== 4. SQ4R =====
    {
      id: "sq4r",
      title: "Study skills: the SQ4R method",
      where: "Theme 4: Travel. Reading, Study skills",
      outcomes: [
        "Name the six steps of SQ4R and say what each one does.",
        "Use SQ4R to understand a text.",
        "Make short notes and a summary, and read information from visuals."
      ],
      blocks: [
        { title: "What is SQ4R?", text: "SQ4R is a method that helps you understand and remember what you read. The letters stand for six steps, in this order:",
          list: [
            "Survey: look over the text before you read it.",
            "Question: turn headings into questions.",
            "Read: read to find the answers.",
            "Reflect: connect what you read to what you already know.",
            "Recite: say the answers in your own words.",
            "Review: go back over your notes and key ideas."
          ] },
        { title: "Surveying and questioning", text: "Before reading, look at the title, subheadings, pictures, and the first and last paragraphs. Then turn each heading into a question.",
          list: [
            "Heading: Causes of Soil Erosion",
            "Question: What causes soil erosion?"
          ] },
        { title: "Notes and summaries", text: "Good notes use key words and short phrases, not whole sentences copied from the book. A good summary is short, in your own words, and has only the main ideas.",
          list: [] },
        { title: "Reading visuals", text: "Pictures, maps, graphs and charts carry information too. Start with the title and the labels, then look for patterns or the biggest and smallest values.",
          list: [] }
      ],
      example: {
        title: "Apply SQ4R to a passage called “How Rainwater Harvesting Helps Farmers”",
        steps: [
          "Survey: read the title and subheadings, look at the photo of a water tank, and read the first and last paragraphs.",
          "Question: ask “What is rainwater harvesting?” and “How does it help farmers?”",
          "Read: read the passage and look for the answers. Jot them down.",
          "Reflect: think about places you know where water is collected from roofs.",
          "Recite: close the book and explain the answers aloud in your own words.",
          "Review: read over your notes and write a short summary of three or four lines."
        ],
        pitfall: "Common mistake: skipping Survey and Question and reading straight away. Those two steps give you a purpose, so you understand more."
      },
      alt: [
        "Think of SQ4R like planning a journey. You look at the map first (Survey), decide what you want to find out (Question), travel (Read), think about what you saw (Reflect), tell a friend about it (Recite), and check your photos afterwards (Review).",
        "If six steps feel like a lot, remember three pairs: look and ask before you read (Survey, Question), read and think while you read (Read, Reflect), then say and check after you read (Recite, Review)."
      ],
      questions: [
        { q: "What does the first S in SQ4R stand for?",
          options: ["Survey", "Skim", "Summarise", "Search"], answer: 0,
          why: "SQ4R stands for Survey, Question, Read, Reflect, Recite, Review." },
        { q: "What do you do in the Survey step?",
          options: ["Look at titles, subheadings, pictures and the first and last paragraphs", "Read every word slowly", "Write the final summary", "Memorise the text"], answer: 0,
          why: "Surveying is a quick look over the text to see what it is about before you read it properly." },
        { q: "The heading is “Causes of Soil Erosion”. Which question could you ask in the Question step?",
          options: ["What causes soil erosion?", "Soil erosion is bad.", "Erosion causes soil.", "Who printed this book?"], answer: 0,
          why: "In the Question step you turn each heading into a question that the text can answer." },
        { q: "Which step is it when you say the answers aloud in your own words without looking at the text?",
          options: ["Recite", "Review", "Survey", "Question"], answer: 0,
          why: "Reciting means saying or writing what you learned in your own words. It shows whether you really understood." },
        { q: "Which step comes straight after Read?",
          options: ["Reflect", "Review", "Recite", "Survey"], answer: 0,
          why: "The order is Survey, Question, Read, Reflect, Recite, Review." },
        { q: "What happens in the Review step?",
          options: ["You go back over your notes and key ideas", "You choose the next book", "You ask the first questions", "You look at the pictures only"], answer: 0,
          why: "Reviewing helps the ideas stay in your memory." },
        { q: "Which notes are best?",
          options: ["Key words and short phrases", "The whole paragraph copied word for word", "Only the title", "No notes at all"], answer: 0,
          why: "Short notes force you to pick out the main ideas, and they are quicker to review later." },
        { q: "A good summary is…",
          options: ["shorter than the original, in your own words, with the main ideas", "as long as the original text", "a copy of the first paragraph", "a list of difficult words"], answer: 0,
          why: "A summary keeps only the most important ideas and says them in your own words." },
        { q: "Before reading a graph or chart, what should you look at first?",
          options: ["The title and the labels", "The last number only", "The colour of the bars", "The page number"], answer: 0,
          why: "The title and labels tell you what the graph is about and what the numbers mean." },
        { q: "What is the correct order of SQ4R?",
          options: ["Survey, Question, Read, Reflect, Recite, Review", "Question, Survey, Read, Recite, Reflect, Review", "Read, Survey, Question, Review, Recite, Reflect", "Survey, Read, Question, Review, Reflect, Recite"], answer: 0,
          why: "Look first (Survey), ask (Question), read, think (Reflect), say it (Recite), then check (Review)." }
      ]
    }
,
    {
      id:"listening-for-meaning", title:"Listening for Meaning and Key Information",
      where:"Theme 1: Etiquette. Listening and Speaking, Extensive listening",
      outcomes:["Identify the main idea and supporting details in a spoken text.","Make brief notes about people, places, events and sequence.","Distinguish stated facts from reasonable inferences."],
      blocks:[
        {title:"Listen with a purpose",text:"Before listening, read the task and decide what information you need. A clear purpose helps you focus on the main idea, names, dates, places, reasons and actions instead of trying to remember every word.",list:["For the main idea, ask what the whole message is mostly about.","For details, listen for specific names, times, places and instructions.","For sequence, notice first, later, meanwhile and finally."]},
        {title:"Use more than one listen",text:"On the first listen, identify the speaker, situation and general topic. On the second, check details and fill gaps in your notes. If you miss a word, keep listening; later information may clarify it.",list:["Write key words rather than full sentences.","Use numbers or arrows to show sequence.","Check that each note answers the question asked."]},
        {title:"Fact and inference",text:"A fact is directly stated or can be checked. An inference is a conclusion drawn from clues. If a speaker says the ground is wet and people have umbrellas, you may infer that it has rained, even if the speaker does not say so." ,list:[]}
      ],
      example:{title:"A school clean-up announcement",steps:["The clean-up begins at 8.00 a.m. on Saturday at the main gate.","Its purpose is to collect litter and clear blocked drainage channels.","Learners should bring gloves and drinking water.","The main idea is a planned community clean-up; the time, venue and materials are supporting details."],pitfall:"Do not confuse a supporting detail with the main idea. The main idea covers the whole message."},
      alt:["Imagine listening like sorting a school bag: keep the information needed for the task and set aside unrelated details.","Summarise the recording in one sentence. If it captures the whole message, you probably identified the main idea."],
      questions:[
        {q:"You need to identify where a meeting will take place. Which detail should you listen for?",options:["The venue","The speaker's favourite colour","An unrelated example","A repeated greeting"],answer:0,why:"The venue directly answers where the meeting will take place."},
        {q:"What should you do if you miss one word in a recording?",options:["Stop listening","Keep listening for more clues","Ignore the whole recording","Guess every remaining answer"],answer:1,why:"Continue listening because later information may clarify the meaning."}
      ]
    },
    {
      id:"reading-fluency", title:"Reading Fluency, Skimming and Scanning",
      where:"Theme 1: Etiquette. Reading, Reading fluency",
      outcomes:["Distinguish skimming from scanning.","Preview a text before close reading.","Read accurately and at a pace that supports understanding."],
      blocks:[
        {title:"Preview a text",text:"Previewing means looking at the title, headings, pictures, captions and layout before reading closely. These features help you predict the subject and organise your attention.",list:["Notice the title and subheadings.","Look at diagrams and captions.","Connect the topic with what you already know."]},
        {title:"Skimming and scanning",text:"Skimming is rapid reading to understand the general idea. Scanning is searching quickly for one specific item such as a date, name, figure or keyword. Choose a strategy that matches your purpose.",list:["Skim an article to identify its main point.","Scan a timetable to find a departure time.","Read closely when you must understand an argument or instruction."]},
        {title:"Fluency supports meaning",text:"Fluent reading combines accuracy, suitable speed, phrasing and expression. Pause at punctuation and group words into meaningful phrases. Reading too quickly can hide meaning; reading word by word can make it difficult to connect ideas.",list:[]}
      ],
      example:{title:"Finding information in a school notice",steps:["Read the heading to identify the subject.","Skim the opening lines to understand the purpose.","Scan for the date, time, venue and contact person.","Read the relevant instructions carefully before acting."],pitfall:"Do not rely on skimming when the task asks for an exact figure or instruction."},
      alt:["Skimming is like looking at a map to understand the whole route. Scanning is like finding one named street on the map.","Ask whether you need the general message or one exact detail before choosing a reading strategy."],
      questions:[
        {q:"You need to find the date of an event in a long notice. Which strategy is best?",options:["Scanning","Skimming only","Reading aloud","Memorising the notice"],answer:0,why:"Scanning helps locate a specific item such as a date."},
        {q:"What is the main purpose of skimming?",options:["Understand the general idea","Find one exact number","Check every spelling","Copy the entire text"],answer:0,why:"Skimming gives a quick overview of the text."}
      ]
    },
    {
      id:"writing-process", title:"The Writing Process: Plan, Draft, Revise and Edit",
      where:"Theme 5: Careers. Writing, The writing process",
      outcomes:["Identify purpose, audience and form before writing.","Organise and draft a coherent text.","Revise ideas and edit language before publishing."],
      blocks:[
        {title:"Plan before drafting",text:"Identify the purpose (why you are writing), audience (who will read it) and form (letter, report, essay or email). Brainstorm relevant ideas and arrange them in a logical order.",list:[]},
        {title:"Draft and revise",text:"A draft is an early version. Focus first on communicating the message. During revision, check whether ideas are complete, relevant and logically arranged. Add missing explanations and remove repetition.",list:[]},
        {title:"Edit and publish",text:"Editing improves grammar, vocabulary, spelling, punctuation and sentence structure. Proofreading is a final check for errors. Publishing means presenting or sharing the finished text in the appropriate format.",list:[]}
      ],
      example:{title:"Planning an appreciation letter",steps:["Purpose: thank a mentor for guidance.","Audience: the mentor, so use a respectful tone and suitable salutation.","Plan: explain what the mentor did and how it helped you.","Draft, revise for clear ideas, edit language and punctuation, then prepare the final copy."],pitfall:"Do not spend all your time correcting commas before the ideas are organised. Revision comes before final proofreading."},
      alt:["Think of writing like building a house: plan the design, construct the rooms, inspect the structure, fix defects and then open it for use.","Revision asks 'Does it say what I mean?' Editing asks 'Have I expressed it correctly?'"],
      questions:[
        {q:"Which stage focuses on improving the order and development of ideas?",options:["Revision","Publishing","Proofreading only","Typing the title"],answer:0,why:"Revision improves content, organisation and clarity."},
        {q:"What is the main purpose of proofreading?",options:["Check the final text for errors","Choose a topic","Collect research ideas","Change the audience"],answer:0,why:"Proofreading is the final check for spelling, punctuation and other errors."}
      ]
    },
    {
      id:"functional-writing", title:"Functional Writing: Reports, Memos and Emails",
      where:"Theme 8: Health and Safety. Writing, Functional writing",
      outcomes:["Choose a functional text for a practical purpose.","Use suitable layout and tone in reports, memos and emails.","Present facts and instructions clearly."],
      blocks:[
        {title:"Choose the right format",text:"A report records information or findings; a memo communicates an internal message; an email sends a message electronically. Each format has conventions that help the reader find information quickly.",list:["Report: title, purpose, findings and conclusion or recommendations.","Memo: To, From, Date, Subject and concise message.","Email: recipient, clear subject, greeting, message, closing and name."]},
        {title:"Use an appropriate tone",text:"The audience and purpose guide your language. A formal report or workplace email should be respectful, factual and concise. Avoid slang, vague claims and unnecessary details.",list:[]},
        {title:"Check the details",text:"Use headings, short paragraphs or numbered points where helpful. Check names, dates, figures and any promised attachments. Separate observed facts from opinions or recommendations.",list:[]}
      ],
      example:{title:"Email about a class safety meeting",steps:["Subject: Class safety meeting – Friday","Greeting: Dear Class Representative,","Purpose: 'Please attend a short safety meeting on Friday at 10.00 a.m. in the science room.'","Add any preparation needed and close politely with your name."],pitfall:"An email that says 'See attached' but has no attachment is incomplete. Check the file before sending."},
      alt:["Ask three questions: who needs this message, what do they need to know, and what action should they take?","A useful functional text lets the reader find the purpose, key facts and next step quickly."],
      questions:[
        {q:"Which items belong in a memo heading?",options:["To, From, Date and Subject","A list of characters","A bibliography only","A poem title"],answer:0,why:"A memo heading identifies the recipient, sender, date and subject."},
        {q:"What should you check before sending an email with an attachment?",options:["That the correct file is attached","That the subject line is empty","That the message has no greeting","That the recipient is unknown"],answer:0,why:"Always confirm the correct file is attached before sending."}
      ]
    }
,
    {
      id:"phrases-clauses-sentences",title:"Phrases, Clauses and Sentence Patterns",
      where:"Themes 4–8. Grammar in Use, Phrases, Clauses and Sentence Structure",
      outcomes:["Distinguish a phrase from a clause.","Identify noun, verb, adjective, adverb and prepositional phrases.","Recognise common sentence patterns and simple and compound sentences."],
      blocks:[
        {title:"Phrases and clauses",text:"A phrase is a group of related words that works as a unit but does not contain a complete subject–verb combination. A clause contains a subject and a verb. An independent clause can stand alone; a dependent clause needs another clause to complete its meaning.",list:["Noun phrase: the very tall tree.","Verb phrase: has been studying.","Adverb phrase: quite carefully.","Clause: because the rain stopped."]},
        {title:"Types of phrases",text:"A noun phrase functions like a noun; a verb phrase contains the main verb and its auxiliaries; an adjective phrase describes a noun; an adverb phrase modifies a verb, adjective or adverb; a prepositional phrase begins with a preposition and has an object.",list:[]},
        {title:"Sentence patterns",text:"A simple sentence has one independent clause. A compound sentence joins two independent clauses, often with a coordinating conjunction such as and, but or so. Common patterns include subject–verb (SV), subject–verb–object (SVO) and subject–verb–complement (SVC).",list:[]}
      ],
      example:{title:"Analyse: 'The learners have been reading quietly in the library.'",steps:["Subject: 'The learners'.","Verb phrase: 'have been reading'.","Adverb: 'quietly' tells how they are reading.","Prepositional phrase: 'in the library' tells where the reading happens.","The sentence contains one independent clause, so it is a simple sentence."],pitfall:"A long sentence is not automatically a compound sentence. Count the independent clauses, not the number of words."},
      alt:["A phrase is a building block; a clause is a group with a subject and verb; a sentence expresses a complete thought.","Underline the subject once and the verb twice. This can help you identify clauses before naming the sentence pattern."],
      questions:[
        {q:"Which group of words is a clause?",options:["under the old bridge","because the bus arrived","very quickly","the tall green tree"],answer:1,why:"'The bus arrived' contains a subject and a verb, even though the word 'because' makes it dependent."},
        {q:"Which pattern is used in 'Achieng opened the window'?",options:["SVO","SV","SVC","SVOO"],answer:0,why:"Achieng is the subject, opened is the verb and the window is the object."}
      ]
    },
    {
      id:"spelling-and-punctuation",title:"Spelling, Abbreviations and Punctuation",
      where:"Themes 2 and 4. Writing, Mechanics of Writing",
      outcomes:["Apply common spelling patterns and distinguish commonly confused words.","Use abbreviations and acronyms appropriately.","Choose punctuation that makes meaning clear."],
      blocks:[
        {title:"Spelling with attention",text:"English spelling reflects patterns but also contains exceptions. Check word families, prefixes and suffixes, and the position of letters when spelling unfamiliar words. Keep a personal list of words you often confuse.",list:["their / there / they're have different meanings.","principal refers to a school leader or main item; principle means a rule or belief.","Acronyms are formed from initial letters and may be pronounced as words; abbreviations shorten words or phrases."]},
        {title:"Punctuation guides the reader",text:"A full stop ends a statement; a question mark ends a direct question; an exclamation mark signals strong feeling or emphasis. Commas separate items and help organise sentence structure. Quotation marks show direct speech or quoted words.",list:[]},
        {title:"Dashes, hyphens and capital letters",text:"A hyphen joins parts of some compound words; a dash can mark a break or additional comment. Capital letters begin sentences and proper nouns. Follow the style required by the task and be consistent.",list:[]}
      ],
      example:{title:"Edit the sentence",steps:["Original: 'their going to visit the principle tomorrow'.","Use 'they're' because it means 'they are'.","Use 'principal' if the sentence refers to a school leader.","Corrected: 'They're going to visit the principal tomorrow.'"],pitfall:"Do not rely on sound alone: many confusing English words are pronounced alike but have different spellings and meanings."},
      alt:["Read the sentence and ask what each word means. Then choose the spelling that matches the meaning, not just the sound.","Punctuation is a set of road signs: it shows where ideas stop, pause, connect or need emphasis."],
      questions:[
        {q:"Which word completes the sentence: 'The school ___ addressed the learners'?",options:["principal","principle","principel","principall"],answer:0,why:"Principal refers to the head of a school; principle means a rule or belief."},
        {q:"Which punctuation mark normally ends a direct question?",options:["Question mark","Comma","Hyphen","Apostrophe"],answer:0,why:"A direct question ends with a question mark."}
      ]
    },
    {
      id:"creative-writing",title:"Narrative, Descriptive and Argumentative Writing",
      where:"Themes 6 and 8. Writing, Creative Writing",
      outcomes:["Plan a narrative or descriptive essay with a clear structure.","Use sensory detail and precise vocabulary.","Build an argument using reasons and relevant evidence."],
      blocks:[
        {title:"Narrative writing",text:"A narrative tells a sequence of events. It usually establishes a setting and characters, introduces a problem or change, develops events and reaches a resolution. Use time connectives and dialogue where they help the reader follow the story.",list:[]},
        {title:"Descriptive writing",text:"A descriptive essay creates a clear impression of a person, place, object or experience. Use precise nouns, vivid but controlled adjectives, sensory details and an organised viewpoint. Avoid listing adjectives without developing an image.",list:[]},
        {title:"Argumentative and expository writing",text:"An argumentative essay presents a position and supports it with reasons and evidence while considering other views. An expository essay explains a topic clearly. Both need a focused introduction, organised paragraphs and a conclusion that follows from the discussion.",list:[]}
      ],
      example:{title:"Plan an argument: 'Schools should create more reading time.'",steps:["Position: schools should protect regular reading time.","Reason 1: reading develops vocabulary and comprehension.","Reason 2: quiet reading builds concentration and independent learning.","Consider another view: lessons are already busy; respond by proposing a short, scheduled reading period.","Conclude by restating the position and the main benefits."],pitfall:"An argument is not stronger because it is louder. Support claims with relevant reasons, examples or evidence."},
      alt:["A narrative takes the reader through events; a descriptive text helps the reader imagine; an argument tries to persuade through reasons.","Before drafting, write your main point in one sentence. Every paragraph should help develop that point."],
      questions:[
        {q:"Which feature is most important in an argumentative essay?",options:["A clear position supported by reasons and evidence","A list of unrelated events","Only descriptive adjectives","A conclusion with no connection to the topic"],answer:0,why:"An argument needs a clear claim and relevant support."},
        {q:"Which technique is especially useful in descriptive writing?",options:["Sensory details","Unexplained abbreviations","Random facts","Repeated conclusions"],answer:0,why:"Sensory details help readers imagine what is being described."}
      ]
    }
,
    {
      id:"speaking-etiquette",title:"Speaking Etiquette and Respectful Conversation",
      where:"Themes 1–9. Listening and Speaking, Speaking Fluency and Conversational Skills",
      outcomes:["Choose polite expressions for formal and informal situations.","Take turns and respond without interrupting.","Use tone, volume and non-verbal cues to communicate clearly."],
      blocks:[
        {title:"Match language to the situation",text:"The words we choose depend on who we are speaking to, why we are speaking and where the conversation takes place. Formal settings usually call for respectful, complete expressions; friendly conversations may allow more relaxed language.",list:["Formal: 'Could you please explain that point?'","Informal: 'Can you explain that again?'","Avoid insults, mocking accents or language that excludes others."]},
        {title:"Listen and take turns",text:"Good speaking etiquette includes listening while another person speaks, waiting for a suitable pause, acknowledging contributions and disagreeing with an idea rather than attacking the person.",list:["Use phrases such as 'I understand your point, but…'","Ask for clarification when meaning is unclear.","Keep your voice audible without shouting."]},
        {title:"Voice and non-verbal cues",text:"Pronunciation, pace, stress and intonation affect meaning. Facial expression, gesture, posture and eye contact can reinforce a message. Use these cues respectfully and consider cultural and personal differences.",list:[]}
      ],
      example:{title:"Disagree politely in a group discussion",steps:["A classmate gives an opinion you do not share.","Show that you listened: 'I see why you think that.'","State your view: 'I have a different interpretation because…'","Give a reason and invite a response."],pitfall:"Politeness does not mean pretending to agree. You can disagree firmly while respecting the speaker."},
      alt:["Think of a conversation as a shared ball game: each person needs a fair turn, and listening helps you respond usefully.","Before speaking, ask whether your words are respectful, relevant and clear."],
      questions:[
        {q:"Which expression is most suitable when asking a teacher to repeat an instruction?",options:["Say that again!","Could you please repeat the instruction?","You were not clear.","Whatever."],answer:1,why:"It is respectful, clear and appropriate for a formal school interaction."},
        {q:"What is the best way to disagree in a group discussion?",options:["Interrupt and raise your voice","Mock the speaker","Explain your different view with a reason","Refuse to listen"],answer:2,why:"Respectful disagreement focuses on reasons and ideas, not personal attacks."}
      ]
    },
    {
      id:"verbs-adverbs",title:"Verbs, Tense, Aspect and Adverbs",
      where:"Themes 2–5. Grammar in Use, Word Classes",
      outcomes:["Distinguish main and auxiliary verbs.","Recognise regular, irregular and phrasal verbs.","Use adverbs of time, place and manner accurately."],
      blocks:[
        {title:"Main and auxiliary verbs",text:"A main verb carries the central meaning: 'They planted trees.' An auxiliary verb helps the main verb express tense, aspect, emphasis or voice: 'They are planting trees'; 'They have planted trees'. Common auxiliaries include be, have and do, as well as modal verbs such as can, may and should.",list:["Main: She writes.","Auxiliary + main: She is writing.","Modal + main: She can write."]},
        {title:"Tense and aspect",text:"Tense locates an action in time, while aspect shows how the action is viewed (for example, ongoing or completed). Compare 'She writes', 'She is writing' and 'She has written'. The auxiliary and verb form work together to express these meanings.",list:[]},
        {title:"Phrasal verbs and adverbs",text:"A phrasal verb combines a verb with a particle or preposition, often creating a meaning different from the verb alone (look after, give up, turn off). Adverbs can tell when, where or how an action happens: yesterday, outside, carefully.",list:[]}
      ],
      example:{title:"Improve: 'The learners worked.'",steps:["Add an adverb of time: 'The learners worked yesterday.'","Add an adverb of place: 'The learners worked outside yesterday.'","Add an adverb of manner: 'The learners worked carefully outside yesterday.'","Each adverb answers a different question: when, where or how."],pitfall:"Not every word ending in -ly is an adverb. Identify the job the word performs in the sentence."},
      alt:["A verb tells what happens; an auxiliary helps the verb; an adverb adds a detail about the action.","Use the questions when, where and how to identify many common adverbs."],
      questions:[
        {q:"In 'The class has completed the task', which word is the auxiliary verb?",options:["class","has","completed","task"],answer:1,why:"'Has' helps the main verb 'completed' form the present perfect."},
        {q:"Which word is an adverb of manner?",options:["tomorrow","outside","carefully","school"],answer:2,why:"'Carefully' explains how the action is done."}
      ]
    },
    {
      id:"paragraph-cohesion",title:"Cohesion and Paragraph Development",
      where:"Themes 3–5. Writing, Paragraphing and Effective Writing",
      outcomes:["Develop a paragraph around one controlling idea.","Use linking words and reference words to connect sentences.","Maintain logical order and avoid unnecessary repetition."],
      blocks:[
        {title:"Unity: one main idea",text:"A unified paragraph develops one controlling idea. Begin with a topic sentence, add relevant explanation or evidence, and finish with a sentence that rounds off the point or links to the next paragraph.",list:["Topic sentence: states the main point.","Supporting sentences: explain, illustrate or provide evidence.","Closing sentence: reinforces the point or creates a transition."]},
        {title:"Cohesion: connect the ideas",text:"Cohesion is the way words and sentences fit together. Linking words show relationships: addition (also, furthermore), contrast (however, although), cause (because, therefore) and sequence (first, next, finally). Pronouns and repeated key terms can also help readers follow the subject.",list:[]},
        {title:"Choose links for meaning",text:"Do not add a linking word merely to sound formal. The link must express the real relationship between ideas. Use 'however' for contrast, 'therefore' for a result and 'for example' to introduce an illustration.",list:[]}
      ],
      example:{title:"Connect two ideas about communication",steps:["Idea 1: Digital tools help learners share information quickly.","Idea 2: Learners need to protect personal information.","Use a contrast link: 'However, learners need to protect their personal information.'","The second sentence now clearly contrasts a benefit with a responsibility."],pitfall:"A paragraph can contain linking words and still lack cohesion if its ideas are unrelated or poorly ordered."},
      alt:["Think of cohesion as bridges between houses. Each sentence is a house; linking words help the reader cross from one idea to the next.","Read the first sentence of each paragraph. If the sequence makes sense, the overall structure is probably clear."],
      questions:[
        {q:"Which linking word best shows contrast?",options:["Furthermore","However","First","Because"],answer:1,why:"'However' signals that the next idea contrasts with the previous one."},
        {q:"What should supporting sentences do?",options:["Develop the paragraph's main idea","Introduce unrelated topics","Repeat the topic sentence exactly","Replace punctuation"],answer:0,why:"Supporting sentences explain, illustrate or provide evidence for the controlling idea."}
      ]
    },
    {"id":"critical-listening","title":"Critical Listening: Purpose, Fact and Opinion","where":"Themes 2 and 7. Listening and Speaking","outcomes":["Identify a speaker's purpose, audience and context.","Distinguish verifiable facts from opinions and unsupported claims.","Select key points and evaluate the evidence offered."],"blocks":[{"title":"Identify purpose and audience","text":"A speaker may aim to inform, persuade, entertain, warn or request action. Audience and context influence the language and details chosen.","list":["Ask who is speaking, who is listening and what the speaker wants the audience to think or do.","A school announcement informs; a campaign speech may persuade."]},{"title":"Separate fact from opinion","text":"A fact can be checked against reliable evidence. An opinion expresses a judgement or belief. Some statements combine a checkable detail with a personal interpretation.","list":["Fact: The library opens at 8.00 a.m. Opinion: The library is the best place to study.","Words such as 'best' and 'worst' often signal judgement, but interpret the whole statement."]},{"title":"Evaluate the message","text":"Notice the main claim, supporting reasons, examples and conclusion. Be cautious of exaggeration, emotional language and claims without evidence.","list":["Write keywords rather than every spoken word.","Ask whether each example actually supports the claim.","Do not treat confidence or repetition as proof."]}],"example":{"title":"Evaluate a statement about school gardens","steps":["A learner tells an assembly that gardens improve practical learning.","Purpose: persuade school leaders to expand the garden.","The claim about practical learning needs support, such as examples of lessons carried out there.","'The garden is the most exciting place in school' is an opinion.","A critical listener records the proposal and checks its reasons."],"pitfall":"A strongly expressed opinion is not automatically a proven fact."},"alt":["Identify the purpose of each part, then test your understanding by explaining the idea in your own words.","Use the worked example as a model, but create a new example from a school, home or community situation."],"questions":[{"q":"Which statement is an opinion?","options":["The meeting starts at 9.00 a.m.","The notice has three paragraphs.","This is the most useful school club.","The class has thirty learners."],"answer":2,"why":"'Most useful' is a judgement that people may reasonably disagree about."},{"q":"What does identifying a speaker's purpose help you understand?","options":["What the speaker wants to achieve","The speaker's shoe size","The number of words spoken","The colour of the room"],"answer":0,"why":"Purpose is the reason for communicating, such as informing or persuading."},{"q":"A speaker makes a claim but gives no evidence. What should you do?","options":["Accept it because it sounds confident","Treat it cautiously and seek evidence","Repeat it as a fact","Ignore the entire topic"],"answer":1,"why":"A claim should be supported before it is accepted as reliable."}]},
    {"id":"selective-listening","title":"Selective Listening: Instructions and Directions","where":"Themes 4 and 9. Listening and Speaking","outcomes":["Listen for details required by a particular task.","Follow spoken instructions in the correct sequence.","Extract names, times, quantities and directions accurately."],"blocks":[{"title":"Listen with a target","text":"Selective listening means focusing on particular information rather than trying to remember every word. Decide what details you need before listening.","list":["For an announcement, listen for who, what, where and when.","For directions, listen for landmarks, turns and order.","For a task, notice action verbs such as bring, submit and complete."]},{"title":"Notice words that change meaning","text":"Numbers, names, dates and negative words can change an instruction. Listen carefully for before, after, except, first, unless and not.","list":["'Submit before Friday' differs from 'submit on Friday'.","'Turn left after the clinic' differs from 'turn left before the clinic'."]},{"title":"Record the sequence","text":"Multi-step instructions must be followed in order. Use numbered notes and ask for clarification if a direction is unclear.","list":["First: collect the form. Next: complete the details. Finally: submit it.","Repeat unfamiliar names and figures to check accuracy."]}],"example":{"title":"Follow a spoken route","steps":["Instruction: 'Leave the classroom, turn right at the library, then continue to the flagpole.'","Identify the actions: leave, turn right, continue.","Identify the landmarks: library, then flagpole.","Record the route in order: classroom → right at library → flagpole."],"pitfall":"Missing a small word such as 'not', 'before' or 'after' can reverse an instruction."},"alt":["Identify the purpose of each part, then test your understanding by explaining the idea in your own words.","Use the worked example as a model, but create a new example from a school, home or community situation."],"questions":[{"q":"Which word can reverse an instruction?","options":["Not","And","The","Very"],"answer":0,"why":"'Not' changes an instruction into something to avoid."},{"q":"How should you record a three-step instruction?","options":["Number the actions in order","Write the steps randomly","Remember only the last action","Ignore the sequence"],"answer":0,"why":"Numbered notes preserve the correct order."},{"q":"'Turn left after the bridge' means turn:","options":["Before reaching the bridge","After passing the bridge","At the starting point","At the school gate"],"answer":1,"why":"'After' places the turning point beyond the bridge."}]},
    {"id":"interactive-listening","title":"Interactive Listening: Clarifying and Negotiating","where":"Theme 5. Listening and Speaking","outcomes":["Demonstrate active listening during a discussion.","Ask questions to clarify and confirm meaning.","Negotiate respectfully and respond with empathy."],"blocks":[{"title":"Listen actively","text":"Interactive listening is a two-way process. Pay attention, respond to the speaker's ideas and help the conversation move forward.","list":["Avoid planning your reply while ignoring the speaker.","Use brief responses such as 'I see' or 'Please continue'.","Paraphrase an important point to check understanding."]},{"title":"Clarify and confirm","text":"Ask a focused question when a message is unclear. Clarifying prevents misunderstandings; confirming checks that both people share the same understanding.","list":["'Do you mean the form is due on Thursday?'","'Could you explain what you mean by shared responsibility?'","'So our next step is to meet after class, correct?'"]},{"title":"Negotiate with empathy","text":"Negotiation seeks a workable agreement when people have different needs. Empathy means trying to understand another person's perspective without automatically agreeing.","list":["Describe the issue calmly.","Explain your needs and listen to the other person's needs.","Suggest options and confirm the agreed next step."]}],"example":{"title":"Agree on a group-work deadline","steps":["A learner says the deadline is too soon.","Paraphrase: 'You are concerned we may not finish the research in time.'","Clarify: 'Would one extra day solve the problem?'","Offer options, such as dividing tasks differently or requesting an extension.","Confirm the group's decision and responsibilities."],"pitfall":"Do not assume silence means agreement. Invite members to confirm the decision."},"alt":["Identify the purpose of each part, then test your understanding by explaining the idea in your own words.","Use the worked example as a model, but create a new example from a school, home or community situation."],"questions":[{"q":"Which response checks understanding?","options":["You are wrong.","So you mean we should submit one group report?","I was not listening.","That is boring."],"answer":1,"why":"Paraphrasing allows the speaker to confirm or correct your understanding."},{"q":"What is empathy in a discussion?","options":["Agreeing with everything","Trying to understand another perspective","Speaking for everyone","Avoiding questions"],"answer":1,"why":"Empathy recognises another person's perspective without requiring automatic agreement."},{"q":"Why confirm the group's final decision?","options":["To ensure everyone shares the same understanding","To make the meeting longer","To avoid assigning tasks","To prevent questions"],"answer":0,"why":"Confirmation reduces confusion about what was agreed."}]},
    {"id":"reference-skills","title":"Reading Reference Materials and Library Research","where":"Themes 3 and 8. Reading","outcomes":["Choose reference materials suited to a research question.","Locate information using contents pages, indexes and catalogues.","Evaluate and record useful sources."],"blocks":[{"title":"Choose a suitable source","text":"Different reference materials serve different purposes. A dictionary explains words; a thesaurus suggests related words; an atlas presents maps; an encyclopedia gives background information; a manual explains how to do something.","list":["Dictionary: meaning, spelling and pronunciation.","Atlas: geographical locations and features.","Manual: instructions for using or maintaining something."]},{"title":"Locate information","text":"Use headings, contents pages, indexes, search terms and library catalogues to find material efficiently.","list":["A contents page lists sections in order.","An index directs you to topics and page numbers.","A catalogue helps identify a book's title, author, subject and location."]},{"title":"Evaluate and record sources","text":"Check who created the information, when it was published, what evidence it provides and whether it answers your question. Record details so you can find and acknowledge the source.","list":["Compare important facts across reliable sources.","Separate evidence from opinion.","Record author or organisation, title and publication date where available."]}],"example":{"title":"Research the causes of soil erosion","steps":["Use an encyclopedia or textbook to understand the topic broadly.","Search the library catalogue for books on soil conservation.","Use the index to locate 'erosion', 'vegetation' and 'runoff'.","Compare explanations and record the source details.","Use an atlas if the task also requires locating affected regions."],"pitfall":"The first search result is not automatically the most accurate or relevant source."},"alt":["Identify the purpose of each part, then test your understanding by explaining the idea in your own words.","Use the worked example as a model, but create a new example from a school, home or community situation."],"questions":[{"q":"Which source is best for checking pronunciation?","options":["Atlas","Dictionary","Meeting agenda","Map scale"],"answer":1,"why":"Dictionaries commonly include pronunciation information."},{"q":"What does an index help a reader do?","options":["Find where a topic is discussed","Replace the book title","Judge speaking volume","Write a conclusion"],"answer":0,"why":"An index lists topics and directs readers to relevant pages."},{"q":"Which is a useful way to evaluate a source?","options":["Check its author, date and evidence","Choose the longest webpage","Trust every anonymous claim","Ignore publication details"],"answer":0,"why":"Authorship, date and evidence help readers assess reliability."}]},
    {"id":"functional-letters","title":"Functional Writing: Letters of Request, Inquiry and Complaint","where":"Theme 7. Writing","outcomes":["Choose an appropriate letter format for a practical purpose.","Organise a request, inquiry or complaint clearly and politely.","Include relevant facts and a reasonable requested action."],"blocks":[{"title":"Identify the purpose","text":"An inquiry asks for information; a request asks someone to take action or provide something; a complaint explains a problem and seeks a fair response.","list":["Inquiry: ask about dates, requirements or procedures.","Request: explain what is needed and why.","Complaint: describe the problem and state a reasonable remedy."]},{"title":"Organise the letter","text":"A formal letter normally includes sender details and date, recipient details where known, a suitable greeting, a clear purpose, organised paragraphs, a polite closing and the writer's name.","list":["Opening: state why you are writing.","Middle: give relevant facts and details.","Closing: state the response or action you would appreciate."]},{"title":"Use precise and respectful language","text":"Avoid insults, threats and vague statements. Use dates and specific descriptions, and keep a copy of important correspondence.","list":["'Could you please confirm whether…?'","'I would be grateful if you could…'","'I am writing to report the following problem…'"]}],"example":{"title":"Complain about a damaged library book","steps":["State that the book was already damaged when collected, if that is what happened.","Give the title, date borrowed and damage observed.","Explain what you have done so far and attach evidence if appropriate.","Request a fair review and a response.","Close respectfully and include contact details."],"pitfall":"A complaint should explain the problem and requested action; personal attacks make resolution harder."},"alt":["Identify the purpose of each part, then test your understanding by explaining the idea in your own words.","Use the worked example as a model, but create a new example from a school, home or community situation."],"questions":[{"q":"What is the purpose of a letter of inquiry?","options":["Ask for information","Narrate an imaginary event","Record a sports score","Describe a character"],"answer":0,"why":"An inquiry seeks information or clarification."},{"q":"Which sentence suits a formal request?","options":["Do this now!","I would be grateful if you could consider my request.","You people never help.","Whatever."],"answer":1,"why":"It communicates the request respectfully and clearly."},{"q":"What should a complaint include?","options":["Relevant facts and a reasonable requested action","Insults and rumours","Unrelated stories","Only an angry greeting"],"answer":0,"why":"Facts and a clear request help the recipient understand and respond."}]}
  ]
};
