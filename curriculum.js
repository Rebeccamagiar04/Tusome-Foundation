// Curriculum explorer for the four STEM subjects in the Grade 10 pilot.
(function () {
  "use strict";
  const D = window.TUSOME_DATA;
  const lessons = window.TUSOME_LESSONS || [];
  const params = new URLSearchParams(location.search);
  const allowed = ["maths","biology","chemistry","physics"];
  let subjectId = allowed.includes(params.get("subject")) ? params.get("subject") : "biology";
  const title = document.getElementById("course-title");
  const intro = document.getElementById("course-intro");
  const grid = document.getElementById("curriculum-topics");
  const search = document.getElementById("topic-search");
  const count = document.getElementById("topic-count");
  const switcher = document.getElementById("subject-switch");
  const practice = document.getElementById("practice-link");
  const lessonMap = {
    maths: {
      "Real Numbers":"maths-real-numbers-quadratics",
      "Indices and Logarithms":"maths-indices-logarithms",
      "Quadratic Expressions and Equations":"maths-real-numbers-quadratics",
      "Similarity and Enlargement":"maths-geometry-trigonometry",
      "Reflection and Congruence":"maths-geometry-trigonometry",
      "Rotation":"maths-geometry-trigonometry",
      "Trigonometry 1":"maths-geometry-trigonometry",
      "Angle Properties of a Circle":"maths-circles-area-volume-motion",
      "Area of Polygons":"maths-circles-area-volume-motion",
      "Area of a Part of a Circle":"maths-circles-area-volume-motion",
      "Surface Area and Volume of Solids":"maths-circles-area-volume-motion",
      "Linear Motion":"maths-circles-area-volume-motion",
      "Statistics":"maths-statistics-probability",
      "Statistics 1":"maths-statistics-probability",
      "Probability":"maths-statistics-probability",
      "Probability 1":"maths-statistics-probability"
    },
    biology: {
      "Introduction to Biology":"biology-investigations",
      "Cell Structure and Specialisation":"biology-cells",
      "Specimen Collection and Preservation":"biology-investigations",
      "Specimen collection and preservation":"biology-investigations",
      "Chemicals of Life":"biology-chemicals-of-life",
      "Nutrition":"biology-plant-nutrition-transport",
      "Transport":"biology-plant-nutrition-transport",
      "Gaseous Exchange and Respiration":"biology-plant-nutrition-transport"
    },
    chemistry: {
      "Introduction to Chemistry":"chemistry-introduction",
      "The Atom":"chemistry-atomic-structure-bonding",
      "The Periodic Table":"chemistry-periodic-table-salts",
      "Chemical Bonding":"chemistry-atomic-structure-bonding",
      "Periodicity":"chemistry-periodic-table-salts",
      "Acids and Bases":"chemistry-periodic-table-salts",
      "Introduction to Salts":"chemistry-periodic-table-salts",
      "Organic Chemistry":"chemistry-organic-intro"
    },
    physics: {
      "Introduction to Physics":"physics-introduction",
      "Mechanical Properties of Materials":"physics-materials-radioactivity",
      "Radioactivity and Stability of Isotopes":"physics-materials-radioactivity",
      "Pressure":"physics-pressure",
      "Moments and equilibrium":"physics-moments-energy",
      "Moments and Equilibrium":"physics-moments-energy",
      "Energy, Work, Power and Machines":"physics-moments-energy",
      "Properties of Waves":"physics-waves-electricity",
      "Electrostatics":"physics-waves-electricity",
      "Current Electricity":"physics-waves-electricity",
      "Introduction to electronics":"physics-waves-electricity",
      "Temperature and Thermal Expansion":"physics-thermal-environment-space",
      "Mechanical Properties of Materials":"physics-thermal-environment-space",
      "Greenhouse Effect and Climate Change":"physics-thermal-environment-space",
      "Introduction to Space Physics":"physics-thermal-environment-space"
    }
  };
  const names = {maths:"Core Mathematics",biology:"Biology",chemistry:"Chemistry",physics:"Physics"};
  const descriptions = {
    maths:"Build mathematical reasoning through number, algebra, geometry, measurement, statistics and probability.",
    biology:"Study living organisms through cell biology, plant systems and animal systems, linking structure to function.",
    chemistry:"Explore matter, atomic structure, periodic patterns, bonding, acids, bases, salts and introductory organic chemistry.",
    physics:"Explain physical phenomena through mechanics, thermal physics, waves, electricity, environmental physics and space."
  };
  function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
  function renderSwitch(){
    switcher.textContent="";
    allowed.forEach(id=>{
      const b=node("button",names[id],"chip"+(id===subjectId?" is-active":""));
      b.type="button";b.addEventListener("click",()=>{location.href="curriculum.html?subject="+id;});
      switcher.appendChild(b);
    });
  }
  function render(){
    const course=D.curriculum[subjectId];
    title.textContent=names[subjectId]+" • Grade 10";
    intro.textContent=descriptions[subjectId];
    practice.href=subjectId==="maths"?"mathematics.html":"practice.html?subject="+subjectId;
    const q=search.value.trim().toLowerCase();
    const rows=[];
    course.strands.forEach(strand=>strand.topics.forEach(topic=>rows.push({strand:strand.name,topic})));
    const filtered=rows.filter(x=>(x.strand+" "+x.topic).toLowerCase().includes(q));
    count.textContent="Showing "+filtered.length+" of "+rows.length+" curriculum topics. Guided lessons are available for selected topics and are being expanded progressively.";
    grid.textContent="";
    filtered.forEach(row=>{
      const card=node("article",null,"experience");
      card.appendChild(node("span",row.strand.toUpperCase(),"tag"));
      card.appendChild(node("h3",row.topic));
      card.appendChild(node("p",descriptions[subjectId]));
      let key=lessonMap[subjectId][row.topic];
      if(subjectId==="chemistry" && row.topic.indexOf("Organic Chemistry")===0) key="chemistry-organic-intro";
      if(subjectId==="biology" && row.strand==="Anatomy and Physiology of Animals" && ["Nutrition","Transport","Gaseous Exchange and Respiration"].includes(row.topic)) key="biology-animal-systems";
      const lesson=key&&lessons.find(x=>x.key===key);
      if(lesson){
        const a=node("a","Open guided lesson →","btn btn-primary");
        a.href="lesson.html?subject="+subjectId+"&lesson="+encodeURIComponent(key);
        card.appendChild(a);
      } else {
        card.appendChild(node("p","Course-map topic • full guided lesson not yet published","curriculum-source"));
      }
      grid.appendChild(card);
    });
  }
  search.addEventListener("input",render);
  renderSwitch();render();
})();