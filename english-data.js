// All Grade 10 English content lives in this file.
// english.js reads it and builds the page. To add a lesson later, add one object
// to ENGLISH.lessons and put its id in the "lesson" field of the matching course-map item.
//
// SOURCE: KICD Senior School Curriculum Design, Grade 10 English (June 2024)
// https://kicd.ac.ke/wp-content/uploads/2024/07/English-Grade-10-June-2024.pdf
// The course map (strands, themes, sub-strands, suggested lesson numbers) follows that
// document. The wording of the outcomes, explanations, examples and questions is our own.

window.ENGLISH = {

  source: {
    title: "KICD Senior School Curriculum Design: Grade 10 English (June 2024)",
    url: "https://kicd.ac.ke/wp-content/uploads/2024/07/English-Grade-10-June-2024.pdf"
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
      { strand: "Listening and Speaking", name: "Speaking: etiquette", lessons: 4, focus: "Using polite language in different settings; the sounds /ɒ/ and /ɔ:/.", lesson: null },
      { strand: "Reading", name: "Reading fluency", lessons: 4, focus: "Previewing, skimming and scanning; collocations and binomials.", lesson: "reading-fluency" },
      { strand: "Grammar in Use", name: "Word classes", lessons: 5, focus: "Nouns, pronouns and determiners.", lesson: "word-classes" },
      { strand: "Writing", name: "Sentence fluency", lessons: 4, focus: "Comma splices, run-on sentences and run-on lines.", lesson: "sentence-fluency" }
    ]},
    { no: 2, title: "Environment", topic: "Climate change", items: [
      { strand: "Listening and Speaking", name: "Critical listening", lessons: 3, focus: "Working out the speaker, context and intention; choosing key points; avoiding distractions.", lesson: null },
      { strand: "Listening and Speaking", name: "Conversational skills", lessons: 4, focus: "Discourse markers; the sounds /ə/, /ɑ:/ and /ɜ:/; onomatopoeia and idiophones.", lesson: null },
      { strand: "Reading", name: "Extensive reading", lessons: 4, focus: "Choosing and previewing non-literary texts to read for general understanding.", lesson: null },
      { strand: "Grammar in Use", name: "Word classes", lessons: 5, focus: "Verbs (main, auxiliary, regular, irregular, phrasal) and adverbs of time, place and manner.", lesson: null },
      { strand: "Writing", name: "Mechanics of writing: spelling", lessons: 4, focus: "Spelling rules; abbreviations and acronyms; commonly misspelt and confused words.", lesson: null }
    ]},
    { no: 3, title: "Technology", topic: "Communication apps", items: [
      { strand: "Listening and Speaking", name: "Intensive listening", lessons: 4, focus: "Listening for specific details; the sounds /ʌ/, /æ/, /aʊ/, /əʊ/, /w/ and /j/.", lesson: null },
      { strand: "Listening and Speaking", name: "Non-verbal cues", lessons: 3, focus: "Facial expressions, gestures, eye contact and body movement.", lesson: null },
      { strand: "Reading", name: "Extensive reading", lessons: 4, focus: "Reference materials: dictionary, thesaurus, atlas, manual, newspaper, encyclopedia.", lesson: null },
      { strand: "Grammar in Use", name: "Word classes", lessons: 5, focus: "Adjectives, coordinating conjunctions and simple prepositions.", lesson: null },
      { strand: "Writing", name: "Elements of effective writing", lessons: 4, focus: "Cohesion and paragraph development.", lesson: null }
    ]},
    { no: 4, title: "Travel", topic: "Adventure", items: [
      { strand: "Listening and Speaking", name: "Selective listening", lessons: 3, focus: "Picking out instructions and directions.", lesson: null },
      { strand: "Listening and Speaking", name: "Conversational skills", lessons: 4, focus: "Changing the topic, giving and receiving feedback, formal and informal register; the letter 's' and its sounds.", lesson: null },
      { strand: "Reading", name: "Study skills", lessons: 4, focus: "The SQ4R method, note making, summaries and reading visuals.", lesson: "sq4r" },
      { strand: "Grammar in Use", name: "Phrases", lessons: 4, focus: "Noun phrases and verb phrases.", lesson: null },
      { strand: "Writing", name: "Mechanics of writing: punctuation", lessons: 5, focus: "Quotation marks, dashes, hyphens, slashes and capital letters.", lesson: null }
    ]},
    { no: 5, title: "Careers", topic: "Public sector", items: [
      { strand: "Listening and Speaking", name: "Interactive listening", lessons: 3, focus: "Turn-taking, negotiating and clarifying meaning, showing empathy.", lesson: null },
      { strand: "Listening and Speaking", name: "Speaking: etiquette and pronunciation", lessons: 4, focus: "Conducting meetings politely; the sounds /tʃ/, /dʒ/ and /ʒ/.", lesson: null },
      { strand: "Reading", name: "Intensive reading", lessons: 4, focus: "Comprehension strategies; idioms, compound words and proverbs.", lesson: null },
      { strand: "Grammar in Use", name: "Phrases", lessons: 5, focus: "Adverb, adjective and prepositional phrases.", lesson: null },
      { strand: "Writing", name: "The writing process", lessons: 4, focus: "Prewriting, drafting, revising, editing and publishing, for example an appreciation letter.", lesson: "writing-process" }
    ]},
    { no: 6, title: "Culture", topic: "Values and beliefs", items: [
      { strand: "Listening and Speaking", name: "Responsive listening", lessons: 3, focus: "Listening to solve problems and linking what we hear to our own experience.", lesson: null },
      { strand: "Listening and Speaking", name: "Pronunciation and syllabic stress", lessons: 4, focus: "Stress in words; the sounds /ʊ/ and /u:/.", lesson: null },
      { strand: "Reading", name: "Reading fluency", lessons: 4, focus: "Expressive reading: expression, speed, accuracy, pace, volume and intonation.", lesson: null },
      { strand: "Grammar in Use", name: "Clauses", lessons: 4, focus: "Relative clauses and adverbial clauses.", lesson: null },
      { strand: "Writing", name: "Creative writing", lessons: 5, focus: "Descriptive and narrative essays; verbs made from other word classes.", lesson: null }
    ]},
    { no: 7, title: "Sports and Games", topic: "Popular sports", items: [
      { strand: "Listening and Speaking", name: "Critical listening", lessons: 4, focus: "Telling facts from opinions.", lesson: null },
      { strand: "Listening and Speaking", name: "Pronunciation and emphatic stress", lessons: 4, focus: "Sentence stress and emphasis; the sounds /f/, /ŋ/ and /ŋg/.", lesson: null },
      { strand: "Reading", name: "Intensive reading", lessons: 4, focus: "Transition words; denotative and connotative meaning.", lesson: null },
      { strand: "Grammar in Use", name: "Clauses", lessons: 4, focus: "Noun clauses.", lesson: null },
      { strand: "Writing", name: "Functional writing", lessons: 4, focus: "Letters of complaint, request and inquiry.", lesson: null }
    ]},
    { no: 8, title: "Health and Safety", topic: "Personal", items: [
      { strand: "Listening and Speaking", name: "Intensive listening and viewing", lessons: 4, focus: "Listening for understanding; using visuals and non-verbal cues.", lesson: null },
      { strand: "Listening and Speaking", name: "Speaking fluency", lessons: 3, focus: "The sound /i:/; synonyms, antonyms and homophones; telling a story fluently.", lesson: null },
      { strand: "Reading", name: "Extensive reading: library skills", lessons: 4, focus: "Starting research and finding materials in a library.", lesson: null },
      { strand: "Grammar in Use", name: "Sentence structure", lessons: 4, focus: "Simple sentence patterns (SV, SVO, SVC, SVOO, SVOA) and compound sentences.", lesson: null },
      { strand: "Writing", name: "Functional writing", lessons: 5, focus: "Simple reports, memos and emails with attachments.", lesson: "functional-writing" }
    ]},
    { no: 9, title: "Income", topic: "Types and sources", items: [
      { strand: "Listening and Speaking", name: "Selective listening", lessons: 3, focus: "Filtering and extracting specific information.", lesson: null },
      { strand: "Listening and Speaking", name: "Speaking fluency", lessons: 4, focus: "Oral presentations and intonation; the sounds /ð/ and /θ/.", lesson: null },
      { strand: "Reading", name: "Critical and close reading", lessons: 4, focus: "Purpose, audience and attitude; phrasal verbs and binomial expressions.", lesson: null },
      { strand: "Grammar in Use", name: "Sentences", lessons: 4, focus: "Active and passive sentences; subject-verb agreement.", lesson: "sv-agreement" },
      { strand: "Writing", name: "Functional writing", lessons: 5, focus: "A notice of a meeting, an agenda and minutes.", lesson: null }
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
  ]
};
