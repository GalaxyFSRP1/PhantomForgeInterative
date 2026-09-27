/* ============================================================
   ICONS
   ============================================================ */
const ICONS = {
  server:`<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01M10 6.5h4M10 17.5h4"/></svg>`,
  gamepad:`<svg viewBox="0 0 24 24"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59L2 15.5a2.5 2.5 0 0 0 4.5 1.5l1.5-2h8l1.5 2a2.5 2.5 0 0 0 4.5-1.5l-.7-6.91A4 4 0 0 0 17.32 5z"/></svg>`,
  globe:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>`,
  terminal:`<svg viewBox="0 0 24 24"><path d="m4 17 6-6-6-6M12 19h8"/></svg>`,
  layers:`<svg viewBox="0 0 24 24"><path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></svg>`,
  spark:`<svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><path d="m12 8 1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2z"/></svg>`,
  arrow:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  ext:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>`,
  mail:`<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  chat:`<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  pin:`<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  github:`<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  twitter:`<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4 4 20"/></svg>`,
  discord:`<svg viewBox="0 0 24 24"><path d="M8 12h.01M16 12h.01M5 7c3-1.5 11-1.5 14 0l2 10c-2 1.5-4 2-6 2l-1-2h-4l-1 2c-2 0-4-.5-6-2z"/></svg>`,
};

/* Project artwork placeholders (SVG) — swap for real images/video via config */
const ART = {
  shield:`<svg viewBox="0 0 400 225" fill="none"><defs><linearGradient id="g1" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#8A2BE2"/><stop offset="1" stop-color="#00E5FF"/></linearGradient></defs><rect width="400" height="225" fill="#10051F"/><g opacity=".15" stroke="#8A2BE2">${Array.from({length:10},(_,i)=>`<line x1="${i*44}" y1="0" x2="${i*44}" y2="225"/>`).join("")}${Array.from({length:6},(_,i)=>`<line x1="0" y1="${i*45}" x2="400" y2="${i*45}"/>`).join("")}</g><path d="M200 40 L260 62 V112 C260 148 232 172 200 186 C168 172 140 148 140 112 V62Z" stroke="url(#g1)" stroke-width="3" fill="rgba(138,43,226,.15)"/><path d="M178 112 L194 128 L226 94" stroke="#00E5FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="200" cy="112" r="90" stroke="rgba(0,229,255,.2)" stroke-dasharray="4 8"/></svg>`,
  core:`<svg viewBox="0 0 400 225" fill="none"><defs><radialGradient id="g2" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#00FFFF"/><stop offset=".5" stop-color="#8A2BE2"/><stop offset="1" stop-color="#10051F" stop-opacity="0"/></radialGradient></defs><rect width="400" height="225" fill="#10051F"/><circle cx="200" cy="112" r="80" fill="url(#g2)" opacity=".8"/><path d="M200 60 L245 86 V138 L200 164 L155 138 V86Z" stroke="#00E5FF" stroke-width="2" fill="rgba(5,5,9,.6)"/><path d="M200 80 L228 96 V128 L200 144 L172 128 V96Z" fill="#8A2BE2" opacity=".8"/>${[0,60,120,180,240,300].map(a=>`<circle cx="${200+105*Math.cos(a*Math.PI/180)}" cy="${112+105*Math.sin(a*Math.PI/180)*0.6}" r="4" fill="#00E5FF"/>`).join("")}<ellipse cx="200" cy="112" rx="105" ry="63" stroke="rgba(0,229,255,.3)"/></svg>`,
  beat:`<svg viewBox="0 0 400 225" fill="none"><rect width="400" height="225" fill="#10051F"/>${Array.from({length:40},(_,i)=>{const h=20+Math.abs(Math.sin(i*.7))*120;return `<rect x="${i*10+2}" y="${112-h/2}" width="6" height="${h}" rx="3" fill="${i%2?'#8A2BE2':'#00E5FF'}" opacity="${.35+Math.abs(Math.sin(i*.4))*.6}"/>`}).join("")}<rect x="150" y="70" width="40" height="40" rx="8" fill="#ff2d75" transform="rotate(20 170 90)"/><rect x="215" y="115" width="40" height="40" rx="8" fill="#00E5FF" transform="rotate(-15 235 135)"/></svg>`,
  nova:`<svg viewBox="0 0 400 225" fill="none"><rect width="400" height="225" fill="#10051F"/><circle cx="200" cy="112" r="70" stroke="rgba(0,229,255,.4)"/><circle cx="200" cy="112" r="45" stroke="rgba(138,43,226,.6)"/><ellipse cx="200" cy="112" rx="70" ry="25" stroke="rgba(0,229,255,.3)"/><ellipse cx="200" cy="112" rx="25" ry="70" stroke="rgba(0,229,255,.3)"/>${[[60,40],[340,50],[80,190],[330,180],[200,20],[200,205]].map(([x,y])=>`<line x1="200" y1="112" x2="${x}" y2="${y}" stroke="rgba(138,43,226,.5)" stroke-dasharray="3 5"/><circle cx="${x}" cy="${y}" r="5" fill="#00E5FF"/>`).join("")}<circle cx="200" cy="112" r="10" fill="#fff"/><circle cx="200" cy="112" r="20" fill="#00E5FF" opacity=".3"/></svg>`,
};

