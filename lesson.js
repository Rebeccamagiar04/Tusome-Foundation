// Rich, structured Grade 10 lessons with outcomes, short concept sections,
// worked steps, common pitfalls, inline checks, and alternative explanations.

(function () {
  const S = window.TusomeStorage;
  const D = window.TUSOME_DATA;

  const LESSONS = [
    {
      key: "maths-indices-logarithms",
      curriculumTopic: "Numbers and Algebra → Indices and Logarithms",
      subjectId: "maths",
      subjectName: "Core Mathematics",
      title: "Indices and Logarithms",
      summary: "Explore how indices represent repeated multiplication and how logarithms help us find an unknown exponent.",
      outcomes: [
        "Explain an index as a number of repeated equal factors.",
        "Apply basic laws of indices when multiplying and dividing powers with the same base.",
        "Recognise that a logarithm is the inverse operation of exponentiation."
      ],
      sections: [
        {
          heading: "1. Understanding indices",
          body: "In 2³, the number 2 is the base and 3 is the index (or exponent). It means 2 × 2 × 2, which equals 8. The index tells us how many times the base is used as a factor; it does not mean 2 × 3."
        },
        {
          heading: "2. Basic laws of indices",
          body: "When multiplying powers with the same non-zero base, add the indices: aᵐ × aⁿ = aᵐ⁺ⁿ. When dividing powers with the same non-zero base, subtract the indices: aᵐ ÷ aⁿ = aᵐ⁻ⁿ, provided the denominator is not zero. A power raised to another power uses multiplication of indices: (aᵐ)ⁿ = aᵐⁿ."
        },
        {
          heading: "3. What a logarithm means",
          body: "A logarithm answers the question: 'What power gives this number?' For example, log₂ 8 = 3 because 2³ = 8. In general, logₐ b = c means aᶜ = b, where a is positive and not equal to 1, and b is positive."
        }
      ],
      exampleTitle: "Worked Example: Simplify 2³ × 2² ÷ 2¹",
      exampleSteps: [
        "The powers have the same base, 2, so use the multiplication and division laws.",
        "Add the indices when multiplying: 3 + 2 = 5.",
        "Subtract the index when dividing: 5 − 1 = 4.",
        "Therefore, 2³ × 2² ÷ 2¹ = 2⁴ = 16.",
        "A related logarithm fact is log₂ 16 = 4, because 2⁴ = 16."
      ],
      pitfall: "Common mistake: Adding or subtracting indices when the bases are different, or treating 2³ as 2 × 3. The index laws shown here require the same base.",
      checkQuestion: "Simplify 3² × 3⁴.",
      checkOptions: [
        "3⁶",
        "3⁸",
        "3²",
        "9⁶"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Correct! The bases are the same, so add the indices: 2 + 4 = 6. The result is 3⁶.",
      checkFeedbackWrong: "Look at the bases first. Since both are 3, keep the base and add the indices: 2 + 4.",
      altExplanation: "Think of 3² as two 3s multiplied together and 3⁴ as four more 3s. Putting them together gives six factors of 3, which is 3⁶."
    },
    {
      key: "biology-cells",
      curriculumTopic: "Cell Biology and Biodiversity → Cell Structure and Specialisation",
      subjectId: "biology",
      subjectName: "Biology",
      title: "Cell Structure and Organelle Functions",
      summary: "Understand how major cell structures work together as a coordinated system in living organisms.",
      outcomes: [
        "Identify the roles of the cell membrane, nucleus, cytoplasm, and mitochondria.",
        "Compare plant-specific features (such as cell wall and chloroplasts) with animal cells.",
        "Connect organelle function to real biological processes like energy release."
      ],
      sections: [
        {
          heading: "1. The cell as a living system",
          body: "Every living organism is made of one or more cells. Inside a cell, specialised structures called organelles carry out distinct tasks so the cell can survive, grow, and respond to changes."
        },
        {
          heading: "2. Control and transport",
          body: "The nucleus stores genetic instructions that guide cell activities, while the cell membrane controls which substances move into and out of the cell. The jelly-like cytoplasm holds organelles and hosts many chemical reactions."
        },
        {
          heading: "3. Energy and plant adaptations",
          body: "Mitochondria release usable energy (ATP) from food molecules. Plant cells additionally have a rigid cell wall for structural support and chloroplasts containing chlorophyll to capture light energy."
        }
      ],
      exampleTitle: "Worked Example: Tracing Energy in a Leaf Cell",
      exampleSteps: [
        "Chloroplasts capture light energy and help produce sugars during photosynthesis.",
        "Mitochondria break down energy-rich molecules to release usable energy for cell work.",
        "The cell membrane regulates nutrient uptake and waste removal across the boundary."
      ],
      pitfall: "Common mistake: Saying chloroplasts 'create energy from nothing' or confusing mitochondria (energy release) with the nucleus (genetic control).",
      checkQuestion: "Which structure controls what enters and leaves a cell?",
      checkOptions: [
        "Cell membrane",
        "Nucleus",
        "Cell wall"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Correct! The cell membrane acts as a selective gatekeeper regulating movement in and out of the cell.",
      checkFeedbackWrong: "Close—the nucleus controls cell activities, while the cell membrane regulates passage in and out.",
      altExplanation: "Think of a school compound: the nucleus is the administration office with the master plan, the gate/security post is the cell membrane checking who enters or leaves, and the power room generating electricity is the mitochondrion."
    },
    {
      key: "chemistry-acids-bases",
      curriculumTopic: "Physical Chemistry → Acids and Bases",
      subjectId: "chemistry",
      subjectName: "Chemistry",
      title: "Acids, Bases, and Indicators",
      summary: "Learn how to distinguish acidic, basic (alkaline), and neutral solutions and how indicators show the difference.",
      outcomes: [
        "Describe practical differences between acidic, basic, and neutral solutions.",
        "Use indicators (like litmus or universal indicator) to interpret solution properties.",
        "Explain what happens during a basic neutralisation reaction."
      ],
      sections: [
        {
          heading: "1. Acids and bases in everyday life",
          body: "Many familiar substances are acidic or basic. Lemon juice and vinegar contain acids, while soap solutions and wood ash extracts show basic (alkaline) properties."
        },
        {
          heading: "2. Why we use indicators",
          body: "Because many clear liquids look identical, chemists use indicators—substances that change colour depending on whether a solution is acidic, neutral, or basic."
        },
        {
          heading: "3. Neutralisation",
          body: "When an acid reacts with a suitable base, they neutralise each other, forming a salt and water and moving the mixture closer to neutral."
        }
      ],
      exampleTitle: "Worked Example: Testing Unknown Solutions with Litmus",
      exampleSteps: [
        "Dip red litmus and blue litmus into Solution A: blue litmus turns red, red stays red → acidic.",
        "Dip both papers into Solution B: red litmus turns blue, blue stays blue → basic/alkaline.",
        "Dip both papers into pure water: neither paper changes colour → neutral."
      ],
      pitfall: "Common mistake: Guessing a liquid's acidity by smell or taste instead of using safe indicators and proper lab observation.",
      checkQuestion: "If blue litmus paper turns red when dipped into a solution, what does that indicate?",
      checkOptions: [
        "The solution is acidic",
        "The solution is strongly basic",
        "The litmus paper is dry"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Right! Blue litmus turning red is a classic sign of an acidic solution.",
      checkFeedbackWrong: "Not quite—blue litmus turning red points to an acidic solution, whereas red turning blue points to a base.",
      altExplanation: "A simple memory hook: Acid turns Blue litmus Red (A → B → R). If you test a sample and blue becomes red, you are looking at an acid."
    },
    {
      key: "english-paragraph-structure",
      curriculumTopic: "Writing → Paragraphing, cohesion and linking words",
      subjectId: "english",
      subjectName: "English",
      title: "Structuring Clear, Focused Paragraphs",
      summary: "Build paragraphs with a clear main idea, supporting evidence, and smooth flow.",
      outcomes: [
        "Write a focused topic sentence that states the main point of a paragraph.",
        "Support claims with specific examples or explanations rather than vague filler.",
        "Keep each paragraph centered on one main idea."
      ],
      sections: [
        {
          heading: "1. Start with a clear topic sentence",
          body: "A topic sentence tells the reader what the paragraph is about right away. It sets the focus and boundary for the sentences that follow."
        },
        {
          heading: "2. Develop with explanation and examples",
          body: "Do not just repeat your topic sentence in different words. Explain how or why your point works, and give a concrete example or detail to back it up."
        },
        {
          heading: "3. Tie back to the main idea",
          body: "End the paragraph cleanly so it feels complete before you introduce a new point in the next paragraph."
        }
      ],
      exampleTitle: "Worked Example: Building a 3-Part Paragraph",
      exampleSteps: [
        "Topic sentence: Practising a few focused questions daily builds confidence faster than cramming once a week.",
        "Explanation & example: Solving one or two problems each day helps you spot small errors early and remember the method.",
        "Closing thought: Over a few weeks, steady daily practice turns difficult topics into familiar habits."
      ],
      pitfall: "Common mistake: Stuffing three unrelated points into one long paragraph, making it hard for a reader to follow the main argument.",
      checkQuestion: "What makes a supporting sentence effective in a paragraph?",
      checkOptions: [
        "It explains or gives an example connected to the topic sentence",
        "It introduces a completely unrelated subject",
        "It copies the exact same words over and over"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Well done! Good supporting sentences clarify, prove, or illustrate the paragraph's main idea.",
      checkFeedbackWrong: "Not quite—supporting sentences should explain or illustrate the main idea stated in the topic sentence.",
      altExplanation: "Think of a paragraph like a mini-meal: the topic sentence is the main dish, supporting details are the ingredients that give it substance, and the closing line wraps it up neatly."
    },
    {
      key: "physics-pressure",
      curriculumTopic: "Mechanics and Thermal Physics → Pressure",
      subjectId: "physics",
      subjectName: "Physics",
      title: "Pressure",
      summary: "Learn how force and area determine pressure, and why the same force can have different effects on different surfaces.",
      outcomes: [
        "Define pressure as force acting normally per unit area.",
        "Use pressure = force ÷ area to solve straightforward problems.",
        "State the SI unit of pressure and explain how area affects pressure."
      ],
      sections: [
        {
          heading: "1. What pressure means",
          body: "Pressure describes how concentrated a force is over a surface. The same force produces greater pressure when it acts on a smaller area, and lower pressure when it is spread over a larger area."
        },
        {
          heading: "2. The formula and unit",
          body: "For a force acting normally on a surface, pressure (P) = force (F) ÷ area (A). The SI unit is the pascal (Pa). One pascal is one newton per square metre (1 Pa = 1 N/m²)."
        },
        {
          heading: "3. Pressure in everyday situations",
          body: "A sharp nail has a very small tip area, so a given force creates high pressure and helps it enter a surface. Wide snowshoes spread a person's weight over a larger area, reducing pressure on the snow."
        }
      ],
      exampleTitle: "Worked Example: Calculating Pressure",
      exampleSteps: [
        "A force of 200 N acts normally on an area of 0.5 m².",
        "Write the formula: pressure = force ÷ area.",
        "Substitute: pressure = 200 N ÷ 0.5 m².",
        "Calculate: pressure = 400 N/m² = 400 Pa."
      ],
      pitfall: "Common mistake: Multiplying force by area instead of dividing, or giving the answer without the unit pascal (Pa). Make sure the area is in square metres when using SI units.",
      checkQuestion: "A force of 100 N acts normally on an area of 2 m². What pressure is produced?",
      checkOptions: [
        "50 Pa",
        "200 Pa",
        "102 Pa",
        "0.02 Pa"
      ],
      checkCorrect: 0,
      checkFeedbackRight: "Correct! Pressure = 100 N ÷ 2 m² = 50 N/m², which is 50 Pa.",
      checkFeedbackWrong: "Use pressure = force ÷ area. Divide 100 by 2, then write the unit as pascals (Pa).",
      altExplanation: "Imagine pressing your palm and then one fingertip against soft dough with the same force. Your fingertip touches a smaller area, so the force is concentrated and makes a deeper mark. That is greater pressure."
    }

    ,
    {
      key: "maths-real-numbers-quadratics",
      curriculumTopic: "Numbers and Algebra → Real Numbers; Quadratic Expressions and Equations",
      subjectId: "maths", subjectName: "Core Mathematics",
      title: "Real Numbers and Quadratic Expressions",
      summary: "Classify number types, work with factors and reciprocals, and recognise and solve simple quadratic equations.",
      outcomes: ["Classify integers and real numbers using their properties.", "Find common factors and reciprocals where defined.", "Expand and factorise simple quadratic expressions and solve simple quadratic equations."],
      sections: [
        {heading:"1. Number families",body:"Natural numbers are counting numbers. Whole numbers include zero. Integers include negative whole numbers. Rational numbers can be written as a fraction of integers with a non-zero denominator; irrational numbers cannot. Every rational and irrational number belongs to the real number system."},
        {heading:"2. Factors and reciprocals",body:"A factor divides a number exactly. The highest common factor (HCF) is the greatest factor shared by two or more numbers. The reciprocal of a non-zero number x is 1/x; zero has no reciprocal."},
        {heading:"3. Quadratic expressions",body:"A quadratic expression has a highest power of 2, for example x² + 5x + 6. To factorise, find two numbers whose product is 6 and whose sum is 5: 2 and 3. Thus x² + 5x + 6 = (x + 2)(x + 3)."}
      ],
      exampleTitle:"Worked Example: Solve x² + 5x + 6 = 0",
      exampleSteps:["Find two numbers that multiply to 6 and add to 5: 2 and 3.","Write the factorisation: (x + 2)(x + 3) = 0.","Set each factor to zero: x + 2 = 0 or x + 3 = 0.","Therefore x = −2 or x = −3."],
      pitfall:"Do not confuse factorising an expression with solving an equation. The equation must be set equal to zero before using the zero-product rule.",
      checkQuestion:"Which pair factorises x² + 7x + 12?",
      checkOptions:["(x + 3)(x + 4)","(x + 2)(x + 6)","(x − 3)(x − 4)","(x + 1)(x + 12)"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. 3 × 4 = 12 and 3 + 4 = 7.",
      checkFeedbackWrong:"Look for two numbers whose product is 12 and whose sum is 7.",
      altExplanation:"Think of factorising as reversing expansion: find the two brackets that would multiply to give the original expression."
    },
    {
      key: "maths-geometry-trigonometry",
      curriculumTopic: "Measurements and Geometry → Similarity, Transformations and Trigonometry",
      subjectId: "maths", subjectName: "Core Mathematics",
      title: "Similarity, Transformations and Trigonometry",
      summary: "Use scale factors, coordinate transformations and right-angled triangle ratios to describe shape and space.",
      outcomes: ["Identify corresponding sides in similar shapes.", "Describe reflection and rotation using a line or centre.", "Apply sine, cosine and tangent to right-angled triangles."],
      sections: [
        {heading:"1. Similarity and enlargement",body:"Similar shapes have equal corresponding angles and proportional corresponding sides. An enlargement multiplies every distance from a centre by the same scale factor. A scale factor greater than 1 enlarges; a positive scale factor between 0 and 1 reduces."},
        {heading:"2. Reflection and rotation",body:"A reflection flips a shape across a mirror line. Each point and its image lie on opposite sides of the mirror line at equal perpendicular distances. A rotation turns a shape about a fixed centre through a stated angle and direction."},
        {heading:"3. Trigonometric ratios",body:"In a right-angled triangle, sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent. Label the sides relative to the chosen angle before selecting a ratio."}
      ],
      exampleTitle:"Worked Example: Find a missing side",
      exampleSteps:["A right-angled triangle has an angle of 30° and hypotenuse 10 cm.","The required side is opposite the 30° angle, so use sine.","sin 30° = opposite ÷ 10.","0.5 = opposite ÷ 10, so the opposite side is 5 cm."],
      pitfall:"The opposite and adjacent sides depend on which acute angle you are using. The hypotenuse is always opposite the right angle.",
      checkQuestion:"Which ratio relates the opposite side to the hypotenuse?",
      checkOptions:["Sine","Cosine","Tangent","Reciprocal"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. Sine is opposite divided by hypotenuse.",
      checkFeedbackWrong:"Remember SOH: sine = opposite over hypotenuse.",
      altExplanation:"Use SOH–CAH–TOA as a memory aid: Sine Opposite/Hypotenuse, Cosine Adjacent/Hypotenuse, Tangent Opposite/Adjacent."
    },
    {
      key: "biology-chemicals-of-life",
      curriculumTopic: "Cell Biology and Biodiversity → Chemicals of Life",
      subjectId: "biology", subjectName: "Biology",
      title: "Chemicals of Life",
      summary: "Explore the main organic molecules in living things and how simple food tests provide evidence of their presence.",
      outcomes: ["Describe the roles of carbohydrates, proteins and lipids.", "Relate water and mineral salts to cell functions.", "Explain the purpose and interpretation of common food tests."],
      sections: [
        {heading:"1. Carbohydrates and lipids",body:"Carbohydrates provide an important energy source. Simple sugars are small and soluble; starch is a storage carbohydrate made from many glucose units. Lipids store energy, form cell membranes and provide insulation."},
        {heading:"2. Proteins, water and minerals",body:"Proteins are made from amino acids and are needed for growth, repair, enzymes and some hormones. Water is a solvent and medium for reactions. Mineral ions support processes such as nerve function, healthy blood and plant growth."},
        {heading:"3. Food tests",body:"Iodine solution tests for starch: a positive result changes from brown to blue-black. Benedict's solution with heating tests for reducing sugars: a positive result may change from blue through green/yellow to orange or brick-red. Biuret reagent tests for protein: a positive result is lilac or purple. Follow laboratory safety instructions."}
      ],
      exampleTitle:"Worked Example: Interpreting a food test",
      exampleSteps:["A food sample is mixed with iodine solution.","The mixture changes from brown to blue-black.","This is a positive test for starch.","The result shows starch is present; it does not by itself identify every nutrient in the sample."],
      pitfall:"Do not report a food test result without naming the reagent, the observed colour change and the nutrient indicated.",
      checkQuestion:"A sample turns blue-black after iodine is added. Which substance is indicated?",
      checkOptions:["Starch","Protein","Reducing sugar","Lipid"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. Iodine turns blue-black when starch is present.",
      checkFeedbackWrong:"Iodine is the standard qualitative test for starch.",
      altExplanation:"Treat each reagent like a specific detector: iodine detects starch, Benedict's detects reducing sugars after heating, and Biuret detects protein."
    },
    {
      key: "biology-plant-nutrition-transport",
      curriculumTopic: "Anatomy and Physiology of Plants → Nutrition and Transport",
      subjectId: "biology", subjectName: "Biology",
      title: "Plant Nutrition and Transport",
      summary: "Connect photosynthesis with the movement of water, minerals and manufactured food through a plant.",
      outcomes: ["State the requirements and products of photosynthesis.", "Explain the roles of xylem and phloem.", "Relate leaf structure to photosynthesis and gaseous exchange."],
      sections: [
        {heading:"1. Photosynthesis",body:"Photosynthesis uses light energy absorbed by chlorophyll to convert carbon dioxide and water into glucose, releasing oxygen. A word equation is: carbon dioxide + water → glucose + oxygen (in light and chlorophyll). Glucose can be used in respiration, stored as starch or converted into other substances."},
        {heading:"2. Leaf adaptations",body:"A broad, thin leaf provides a large surface area and a short diffusion distance. Many stomata allow gas exchange; guard cells regulate their opening. Palisade cells contain many chloroplasts to absorb light."},
        {heading:"3. Transport tissues",body:"Xylem transports water and dissolved mineral ions mainly from roots towards leaves and also provides support. Phloem transports dissolved products of photosynthesis between sources and sinks; this movement is called translocation."}
      ],
      exampleTitle:"Worked Example: Predicting a photosynthesis change",
      exampleSteps:["A plant is placed in darkness for several hours.","Light is unavailable, so the rate of photosynthesis falls greatly.","The plant continues to respire, using stored food and oxygen.","This shows why photosynthesis and respiration are different processes."],
      pitfall:"Plants respire both day and night. Photosynthesis requires light, but respiration does not.",
      checkQuestion:"Which tissue transports water from roots towards leaves?",
      checkOptions:["Xylem","Phloem","Epidermis","Palisade mesophyll"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. Xylem carries water and mineral ions through the plant.",
      checkFeedbackWrong:"Phloem transports manufactured food; xylem transports water and mineral ions.",
      altExplanation:"Think of xylem as the water supply pipes and phloem as the distribution network for sugars made by the leaves."
    },
    {
      key: "chemistry-atomic-structure-bonding",
      curriculumTopic: "Inorganic Chemistry → The Atom, Periodic Table and Chemical Bonding",
      subjectId: "chemistry", subjectName: "Chemistry",
      title: "Atomic Structure and Chemical Bonding",
      summary: "Use atomic number, mass number and electron arrangement to explain how atoms form chemical bonds.",
      outcomes: ["Identify protons, neutrons and electrons and their relative charges.", "Determine proton, neutron and electron numbers for neutral atoms and simple ions.", "Explain ionic and covalent bonding using electron transfer or sharing."],
      sections: [
        {heading:"1. Inside an atom",body:"The nucleus contains positively charged protons and neutral neutrons. Negatively charged electrons occupy energy levels and orbitals around the nucleus. Atomic number equals the number of protons; mass number equals protons plus neutrons."},
        {heading:"2. Isotopes and electron arrangement",body:"Isotopes are atoms of the same element with the same proton number but different neutron numbers. For the first 20 elements, electron arrangements can be described using shells and s/p orbital notation. A neutral atom has equal numbers of protons and electrons."},
        {heading:"3. Why atoms bond",body:"Ionic bonding involves electron transfer and electrostatic attraction between oppositely charged ions. Covalent bonding involves sharing pairs of electrons between atoms. The type of bonding helps explain properties such as melting point and electrical conductivity."}
      ],
      exampleTitle:"Worked Example: Find the particles in sodium-23",
      exampleSteps:["Sodium has atomic number 11, so it has 11 protons.","Mass number is 23, so neutrons = 23 − 11 = 12.","A neutral sodium atom has 11 electrons.","Therefore sodium-23 has 11 protons, 12 neutrons and 11 electrons."],
      pitfall:"Do not use the mass number as the number of neutrons. Subtract the atomic number from the mass number.",
      checkQuestion:"An atom has atomic number 8 and mass number 16. How many neutrons does it have?",
      checkOptions:["8","16","24","4"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. Neutrons = 16 − 8 = 8.",
      checkFeedbackWrong:"Subtract the atomic number from the mass number.",
      altExplanation:"Imagine the mass number as the total number of particles in the nucleus. The atomic number tells you how many are protons; the remainder are neutrons."
    },
    {
      key: "chemistry-periodic-table-salts",
      curriculumTopic: "Inorganic and Physical Chemistry → Periodicity, Acids, Bases and Salts",
      subjectId: "chemistry", subjectName: "Chemistry",
      title: "Periodic Patterns, Acids and Salts",
      summary: "Relate element position to electron arrangement, and connect acid-base reactions to salt preparation.",
      outcomes: ["Explain how elements are arranged by atomic number in the periodic table.", "Describe broad trends in groups and periods.", "Explain neutralisation and distinguish methods of preparing soluble and insoluble salts."],
      sections: [
        {heading:"1. The periodic table",body:"Elements are arranged in order of increasing atomic number. Elements in the same group have related outer-electron arrangements and often similar chemical properties. Across a period, proton number increases and properties change progressively."},
        {heading:"2. Acids and bases",body:"Acids produce hydrogen ions in aqueous solution; alkalis are soluble bases that produce hydroxide ions. Indicators help identify acidic, neutral and alkaline solutions. A neutralisation reaction between an acid and a base forms a salt and water."},
        {heading:"3. Preparing salts",body:"A soluble salt can often be prepared by reacting an acid with an excess insoluble base or carbonate, filtering off the excess solid, then crystallising the salt solution. An insoluble salt may be prepared by precipitation: mix suitable soluble solutions so the desired solid forms."}
      ],
      exampleTitle:"Worked Example: Neutralising hydrochloric acid with sodium hydroxide",
      exampleSteps:["Write the reactants: hydrochloric acid and sodium hydroxide.","The acid supplies hydrogen ions and the alkali supplies hydroxide ions.","Hydrogen ions combine with hydroxide ions to form water.","The remaining sodium and chloride ions form sodium chloride: HCl + NaOH → NaCl + H₂O."],
      pitfall:"A salt is not necessarily table salt. In chemistry, salts are ionic compounds formed when the replaceable hydrogen of an acid is replaced by a metal or ammonium ion.",
      checkQuestion:"Which products form when hydrochloric acid reacts completely with sodium hydroxide?",
      checkOptions:["Sodium chloride and water","Sodium oxide and hydrogen","Chlorine and sodium","Carbon dioxide and water"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. This is a neutralisation reaction.",
      checkFeedbackWrong:"An acid reacting with an alkali forms a salt and water.",
      altExplanation:"Neutralisation pairs the acid's hydrogen ions with the alkali's hydroxide ions to make water; the other ions remain as the salt."
    },
    {
      key: "physics-moments-energy",
      curriculumTopic: "Mechanics and Thermal Physics → Moments, Equilibrium, Energy, Work and Power",
      subjectId: "physics", subjectName: "Physics",
      title: "Moments, Equilibrium, Work and Power",
      summary: "Understand turning effects of forces and calculate work done and power in everyday mechanical systems.",
      outcomes: ["Calculate a moment using force and perpendicular distance.", "State conditions for rotational equilibrium in simple cases.", "Calculate work done and power using appropriate units."],
      sections: [
        {heading:"1. Turning effect of a force",body:"The moment of a force about a pivot is the force multiplied by the perpendicular distance from the pivot to the force's line of action. Its SI unit is the newton metre (N m). A larger force or lever arm produces a larger turning effect."},
        {heading:"2. Equilibrium",body:"For an object in translational equilibrium, the resultant force is zero. For rotational equilibrium, the sum of clockwise moments equals the sum of anticlockwise moments about a pivot. A balanced seesaw is a familiar example."},
        {heading:"3. Work and power",body:"Work is done when a force causes displacement in its direction: W = F × d. The SI unit is the joule (J). Power is the rate of doing work: P = W/t, measured in watts (W)."}
      ],
      exampleTitle:"Worked Example: Moment of a force",
      exampleSteps:["A 20 N force acts perpendicular to a spanner 0.25 m from the pivot.","Moment = force × perpendicular distance.","Moment = 20 × 0.25 = 5 N m.","The turning effect is 5 newton metres."],
      pitfall:"Use the perpendicular distance from the pivot to the force's line of action, not just any distance along the object.",
      checkQuestion:"A 10 N force acts 0.4 m from a pivot at right angles. What is the moment?",
      checkOptions:["4 N m","10.4 N m","25 N m","0.04 N m"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. Moment = 10 × 0.4 = 4 N m.",
      checkFeedbackWrong:"Multiply the force by the perpendicular distance.",
      altExplanation:"A door is easier to turn when you push far from the hinges. That distance is the lever arm that increases the moment."
    },
    {
      key: "physics-waves-electricity",
      curriculumTopic: "Waves and Optics; Electricity and Magnetism",
      subjectId: "physics", subjectName: "Physics",
      title: "Waves, Electricity and Electronics",
      summary: "Connect wave properties with energy transfer and describe the basic behaviour of electric charges and circuits.",
      outcomes: ["Define amplitude, wavelength, frequency and wave speed.", "Distinguish transverse and longitudinal waves.", "Apply current, potential difference and resistance relationships in simple circuits."],
      sections: [
        {heading:"1. Wave quantities",body:"A wave transfers energy without requiring the overall transfer of matter. Amplitude is the maximum displacement from equilibrium; wavelength is the distance between matching points on successive waves; frequency is the number of complete cycles per second. Wave speed = frequency × wavelength."},
        {heading:"2. Wave behaviour and radiation",body:"Transverse waves vibrate perpendicular to the direction of travel; longitudinal waves vibrate parallel to it. Radioactive decay is a nuclear process involving unstable nuclei. Handle radiation topics through safe, theoretical study and follow all laboratory rules."},
        {heading:"3. Electric circuits",body:"Electric current is the rate of flow of charge, measured in amperes. Potential difference is energy transferred per unit charge, measured in volts. For an ohmic conductor at constant temperature, V = IR. Simple electronic components such as diodes and transistors control current in useful ways."}
      ],
      exampleTitle:"Worked Example: Calculate wave speed",
      exampleSteps:["A wave has frequency 5 Hz and wavelength 2 m.","Use wave speed = frequency × wavelength.","v = 5 × 2 = 10 m/s.","The wave travels at 10 metres per second."],
      pitfall:"Frequency is measured in hertz (Hz), wavelength in metres (m), and wave speed in metres per second (m/s). Do not confuse frequency with period.",
      checkQuestion:"A wave has frequency 4 Hz and wavelength 3 m. What is its speed?",
      checkOptions:["12 m/s","7 m/s","1.33 m/s","0.75 m/s"],
      checkCorrect:0,
      checkFeedbackRight:"Correct. v = fλ = 4 × 3 = 12 m/s.",
      checkFeedbackWrong:"Multiply frequency by wavelength.",
      altExplanation:"Imagine wave crests passing a point. Frequency tells you how many pass each second; wavelength tells you how far apart they are. Multiply them to find distance travelled each second."
    }

,
    {
      key:"maths-circles-area-volume-motion",subjectId:"maths",subjectName:"Core Mathematics",
      curriculumTopic:"Measurements and Geometry → Circle Geometry, Area, Solids and Linear Motion",
      title:"Circle Geometry, Measurement and Linear Motion",
      summary:"Apply angle properties, area formulae, volume and rate calculations to familiar geometric and motion problems.",
      outcomes:["Use key angle relationships in circles.","Calculate areas of polygons, sectors and annuli.","Use surface area, volume and speed relationships in practical problems."],
      sections:[
        {heading:"1. Angles in circles",body:"A full turn at the centre is 360°. Angles at the centre and circumference standing on the same arc are related: the angle at the centre is twice the angle at the circumference. Angles in the same segment are equal, and the angle in a semicircle is 90°."},
        {heading:"2. Areas and solids",body:"The area of a sector is (θ/360°)πr² when θ is in degrees. An annulus is the ring between two concentric circles: area = π(R² − r²). For prisms, volume = cross-sectional area × length; for a cylinder, V = πr²h."},
        {heading:"3. Linear motion",body:"Speed is distance divided by time. Average speed = total distance ÷ total time. Use consistent units: convert minutes to seconds or kilometres to metres before calculating if necessary."}
      ],
      exampleTitle:"Worked Example: Area of a 90° sector",
      exampleSteps:["A circle has radius 4 cm and sector angle 90°.","Sector area = (θ/360°) × πr².","= (90/360) × π × 4².","= 1/4 × 16π = 4π cm², approximately 12.57 cm²."],
      pitfall:"The sector formula gives a fraction of the whole circle. Check that the angle is measured in degrees and that the final area uses square units.",
      checkQuestion:"A car travels 150 km in 3 hours. What is its average speed?",
      checkOptions:["50 km/h","45 km/h","150 km/h","450 km/h"],checkCorrect:0,
      checkFeedbackRight:"Correct. Average speed = 150 ÷ 3 = 50 km/h.",
      checkFeedbackWrong:"Divide the total distance by the total time.",
      altExplanation:"A sector is a slice of a circle. If the angle is one quarter of 360°, its area is one quarter of the full circle's area."
    },
    {
      key:"maths-statistics-probability",subjectId:"maths",subjectName:"Core Mathematics",
      curriculumTopic:"Statistics and Probability → Statistics 1 and Probability 1",
      title:"Statistics and Probability",
      summary:"Summarise data using averages and spread, then calculate probabilities for single and combined events.",
      outcomes:["Find and interpret mean, median, mode and range.","Read and interpret frequency tables and statistical displays.","Calculate probabilities using sample spaces and simple event rules."],
      sections:[
        {heading:"1. Measures of central tendency",body:"The mean is the total of all values divided by the number of values. The median is the middle value after arranging data in order. The mode is the most frequent value. The range is the largest value minus the smallest value."},
        {heading:"2. Presenting data",body:"Frequency tables organise repeated values. Bar charts compare categories; histograms represent grouped continuous data with touching bars. Read the axes, scale and labels before drawing conclusions."},
        {heading:"3. Probability",body:"For equally likely outcomes, P(event) = favourable outcomes ÷ total possible outcomes. Probability lies between 0 and 1. Mutually exclusive events cannot happen together; independent events do not change one another's probabilities."}
      ],
      exampleTitle:"Worked Example: Mean and probability",
      exampleSteps:["For data 2, 4, 4, 6, add the values: 2 + 4 + 4 + 6 = 16.","There are four values, so mean = 16 ÷ 4 = 4.","A bag contains 3 blue and 2 red counters: total = 5.","P(blue) = 3/5 = 0.6."],
      pitfall:"The mean is affected by extreme values. The median may better represent the centre when a data set contains an unusually large or small value.",
      checkQuestion:"A fair die is rolled once. What is the probability of getting an even number?",
      checkOptions:["1/2","1/6","2/3","1"],checkCorrect:0,
      checkFeedbackRight:"Correct. The even outcomes are 2, 4 and 6: 3 out of 6, or 1/2.",
      checkFeedbackWrong:"List the even outcomes and divide their number by the six possible outcomes.",
      altExplanation:"Probability is a fraction of the possible outcomes. If half of the equally likely outcomes meet your condition, the probability is one half."
    },
    {
      key:"biology-investigations",subjectId:"biology",subjectName:"Biology",
      curriculumTopic:"Cell Biology and Biodiversity → Introduction to Biology and Specimen Collection",
      title:"Biology, Scientific Investigation and Specimens",
      summary:"Use scientific questions and careful specimen handling to investigate living things responsibly.",
      outcomes:["Explain the scope and importance of Biology.","Plan a simple fair investigation using observations and measurements.","Describe safe collection, labelling and preservation of specimens."],
      sections:[
        {heading:"1. What Biology studies",body:"Biology is the scientific study of living organisms and their interactions. Its fields include botany, zoology, ecology, anatomy, physiology, genetics, microbiology and biotechnology. Biological knowledge supports health, agriculture, conservation and industry."},
        {heading:"2. Investigating scientifically",body:"A scientific investigation begins with a question. Identify the variable you change, the variable you measure and the factors you keep constant. Collect repeatable observations, record units, look for patterns and base conclusions on evidence."},
        {heading:"3. Collecting specimens responsibly",body:"Use appropriate tools such as forceps, nets or sample containers, depending on the specimen. Label samples with useful information such as name, location and date. Avoid unnecessary harm to organisms and follow safety, hygiene and conservation guidance. Preservation methods depend on the specimen and should follow teacher instructions."}
      ],
      exampleTitle:"Worked Example: Investigating light and seedling growth",
      exampleSteps:["Question: does light affect seedling growth?","Use similar seedlings and keep soil, water, container and temperature as similar as possible.","Change the light exposure and measure seedling height at the same time each day.","Repeat measurements, record results in a table and compare the growth patterns."],
      pitfall:"If several variables change at once, you cannot tell which one caused the observed difference.",
      checkQuestion:"In an investigation of how light affects plant growth, what should be measured as the outcome?",
      checkOptions:["Seedling growth or height","The colour of the ruler","The learner's name","The classroom number"],checkCorrect:0,
      checkFeedbackRight:"Correct. Growth or height is the dependent variable being measured.",
      checkFeedbackWrong:"Measure the outcome that may change when light exposure changes.",
      altExplanation:"A fair test changes one main factor, measures the result and keeps other important conditions the same."
    },
    {
      key:"biology-animal-systems",subjectId:"biology",subjectName:"Biology",
      curriculumTopic:"Anatomy and Physiology of Animals → Nutrition, Transport, Gaseous Exchange and Respiration",
      title:"Animal Nutrition, Transport and Respiration",
      summary:"Trace how animals obtain nutrients, move materials around the body and release energy in cells.",
      outcomes:["Describe the stages of nutrition in animals.","Explain the roles of blood and the circulatory system.","Distinguish gaseous exchange from cellular respiration."],
      sections:[
        {heading:"1. Nutrition in animals",body:"Animal nutrition involves ingestion, digestion, absorption, assimilation and egestion. Digestion breaks large insoluble food molecules into smaller soluble molecules. The small intestine is adapted for absorption through its large surface area and villi."},
        {heading:"2. Transport in animals",body:"The circulatory system transports oxygen, nutrients, hormones and waste products. In humans, the heart pumps blood through vessels. Arteries carry blood away from the heart, veins return blood to it, and capillaries allow exchange with tissues."},
        {heading:"3. Gaseous exchange and respiration",body:"Gaseous exchange is the movement of oxygen and carbon dioxide between an organism and its environment. Cellular respiration is the chemical process that releases energy from food in cells. Aerobic respiration uses oxygen; it is not the same thing as breathing."}
      ],
      exampleTitle:"Worked Example: Following oxygen to a muscle cell",
      exampleSteps:["Air enters the lungs and reaches the alveoli.","Oxygen diffuses across the thin alveolar wall into blood.","The heart pumps oxygenated blood to body tissues.","Oxygen diffuses into muscle cells and is used in aerobic respiration."],
      pitfall:"Breathing, gaseous exchange and cellular respiration are related but different processes. Do not use the terms as if they mean the same thing.",
      checkQuestion:"Which blood vessels allow exchange of substances between blood and body tissues?",
      checkOptions:["Capillaries","Arteries only","Veins only","The heart chambers"],checkCorrect:0,
      checkFeedbackRight:"Correct. Capillaries have thin walls that allow exchange with tissues.",
      checkFeedbackWrong:"Look for the smallest vessels with very thin walls.",
      altExplanation:"Think of the circulatory system as a delivery network: the heart is the pump, vessels are routes, and capillaries are the delivery points."
    },
    {
      key:"chemistry-organic-intro",subjectId:"chemistry",subjectName:"Chemistry",
      curriculumTopic:"Organic Chemistry → Introductory Concepts",
      title:"Introduction to Organic Chemistry",
      summary:"Explore carbon's bonding ability and recognise common families of simple organic compounds.",
      outcomes:["Explain why carbon forms many compounds.","Recognise hydrocarbons as compounds containing carbon and hydrogen only.","Distinguish saturated and unsaturated hydrocarbons at an introductory level."],
      sections:[
        {heading:"1. Why carbon is special",body:"Carbon has four electrons in its outer shell and can form four covalent bonds. Carbon atoms can bond to one another to form chains and rings, producing a very large variety of compounds."},
        {heading:"2. Hydrocarbons",body:"Hydrocarbons contain only carbon and hydrogen. Alkanes are saturated hydrocarbons with carbon-carbon single bonds. Alkenes contain at least one carbon-carbon double bond and are unsaturated. Their structures influence their chemical behaviour."},
        {heading:"3. Organic compounds in daily life",body:"Organic compounds occur in fuels, food, medicines, plastics, fibres and many biological molecules. Their uses and environmental effects depend on their structures and properties. Safe handling and responsible disposal are important."}
      ],
      exampleTitle:"Worked Example: Classifying a hydrocarbon",
      exampleSteps:["A compound contains only carbon and hydrogen.","Its displayed structure shows only single bonds between carbon atoms.","It is a saturated hydrocarbon and belongs to the alkane family.","If a carbon-carbon double bond were present, it would be an unsaturated alkene."],
      pitfall:"Do not assume every compound containing carbon is a hydrocarbon. A hydrocarbon contains only carbon and hydrogen.",
      checkQuestion:"Which statement describes a hydrocarbon?",
      checkOptions:["It contains only carbon and hydrogen","It must contain oxygen","It contains only metals","It cannot form covalent bonds"],checkCorrect:0,
      checkFeedbackRight:"Correct. Hydrocarbons contain carbon and hydrogen only.",
      checkFeedbackWrong:"Focus on the two elements named in the word hydrocarbon.",
      altExplanation:"Hydrocarbons are compounds built from carbon and hydrogen atoms. Other organic compounds may also contain oxygen, nitrogen or other elements."
    },
    {
      key:"physics-thermal-environment-space",subjectId:"physics",subjectName:"Physics",
      curriculumTopic:"Mechanics and Thermal Physics; Environmental and Space Physics",
      title:"Thermal Expansion, Climate and Space Physics",
      summary:"Explain how heating changes materials and how physical processes connect Earth's climate with space.",
      outcomes:["Distinguish temperature from thermal energy.","Explain expansion when materials are heated.","Describe the greenhouse effect and introductory space-weather ideas."],
      sections:[
        {heading:"1. Temperature and thermal expansion",body:"Temperature indicates how hot or cold a body is and is related to the average kinetic energy of its particles. When most materials are heated, their particles move or vibrate more and the material expands. Different materials expand by different amounts."},
        {heading:"2. Everyday applications",body:"Expansion gaps on bridges and railway tracks allow materials to expand safely. Liquid-in-glass thermometers use the expansion of a liquid to indicate temperature. The design of structures must consider temperature changes."},
        {heading:"3. Greenhouse effect and space",body:"Greenhouse gases absorb and re-emit infrared radiation, warming Earth's lower atmosphere. The natural greenhouse effect makes Earth habitable; increased greenhouse gas concentrations strengthen warming and contribute to climate change. Space physics also studies the Sun, solar activity and how space weather can affect satellites and communication systems."}
      ],
      exampleTitle:"Worked Example: Why bridges need expansion joints",
      exampleSteps:["A bridge warms during a hot day.","Its materials expand as their temperature rises.","Expansion joints provide room for this change in length.","Without enough space, large stresses could damage the structure."],
      pitfall:"The greenhouse effect is not the same as the ozone-layer issue. They involve different atmospheric processes.",
      checkQuestion:"Why are expansion joints used on long bridges?",
      checkOptions:["To allow materials to expand and contract safely","To make the bridge heavier","To stop gravity","To increase friction"],checkCorrect:0,
      checkFeedbackRight:"Correct. The joints accommodate changes in length as temperature changes.",
      checkFeedbackWrong:"Think about what happens to many solids when their temperature rises.",
      altExplanation:"A bridge behaves a little like a long metal ruler: it becomes slightly longer when heated. Joints provide space for that movement."
    }
,
    {
      key:"physics-materials-radioactivity",subjectId:"physics",subjectName:"Physics",
      curriculumTopic:"Mechanics and Thermal Physics; Waves and Optics → Mechanical Properties and Radioactivity",
      title:"Mechanical Properties of Materials and Radioactivity",
      summary:"Explore how materials respond to forces and why some atomic nuclei emit radiation as they become more stable.",
      outcomes:["Distinguish elastic and plastic deformation.","Relate force, extension, stress and strain in simple material tests.","Describe alpha, beta and gamma radiation and basic nuclear stability."],
      sections:[
        {heading:"1. How materials respond to forces",body:"A force can change an object's shape or length. Elastic deformation is reversed when the force is removed, provided the elastic limit has not been exceeded. Plastic deformation remains after the force is removed. A force-extension graph helps show how a material responds as the load increases."},
        {heading:"2. Stress and strain",body:"Stress is force per unit cross-sectional area, measured in pascals. Strain is extension divided by original length and has no unit. For a material obeying Hooke's law within its proportional limit, extension is proportional to force. Young's modulus relates tensile stress to tensile strain."},
        {heading:"3. Radioactivity and isotopes",body:"An isotope has the same proton number as other atoms of the element but a different number of neutrons. An unstable nucleus may emit alpha particles, beta particles or gamma radiation. These emissions differ in charge, mass and penetrating ability. Radiation is studied with strict safety controls and must never be handled without authorised supervision."}
      ],
      exampleTitle:"Worked Example: Calculate strain",
      exampleSteps:["A wire is originally 2.0 m long and extends by 0.004 m.","Strain = extension ÷ original length.","Strain = 0.004 ÷ 2.0 = 0.002.","Strain is dimensionless, so no unit is written."],
      pitfall:"Do not attach a unit to strain. It is a ratio of two lengths and therefore has no unit.",
      checkQuestion:"A material returns to its original shape after a small force is removed. What type of deformation has occurred?",
      checkOptions:["Elastic deformation","Plastic deformation","Fracture","Radioactive decay"],checkCorrect:0,
      checkFeedbackRight:"Correct. Elastic deformation is reversible when the force is removed.",
      checkFeedbackWrong:"Look for the word reversible: the material returns to its original shape.",
      altExplanation:"A spring that returns to its original length after you release it shows elastic behaviour, as long as you have not stretched it beyond its elastic limit."
    }
  ];

  window.TUSOME_LESSONS = LESSONS;

  const selectEl = document.getElementById("lesson-select");
  const subjectTag = document.getElementById("lesson-subject-tag");
  const curriculumSourceEl = document.getElementById("lesson-curriculum-source");
  const titleEl = document.getElementById("lesson-title");
  const summaryEl = document.getElementById("lesson-summary");
  const outcomesEl = document.getElementById("lesson-outcomes");
  const blocksEl = document.getElementById("lesson-blocks");
  const exTitleEl = document.getElementById("lesson-example-title");
  const exStepsEl = document.getElementById("lesson-example-steps");
  const pitfallEl = document.getElementById("lesson-pitfall");
  const checkQEl = document.getElementById("check-question");
  const checkOptsEl = document.getElementById("check-options");
  const checkBtn = document.getElementById("check-answer-btn");
  const checkFeedbackEl = document.getElementById("check-feedback");
  const confusedBtn = document.getElementById("confused-btn");
  const altBox = document.getElementById("alt-explanation-box");
  const altText = document.getElementById("alt-explanation-text");
  const completeBtn = document.getElementById("complete-lesson-btn");
  const statusEl = document.getElementById("lesson-status");
  const practiceLink = document.getElementById("lesson-practice-link");
  const curriculumNoteEl = document.getElementById("lesson-curriculum-note");
  const topicNoteEl = document.getElementById("lesson-topic-note");

  if (!titleEl || !selectEl) return;

  let activeLesson = LESSONS[0];

  LESSONS.forEach(function (lesson, idx) {
    const opt = document.createElement("option");
    opt.value = String(idx);
    opt.textContent = lesson.subjectName + " — " + lesson.title;
    selectEl.appendChild(opt);
  });

  function renderLesson(lesson) {
    activeLesson = lesson;
    const subjObj = D && D.getSubject ? D.getSubject(lesson.subjectId) : null;
    const subjLabel = subjObj ? subjObj.name : lesson.subjectName;
    const curriculumInfo = D && D.curriculum ? D.curriculum[lesson.subjectId] : null;
    if (curriculumSourceEl) curriculumSourceEl.textContent = curriculumInfo && curriculumInfo.source ? curriculumInfo.source : "Grade 10 subject design";
    if (curriculumNoteEl) curriculumNoteEl.hidden = false;
    if (topicNoteEl) topicNoteEl.hidden = false;
    const curriculumTopicEl = document.getElementById("lesson-curriculum-topic");
    if (curriculumTopicEl) curriculumTopicEl.textContent = lesson.curriculumTopic || "Selected Grade 10 topic";

    subjectTag.textContent = "GRADE 10 • " + subjLabel.toUpperCase();
    titleEl.textContent = lesson.title;
    if (practiceLink) practiceLink.href = "practice.html?subject=" + encodeURIComponent(lesson.subjectId);
    summaryEl.textContent = lesson.summary;

    outcomesEl.textContent = "";
    lesson.outcomes.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      outcomesEl.appendChild(li);
    });

    blocksEl.textContent = "";
    lesson.sections.forEach(function (sec) {
      const wrap = document.createElement("div");
      wrap.className = "lesson-block";

      const h3 = document.createElement("h3");
      h3.textContent = sec.heading;

      const p = document.createElement("p");
      p.textContent = sec.body;

      wrap.appendChild(h3);
      wrap.appendChild(p);
      blocksEl.appendChild(wrap);
    });

    exTitleEl.textContent = lesson.exampleTitle;
    exStepsEl.textContent = "";
    lesson.exampleSteps.forEach(function (stepText) {
      const li = document.createElement("li");
      li.textContent = stepText;
      exStepsEl.appendChild(li);
    });

    pitfallEl.textContent = lesson.pitfall;

    checkQEl.textContent = lesson.checkQuestion;
    checkOptsEl.textContent = "";
    lesson.checkOptions.forEach(function (optLabel, idx) {
      const label = document.createElement("label");
      label.className = "option-card";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "lessonCheck";
      radio.value = String(idx);

      const span = document.createElement("span");
      span.textContent = optLabel;

      label.appendChild(radio);
      label.appendChild(span);
      checkOptsEl.appendChild(label);
    });

    checkFeedbackEl.textContent = "";
    checkFeedbackEl.className = "feedback";

    altText.textContent = lesson.altExplanation;
    altBox.hidden = true;
    statusEl.textContent = "";
    statusEl.className = "feedback";

    const idx = LESSONS.indexOf(lesson);
    if (idx >= 0) selectEl.value = String(idx);

    if (S) {
      S.recordActivity({
        id: "lesson-open-" + lesson.key,
        title: "Opened lesson: " + lesson.title,
        subject: subjLabel,
        topic: lesson.title,
        type: "lesson",
        url: "lesson.html?subject=" + encodeURIComponent(lesson.subjectId)
      });
    }
  }

  const params = new URLSearchParams(location.search);
  const paramSubj = params.get("subject");
  const paramLesson = params.get("lesson");
  const initial = LESSONS.find(function (l) {
    return paramLesson ? l.key === paramLesson : l.subjectId === paramSubj;
  });
  if (initial) {
    renderLesson(initial);
  } else if (paramSubj) {
    titleEl.textContent = "Lesson coming soon";
    summaryEl.textContent = "This subject is listed in the wider Senior School curriculum, but its guided lesson has not been added to this TUSOME pilot yet.";
    subjectTag.textContent = "GRADE 10 • CONTENT IN DEVELOPMENT";
    if (blocksEl) blocksEl.textContent = "Please choose one of the available lessons from the subject selector, or return to the subject directory.";
    if (curriculumNoteEl) curriculumNoteEl.hidden = true;
    if (topicNoteEl) topicNoteEl.hidden = true;
  } else {
    renderLesson(LESSONS[0]);
  }

  selectEl.addEventListener("change", function () {
    const chosen = LESSONS[Number(selectEl.value)] || LESSONS[0];
    renderLesson(chosen);
  });

  if (checkBtn) {
    checkBtn.addEventListener("click", function () {
      const selected = document.querySelector('input[name="lessonCheck"]:checked');
      checkFeedbackEl.className = "feedback";

      if (!selected) {
        checkFeedbackEl.textContent = "Choose an option above first so we can check your answer.";
        checkFeedbackEl.classList.add("is-wrong");
        return;
      }

      const isRight = Number(selected.value) === activeLesson.checkCorrect;
      if (S) {
        S.recordActivity({
          id: "lesson-check-" + activeLesson.key + "-" + Date.now(),
          title: "Quick check (" + activeLesson.title + ")",
          subject: activeLesson.subjectName,
          topic: activeLesson.title,
          type: "lesson-check",
          url: "lesson.html?subject=" + encodeURIComponent(activeLesson.subjectId),
          recordAttempt: true,
          correct: isRight
        });
      }

      if (isRight) {
        checkFeedbackEl.textContent = "✓ " + activeLesson.checkFeedbackRight;
        checkFeedbackEl.classList.add("is-correct");
      } else {
        checkFeedbackEl.textContent = "✗ " + activeLesson.checkFeedbackWrong;
        checkFeedbackEl.classList.add("is-wrong");
      }
    });
  }

  if (confusedBtn) {
    confusedBtn.addEventListener("click", function () {
      altBox.hidden = false;
      statusEl.textContent = "Here is another way to look at it—take your time and try the quick check whenever you're ready.";
      statusEl.className = "feedback is-correct";
    });
  }

  if (completeBtn) {
    completeBtn.addEventListener("click", function () {
      if (S) {
        S.recordActivity({
          id: "lesson-done-" + activeLesson.key,
          title: "Completed lesson: " + activeLesson.title,
          subject: activeLesson.subjectName,
          topic: activeLesson.title,
          type: "lesson",
          url: "lesson.html?subject=" + encodeURIComponent(activeLesson.subjectId),
          markLessonComplete: true,
          lessonKey: activeLesson.key
        });
      }
      statusEl.textContent = "✓ Lesson marked complete! Your Dashboard and Progress pages have been updated.";
      statusEl.className = "feedback is-correct";
    });
  }
})();
