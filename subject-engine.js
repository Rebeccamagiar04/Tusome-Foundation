(function(){
"use strict";
function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function init(data){
const list=document.getElementById("subject-topic-list"),search=document.getElementById("subject-topic-search"),welcome=document.getElementById("subject-welcome"),lesson=document.getElementById("subject-lesson");
const topics=data.strands.flatMap(s=>s.topics.map(t=>({...t,strand:s.name})));let active=0;
const ids=["subject-breadcrumb","subject-progress","subject-lesson-title","subject-lesson-intro","subject-outcomes","subject-lesson-content","subject-example-title","subject-example-content","subject-misconception-text","subject-check-question","subject-check-options","subject-check-feedback"];
function renderList(){list.textContent="";const q=search.value.trim().toLowerCase();data.strands.forEach(s=>{const matched=s.topics.filter(t=>(s.name+" "+t.title).toLowerCase().includes(q));if(!matched.length)return;const h=node("h3",s.name,"subject-strand-label");list.appendChild(h);matched.forEach(t=>{const i=topics.indexOf(t);const b=node("button",t.title,"subject-topic-button"+(i===active?" is-active":""));b.type="button";b.addEventListener("click",()=>open(i));list.appendChild(b);});});}
function open(i){active=Math.max(0,Math.min(i,topics.length-1));const t=topics[active];welcome.hidden=true;lesson.hidden=false;
document.getElementById("subject-breadcrumb").textContent=t.strand+" / "+data.title;
document.getElementById("subject-progress").textContent="Topic "+(active+1)+" of "+topics.length;
document.getElementById("subject-lesson-title").textContent=t.title;
document.getElementById("subject-lesson-intro").textContent=t.intro;
const outcomes=document.getElementById("subject-outcomes");outcomes.textContent="";outcomes.appendChild(node("h3","Learning outcomes"));const ul=node("ul");t.outcomes.forEach(x=>ul.appendChild(node("li",x)));outcomes.appendChild(ul);
const content=document.getElementById("subject-lesson-content");content.textContent="";
t.sections.forEach((s,j)=>{const section=node("section",null,"subject-teaching-section");section.appendChild(node("h3",(j+1)+". "+s.heading));s.paragraphs.forEach(p=>section.appendChild(node("p",p)));if(s.points){const list=node("ul");s.points.forEach(x=>list.appendChild(node("li",x)));section.appendChild(list);}content.appendChild(section);});
document.getElementById("subject-example-title").textContent=t.example.title;
const ex=document.getElementById("subject-example-content");ex.textContent="";t.example.steps.forEach((s,i)=>ex.appendChild(node("p",(i+1)+". "+s)));
document.getElementById("subject-misconception-text").textContent=t.misconception;
document.getElementById("subject-check-question").textContent=t.check.question;
const opts=document.getElementById("subject-check-options");opts.textContent="";document.getElementById("subject-check-feedback").textContent="";
t.check.options.forEach((o,j)=>{const b=node("button",o,"subject-answer-option");b.type="button";b.addEventListener("click",()=>{const f=document.getElementById("subject-check-feedback");const correct=j===t.check.answer;f.textContent=correct?"Correct. "+t.check.explanation:"Not quite. "+t.check.hint;b.disabled=true;Array.from(opts.children).forEach(x=>x.disabled=true);});opts.appendChild(b);});
document.getElementById("subject-prev").disabled=active===0;document.getElementById("subject-next").textContent=active===topics.length-1?"Back to first topic":"Next topic →";renderList();window.scrollTo({top:0,behavior:"smooth"});}
search.addEventListener("input",renderList);document.getElementById("subject-prev").addEventListener("click",()=>open(active-1));document.getElementById("subject-next").addEventListener("click",()=>open(active===topics.length-1?0:active+1));
document.getElementById("subject-overview").appendChild(node("p",topics.length+" curriculum topics organised into "+data.strands.length+" strands. Each lesson includes explanations, outcomes, an application example and a knowledge check."));
renderList();if(topics.length)open(0);
}
window.TusomeSubjectEngine={init};
})();