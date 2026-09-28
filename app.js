/* ============================================================
   CONFIG
   ============================================================ */
const PASSWORD = "showme";      // ← whole-site password (lowercase)
const A = "assets/";

/* ---------- language ---------- */
let lang = localStorage.getItem('oj_lang') || 'en';   // default English
function L(o){ return (o && o[lang]!=null) ? o[lang] : (o ? o.en : ''); }

const T = {
  en:{
    gate_line:'A portfolio at the intersection of <span class="mark">humans</span>, design &amp; technology.',
    gate_ph:'enter password', gate_btn:'Enter',
    gate_err:'Not quite — try again.',
    gate_hint:'This space is private · scroll follows after unlock',
    intro_kick:'The journey', intro_h:'Scroll through my work — newest first.',
    intro_p:'From studying UX to years in the field. Tap any bubble to dive in.',
    open:'Open', fab:'Contact', m_role:'Role', m_year:'Year',
    images_coming:'Case study &amp; images coming soon',
    about_kick:'At the end', about_h:'About me',
    about_p1:'I’m Olga — a curious, creative mind who turns chaos into something meaningful. With roots in the Black Forest and Siberia, I design digital products that connect people with technology.',
    about_p2:'Since 2022 I’ve studied User Experience Design (Computer Science) at TH Ingolstadt, blending psychology and design. Before that: years of graphic, UI/UX and product design in agencies and in-house.',
    imprint:'Imprint'
  },
  de:{
    gate_line:'Ein Portfolio an der Schnittstelle von <span class="mark">Mensch</span>, Design &amp; Technologie.',
    gate_ph:'Passwort eingeben', gate_btn:'Los',
    gate_err:'Nicht ganz — bitte erneut.',
    gate_hint:'Dieser Bereich ist privat · Scrollen nach dem Freischalten',
    intro_kick:'Die Reise', intro_h:'Scrolle durch meine Arbeiten — Neuestes zuerst.',
    intro_p:'Vom UX-Studium bis zu Jahren in der Praxis. Tippe eine Bubble an, um einzutauchen.',
    open:'Öffnen', fab:'Kontakt', m_role:'Rolle', m_year:'Jahr',
    images_coming:'Case Study &amp; Bilder folgen in Kürze',
    about_kick:'Zum Schluss', about_h:'Über mich',
    about_p1:'Ich bin Olga — ein neugieriger, kreativer Kopf, der aus Chaos etwas Sinnvolles macht. Mit Wurzeln im Schwarzwald und in Sibirien gestalte ich digitale Produkte, die Menschen mit Technologie verbinden.',
    about_p2:'Seit 2022 studiere ich User Experience Design (Informatik) an der TH Ingolstadt, verbunden mit Psychologie und Design. Davor: Jahre in Grafik-, UI/UX- und Produktdesign in Agenturen und Inhouse.',
    imprint:'Impressum'
  }
};
function t(k){ return (T[lang] && T[lang][k]!=null) ? T[lang][k] : T.en[k]; }

/* ============================================================
   TIMELINE DATA  (newest → oldest)
   ============================================================ */