const STATUS_LABEL = { live:"LIVE", dev:"IN DEVELOPMENT", private:"PRIVATE", archived:"ARCHIVED" };
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ============================================================
   RENDER: STATS
   ============================================================ */
if($("#statsGrid")) $("#statsGrid").innerHTML = SITE_CONFIG.stats.map(s=>`
  <div class="stat"><div class="num" data-value="${esc(s.value)}" data-suffix="${esc(s.suffix)}">${typeof s.value==="number"?"0"+s.suffix:esc(s.value)}</div><div class="lbl">${esc(s.label)}</div></div>`).join("");

/* ============================================================
   RENDER: SERVICES
   ============================================================ */
if($("#servicesGrid")) $("#servicesGrid").innerHTML = SITE_CONFIG.services.map((s,i)=>`
  <article class="service reveal" style="transition-delay:${i*70}ms">
    <span class="idx">0${i+1}</span>
    <div class="ic">${ICONS[s.icon]}</div>
    <h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
    <a href="#contact" class="more">Discuss a project ${ICONS.arrow}</a>
  </article>`).join("");

/* ============================================================
   RENDER: PROJECTS + FILTERS
   ============================================================ */
function mediaHTML(p, modal=false){
  if(p.video) return `<video src="${esc(p.video)}" autoplay muted loop playsinline${p.image?` poster="${esc(p.image)}"`:""}></video>`;
  if(p.image) return `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`;
  return `<div class="art">${ART[p.art]||ART.core}</div>`;
}
if($("#filters")) $("#filters").innerHTML = SITE_CONFIG.projectFilters.map((f,i)=>`<button class="filter${i===0?" active":""}" data-filter="${f}">${f}</button>`).join("");
if($("#projectsGrid")) $("#projectsGrid").innerHTML = SITE_CONFIG.projects.map((p,i)=>`
  <article class="project reveal" data-id="${p.id}" data-cat="${p.category}" style="transition-delay:${i*80}ms" tabindex="0" role="button" aria-label="Open ${esc(p.name)}">
    <div class="media">
      <span class="status-badge ${p.status}">${STATUS_LABEL[p.status]}</span>
      ${mediaHTML(p)}
      <div class="logo-mini grad-text">${esc(p.initials)}</div>
    </div>
    <div class="body">
      <div class="cat">${esc(p.categoryLabel)} // ${p.category}</div>
      <h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
      <div class="tags">${p.tech.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
      <span class="view">View Project ${ICONS.ext}</span>
    </div>
  </article>`).join("");

if($("#filters")) $("#filters").addEventListener("click",e=>{
  const b=e.target.closest(".filter"); if(!b) return;
  document.querySelectorAll(".filter").forEach(f=>f.classList.remove("active")); b.classList.add("active");
  const f=b.dataset.filter;
  document.querySelectorAll(".project").forEach(card=>{
    const show=f==="ALL"||card.dataset.cat===f;
    if(show){card.classList.remove("hide");card.classList.remove("in");requestAnimationFrame(()=>requestAnimationFrame(()=>card.classList.add("in")));}
    else card.classList.add("hide");
  });
});

