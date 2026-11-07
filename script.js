// ---------- project panel content: edit freely ----------
const projects = {
  fitflex: {
    title: "FitFlex Pro · Personalised diet system",
    sub: "Major B.Tech project · team of 3 · Dec 2023 · built under faculty supervision",
    problem: "Generic diet advice ignores who you are. Working out how much someone should eat depends on their age, height, weight, lifestyle, exercise habits, goals and even motivation, and then it has to turn into food choices a person actually wants to eat.",
    process: "Combined 3 datasets (a 10,080-row user and calorie dataset, 8,690 food items with nutrition values, and a food-category dataset) and compared 5 models for predicting daily calorie needs: logistic regression, Gaussian Naive Bayes, decision tree, KNN and random forest. Random forest was the most accurate (93%). The system also calculates BMI, BMR, body fat percentage and daily energy expenditure, adjusting for motivation level and gender. A KNN recommendation engine then lets the user pick a sub-category from each of 6 food groups and a food they like, and suggests nearby items so the meal plan's calories land close to their target, with the error percentage shown. The whole thing runs as a Streamlit app.",
    outcome: "A working end-to-end personalised diet recommender that takes 10+ user inputs and produces a daily calorie target and a meal plan across 6 food categories, with an accuracy comparison of all 5 models. We documented the limits openly (self-reported inputs, limited generalization) and wrote a roadmap: a user feedback loop, wearable data, a mobile app and expert-reviewed nutrition guidance. If I built v2 as a PM, I'd start with that feedback loop.",
    skills: ["Machine learning", "Recommendation systems", "Personalization", "Streamlit", "Product thinking", "Teamwork"]
  },
  phishing: {
    title: "Phishing awareness simulation",
    sub: "Computer security course project · team of 5 · I built the full system · odd semester 2023",
    problem: "Phishing works because it looks normal. People are told to 'be careful' but rarely get to see a realistic attack in a safe setting, so they don't learn what the warning signs feel like.",
    process: "I built a cybersecurity-oriented phishing simulation using PHP, MySQLi, HTML/CSS and ML-based risk logic that mimics real credential-capture attacks. It has two parts: a Twilio-based phishing SMS module (Python) and a look-alike login website clearly labelled as a demo. I then analysed how users interacted with the message and the page to find vulnerabilities and the points where awareness needs to improve.",
    outcome: "Reduced detection errors by 30-35% and improved unsafe-behaviour recognition by 40-50%. It's the same problem I want to work on as a product manager: helping people tell when something is a scam, at the moment it matters.",
    skills: ["Cybersecurity awareness", "User behaviour analysis", "PHP and MySQL", "Python and Twilio", "End-to-end ownership"]
  },
  codegenx: {
    title: "CodeGenX · AI legacy code modernisation",
    sub: "B.Tech major project · team of 3 · Nov 2024 · built under faculty supervision",
    problem: "Companies still run on legacy code that is expensive to maintain. Modernising it by hand is slow, repetitive and inconsistent, and teams get little visibility into what changed along the way, which makes it hard to trust the result.",
    process: "We built a multi-agent system with 7 AI agents (AutoGen, with Gemini for language understanding) covering 4 phases: code analysis, decomposition, transformation and refactoring. Dedicated validation agents check the output of each phase using cosine similarity, BLEU score, functional test pass rates and error rates. The agents talk through Django REST Framework APIs (tested with Postman), and a custom Java plugin built in Eclipse lets users run any phase on its own, choose refactoring options and see real-time feedback. We worked in Agile sprints with a retrospective after each one.",
    outcome: "A working end-to-end framework that automates analysis, decomposition, transformation and refactoring, with validation built into every step. The report does not include a measured speed-up, so I don't claim one. It does document honest limits: very large codebases slow it down, and edge cases still need a human reviewer. The product lesson I took from it: with AI output, validation and visibility are what earn trust.",
    skills: ["Multi-agent AI", "Validation design", "API design", "Agile delivery", "Product thinking", "Teamwork"]
  },
  letstalk: {
    title: "Lets Talk Pro · Real-time chat app",
    sub: "B.Tech project · team of 3 · May 2024 · built under faculty supervision",
    problem: "Messaging apps often feel fragmented: hard to personalise, awkward to connect with other services, and expected to stay fast and reliable under load. We wanted one clean app that did the basics really well.",
    process: "We studied leading messaging apps first, then built a full-stack app with Next.js 13, React and Tailwind CSS on the front end and MongoDB with Prisma behind it. NextAuth handles sign-in (email, Google and GitHub), Pusher powers real-time messaging, Cloudinary handles image uploads, and React Hook Form validates inputs. We ran Agile sprints, used usability testing and user interviews to decide what to build first, and set up CI/CD to ship updates quickly.",
    outcome: "A working chat platform with one-to-one and group conversations, real-time messaging, read receipts, online and offline status, image sharing, and customisable profiles with photos and aliases. It was my first time shipping something real people could actually use, and it's where I learned to prioritise features by what users ask for.",
    skills: ["Full-stack development", "Authentication", "Real-time systems", "User feedback", "Agile delivery", "Teamwork"]
  },
  trustnet: {
    title: "TrustNet-X · Explainable AI for attack detection",
    sub: "Major project (8th semester) · team of 2 · 2024–25 · built under faculty supervision",
    problem: "HTTP/2 Rapid Reset is a newer kind of DDoS attack that hides inside encrypted traffic, and there are very few public datasets showing what it looks like. Security teams also don't trust a detector that raises alerts without saying why.",
    process: "I built a testbed that simulated normal and attack traffic in containers, captured it, decrypted it using TLS pre-master secrets, and converted it into NetFlow records with Python and TShark. Because real attack samples are scarce, I trained a conditional GAN on attack-only flows to generate realistic synthetic attacks and merged them into the data. I compared 5 models (Random Forest, Decision Tree, Gradient Boosting-style learners, KNN, Gaussian Naive Bayes and SGD) on accuracy, precision, recall, F2, AUC, Cohen's Kappa and MCC across 3 datasets: two public benchmarks and my own HTTP/2 Rapid Reset dataset. Finally I used SHAP to show which features pushed each prediction.",
    outcome: "Random Forest was the best model on every dataset: 98.7% accuracy and 0.996 AUC on NF-UQ-NIDS, 99.1% accuracy and 0.997 AUC on NF-UNSW-NB15, and 100% on my simulated HTTP/2 Rapid Reset data (a simulated dataset, so I treat that as a pipeline check, not a real-world claim). SHAP showed that source and destination addresses, flow duration and byte counts drove the alerts, giving analysts a reason for each flag. Honest limits: it works offline only, and synthetic attacks may not cover every real variant.",
    skills: ["Explainable AI (SHAP)", "Generative AI (GAN)", "Model comparison", "Network traffic analysis", "Experiment design", "Technical writing"]
  }
};

