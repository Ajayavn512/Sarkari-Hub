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
