const services=[
{name:'Aadhaar',cat:'Identity & Documents',icon:'🪪',desc:'Aadhaar services, update and verification.',url:'https://uidai.gov.in/'},
{name:'DigiLocker',cat:'Identity & Documents',icon:'📁',desc:'Access and store verified digital documents.',url:'https://www.digilocker.gov.in/'},
{name:'PAN / Income Tax',cat:'Tax & Finance',icon:'💳',desc:'PAN, ITR filing and income-tax services.',url:'https://www.incometax.gov.in/'},
{name:'Passport Seva',cat:'Identity & Documents',icon:'🛂',desc:'Apply, track and manage passport services.',url:'https://www.passportindia.gov.in/'},
{name:'EPFO',cat:'Jobs & Employment',icon:'🏦',desc:'PF balance, claims and employee services.',url:'https://www.epfindia.gov.in/'},
{name:'Voter Services',cat:'Election & Citizen',icon:'🗳️',desc:'Voter registration, search and electoral services.',url:'https://voters.eci.gov.in/'},
{name:'Parivahan',cat:'Transport',icon:'🚗',desc:'Driving licence, vehicle and transport services.',url:'https://parivahan.gov.in/'},
{name:'e-District UP',cat:'Uttar Pradesh',icon:'📜',desc:'Certificates and citizen services for Uttar Pradesh.',url:'https://edistrict.up.gov.in/'},
{name:'UP Government',cat:'Uttar Pradesh',icon:'🏛️',desc:'Official Uttar Pradesh government portal.',url:'https://up.gov.in/'},
{name:'National Career Service',cat:'Jobs & Employment',icon:'💼',desc:'Government job and career services.',url:'https://www.ncs.gov.in/'},
{name:'Scholarships',cat:'Students & Education',icon:'🎓',desc:'Find government scholarship information and services.',url:'https://scholarships.gov.in/'},
{name:'National Health Portal',cat:'Health',icon:'🏥',desc:'Official health information and citizen resources.',url:'https://www.nhp.gov.in/'},
{name:'UMANG',cat:'Citizen Services',icon:'📱',desc:'Access many government services through one platform.',url:'https://web.umang.gov.in/'},
{name:'MyScheme',cat:'Schemes & Welfare',icon:'🎁',desc:'Discover government schemes and eligibility information.',url:'https://www.myscheme.gov.in/'},
{name:'CPGRAMS',cat:'Citizen Services',icon:'📣',desc:'Submit and track public grievances.',url:'https://pgportal.gov.in/'},
{name:'GST Portal',cat:'Tax & Finance',icon:'🧾',desc:'GST registration, returns and taxpayer services.',url:'https://www.gst.gov.in/'}
];
const categories=[['🪪','Identity & Documents','Aadhaar, PAN, Passport, DigiLocker'],['💰','Tax & Finance','Income Tax, GST and finance'],['🎓','Students & Education','Scholarships and education portals'],['💼','Jobs & Employment','Jobs, careers and EPFO'],['🏥','Health','Health information and services'],['🎁','Schemes & Welfare','Government schemes and benefits'],['🚗','Transport','DL, vehicle and transport services'],['🏛️','Citizen Services','Complaints, certificates and portals']];
const grid=document.getElementById('serviceGrid'), input=document.getElementById('searchInput'), empty=document.getElementById('emptyState'), result=document.getElementById('resultText');
function render(list=services){grid.innerHTML=list.map(s=>`<article class="service-card"><div class="service-icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p><a class="open" href="${s.url}" target="_blank" rel="noopener noreferrer">Official Website ↗</a></article>`).join('');empty.classList.toggle('hidden',list.length>0);document.getElementById('serviceCount').textContent=services.length;result.textContent=list.length+' services';}
function search(){const q=input.value.trim().toLowerCase();const list=!q?services:services.filter(s=>(s.name+' '+s.cat+' '+s.desc).toLowerCase().includes(q));render(list);document.getElementById('services').scrollIntoView({behavior:'smooth',block:'start'});}
render();
let timer;input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{const q=input.value.trim().toLowerCase();render(!q?services:services.filter(s=>(s.name+' '+s.cat+' '+s.desc).toLowerCase().includes(q)));},120)});
document.getElementById('clearSearch').onclick=()=>{input.value='';render();input.focus()};
document.querySelectorAll('[data-search]').forEach(b=>b.onclick=()=>{input.value=b.dataset.search;render(services.filter(s=>(s.name+' '+s.cat+' '+s.desc).toLowerCase().includes(b.dataset.search.toLowerCase())));document.getElementById('services').scrollIntoView({behavior:'smooth'})});
document.getElementById('categoryGrid').innerHTML=categories.map(c=>`<div class="category" data-cat="${c[1]}"><span>${c[0]}</span><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join('');
document.querySelectorAll('.category').forEach(c=>c.onclick=()=>{input.value=c.dataset.cat;render(services.filter(s=>s.cat===c.dataset.cat));document.getElementById('services').scrollIntoView({behavior:'smooth'})});
document.getElementById('themeBtn').onclick=()=>{document.body.classList.toggle('dark');document.getElementById('themeBtn').textContent=document.body.classList.contains('dark')?'☀️':'🌙';localStorage.setItem('sarkari-theme',document.body.classList.contains('dark')?'dark':'light')};
if(localStorage.getItem('sarkari-theme')==='dark'){document.body.classList.add('dark');document.getElementById('themeBtn').textContent='☀️'}
document.getElementById('guideBtn').onclick=()=>{input.focus();document.getElementById('services').scrollIntoView({behavior:'smooth'})};
const stateLinks={"Uttar Pradesh":['https://up.gov.in/','UP Government','e-District, government services and state information.'],"Delhi":['https://delhi.gov.in/','Delhi Government','Official Delhi government portal and citizen services.'],"Maharashtra":['https://www.maharashtra.gov.in/','Maharashtra Government','Official Maharashtra government portal.'],"Bihar":['https://state.bihar.gov.in/','Bihar Government','Official Bihar government portal.'],"Rajasthan":['https://rajasthan.gov.in/','Rajasthan Government','Official Rajasthan government portal.'],"Madhya Pradesh":['https://mp.gov.in/','Madhya Pradesh Government','Official Madhya Pradesh government portal.'],"West Bengal":['https://wb.gov.in/','West Bengal Government','Official West Bengal government portal.'],"Gujarat":['https://gujarat.gov.in/','Gujarat Government','Official Gujarat government portal.']};
document.getElementById('stateSelect').onchange=e=>{const s=stateLinks[e.target.value];if(!s)return;document.getElementById('stateCard').innerHTML=`<div class="state-icon">🗺️</div><div><h3>${s[1]}</h3><p>${s[2]}</p><a href="${s[0]}" target="_blank" rel="noopener">Open official portal ↗</a></div>`};


// Additional official recruitment, result and admit-card directory
const jobsList=[
{name:"UPPSC",cat:"Uttar Pradesh Jobs",icon:"🏛️",desc:"Uttar Pradesh Public Service Commission recruitment and notices.",url:"https://uppsc.up.nic.in/"},
{name:"UPSSSC",cat:"Uttar Pradesh Jobs",icon:"📋",desc:"Uttar Pradesh Subordinate Services Selection Commission notices.",url:"https://upsssc.gov.in/"},
{name:"UP Police Recruitment",cat:"Police Jobs",icon:"👮",desc:"Official Uttar Pradesh Police recruitment board website.",url:"https://uppbpb.gov.in/"},
{name:"SSC",cat:"Central Jobs",icon:"📝",desc:"Staff Selection Commission recruitment, applications and schedules.",url:"https://ssc.gov.in/"},
{name:"UPSC",cat:"Central Jobs",icon:"🏅",desc:"Union Public Service Commission examinations and recruitment.",url:"https://upsc.gov.in/"},
{name:"Indian Railways",cat:"Railway Jobs",icon:"🚆",desc:"Official Indian Railways website and recruitment information.",url:"https://indianrailways.gov.in/"},
{name:"IBPS",cat:"Bank Jobs",icon:"🏦",desc:"Institute of Banking Personnel Selection exams and notices.",url:"https://www.ibps.in/"},
{name:"National Career Service",cat:"Career Resources",icon:"💼",desc:"Employment services and career resources.",url:"https://www.ncs.gov.in/"}
];
const resultsList=[
{name:"UP Board",cat:"School Results",icon:"📚",desc:"Official UP Board website for result announcements and notices.",url:"https://results.upmsp.edu.in/"},
{name:"CBSE Results",cat:"School Results",icon:"🎓",desc:"Official CBSE results portal; availability depends on exam schedule.",url:"https://results.cbse.nic.in/"},
{name:"NTA Exams",cat:"Entrance Exam Results",icon:"🧪",desc:"Official National Testing Agency site for exam notices and result links.",url:"https://nta.ac.in/"},
{name:"UPSC Results",cat:"Recruitment Results",icon:"🏅",desc:"Official UPSC results and examination notices.",url:"https://upsc.gov.in/"},
{name:"SSC Results",cat:"Recruitment Results",icon:"📝",desc:"Check result notices and candidate updates from SSC.",url:"https://ssc.gov.in/"},
{name:"UPPSC Results",cat:"Recruitment Results",icon:"📋",desc:"Official UPPSC examination results and notices.",url:"https://uppsc.up.nic.in/"}
];
const admitList=[
{name:"SSC Admit Cards",cat:"Central Exams",icon:"🎫",desc:"Check SSC notices, admission certificates and exam schedules.",url:"https://ssc.gov.in/"},
{name:"UPSC Admit Cards",cat:"Central Exams",icon:"🪪",desc:"Official UPSC examination notices and e-admit-card links.",url:"https://upsc.gov.in/"},
{name:"UPSSSC Exam Notices",cat:"Uttar Pradesh Exams",icon:"📋",desc:"Official exam calendar, notices and candidate updates.",url:"https://upsssc.gov.in/"},
{name:"UP Police Exam Notices",cat:"Uttar Pradesh Exams",icon:"👮",desc:"Official UP Police recruitment and exam updates.",url:"https://uppbpb.gov.in/"},
{name:"NTA Admit Cards",cat:"Entrance Exams",icon:"🧪",desc:"Use official NTA exam sites and notices for admit-card links.",url:"https://nta.ac.in/"},
{name:"CBSE Exam Notices",cat:"School Exams",icon:"📚",desc:"Official CBSE announcements, date sheets and exam resources.",url:"https://www.cbse.gov.in/"}
];
const allDirectoryItems=[...services,...jobsList,...resultsList,...admitList];
function renderExtraGrid(id,items){
 const el=document.getElementById(id); if(!el)return;
 el.innerHTML=items.map(s=>'<article class="service-card"><div class="service-icon">'+s.icon+'</div><span class="card-meta">'+s.cat+'</span><h3>'+s.name+'</h3><p>'+s.desc+'</p><a class="open" href="'+s.url+'" target="_blank" rel="noopener noreferrer">Open official website ↗</a></article>').join('');
}
function renderAllDirectories(query=''){
 const q=query.trim().toLowerCase();
 const match=items=>items.filter(s=>(s.name+' '+s.cat+' '+s.desc).toLowerCase().includes(q));
 renderExtraGrid('jobsGrid',q?match(jobsList):jobsList);
 renderExtraGrid('resultsGrid',q?match(resultsList):resultsList);
 renderExtraGrid('admitGrid',q?match(admitList):admitList);
 if(q){
  const serviceMatches=match(services);
  render(serviceMatches);
  document.getElementById('resultText').textContent=(match(allDirectoryItems).length)+' matching links';
 }else{
  render(services);
  document.getElementById('resultText').textContent=allDirectoryItems.length+' links across all sections';
 }
}
document.getElementById('searchForm')?.addEventListener('submit',e=>{e.preventDefault();renderAllDirectories(input.value);document.getElementById('services').scrollIntoView({behavior:'smooth'});});
input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>renderAllDirectories(input.value),100);});
document.querySelectorAll('[data-search]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.search;renderAllDirectories(input.value);document.getElementById('services').scrollIntoView({behavior:'smooth'});}));
document.getElementById('clearSearch').setAttribute('type','button');
document.getElementById('clearSearch').addEventListener('click',()=>{input.value='';renderAllDirectories();input.focus();});
document.getElementById('totalCount') && (document.getElementById('totalCount').textContent=allDirectoryItems.length);
document.getElementById('serviceCount') && (document.getElementById('serviceCount').textContent=allDirectoryItems.length);

// Lightweight English/Hindi UI switch. Language choice is stored only in this browser.
const languageButton=document.getElementById('languageBtn');
const languageNodes=[...document.querySelectorAll('[data-lang-en][data-lang-hi]')];
let currentLanguage=localStorage.getItem('sarkari-language')||'en';
function setLanguage(lang){
 currentLanguage=lang;
 languageNodes.forEach(el=>{el.textContent=lang==='hi'?el.dataset.langHi:el.dataset.langEn;});
 if(languageButton){languageButton.textContent=lang==='en'?'हिंदी':'English';languageButton.setAttribute('aria-label',lang==='en'?'हिंदी में बदलें':'Switch to English');}
 document.documentElement.lang=lang;
 localStorage.setItem('sarkari-language',lang);
}
if(languageButton){languageButton.addEventListener('click',()=>setLanguage(currentLanguage==='en'?'hi':'en'));setLanguage(currentLanguage);}

// Keep state choices and search interactions keyboard-friendly.
document.querySelectorAll('.category').forEach(el=>{el.setAttribute('tabindex','0');el.setAttribute('role','button');el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}});});
renderAllDirectories();


// Scroll reveal: progressively animate content as it enters the viewport.
(function(){
 const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const revealTargets=document.querySelectorAll('.section h2,.service-card,.project-card,.category,.state-card,.notice,.help');
 if(reduceMotion||!('IntersectionObserver' in window)){return;}
 revealTargets.forEach((el,index)=>{
   el.classList.add('reveal-on-scroll');
   if(el.matches('.service-card,.project-card,.category,.state-card')) el.style.transitionDelay=((index%5)*55)+'ms';
 });
 const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
   });
 },{threshold:0.12,rootMargin:'0px 0px -35px 0px'});
 revealTargets.forEach(el=>observer.observe(el));
})();