/* ============================================================
   MODAL
   ============================================================ */
const modal=$("#modal"), modalBox=$("#modalBox"); let lastFocus=null;
function openProject(id){
  const p=SITE_CONFIG.projects.find(x=>x.id===id); if(!p) return; openDetail(p);
}
function openDetail(p){
  modalBox.innerHTML=`
    <button class="modal-close" id="modalClose" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
    <div class="modal-media">${mediaHTML(p,true)}</div>
    <div class="modal-head">
      <div class="modal-logo">${esc(p.initials)}</div>
      <div><div class="cat">${esc(p.categoryLabel)}</div><h2>${esc(p.name)}</h2></div>
    </div>
    <div class="modal-body">
      <div>
        <h4>Overview</h4><p>${esc(p.desc)}</p>
        <h4>Key Features</h4><ul class="features">${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Development Status</h4><span class="status-badge ${p.status}">${STATUS_LABEL[p.status]}</span>
        <h4>Technologies</h4><div class="tags">${p.tech.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
        <h4>Links</h4><div class="modal-links">${p.links.map(l=>`<a href="${esc(l.url)}" ${l.url.startsWith("#")?"":'target="_blank" rel="noopener"'}>${esc(l.label)} ${ICONS.ext}</a>`).join("")}</div>
      </div>
    </div>`;
  lastFocus=document.activeElement;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
  $("#modalClose").addEventListener("click",closeModal);
  modalBox.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",closeModal));
  setTimeout(()=>$("#modalClose").focus(),50);
}
function closeModal(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow="";
  if(lastFocus) lastFocus.focus();
}
if($("#projectsGrid")) $("#projectsGrid").addEventListener("click",e=>{const c=e.target.closest(".project"); if(c) openProject(c.dataset.id);});
if($("#projectsGrid")) $("#projectsGrid").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){const c=e.target.closest(".project"); if(c){e.preventDefault();openProject(c.dataset.id);}}});
modal.addEventListener("click",e=>{ if(e.target===modal) closeModal(); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&modal.classList.contains("open")) closeModal(); });

/* ============================================================
   RENDER: TECHNOLOGIES
   ============================================================ */
if($("#techGrid")) $("#techGrid").innerHTML = SITE_CONFIG.technologies.map((t,i)=>`
  <div class="tech reveal" style="transition-delay:${i*40}ms">
    <div class="glyph" style="background:linear-gradient(135deg,${t.color},rgba(138,43,226,.6));border:1px solid rgba(255,255,255,.12)">${esc(t.glyph)}</div>
    <div class="name">${esc(t.name)}</div><div class="kind">${esc(t.kind)}</div>
  </div>`).join("");
const mq = SITE_CONFIG.technologies.map(t=>`<span>${esc(t.name).toUpperCase()}</span><span>✦</span>`).join("");
if($("#marquee")) $("#marquee").innerHTML = mq + mq;

/* ============================================================
   RENDER: TEAM
   ============================================================ */
if($("#teamGrid")) $("#teamGrid").innerHTML = SITE_CONFIG.team.map((m,i)=>`
  <div class="member glass reveal" style="transition-delay:${i*90}ms">
    <div class="avatar">${m.photo?`<img src="${esc(m.photo)}" alt="${esc(m.name)}">`:esc(m.name.split(" ").map(w=>w[0]).join("").slice(0,2))}</div>
    <h4>${esc(m.name)}</h4><div class="role">${esc(m.role)}</div><p>${esc(m.bio)}</p>
    <div class="socials">${Object.entries(m.links||{}).map(([k,u])=>`<a href="${esc(u)}" aria-label="${k}">${ICONS[k]||ICONS.ext}</a>`).join("")}</div>
  </div>`).join("");

/* ============================================================
   RENDER: CONTACT + FOOTER
   ============================================================ */