// ---------- panel logic ----------
const panel = document.getElementById("panel");

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  document.getElementById("panel-title").textContent = p.title;
  document.getElementById("panel-sub").textContent = p.sub;
  document.getElementById("p-problem").textContent = p.problem;
  document.getElementById("p-process").textContent = p.process;
  document.getElementById("p-outcome").textContent = p.outcome;
  const skills = document.getElementById("p-skills");
  skills.innerHTML = "";
  p.skills.forEach(function (s) {
    const li = document.createElement("li");
    li.innerHTML = s;
    skills.appendChild(li);
  });
  const wrap = document.getElementById("panel-link-wrap");
  wrap.innerHTML = "";
  if (p.link) {
    const a = document.createElement("a");
    a.className = "btn btn-solid";
    a.href = p.link.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = p.link.text;
    wrap.appendChild(a);
  }
  panel.showModal();
}

document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () { openProject(card.dataset.project); });
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(card.dataset.project); }
  });
});
panel.querySelector(".close").addEventListener("click", function () { panel.close(); });
panel.addEventListener("click", function (e) { if (e.target === panel) panel.close(); });

// ---------- reveal on scroll ----------
const revealer = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) { en.target.classList.add("in"); revealer.unobserve(en.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach(function (el) { revealer.observe(el); });

// ---------- highlight active nav link ----------
const links = document.querySelectorAll(".nav nav a");
const spy = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) {
      links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

// ---------- college photo slideshow ----------
// Add or remove photos here. Files live in images/college/.
const collegePhotos = [
  "images/college/college-1.jpg",
  "images/college/college-2.jpg",
  "images/college/college-3.jpg"
];

(function () {
  const root = document.getElementById("college-carousel");
  if (!root) return;
  if (!collegePhotos.length) { root.hidden = true; return; }
  const viewport = root.querySelector(".car-viewport");
  const dots = root.querySelector(".car-dots");
  const slides = collegePhotos.map(function (src, i) {
    const s = document.createElement("div");
    s.className = "slide";
    const bg = document.createElement("div");
    bg.className = "slide-bg";
    bg.style.backgroundImage = 'url("' + src + '")';
    const img = document.createElement("img");
    img.src = src;
    img.alt = "College memories with friends";
    img.loading = "lazy";
    s.appendChild(bg);
    s.appendChild(img);
    viewport.appendChild(s);
    const d = document.createElement("button");
    d.type = "button";
    d.setAttribute("aria-label", "Show photo " + (i + 1));
    d.addEventListener("click", function () { go(i); start(); });
    dots.appendChild(d);
    return s;
  });
  let cur = 0, timer = null;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function go(n) {
    cur = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle("on", i === cur); });
    Array.prototype.forEach.call(dots.children, function (d, i) { d.classList.toggle("on", i === cur); });
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function start() {
    stop();
    if (reduceMotion || slides.length < 2) return;
    timer = setInterval(function () { go(cur + 1); }, 3000);
  }

  root.querySelector(".car-prev").addEventListener("click", function () { go(cur - 1); start(); });
  root.querySelector(".car-next").addEventListener("click", function () { go(cur + 1); start(); });
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);
  if (slides.length < 2) { root.querySelector(".car-prev").hidden = true; root.querySelector(".car-next").hidden = true; dots.hidden = true; }

  go(0);
  start();
})();

