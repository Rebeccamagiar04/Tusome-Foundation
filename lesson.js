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