const c=SITE_CONFIG.contact;
if($("#contactItems")) $("#contactItems").innerHTML=`
  <a href="mailto:${esc(c.email)}" class="contact-item glass"><div class="ic">${ICONS.mail}</div><div><small>Email</small><span>${esc(c.email)}</span></div></a>
  <a href="#" class="contact-item glass"><div class="ic">${ICONS.chat}</div><div><small>Discord</small><span>${esc(c.discord)}</span></div></a>
  <div class="contact-item glass"><div class="ic">${ICONS.pin}</div><div><small>Location</small><span>${esc(c.location)}</span></div></div>`;
if($("#footerSocial")) $("#footerSocial").innerHTML=c.socials.map(s=>`<li><a href="${esc(s.url)}">${esc(s.label)}</a></li>`).join("");
$("#year").textContent=new Date().getFullYear();

/* ============================================================
   FORM
   ============================================================ */
const toast=$("#toast");
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3000);}
if($("#contactForm")) $("#contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=e.target;
  if(!f.name.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)||!f.message.value.trim()){showToast("Please complete all required fields.");return;}
  // TODO: POST to your backend / form service here.
  f.style.display="none"; $("#formSuccess").classList.add("show");
});

/* ============================================================
   NAVBAR BEHAVIOUR
   ============================================================ */
const header=$("#header"), hamburger=$("#hamburger"), mobileMenu=$("#mobileMenu"), toTop=$("#toTop");
window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",scrollY>30);
  toTop.classList.toggle("show",scrollY>600);
},{passive:true});
hamburger.addEventListener("click",()=>{
  const open=hamburger.classList.toggle("open"); mobileMenu.classList.toggle("open",open);
  hamburger.setAttribute("aria-expanded",open); document.body.style.overflow=open?"hidden":"";
});
mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{hamburger.classList.remove("open");mobileMenu.classList.remove("open");document.body.style.overflow="";}));
toTop.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

// Active nav highlighting
const sections=[...document.querySelectorAll("main section[id]")];
const navA=[...document.querySelectorAll('.nav-links a, .mobile-menu a:not(.btn)')].filter(a=>a.getAttribute("href").startsWith("#"));
const spy=new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ navA.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+en.target.id)); }});
},{rootMargin:"-40% 0px -55% 0px"});
sections.forEach(s=>spy.observe(s));

/* ============================================================
   SCROLL REVEAL + COUNTERS
   ============================================================ */
const revealObs=new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); revealObs.unobserve(en.target);} });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObs.observe(el));

function animateCount(el){
  const raw=el.dataset.value, suffix=el.dataset.suffix||""; const target=Number(raw);
  if(isNaN(target)){el.textContent=raw+suffix;return;}
  const dur=1800, start=performance.now();
  const step=t=>{const p=Math.min((t-start)/dur,1), e=1-Math.pow(1-p,4); el.textContent=Math.round(target*e)+suffix; if(p<1) requestAnimationFrame(step);};
  requestAnimationFrame(step);
}
const statObs=new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.querySelectorAll(".num").forEach(animateCount); statObs.unobserve(en.target);} });
},{threshold:.4});
if($("#statsGrid")) statObs.observe($("#statsGrid"));

/* ============================================================
   MOUSE GLOW
   ============================================================ */
const glow=$("#mouseGlow"); let gx=innerWidth/2, gy=innerHeight*.4, tx=gx, ty=gy;
window.addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY;},{passive:true});
(function loopGlow(){ gx+=(tx-gx)*.08; gy+=(ty-gy)*.08; glow.style.left=gx+"px"; glow.style.top=gy+"px"; requestAnimationFrame(loopGlow); })();

/* ============================================================
   PARTICLES
   ============================================================ */