// ---------- side gutters (wide screens only) ----------
(function () {
  const BALL = '<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="#EAE6DF" stroke="#0F1420" stroke-width="2"/><path d="M20 12l7 5-3 8h-8l-3-8z" fill="#0F1420"/><path d="M20 12V4M27 17l9-3M24 25l5 8M16 25l-5 8M13 17L4 14" stroke="#0F1420" stroke-width="2" stroke-linecap="round"/></svg>';
  const DECO = {
    boot: '<svg width="52" height="34" viewBox="0 0 70 44"><path d="M4 8h18l4 10 22 4c10 2 18 6 18 14v4H4z" fill="#FF9F7A" stroke="#0F1420" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 40v4M26 40v4M40 40v4M54 40v4" stroke="#EAE6DF" stroke-width="3"/></svg>',
    trophy: '<svg width="36" height="44" viewBox="0 0 50 62"><path d="M12 4h26v16c0 9-6 15-13 15S12 29 12 20z" fill="#F4C95D" stroke="#0F1420" stroke-width="2.5"/><path d="M12 9H4c0 9 4 13 9 14M38 9h8c0 9-4 13-9 14" fill="none" stroke="#0F1420" stroke-width="2.5"/><path d="M25 35v10M15 56h20l-3-11H18z" fill="#F4C95D" stroke="#0F1420" stroke-width="2.5" stroke-linejoin="round"/></svg>',
    whistle: '<svg width="46" height="32" viewBox="0 0 64 44"><circle cx="20" cy="26" r="15" fill="#7C8CFF" stroke="#0F1420" stroke-width="2.5"/><path d="M30 14h30v10H34z" fill="#7C8CFF" stroke="#0F1420" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="26" r="5" fill="#0F1420"/></svg>',
    star: '<svg width="30" height="30" viewBox="0 0 40 40"><path d="M20 3l4.6 10.4L36 14.6l-8.4 7.6 2.4 11.2L20 27.4 10 33.4l2.4-11.2L4 14.6l11.4-1.2z" fill="#FF9F7A" stroke="#0F1420" stroke-width="2.2" stroke-linejoin="round"/></svg>',
    ball: BALL.replace('width="100%" height="100%"', 'width="34" height="34"')
  };

  // right: scrapbook notes, one per section (edit the text freely)
  const notes = [
    { id: "story", top: 340, t: "stories first, products next", s: "18+ stories written so far", rot: 4, blue: 0, d: "ball" },
    { id: "growing-up", top: 150, t: "five countries, one passport", s: "new school, new friends, again", rot: -4, blue: 1, d: "star" },
    { id: "projects", top: 560, t: "5 projects", s: "ML, AI agents, security and chat", rot: 5, blue: 0, d: "whistle" },
    { id: "work", top: 220, t: "ITGC and ITAC at EY", s: "tech risk assurance, Gurugram", rot: -3, blue: 1, d: "trophy" },
    { id: "education", top: 150, t: "B.Tech CS, JIIT", s: "cloud, DSA, databases, big data", rot: 4, blue: 0, d: "boot" },
    { id: "off-hours", top: 120, t: "captain, 2nd place", s: "school football team", rot: -5, blue: 1, d: "trophy" },
    { id: "contact", top: 140, t: "coffee chat?", s: "I say yes to most of them", rot: 4, blue: 0, d: "ball" }
  ];
  notes.forEach(function (n) {
    const sec = document.getElementById(n.id);
    if (!sec) return;
    const el = document.createElement("div");
    el.className = "side-note" + (n.blue ? " blue" : "");
    el.style.top = n.top + "px";
    el.style.transform = "rotate(" + n.rot + "deg)";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = n.t + "<small>" + n.s + "</small><span class=\"deco\">" + DECO[n.d] + "</span>";
    sec.appendChild(el);
  });

  // left: match tracker
  const marks = [
    ["kick-off", ".hero"], ["story", "#story"], ["growing up", "#growing-up"], ["projects", "#projects"],
    ["work", "#work"], ["education", "#education"], ["toolkit", "#skills"], ["off-hours", "#off-hours"], ["full time", "#contact"]
  ];
  const rail = document.createElement("div");
  rail.className = "rail";
  rail.setAttribute("aria-label", "Match tracker");
  rail.innerHTML = '<div class="clock"><b>0\'</b><small>match clock</small></div><div class="line"></div><div class="fill"></div><div class="ht"></div>';
  const items = marks.map(function (m, i) {
    const a = document.createElement("a");
    a.href = m[1] === ".hero" ? "#top" : m[1];
    a.style.top = (i / (marks.length - 1) * 100) + "%";
    a.innerHTML = "<i></i>" + m[0];
    rail.appendChild(a);
    return a;
  });
  const ball = document.createElement("div");
  ball.className = "ball";
  ball.innerHTML = BALL;
  rail.appendChild(ball);
  const goal = document.createElement("div");
  goal.className = "goal";
  goal.innerHTML = "<span>goal!</span>thanks for reading";
  rail.appendChild(goal);
  document.body.appendChild(rail);
  const fill = rail.querySelector(".fill"), clock = rail.querySelector(".clock b");
  const targets = marks.map(function (m) { return document.querySelector(m[1]); });

  function update() {
    if (getComputedStyle(rail).display === "none") return;
    const sy = window.scrollY, vh = window.innerHeight;
    const doc = document.documentElement.scrollHeight - vh;
    const tops = targets.map(function (el) { return el ? el.getBoundingClientRect().top + sy : 0; });
    const y = sy + vh * 0.35;
    let i = 0;
    while (i < tops.length - 1 && y >= tops[i + 1]) i++;
    let t = i < tops.length - 1 ? (y - tops[i]) / (tops[i + 1] - tops[i]) : 0;
    t = Math.max(0, Math.min(1, t));
    let p = (i + t) / (tops.length - 1);
    if (doc > 0 && sy >= doc - 4) p = 1;
    const pct = p * 100;
    ball.style.top = pct + "%";
    fill.style.height = pct + "%";
    items.forEach(function (a, k) {
      const at = k / (items.length - 1);
      a.classList.toggle("done", p >= at - 0.001);
      a.classList.toggle("on", k === Math.min(items.length - 1, Math.round(p * (items.length - 1))));
    });
    const min = Math.round((doc > 0 ? sy / doc : 0) * 90);
    clock.textContent = min >= 43 && min <= 47 ? "HT" : min >= 90 ? "FT" : min + "'";
    rail.classList.toggle("scored", p >= 0.995);
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  window.addEventListener("load", update);
  update();
})();

// ---------- globe + country cut-outs (growing up) ----------
(function () {
  const D = window.GLOBE_DATA, cv = document.getElementById("gl-canvas");
  if (!D || !cv) return;
  const ctx = cv.getContext("2d");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const RAD = Math.PI / 180;

  // places (lon, lat)
  const C = { delhi: [77.2, 28.6], blr: [77.59, 12.97], ger: [10.4, 51.0], sin: [103.85, 1.35], rot: [4.48, 51.92], kl: [101.69, 3.14], bom: [72.88, 19.08] };
  // chapters: edit text, years, camera (center + zoom k), which pins and legs light up
  const CH = [
    { tab: ["early years", "New Delhi & Bangalore"], yrs: "early years", title: "New Delhi → Bangalore", text: "Born in New Delhi, with my early years in Bangalore, before the family moved abroad.", cut: ["India"], c: [78, 21], k: 2, pins: [["delhi", "New Delhi"], ["blr", "Bangalore"]], legs: [["delhi", "blr"]] },
    { tab: ["2004–08", "Germany & Singapore"], yrs: "2004 – 2008", title: "Germany → Singapore", text: "In 2004 my family moved abroad, first to Germany and then Singapore, because my dad's work took us places.", cut: ["Germany", "Singapore"], c: [60, 30], k: 1, pins: [["ger", "Germany"], ["sin", "Singapore"]], legs: [["blr", "ger"], ["ger", "sin"]] },
    { tab: ["2008–12", "Netherlands"], yrs: "2008 – 2012", title: "Rotterdam, Netherlands", text: "International school with classmates from all over the world. Football club training, tennis lessons, and the swimming pool every weekend, where I earned three swimming diplomas (A, B and C). Best time of my childhood.", cut: ["Netherlands"], c: [55, 25], k: 1, pins: [["sin", "Singapore"], ["rot", "Rotterdam"]], legs: [["sin", "rot"]] },
    { tab: ["2012–13", "Gurugram"], yrs: "2012 – 2013", title: "Gurugram, India", text: "A year back in India: my first school here, and a lot of new friends.", cut: ["India"], c: [45, 35], k: 1, pins: [["rot", "Netherlands"], ["delhi", "Gurugram"]], legs: [["rot", "delhi"]] },
    { tab: ["2013–15", "Malaysia"], yrs: "2013 – 2015", title: "Kuala Lumpur, Malaysia", text: "6th and 7th grade at GIIS, with school football, the cricket team, handball and throwball, and house vice-captain. Two of my favourite years.", cut: ["Malaysia"], c: [88, 15], k: 1.3, pins: [["delhi", "Gurugram"], ["kl", "Kuala Lumpur"]], legs: [["delhi", "kl"]] },
    { tab: ["2015–21", "Mumbai & Delhi"], yrs: "2015 – 2021", title: "Mumbai and Delhi", text: "10th grade in Mumbai, then 11th and 12th in Dwarka, Delhi. Captained my school football team to second place in a tournament.", cut: ["India"], c: [85, 15], k: 1.4, pins: [["kl", "Kuala Lumpur"], ["bom", "Mumbai"], ["delhi", "Dwarka, Delhi"]], legs: [["kl", "bom"], ["bom", "delhi"]] }
  ];
  const ALLLEGS = [["delhi", "blr"], ["blr", "ger"], ["ger", "sin"], ["sin", "rot"], ["rot", "delhi"], ["delhi", "kl"], ["kl", "bom"], ["bom", "delhi"]];

  // land mask -> typed arrays
  function dec(b) { const s = atob(b), a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }
  const lb = dec(D.land), hb = dec(D.hl), lam = [], phi = [], flag = [];
  for (let j = 0; j < D.h; j++) for (let i = 0; i < D.w; i++) {
    const k = j * D.w + i;
    if (lb[k >> 3] & (1 << (k & 7))) { lam.push((-180 + D.step * (i + .5)) * RAD); phi.push((90 - D.step * (j + .5)) * RAD); flag.push(hb[k >> 3] & (1 << (k & 7)) ? 1 : 0); }
  }
  const N = lam.length, sphi = new Float32Array(N), cphi = new Float32Array(N), lamA = new Float32Array(N);
  for (let i = 0; i < N; i++) { sphi[i] = Math.sin(phi[i]); cphi[i] = Math.cos(phi[i]); lamA[i] = lam[i]; }

  // arcs along great circles
  function vec(p) { const lo = p[0] * RAD, la = p[1] * RAD; return [Math.cos(la) * Math.cos(lo), Math.cos(la) * Math.sin(lo), Math.sin(la)]; }
  function arc(a, b) {
    const A = vec(C[a]), B = vec(C[b]), om = Math.acos(Math.max(-1, Math.min(1, A[0] * B[0] + A[1] * B[1] + A[2] * B[2]))), out = [], n = 56;
    for (let i = 0; i <= n; i++) {
      const t = i / n, s1 = Math.sin((1 - t) * om) / Math.sin(om), s2 = Math.sin(t * om) / Math.sin(om);
      const x = A[0] * s1 + B[0] * s2, y = A[1] * s1 + B[1] * s2, z = A[2] * s1 + B[2] * s2;
      out.push([Math.atan2(y, x), Math.asin(z)]);
    }
    return out;
  }
  const arcs = {}; ALLLEGS.forEach(function (l) { arcs[l.join(">")] = arc(l[0], l[1]); });

  // canvas + view
  let size = 540, R0 = 230, dpr = 1, cur = 0, ballT = 0, visible = true;
  const lay = document.createElement("canvas"), lctx = lay.getContext("2d");
  const view = { lon: CH[0].c[0], lat: CH[0].c[1], k: CH[0].k };
  let baseDirty = true, raf = 0, anim = null, drag = null;

  function resize() {
    size = cv.clientWidth || 540; dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = lay.width = Math.round(size * dpr); cv.height = lay.height = Math.round(size * dpr);
    R0 = size * 0.425; baseDirty = true; draw();
  }

  function renderBase() {
    const c = lctx; c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, size, size);
    const R = R0 * view.k, cx = size / 2, cy = size / 2, l0 = view.lon * RAD, p0 = view.lat * RAD, sp0 = Math.sin(p0), cp0 = Math.cos(p0);
    // glow + sphere
    const g = c.createRadialGradient(cx - R * .3, cy - R * .35, R * .1, cx, cy, R);
    g.addColorStop(0, "#26335E"); g.addColorStop(.6, "#171D2E"); g.addColorStop(1, "#0B0F1B");
    const halo = c.createRadialGradient(cx, cy, R * .96, cx, cy, R * 1.14);
    halo.addColorStop(0, "rgba(124,140,255,.30)"); halo.addColorStop(1, "rgba(124,140,255,0)");
    c.fillStyle = halo; c.beginPath(); c.arc(cx, cy, R * 1.14, 0, 7); c.fill();
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.fill();
    c.strokeStyle = "#2A3246"; c.lineWidth = 1.5; c.stroke();
    // dots in 3 brightness bands x 2 colours
    const sp = R * D.step * RAD, r = Math.max(.85, Math.min(3.6, sp * .34));
    const P = [new Path2D(), new Path2D(), new Path2D(), new Path2D(), new Path2D(), new Path2D()];
    for (let i = 0; i < N; i++) {
      const dl = lamA[i] - l0, cd = Math.cos(dl), cc = sp0 * sphi[i] + cp0 * cphi[i] * cd;
      if (cc <= .03) continue;
      const x = cx + R * cphi[i] * Math.sin(dl), y = cy - R * (cp0 * sphi[i] - sp0 * cphi[i] * cd);
      if (x < -6 || y < -6 || x > size + 6 || y > size + 6) continue;
      const band = cc < .25 ? 0 : cc < .6 ? 1 : 2, path = P[flag[i] * 3 + band];
      path.moveTo(x + r, y); path.arc(x, y, r, 0, 6.2832);
    }
    const cols = ["rgba(58,75,134,.45)", "rgba(58,75,134,.78)", "rgba(66,86,156,.95)", "rgba(143,157,255,.55)", "rgba(143,157,255,.85)", "#8F9DFF"];
    for (let b = 0; b < 6; b++) { c.fillStyle = cols[b]; c.fill(P[b]); }
    baseDirty = false;
  }

  function proj(lo, la) {
    const R = R0 * view.k, l0 = view.lon * RAD, p0 = view.lat * RAD, dl = lo - l0, cd = Math.cos(dl), cp = Math.cos(la), sp = Math.sin(la);
    const cc = Math.sin(p0) * sp + Math.cos(p0) * cp * cd;
    return { x: size / 2 + R * cp * Math.sin(dl), y: size / 2 - R * (Math.cos(p0) * sp - Math.sin(p0) * cp * cd), v: cc > .02 };
  }
  function strokeArc(pts) {
    let pen = false; ctx.beginPath();
    pts.forEach(function (q) { const p = proj(q[0], q[1]); if (!p.v) { pen = false; return; } if (pen) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); pen = true; });
    ctx.stroke();
  }
  function ballPos(ch) {
    const pts = []; ch.legs.forEach(function (l) { pts.push.apply(pts, arcs[l.join(">")]); });
    if (pts.length < 2) return null;
    const f = ballT * (pts.length - 1), i = Math.floor(f), t = f - i, a = pts[i], b = pts[Math.min(i + 1, pts.length - 1)];
    const pa = proj(a[0], a[1]), pb = proj(b[0], b[1]);
    if (!pa.v || !pb.v) return null;
    return { x: pa.x + (pb.x - pa.x) * t, y: pa.y + (pb.y - pa.y) * t, ang: Math.atan2(pb.y - pa.y, pb.x - pa.x) };
  }

  function draw() {
    if (baseDirty) renderBase();
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); ctx.drawImage(lay, 0, 0);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const ch = CH[cur], key = function (l) { return l.join(">"); };
    ctx.lineCap = "round";
    // legs: earlier chapters medium, active bright, later faint
    CH.forEach(function (c2, ci) {
      ctx.setLineDash(ci === cur ? [2, 7] : [2, 8]);
      ctx.strokeStyle = ci === cur ? "#FF9F7A" : "#FF9F7A"; ctx.lineWidth = ci === cur ? 3.2 : 2;
      ctx.globalAlpha = ci === cur ? 1 : ci < cur ? .5 : .16;
      c2.legs.forEach(function (l) { strokeArc(arcs[key(l)]); });
    });
    ctx.setLineDash([]); ctx.globalAlpha = 1;
    // all cities as quiet dots
    Object.keys(C).forEach(function (k) { const p = proj(C[k][0] * RAD, C[k][1] * RAD); if (!p.v) return; ctx.fillStyle = "rgba(255,159,122,.55)"; ctx.beginPath(); ctx.arc(p.x, p.y, 3.2, 0, 7); ctx.fill(); });
    // active pins with labels
    ctx.font = '700 14px "DM Sans", Helvetica, Arial, sans-serif'; ctx.lineJoin = "round";
    ch.pins.forEach(function (pn) {
      const p = proj(C[pn[0]][0] * RAD, C[pn[0]][1] * RAD); if (!p.v) return;
      ctx.fillStyle = "rgba(255,159,122,.22)"; ctx.beginPath(); ctx.arc(p.x, p.y, 15, 0, 7); ctx.fill();
      ctx.fillStyle = "#FF9F7A"; ctx.strokeStyle = "#0F1420"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, 7); ctx.fill(); ctx.stroke();
      const left = p.x > size * .62; ctx.textAlign = left ? "right" : "left";
      const tx = p.x + (left ? -14 : 14), ty = p.y + (pn[0] === "blr" || pn[0] === "bom" ? 18 : 5);
      ctx.lineWidth = 4; ctx.strokeStyle = "#0F1420"; ctx.strokeText(pn[1], tx, ty); ctx.fillStyle = "#EAE6DF"; ctx.fillText(pn[1], tx, ty);
    });
    // aeroplane flying along the active route
    if (!reduce && visible && !anim && !drag) {
      const b = ballPos(ch);
      if (b) {
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.ang + Math.PI / 2);
        ctx.fillStyle = "#EAE6DF"; ctx.strokeStyle = "#0F1420"; ctx.lineWidth = 2; ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(0, -13); ctx.quadraticCurveTo(2.6, -9, 2.6, -2); ctx.lineTo(13, 5); ctx.lineTo(13, 8); ctx.lineTo(2.6, 4.5);
        ctx.lineTo(2.2, 10); ctx.lineTo(6, 13); ctx.lineTo(6, 14.5); ctx.lineTo(0, 13); ctx.lineTo(-6, 14.5); ctx.lineTo(-6, 13);
        ctx.lineTo(-2.2, 10); ctx.lineTo(-2.6, 4.5); ctx.lineTo(-13, 8); ctx.lineTo(-13, 5); ctx.lineTo(-2.6, -2);
        ctx.quadraticCurveTo(-2.6, -9, 0, -13); ctx.closePath(); ctx.stroke(); ctx.fill();
        ctx.restore();
      }
    }
  }

  function loop(ts) {
    raf = 0;
    if (anim) {
      const t = Math.min(1, (ts - anim.t0) / anim.dur), e = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      view.lon = anim.a.lon + anim.dl * e; view.lat = anim.a.lat + (anim.b.lat - anim.a.lat) * e; view.k = anim.a.k + (anim.b.k - anim.a.k) * e;
      baseDirty = true; if (t >= 1) anim = null;
    }
    if (!reduce && visible) ballT = (ts % (3600 * Math.max(1, CH[cur].legs.length))) / (3600 * Math.max(1, CH[cur].legs.length));
    draw();
    if (anim || drag || (!reduce && visible)) raf = requestAnimationFrame(loop);
  }
  function kick() { if (!raf) raf = requestAnimationFrame(loop); }

  function goTo(i) {
    cur = i;
    const t = CH[i], a = { lon: view.lon, lat: view.lat, k: view.k }, b = { lon: t.c[0], lat: t.c[1], k: t.k };
    const dl = ((b.lon - a.lon + 540) % 360) - 180;
    if (reduce) { view.lon = b.lon; view.lat = b.lat; view.k = b.k; baseDirty = true; draw(); }
    else { anim = { a: a, b: b, dl: dl, t0: performance.now(), dur: 1100 }; kick(); }
    ui();
  }

  // chapter buttons + card
  const tabs = [], chap = document.getElementById("gl-chapters"), cutEl = document.getElementById("gl-cut");
  CH.forEach(function (c, i) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chap"; b.setAttribute("role", "tab");
    b.innerHTML = "<b>" + c.tab[0] + "</b><span>" + c.tab[1] + "</span>";
    b.addEventListener("click", function () { goTo(i); });
    chap.appendChild(b); tabs.push(b);
  });
  function ui() {
    const c = CH[cur];
    tabs.forEach(function (t, i) { t.classList.toggle("on", i === cur); t.setAttribute("aria-selected", i === cur); });
    document.getElementById("gl-yrs").textContent = c.yrs;
    document.getElementById("gl-title").textContent = c.title;
    document.getElementById("gl-text").textContent = c.text;
    cutEl.className = "gl-cut" + (c.cut.length > 1 ? " two" : "");
    cutEl.innerHTML = c.cut.map(function (n) {
      return '<svg viewBox="0 0 240 260" aria-hidden="true"><path d="' + D.sil[n] + '" fill="' + (n === "India" ? "#FF9F7A" : "#7C8CFF") + '" fill-opacity=".92" stroke="#EAE6DF" stroke-width="1.2" stroke-linejoin="round"/></svg>';
    }).join("");
    const card = document.getElementById("gl-card"), txt = card.querySelector(".gl-txt");
    txt.style.animation = "none"; void txt.offsetWidth; txt.style.animation = "";
  }

  // drag to spin
  cv.addEventListener("pointerdown", function (e) { drag = { x: e.clientX, y: e.clientY }; anim = null; try { cv.setPointerCapture(e.pointerId); } catch (err) {} kick(); });
  cv.addEventListener("pointermove", function (e) {
    if (!drag) return;
    const R = R0 * view.k, dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY;
    view.lon -= dx / R / RAD; view.lat = Math.max(-80, Math.min(80, view.lat + dy / R / RAD)); baseDirty = true; kick();
  });
  function end() { drag = null; kick(); }
  cv.addEventListener("pointerup", end); cv.addEventListener("pointercancel", end);

  if ("IntersectionObserver" in window) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) kick(); }, { threshold: 0.05 }).observe(cv);
  window.addEventListener("resize", resize);
  resize(); ui(); kick();
})();