const items = [
  { kind:'project', id:'crisis', year:'2025', side:'left', img:null,
    tag:{en:'Crisis intervention · UX', de:'Krisenintervention · UX'},
    title:{en:'Crisis Mode', de:'Crisis Mode'},
    role:{en:'Concept · UX · Research', de:'Konzept · UX · Research'},
    desc:{en:'A concept exploring how digital products can support people in acute crisis — calm, clear and reassuring interfaces designed for the hardest moments.',
          de:'Ein Konzept, wie digitale Produkte Menschen in akuten Krisen unterstützen können — ruhige, klare und beruhigende Interfaces für die schwersten Momente.'},
    slides:[] },
  { kind:'project', id:'therapy', year:'2024', side:'right', img:null,
    tag:{en:'Therapy & AI', de:'Therapie & KI'},
    title:{en:'Therapy Forms & AI', de:'Therapieformen & KI'},
    role:{en:'Concept · UX', de:'Konzept · UX'},
    desc:{en:'Exploring how AI can complement different forms of therapy — as a thoughtful companion, never a replacement.',
          de:'Wie kann KI verschiedene Therapieformen ergänzen — als achtsamer Begleiter, nie als Ersatz.'},
    slides:[] },
  { kind:'project', id:'mentalhealth', year:'2024', side:'left', img:null,
    tag:{en:'Mental Health · AI', de:'Mental Health · KI'},
    title:{en:'Mental Health & AI', de:'Mental Health & KI'},
    role:{en:'UX · Research', de:'UX · Research'},
    desc:{en:'Designing trustworthy AI touchpoints for mental-health support, with a strong focus on safety, ethics and human dignity.',
          de:'Vertrauenswürdige KI-Touchpoints für die mentale Gesundheit — mit klarem Fokus auf Sicherheit, Ethik und Würde.'},
    slides:[] },
  { kind:'project', id:'automationbias', year:'2024', side:'right', img:null,
    tag:{en:'Research · Automation Bias', de:'Forschung · Automation Bias'},
    title:{en:'Automation Bias Study', de:'Automation-Bias-Studie'},
    role:{en:'Empirical research · UX', de:'Empirische Forschung · UX'},
    desc:{en:'An empirical study on automation bias — how people over-trust automated systems, and what design can do to keep humans in the loop.',
          de:'Eine empirische Studie zum Automation Bias — wie Menschen automatisierten Systemen zu sehr vertrauen und was Design tun kann, um den Menschen einzubinden.'},
    slides:[] },
  { kind:'interlude', id:'i2022', year:'2022',
    text:{en:'I began studying User Experience Design at TH Ingolstadt — blending computer science, psychology and design.',
          de:'Ich begann mein Studium User Experience Design an der TH Ingolstadt — Informatik, Psychologie und Design vereint.'} },
  { kind:'project', id:'kaufland', year:'2019–2022', side:'left', img:A+'Kaufland/web/kaufland-hero.jpg',
    tag:{en:'UI / UX · Product', de:'UI / UX · Produkt'},
    title:{en:'Kaufland', de:'Kaufland'},
    role:{en:'UI/UX & Product Design', de:'UI/UX- & Produktdesign'},
    desc:{en:'Designed across the Kaufland mobile app — interface concept, atomic design library, onboarding, loyalty, self-scanning and prototyping, at the scale of Europe’s largest retailer.',
          de:'Gestaltung der Kaufland-App — Interface-Konzept, Atomic-Design-Library, Onboarding, Treueprogramm, Self-Scanning und Prototyping, im Maßstab des größten Einzelhändlers Europas.'},
    slides:[A+'Kaufland/web/01b.jpg',A+'Kaufland/web/01c.jpg',A+'Kaufland/web/01d.jpg',A+'Kaufland/web/01e.jpg',A+'Kaufland/web/01f.jpg',A+'Kaufland/web/01g.jpg',A+'Kaufland/web/01h.jpg'] },
  { kind:'interlude', id:'i2017', year:'2017',
    text:{en:'A working-holiday year across Australia and Indonesia — then the leap into freelancing.',
          de:'Ein Working-Holiday-Jahr in Australien und Indonesien — dann der Sprung in die Selbstständigkeit.'} },
  { kind:'project', id:'leser', year:'2016', side:'right', img:A+'pg-09.jpg',
    tag:{en:'Web · UX', de:'Web · UX'},
    title:{en:'Leser Packaging', de:'Leser Packaging'},
    role:{en:'Design · Co-Art Direction', de:'Design · Co-Art-Direction'},
    desc:{en:'Redesign of the LESER website — a new visual style and key visual for a maker of 70M+ premium packaging items a year.',
          de:'Redesign der LESER-Website — neuer visueller Stil und Key Visual für einen Hersteller von über 70 Mio. Premium-Verpackungen pro Jahr.'},
    slides:[A+'pg-09.jpg',A+'pg-10.jpg'] },
  { kind:'project', id:'heimerle', year:'2016–2017', side:'left', img:A+'pg-12.jpg',
    tag:{en:'Web · UX', de:'Web · UX'},
    title:{en:'Heimerle + Meule', de:'Heimerle + Meule'},
    role:{en:'Design · Co-Art Direction', de:'Design · Co-Art-Direction'},
    desc:{en:'A clean, contemporary web presence and key-visual concept for Germany’s oldest gold and silver refinery, founded 1845.',
          de:'Ein klarer, zeitgemäßer Webauftritt und Key-Visual-Konzept für Deutschlands älteste Gold- und Silberscheideanstalt, gegründet 1845.'},
    slides:[A+'pg-12.jpg',A+'pg-13.jpg'] },
  { kind:'project', id:'doll', year:'2016–2017', side:'right', img:A+'pg-15.jpg',
    tag:{en:'Corporate · Editorial', de:'Corporate · Editorial'},
    title:{en:'Doll Fahrzeugbau', de:'Doll Fahrzeugbau'},
    role:{en:'Design · Co-Art Direction', de:'Design · Co-Art-Direction'},
    desc:{en:'Corporate design redesign, image and product brochures for a Black-Forest vehicle manufacturer operating worldwide since 1878.',
          de:'Corporate-Design-Redesign, Image- und Produktbroschüren für einen weltweit tätigen Fahrzeugbauer aus dem Schwarzwald, seit 1878.'},
    slides:[A+'pg-15.jpg',A+'pg-16.jpg'] },
  { kind:'project', id:'colordruck', year:'2016', side:'left', img:A+'pg-18.jpg',
    tag:{en:'Corporate · Editorial', de:'Corporate · Editorial'},
    title:{en:'Colordruck Baiersbronn', de:'Colordruck Baiersbronn'},
    role:{en:'Design · Co-Art Direction', de:'Design · Co-Art-Direction'},
    desc:{en:'Corporate design and guidelines, brochure and journal for one of Europe’s technological packaging leaders.',
          de:'Corporate Design und Guidelines, Broschüre und Journal für einen der technologischen Verpackungs-Marktführer Europas.'},
    slides:[A+'pg-18.jpg',A+'pg-19.jpg'] },
  { kind:'project', id:'logos', year:'2013–2016', side:'right', size:'sm', img:null,
    tag:{en:'Logo & Branding', de:'Logo & Branding'},
    title:{en:'Logo Design', de:'Logo Design'},
    role:{en:'Branding · Logo', de:'Branding · Logo'},
    desc:{en:'A selection of logo and identity work from my agency years — marks, wordmarks and small brand systems.',
          de:'Eine Auswahl an Logo- und Identity-Arbeiten aus meinen Agenturjahren — Marken, Wortmarken und kleine Brand-Systeme.'},
    slides:[] },
  { kind:'project', id:'illustration', year:'2014', side:'left', size:'sm', img:null,
    tag:{en:'Illustration', de:'Illustration'},
    title:{en:'Illustration', de:'Illustration'},
    role:{en:'Illustration · Editorial', de:'Illustration · Editorial'},
    desc:{en:'Editorial and decorative illustration — a playful counterpoint to the systematic UX work.',
          de:'Redaktionelle und dekorative Illustration — ein verspielter Gegenpol zur systematischen UX-Arbeit.'},
    slides:[] }
];
const projects = items.filter(i=>i.kind==='project');
function findItem(id){ return items.find(i=>i.id===id); }