const canvas=$("#particles"), ctx=canvas.getContext("2d"); let W,H,parts=[];
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;
  const n=Math.min(90,Math.floor(W*H/18000));
  parts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.4,vx:(Math.random()-.5)*.25,vy:-(Math.random()*.3+.05),c:Math.random()>.5?"138,43,226":"0,229,255",a:Math.random()*.5+.2}));
}
resize(); addEventListener("resize",resize);
function draw(){
  ctx.clearRect(0,0,W,H);
  for(const p of parts){
    p.x+=p.vx;p.y+=p.vy; if(p.y<-10){p.y=H+10;p.x=Math.random()*W;} if(p.x<-10)p.x=W+10; if(p.x>W+10)p.x=-10;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${p.c},${p.a})`;ctx.fill();
  }
  // faint connections
  ctx.lineWidth=.5;
  for(let i=0;i<parts.length;i++)for(let j=i+1;j<parts.length;j++){
    const a=parts[i],b=parts[j],dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy;
    if(d<12000){ctx.strokeStyle=`rgba(138,43,226,${(1-d/12000)*.12})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
  }
  if(!reduced) requestAnimationFrame(draw);
}
draw();

/* ============================================================
   RENDER: PROCESS
   ============================================================ */
if($("#processGrid")) $("#processGrid").innerHTML = SITE_CONFIG.process.map((p,i)=>`
  <div class="step reveal" style="transition-delay:${i*90}ms">
    <div class="step-num">0${i+1}</div>
    <h4>${esc(p.title)}</h4><p>${esc(p.desc)}</p>
  </div>`).join("");

/* ============================================================
   RENDER: TESTIMONIALS
   ============================================================ */
if($("#testiGrid")) $("#testiGrid").innerHTML = SITE_CONFIG.testimonials.map((t,i)=>`
  <blockquote class="testi glass reveal" style="transition-delay:${i*90}ms">
    <div class="stars">${"★".repeat(t.rating||5)}</div>
    <p>“${esc(t.quote)}”</p>
    <footer><div class="avatar sm">${esc(t.name.split(" ").map(w=>w[0]).join("").slice(0,2))}</div><div><b>${esc(t.name)}</b><small>${esc(t.role)}</small></div></footer>
  </blockquote>`).join("");

/* ============================================================
   RENDER: FAQ
   ============================================================ */
function renderFAQ(target, items){
  const el=$(target); if(!el) return;
  el.innerHTML = items.map((f,i)=>`
    <div class="faq reveal" style="transition-delay:${i*50}ms">
      <button class="faq-q" aria-expanded="false"><span>${esc(f.q)}</span><i></i></button>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </div>`).join("");
  el.addEventListener("click",e=>{
    const q=e.target.closest(".faq-q"); if(!q) return;
    const item=q.parentElement, open=item.classList.contains("open");
    el.querySelectorAll(".faq.open").forEach(x=>{x.classList.remove("open");x.querySelector(".faq-q").setAttribute("aria-expanded","false");x.querySelector(".faq-a").style.maxHeight=null;});
    if(!open){item.classList.add("open");q.setAttribute("aria-expanded","true");const a=item.querySelector(".faq-a");a.style.maxHeight=a.scrollHeight+"px";}
  });
}
renderFAQ("#faqList", SITE_CONFIG.faq||[]);
renderFAQ("#productFaq", SITE_CONFIG.productFaq||[]);

/* ============================================================
   RENDER: PRODUCTS (products.html)
   ============================================================ */