// ---------- tactics board (projects) ----------
(function () {
  const wrap = document.querySelector(".projects-wrap");
  if (!wrap) return;
  wrap.querySelectorAll(".pl").forEach(function (b) {
    b.addEventListener("click", function () { openProject(b.dataset.project); });
  });
  wrap.querySelectorAll(".view-toggle button").forEach(function (b) {
    b.addEventListener("click", function () {
      wrap.dataset.view = b.dataset.view;
      wrap.querySelectorAll(".view-toggle button").forEach(function (x) { x.classList.toggle("on", x === b); });
    });
  });
})();

// ---------- toolkit: draggable stickers on a laptop lid ----------
(function () {
  const laptop = document.getElementById("laptop"), lid = document.getElementById("lid");
  if (!laptop || !lid) return;
  const items = Array.prototype.slice.call(lid.querySelectorAll(".s"));
  const wide = window.matchMedia("(min-width: 760px)");
  let seed = 7, z = 10;
  function rnd() { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }
  function tilt() { return (rnd() * 14 - 7).toFixed(1) + "deg"; }

  function layout() {
    if (!wide.matches) { laptop.classList.remove("rig"); items.forEach(function (el) { el.style.left = el.style.top = ""; el.style.setProperty("--r", tilt()); }); return; }
    laptop.classList.add("rig");
    const W = lid.clientWidth, H = lid.clientHeight, pad = 30, limit = W - pad * 2;
    const order = items.slice();
    for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const t = order[i]; order[i] = order[j]; order[j] = t; }
    const rows = []; let row = [], used = 0;
    order.forEach(function (el) {
      const w = el.offsetWidth;
      if (row.length && used + w + 14 > limit) { rows.push(row); row = []; used = 0; }
      row.push(el); used += w + 14;
    });
    if (row.length) rows.push(row);
    const rowH = (H - pad * 2 - 40) / Math.max(rows.length - 0.35, 1);
    rows.forEach(function (r, ri) {
      const total = r.reduce(function (a, el) { return a + el.offsetWidth; }, 0);
      const gap = r.length > 1 ? Math.min(46, (limit - total) / (r.length - 1)) : 0;
      let x = pad + (limit - total - gap * (r.length - 1)) / 2;
      r.forEach(function (el) {
        const h = el.offsetHeight;
        el.style.setProperty("--r", tilt());
        el.style.left = Math.round(x + rnd() * 8 - 4) + "px";
        el.style.top = Math.round(pad + ri * rowH + rnd() * 14 - 4 + (rowH - h) / 2) + "px";
        x += el.offsetWidth + gap;
      });
    });
  }

  // drag (mouse, touch, pen)
  let dragEl = null, ox = 0, oy = 0;
  lid.addEventListener("pointerdown", function (e) {
    const el = e.target.closest(".s"); if (!el || !laptop.classList.contains("rig")) return;
    dragEl = el; const r = el.getBoundingClientRect(), L = lid.getBoundingClientRect();
    ox = e.clientX - (r.left - L.left) - r.width / 2 + el.offsetWidth / 2 - el.offsetWidth / 2; oy = e.clientY;
    dragEl._sx = e.clientX; dragEl._sy = e.clientY; dragEl._l = parseFloat(el.style.left) || 0; dragEl._t = parseFloat(el.style.top) || 0;
    el.style.zIndex = ++z; el.classList.add("drag");
    try { el.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  lid.addEventListener("pointermove", function (e) {
    if (!dragEl) return;
    const W = lid.clientWidth, H = lid.clientHeight;
    const nl = Math.max(0, Math.min(W - dragEl.offsetWidth, dragEl._l + e.clientX - dragEl._sx));
    const nt = Math.max(0, Math.min(H - dragEl.offsetHeight, dragEl._t + e.clientY - dragEl._sy));
    dragEl.style.left = nl + "px"; dragEl.style.top = nt + "px";
  });
  function drop() { if (dragEl) { dragEl.classList.remove("drag"); dragEl = null; } }
  lid.addEventListener("pointerup", drop); lid.addEventListener("pointercancel", drop);

  // keyboard: arrows nudge a focused sticker
  lid.addEventListener("keydown", function (e) {
    const el = e.target.closest(".s"); if (!el || !laptop.classList.contains("rig")) return;
    const d = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, -12], ArrowDown: [0, 12] }[e.key]; if (!d) return;
    e.preventDefault();
    el.style.left = Math.max(0, Math.min(lid.clientWidth - el.offsetWidth, (parseFloat(el.style.left) || 0) + d[0])) + "px";
    el.style.top = Math.max(0, Math.min(lid.clientHeight - el.offsetHeight, (parseFloat(el.style.top) || 0) + d[1])) + "px";
  });

  // filter tabs + shuffle
  const tabs = document.querySelectorAll(".lid-tabs button[data-f]");
  tabs.forEach(function (b) {
    b.addEventListener("click", function () { laptop.dataset.f = b.dataset.f; tabs.forEach(function (x) { x.classList.toggle("on", x === b); }); });
  });
  document.getElementById("lid-shuffle").addEventListener("click", function () { seed = Math.floor(Math.random() * 1e6); layout(); });

  let tm = 0;
  window.addEventListener("resize", function () { clearTimeout(tm); tm = setTimeout(layout, 150); });
  layout();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  window.addEventListener("load", layout);
})();