/* ============================================================
   ASSETS (svg)
   ============================================================ */
const LOGO='<svg viewBox="0 0 39 61" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22.6055 53.5409C26.9236 52.7474 30.3133 49.0179 30.3133 42.0854V8.45459H18.6832C12.17 8.45459 8.78022 12.6675 8.78022 20.0111L8.80181 48.0151C9.17605 55.0053 11.5294 57.3715 15.1567 61.0072C6.64274 60.1632 0 52.9782 0 44.2279V18.3736C0 7.84863 6.78668 0 17.287 0H39V43.0809C39 48.9241 35.9413 55.8854 30.4933 58.7926C25.7721 61.3174 18.64 61.5194 14.6745 56.2822C13.6309 54.8971 12.6881 53.1297 12.3715 51.4633C15.7612 53.2163 18.496 53.9593 22.6055 53.5409Z" fill="currentColor"/></svg>';
const chevL='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>';
const chevR='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
const iX='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const arrowUp='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';
const icBehance='<svg viewBox="0 0 24 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.94695 0.00138525C7.59544 -0.010655 8.243 0.0558297 8.87551 0.199389C9.40806 0.315658 9.91367 0.532016 10.3655 0.836961C10.7828 1.1402 11.1129 1.54786 11.3228 2.01904C11.5641 2.59844 11.6805 3.22218 11.6644 3.84959C11.6918 4.53849 11.5158 5.22022 11.1585 5.80983C10.7825 6.36669 10.2629 6.81142 9.65465 7.09685C10.4801 7.31938 11.199 7.82911 11.6822 8.53436C12.1461 9.28163 12.3792 10.1491 12.3524 11.0282C12.3677 11.7291 12.2228 12.4243 11.9287 13.0607C11.6569 13.6159 11.2588 14.0997 10.7664 14.4735C10.2595 14.8431 9.68905 15.1166 9.08341 15.2803C8.45535 15.4541 7.80651 15.5414 7.15486 15.5397H0V0.00138525H6.94695ZM6.53412 6.28603C7.04364 6.30703 7.54521 6.1545 7.95677 5.85339C8.15388 5.67792 8.30721 5.45877 8.4045 5.21347C8.5018 4.96816 8.54037 4.7035 8.51712 4.44063C8.53031 4.13361 8.46918 3.82794 8.33892 3.54961C8.22842 3.32801 8.05661 3.1428 7.84391 3.01599C7.62848 2.87642 7.38643 2.78304 7.13308 2.74176C6.85818 2.68851 6.57845 2.66428 6.29849 2.66949H3.24132V6.29989H6.53412V6.28603ZM6.71232 12.9013C7.02046 12.9055 7.32796 12.8723 7.62809 12.8023C7.90236 12.7418 8.16247 12.6292 8.39436 12.4707C8.62153 12.3123 8.80506 12.0991 8.92798 11.8509C9.0705 11.5345 9.13598 11.1887 9.11905 10.8421C9.14995 10.5262 9.10811 10.2074 8.99674 9.91019C8.88537 9.61296 8.70742 9.34519 8.47653 9.12738C7.98717 8.76694 7.38745 8.58839 6.78063 8.62247H3.24132V12.9013H6.71232Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9689 12.8438C17.2233 13.0796 17.523 13.2613 17.8497 13.3777C18.1765 13.4941 18.5235 13.5428 18.8697 13.521C19.4185 13.5349 19.9567 13.3679 20.4013 13.0458C20.7629 12.8106 21.0368 12.4626 21.1804 12.0558H23.7653C23.4899 13.2139 22.8173 14.2389 21.8645 14.9526C20.9504 15.5593 19.8702 15.8665 18.7737 15.8317C17.9911 15.842 17.2144 15.6949 16.4897 15.3991C15.8342 15.1257 15.2463 14.7125 14.7671 14.1883C14.2897 13.639 13.9229 13.0026 13.687 12.3142C13.4221 11.5446 13.2925 10.7351 13.3038 9.9213C13.299 9.12118 13.433 8.3263 13.6998 7.57198C14.0583 6.51079 14.7438 5.59045 15.6578 4.94302C16.5719 4.2956 17.6675 3.95437 18.7875 3.96831C19.6144 3.95103 20.4321 4.14455 21.1636 4.53064C21.8247 4.89319 22.3951 5.40093 22.8318 6.01567C23.2784 6.66072 23.5986 7.3847 23.7752 8.14916C23.969 8.97005 24.0381 9.81543 23.9802 10.6569H16.2808C16.2184 11.4474 16.4651 12.2314 16.9689 12.8438ZM20.3468 6.93441C20.1314 6.7189 19.8722 6.55208 19.5868 6.44517C19.3015 6.33826 18.9965 6.29376 18.6925 6.31466C18.2892 6.29927 17.8887 6.38864 17.5302 6.57404C17.246 6.73051 16.9951 6.94105 16.7917 7.19379C16.6114 7.43076 16.4771 7.6994 16.3957 7.98581C16.3223 8.22468 16.2765 8.47114 16.259 8.72041H21.0279C20.9864 8.07061 20.7497 7.44848 20.3488 6.9354L20.3468 6.93441Z"/><path d="M15.6443 1.03887H21.62V2.56647H15.6443V1.03887Z"/></svg>';
const icLinkedin='<svg viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.0391 5.31152C13.1781 5.3197 13.3174 5.32837 13.4482 5.34473C15.7152 5.59039 17 7.08038 17 9.60938V17H13.4482V10.3945C13.4482 10.2298 13.4061 8.45508 11.4424 8.45508C10.7795 8.45515 10.1907 8.74971 9.86328 9.33887C9.47859 10.0428 9.53516 10.8615 9.53516 11.6309V16.9512H5.9834V5.62305H9.37988V7.13672C9.38277 7.13194 9.43203 7.05088 9.53516 6.91602C9.92803 6.40855 11.0501 5.22967 13.0391 5.31152ZM3.83887 16.918H0.287109V5.58984H3.83887V16.918ZM2.0625 0C3.20161 0 4.12495 0.923405 4.125 2.0625C4.125 3.20164 3.20164 4.125 2.0625 4.125C0.923403 4.12495 0 3.20161 0 2.0625C4.75432e-05 0.923433 0.923432 4.53532e-05 2.0625 0Z"/></svg>';
const icMail='<svg viewBox="0 0 20 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.167 13.0166C19.1669 14.0055 18.3631 14.8398 17.3428 14.8398H1.82422C0.83525 14.8398 0.000136415 14.0369 0 13.0166V2.56641L9.21289 9.83203C9.30587 9.9238 9.46082 9.95508 9.58398 9.95508C9.70712 9.95506 9.83193 9.92499 9.95508 9.83203L19.168 2.56641L19.167 13.0166ZM17.3447 0C18.086 7.25227e-05 18.7359 0.463791 19.0137 1.11328L9.58398 8.56348L0.155273 1.11328C0.433132 0.463809 1.08292 0 1.82422 0H17.3447Z"/></svg>';