const PRODUCT_TYPE_LABEL={ script:"SCRIPT", framework:"FRAMEWORK", tool:"TOOL", template:"TEMPLATE", service:"SERVICE" };
function productCard(p,i){
  const price = p.price===0 ? "Free" : p.price==null ? "Custom" : `$${p.price}`;
  return `
  <article class="product reveal" data-id="${p.id}" data-cat="${p.category}" data-platform="${p.platform}" style="transition-delay:${(i%6)*70}ms" tabindex="0" role="button">
    ${p.badge?`<span class="ribbon">${esc(p.badge)}</span>`:""}
    <div class="media">
      <span class="status-badge ${p.status}">${STATUS_LABEL[p.status]}</span>
      ${mediaHTML(p)}
      <div class="logo-mini grad-text">${esc(p.initials)}</div>
    </div>
    <div class="body">
      <div class="cat">${esc(p.platform)} // ${PRODUCT_TYPE_LABEL[p.type]||p.type}</div>
      <h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
      <div class="tags">${p.tech.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
      <div class="product-foot">
        <div class="price"><span>${price}</span>${p.period?`<small>/${esc(p.period)}</small>`:""}${p.price>0&&!p.period?`<small>one-time</small>`:""}</div>
        <span class="view">Details ${ICONS.ext}</span>
      </div>
    </div>
  </article>`;
}
if($("#productsGrid")){
  const grid=$("#productsGrid"), list=SITE_CONFIG.products;
  grid.innerHTML=list.map(productCard).join("");
  grid.querySelectorAll(".reveal").forEach(el=>revealObs.observe(el));
  const cats=["ALL",...new Set(list.map(p=>p.category))];
  $("#productFilters").innerHTML=cats.map((c,i)=>`<button class="filter${i?"":" active"}" data-filter="${c}">${c}</button>`).join("");
  const search=$("#productSearch"), sort=$("#productSort");
  let cat="ALL";
  function apply(){
    const q=(search.value||"").toLowerCase();
    let cards=[...grid.children];
    cards.forEach(c=>{
      const p=list.find(x=>x.id===c.dataset.id);
      const ok=(cat==="ALL"||p.category===cat)&&(!q||(p.name+p.desc+p.tech.join(" ")+p.platform).toLowerCase().includes(q));
      c.classList.toggle("hide",!ok);
    });
    const v=sort.value, key={ "price-asc":(a,b)=>(a.price??1e9)-(b.price??1e9), "price-desc":(a,b)=>(b.price??-1)-(a.price??-1), "name":(a,b)=>a.name.localeCompare(b.name), "featured":(a,b)=>(b.badge?1:0)-(a.badge?1:0) }[v];
    [...list].sort(key).forEach(p=>grid.appendChild(grid.querySelector(`[data-id="${p.id}"]`)));
    const n=cards.filter(c=>!c.classList.contains("hide")).length;
    $("#productCount").textContent=`${n} product${n===1?"":"s"}`;
    $("#productEmpty").style.display=n?"none":"block";
  }
  $("#productFilters").addEventListener("click",e=>{const b=e.target.closest(".filter");if(!b)return;$("#productFilters").querySelectorAll(".filter").forEach(f=>f.classList.remove("active"));b.classList.add("active");cat=b.dataset.filter;apply();});
  search.addEventListener("input",apply); sort.addEventListener("change",apply); apply();
  const open=e=>{const c=e.target.closest(".product"); if(!c) return; const p=list.find(x=>x.id===c.dataset.id); openDetail({...p, categoryLabel:`${p.platform} · ${PRODUCT_TYPE_LABEL[p.type]||p.type}`, links:[...(p.links||[]),{label:p.price===0?"Download Free":p.price==null?"Request Quote":`Purchase — $${p.price}`,url:p.buyUrl||"index.html#contact"}]});};
  grid.addEventListener("click",open);
  grid.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open(e);}});
  // Pricing tiers
  if($("#tiersGrid")) $("#tiersGrid").innerHTML=SITE_CONFIG.tiers.map((t,i)=>`
    <div class="tier glass reveal ${t.featured?"featured":""}" style="transition-delay:${i*90}ms">
      ${t.featured?`<span class="tier-tag">Most Popular</span>`:""}
      <h4>${esc(t.name)}</h4><div class="tier-price">${esc(t.price)}<small>${esc(t.note||"")}</small></div>
      <p>${esc(t.desc)}</p>
      <ul>${t.includes.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      <a href="index.html#contact" class="btn ${t.featured?"btn-primary":"btn-ghost"}"><span>${esc(t.cta)}</span></a>
    </div>`).join("");
}
document.querySelectorAll(".reveal:not(.in)").forEach(el=>revealObs.observe(el));

/* ============================================================
   LIVE FORGE LOG (hero ticker) + CLOCK
   ============================================================ */
if($("#forgeLog")){
  const lines=SITE_CONFIG.forgeLog; let li=0;
  const el=$("#forgeLog");
  setInterval(()=>{ el.classList.remove("flash"); void el.offsetWidth; el.textContent=lines[li++%lines.length]; el.classList.add("flash"); },2600);
}