/* ============================================================
   HELPERS
   ============================================================ */
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function slideMove(id,dir){var el=document.getElementById(id);if(el)el.scrollBy({left:dir*el.clientWidth,behavior:'smooth'});}
const $=s=>document.querySelector(s);

/* ============================================================
   GATE
   ============================================================ */
const gate=$('#gate'), site=$('#site');
function buildGateBubbles(){
  const box=$('#gateBubbles'); if(!box||box.childElementCount) return;
  const cfg=[[8,14,120],[78,10,90],[16,70,150],[70,72,110],[44,20,70],[86,48,60],[30,40,50]];
  cfg.forEach((c,i)=>{const s=document.createElement('span');
    s.style.left=c[0]+'%';s.style.top=c[1]+'%';s.style.width=c[2]+'px';s.style.height=c[2]+'px';
    s.style.animationDelay=(i*0.7)+'s';s.style.animationDuration=(7+i)+'s';box.appendChild(s);});
}
function renderGate(){
  $('#gateLogo').innerHTML=LOGO;
  $('#gateLine').innerHTML=t('gate_line');
  $('#gatePw').placeholder=t('gate_ph');
  $('#gateBtn').textContent=t('gate_btn');
  $('#gateHint').textContent=t('gate_hint');
  document.querySelectorAll('#gateLang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
}
$('#gateForm').addEventListener('submit',e=>{
  e.preventDefault();
  const v=$('#gatePw').value.trim().toLowerCase();
  if(v===PASSWORD){ unlock(); }
  else{ const c=$('#gateCard')||$('.gate-card'); $('#gateErr').textContent=t('gate_err');
        c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake'); }
});
function unlock(){
  sessionStorage.setItem('oj_in','yes');
  gate.classList.add('hide');
  document.body.classList.remove('locked');
  site.hidden=false;
  if(!site.dataset.built) buildSite();
  setTimeout(()=>{ gate.style.display='none'; },650);
}

/* ============================================================
   SITE BUILD
   ============================================================ */
const timeline=$('#timeline'), dotsWrap=$('#dots');
const SUB={crisis:'UX Concept',therapy:'UX & AI',mentalhealth:'UX & AI',automationbias:'UX Research',
  kaufland:'App Design',leser:'Web Design',heimerle:'Web Design',doll:'Corporate Design',colordruck:'Editorial Design',
  logos:'Branding',illustration:'Editorial'};
function nodeHTML(p,drop){
  const sm = p.size==='sm' ? ' sm' : '';
  return `<div class="node${drop?' drop':''}" id="node-${p.id}" data-year="${esc(p.year)}">
    <div class="titlecard${sm}" onclick="openModal('${p.id}')" role="button" tabindex="0" aria-label="${esc(L(p.title))}">
      <span class="yr">${esc(p.year)}</span>
      <span class="box">
        <span class="t">${esc(L(p.title))}</span>
        <span class="s">${esc(SUB[p.id]||L(p.tag))}</span>
      </span>
    </div>
  </div>`;
}

/* organic layout — singles at varied lanes, pairs sit (almost) on the same height */
const layout = [
  {row:[{id:'crisis',pos:'l'}]},
  {row:[{id:'therapy',pos:'l'},{id:'mentalhealth',pos:'r',drop:true}]},
  {row:[{id:'automationbias',pos:'cr'}]},
  {interlude:'i2022'},
  {row:[{id:'kaufland',pos:'cl'}]},
  {interlude:'i2017'},
  {row:[{id:'leser',pos:'l'},{id:'heimerle',pos:'r',drop:true}]},
  {row:[{id:'colordruck',pos:'l',drop:true},{id:'doll',pos:'r'}]},
  {row:[{id:'logos',pos:'cl'},{id:'illustration',pos:'cr',drop:true}]}
];
function interludeHTML(it){
  return `<div class="interlude"><div class="card">
    <div class="yr">${esc(it.year)}</div>
    <p>${esc(L(it.text))}</p>
  </div></div>`;
}
function aboutHTML(){
  return `<section class="about-end" id="about-end">
    <div class="inner">
      <div class="portrait"><img src="${A}portrait.jpg" alt="Olga Jaenick"/></div>
      <div>
        <div class="kick">${t('about_kick')}</div>
        <h2>${t('about_h')}</h2>
        <p>${t('about_p1')}</p>
        <p>${t('about_p2')}</p>
        <div class="contactline">
          <a href="mailto:ojaenick@icloud.com">ojaenick@icloud.com</a>
          <a href="tel:+4915901602716">+49 159 0160 2716</a>
        </div>
        <div class="socials">
          <a href="https://www.behance.net/" target="_blank" rel="noopener" aria-label="Behance">${icBehance}</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">${icLinkedin}</a>
          <a href="mailto:ojaenick@icloud.com" aria-label="Email">${icMail}</a>
        </div>
        <div class="foot">
          <span class="tag">Drawing icons since ’11 · © ${new Date().getFullYear()}</span>
          <a href="#" id="imprintlink">${t('imprint')}</a>
        </div>
      </div>
    </div>
  </section>`;
}
function buildSite(){
  $('#brand').innerHTML=LOGO;
  $('#fab').textContent=t('fab');
  // timeline
  floatSeed=0;
  let html=`<div class="intro-head">
      <div class="kick">${t('intro_kick')}</div>
      <h2>${t('intro_h')}</h2>
      <p>${t('intro_p')}</p>
    </div>`;
  layout.forEach(step=>{
    if(step.interlude){ const it=findItem(step.interlude); if(it) html+=interludeHTML(it); }
    else if(step.row){
      if(step.row.length>=2){
        html+=`<div class="row pair">`+step.row.map(c=>nodeHTML(findItem(c.id),c.drop)).join('')+`</div>`;
      }else{
        const c=step.row[0];
        html+=`<div class="row single ${c.pos||'c'}">`+nodeHTML(findItem(c.id),c.drop)+`</div>`;
      }
    }
  });
  html+=aboutHTML();
  timeline.innerHTML=html;
  // dots
  dotsWrap.innerHTML=projects.map((p,i)=>`<button data-target="node-${p.id}" aria-label="${esc(L(p.title))}">
      <span class="lbl">${esc(L(p.title))}</span><span class="d"></span>
    </button>`).join('');
  dotsWrap.querySelectorAll('button').forEach(b=>{
    b.addEventListener('click',()=>{const n=document.getElementById(b.dataset.target); if(n) n.scrollIntoView({behavior:'smooth',block:'center'});});
  });
  document.querySelectorAll('#lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  const imp=$('#imprintlink'); if(imp) imp.addEventListener('click',e=>{e.preventDefault();openImprint();});
  site.dataset.built='1';
  requestAnimationFrame(onScroll);
}

/* ============================================================
   SCROLL — foreground bubbles + progress dots
   ============================================================ */
let ticking=false;
function onScroll(){
  const nodes=[...timeline.querySelectorAll('.node')];
  if(!nodes.length) return;
  const mid=window.innerHeight*0.5;
  let best=null,bestD=1e9,cur=-1;
  nodes.forEach((n,i)=>{
    const r=n.getBoundingClientRect(), c=r.top+r.height/2, d=Math.abs(c-mid);
    if(d<bestD){bestD=d;best=n;}
    if(r.top<=mid) cur=i;
  });
  nodes.forEach(n=>n.classList.toggle('inview', n===best && bestD<window.innerHeight*0.62));
  const yb=document.getElementById('yearbg');
  if(yb && best){ const y=(best.dataset.year||'').slice(0,4); if(yb.textContent!==y) yb.textContent=y; }
  const dots=[...dotsWrap.querySelectorAll('button')];
  dots.forEach((b,i)=>{b.classList.toggle('done',i<cur);b.classList.toggle('active',i===cur);});
}
window.addEventListener('scroll',()=>{ if(!ticking){requestAnimationFrame(()=>{onScroll();ticking=false;});ticking=true;} },{passive:true});
window.addEventListener('resize',onScroll);

/* ============================================================
   OVERLAY / MODAL
   ============================================================ */
const overlay=$('#overlay'), modal=$('#modal');
function openModal(id){
  const p=findItem(id); if(!p) return;
  let media;
  if(p.slides && p.slides.length){
    const sid='ov-slides';
    media=`<div class="slider">
      <div class="slides" id="${sid}">${p.slides.map(s=>`<img src="${s}" alt="${esc(L(p.title))}" loading="lazy"/>`).join('')}</div>
      <button class="s-btn s-prev" aria-label="prev" onclick="slideMove('${sid}',-1)">${chevL}</button>
      <button class="s-btn s-next" aria-label="next" onclick="slideMove('${sid}',1)">${chevR}</button>
    </div>`;
  } else {
    media=`<div class="mplaceholder">${t('images_coming')}</div>`;
  }
  modal.innerHTML=`
    <div class="close"><button onclick="closeModal()" aria-label="Close">${iX}</button></div>
    <div class="mbody">
      <div class="mtag">${esc(L(p.tag))}</div>
      <h2>${esc(L(p.title))}</h2>
      <div class="myr">${esc(p.year)}</div>
      <p class="mdesc">${esc(L(p.desc))}</p>
      <div class="mmeta">
        <div><div class="k">${t('m_role')}</div><div class="v">${esc(L(p.role))}</div></div>
        <div><div class="k">${t('m_year')}</div><div class="v">${esc(p.year)}</div></div>
      </div>
      ${media}
    </div>`;
  overlay.hidden=false; modal.scrollTop=0;
  requestAnimationFrame(()=>{ overlay.classList.add('show'); document.body.classList.add('modal-open'); });
}
function openImprint(){
  const de = lang==='de';
  modal.innerHTML=`
    <div class="close"><button onclick="closeModal()" aria-label="Close">${iX}</button></div>
    <div class="mbody">
      <div class="mtag">${de?'Rechtliches':'Legal'}</div>
      <h2>${de?'Impressum':'Imprint'}</h2>
      <p class="mdesc">${de?'Angaben gemäß § 5 TMG':'Information according to § 5 TMG'}<br>
        Olga Jaenick · Am Bachl 43 · 85049 Ingolstadt · ${de?'Deutschland':'Germany'}<br>
        ${de?'Telefon':'Phone'}: +49 (0) 159 0160 2716 · E-Mail: ojaenick@icloud.com</p>
      <div class="mmeta"><div><div class="k">${de?'Verantwortlich':'Responsible'}</div><div class="v">Olga Jaenick, Am Bachl 43, 85049 Ingolstadt</div></div></div>
      <p class="mdesc" style="font-size:15px;color:#5a5b60">${de
        ? 'Haftung für Inhalte: Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich. Nach §§ 8–10 TMG nicht verpflichtet, fremde Informationen zu überwachen. Urheberrecht: Inhalte dieser Seite unterliegen dem deutschen Urheberrecht. Datenschutz: Die Nutzung ist ohne Angabe personenbezogener Daten möglich; erhobene Daten werden nicht ohne Zustimmung weitergegeben.'
        : 'Liability for content: as a service provider we are responsible for our own content under § 7 (1) TMG; under §§ 8–10 TMG we are not obliged to monitor third-party information. Copyright: the content of this site is subject to German copyright law. Data protection: use is possible without providing personal data; collected data is not shared without consent.'}</p>
    </div>`;
  overlay.hidden=false; modal.scrollTop=0;
  requestAnimationFrame(()=>{ overlay.classList.add('show'); document.body.classList.add('modal-open'); });
}
function closeModal(){
  overlay.classList.remove('show'); document.body.classList.remove('modal-open');
  setTimeout(()=>{ overlay.hidden=true; modal.innerHTML=''; },400);
}
$('#overlayBg').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && !overlay.hidden) closeModal(); });

/* ============================================================
   CHROME actions
   ============================================================ */
$('#brand').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
$('#fab').addEventListener('click',()=>{const a=$('#about-end'); if(a) a.scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelectorAll('#gateLang button, #lang button').forEach(b=>{
  b.addEventListener('click',()=>{
    const l=b.dataset.lang; if(l===lang) return;
    lang=l; localStorage.setItem('oj_lang',l); document.documentElement.lang=l;
    renderGate();
    if(site.dataset.built){ buildSite(); }
  });
});

/* ============================================================
   INIT
   ============================================================ */
document.documentElement.lang=lang;
buildGateBubbles();
renderGate();
if(sessionStorage.getItem('oj_in')==='yes'){
  gate.classList.add('hide'); gate.style.display='none'; site.hidden=false; buildSite();
}else{
  document.body.classList.add('locked');
  setTimeout(()=>{ const i=$('#gatePw'); if(i) i.focus(); },400);
}
