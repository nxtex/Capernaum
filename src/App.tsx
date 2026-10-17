import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const slides = [
  {
    number: "01", section: "OPENING", duration: "0:55",
    title: "What does a child deserve?",
    subtitle: "CAPERNAUM · A film by Nadine Labaki",
    image: "https://images.openai.com/static-rsc-4/1lqPjT5VUb4WrrxKyiCM-4Bv8AoRB8cgwbHQtiKLQqHlGODMx8LlWnK0gwSDgcE9RxJtmDwHY4y1TWH_wUjCdf3J7ftiRCEGeLyOaVefU8QhMdOskguTrBIPfwhOs6ICP9PmwgDHp1EPL-TZUwsyhQxbWUNirVT3bxShMOAm0IE?purpose=inline",
    imageAlt: "Zain’s family home in Capernaum",
    layout: "hero",
    bullets: ["A childhood without safety", "A fight to be seen", "A question for all of us"],
    script: `Imagine being born into a world where you have no safe home, no proper access to education, and no one you can truly rely on. Imagine being so young that you should be playing with other children, but instead, every day is about survival. Now imagine standing in court and suing your own parents for bringing you into this world. Would you call that courage, anger, or simply a cry for help? This is the starting point of Capernaum, a powerful Lebanese film directed by Nadine Labaki. But this is not only one boy’s story. It asks what happens when society fails its most vulnerable children.`
  },
  {
    number: "02", section: "THE FILM", duration: "0:50",
    title: "A story rooted in reality",
    image: "https://images.openai.com/static-rsc-4/7-5V-cq7Yd6zZZG-UC4XedrGZDJJwEvMSw8IM80AaIWYa163C7yqR6PAXVnDzgpxgCZ0zuk1U0xXFOc_YcC4_xZ0l4yOQYnwhHDLgu3iVinQiFdDaSYfRa_0BzxSRuMrCmOnnH304xmh3rckM5fIdoS1RRC3vZLkeSuq49WUnrw?purpose=inline",
    imageAlt: "Zain sitting beside baby Yonas in a film still",
    layout: "split",
    facts: [{ label: "DIRECTOR", value: "Nadine Labaki" }, { label: "RELEASE", value: "2018" }, { label: "COUNTRY", value: "Lebanon" }, { label: "LENGTH", value: "About 2 hours" }],
    body: "A social drama between fiction and documentary",
    script: `Capernaum was released in 2018 and directed by Lebanese filmmaker Nadine Labaki, who also co-wrote the screenplay and appears in the film. The story takes place in Lebanon, mainly in the streets of Beirut. It won the Jury Prize at the 2018 Cannes Film Festival. One of the film’s most striking choices is its realism: many performers were non-professional actors, and some had experiences close to the difficult circumstances represented on screen. This gives the film a raw, documentary-like feeling.`
  },
  {
    number: "03", section: "THE PREMISE", duration: "0:55",
    title: "A lawsuit no child should have to make",
    image: "https://images.openai.com/static-rsc-4/_vwDFViem9PfiEsXtsuggX9S4xn5u1sVRzPf-ScbzEZTbA7BExAGd5WHaoh39dDRJILT348oW8qqUd8P_NG6AAaJTKH57BhVHfcTS1EusXajxHht3Cx50WN2aaeJ778mpLNgZCBc1QJ5hc-8Z9TBgCO_LUiyJbeazuj0n9LkaME?purpose=inline",
    imageAlt: "Zain in a courtroom beside his lawyer",
    layout: "quote",
    quote: "“Why are you suing your own parents?”",
    quoteAnswer: "“For giving me life.”",
    quoteCredit: "The courtroom premise of Capernaum",
    script: `The film opens with an extraordinary situation: Zain, a twelve-year-old boy, is in court because he is suing his parents. When the judge asks why, the answer is devastating: for giving him life. This is not a normal legal dispute. It is a child’s desperate attempt to make adults listen. The courtroom frames the whole story, while the film gradually reveals the experiences that brought Zain there. We are invited to ask not only whether his actions are right or wrong, but what kind of suffering could lead a child to make such a claim.`
  },
  {
    number: "04", section: "THE STORY", duration: "1:05",
    title: "Zain’s fight to survive",
    image: "https://images.openai.com/static-rsc-4/cT16nZpZni1W6cLk7k84OfpzPctR5YjuvKhEyKYBrzfAGyv95wY5nep13X4DNfmF2uUXSp7QNR65UqT59rjCv-2Yozs4f2ZZD8cLZqVucehWLq6QGHjm-yu4xXmCDMxB_1E0BJjb4SA3WL02Bjark5PxjN_lBDDSvdlmUIK9OOA?purpose=inline",
    imageAlt: "Zain sitting on the street beside an adult",
    layout: "story",
    steps: [
      { n: "01", title: "Home", text: "Neglect, poverty and adult responsibilities" },
      { n: "02", title: "The streets", text: "Zain escapes and tries to survive alone" },
      { n: "03", title: "A fragile bond", text: "He helps Rahil and her baby, Yonas" },
      { n: "04", title: "The courtroom", text: "His personal struggle becomes a demand for justice" }
    ],
    script: `Zain lives in extreme poverty and is forced to carry responsibilities far beyond his age. When his younger sister Sahar is married off, Zain eventually runs away. On the streets, he tries to survive with very few resources. He meets Rahil, an Ethiopian migrant worker, and becomes closely involved in caring for her baby son, Yonas. Their relationship brings moments of tenderness into a harsh environment, but it also exposes how vulnerable undocumented people can be. After a series of painful events, Zain ends up in prison and his story returns to the courtroom. The plot is not simply about escaping home; it is about searching for dignity and protection.`
  },
  {
    number: "05", section: "CHARACTERS", duration: "0:45",
    title: "Children forced to grow up too soon",
    image: "https://images.openai.com/static-rsc-4/qGMXH8LAvoNyV2uvfq0opyzhof64WN9UsTMj5DCxenRuCinj4waQHfgOVBiJv7sPqe6FIVDjfMcBl1bD2S-kfz9TFA4KSr47dTSDxH_jA407Dd5q2H8mJwRJPmbo19izUtXWItzVgXcD2I4mOoWYGm432ruiYpzzg9lbvRgjZ-4?purpose=inline",
    imageAlt: "Zain holding baby Yonas in a modest room",
    layout: "characters",
    characters: [
      { name: "Zain", role: "The child who refuses to be invisible", description: "Sharp, protective and angry — but still a child." },
      { name: "Yonas", role: "Innocence and dependence", description: "A baby whose safety depends on the adults around him." },
      { name: "Rahil", role: "Precarious survival", description: "A migrant mother navigating work, fear and separation." }
    ],
    script: `Zain is the centre of the story. He is resourceful and protective, but his anger is also the result of being denied a safe childhood. Yonas, Rahil’s baby, represents innocence and dependence: he cannot protect himself and relies entirely on others. Rahil faces another form of vulnerability as a migrant mother without secure status. Together, their stories show how poverty and legal insecurity can overlap. The film does not present these characters as symbols only; it gives them relationships, fears and moments of tenderness, which makes their struggles feel personal.`
  },
  {
    number: "06", section: "THEMES", duration: "1:05",
    title: "When survival replaces childhood",
    image: "https://images.openai.com/static-rsc-4/jyydS75tOMMdQITswI7NgZ4Rz6zcDgWSxcEGTFWrYsiUYy58bb92BiDyyd7qF4NKrCj7_aDHINVByTJH24yDIfINEkor3lz7OPCiVNolA0sDCnTK-XZ2ZViDCLMi940MiUQSYheMuUXQANHbltEsVXsuYq2eGsgOaV8BLeAdixg?purpose=inline",
    imageAlt: "Close-up of Zain looking away",
    layout: "themes",
    themes: [
      { n: "01", title: "Poverty", text: "Basic needs become daily battles." },
      { n: "02", title: "Child neglect", text: "Adults and systems fail to protect children." },
      { n: "03", title: "Legal invisibility", text: "Without documents, access to rights becomes harder." },
      { n: "04", title: "Migration", text: "Rahil’s story shows the risks faced by vulnerable migrants." }
    ],
    script: `The first major theme is poverty. In this film, poverty is not just a lack of money; it affects food, housing, safety and choices. The second theme is child neglect. Zain is expected to behave like an adult while being denied the protection every child needs. A third theme is legal invisibility. Zain’s lack of official documents becomes a powerful image of people who exist, but struggle to be recognised by institutions. Finally, Rahil’s story connects the film to migration and insecure status. These themes are connected: when people lack money, documents or support, it becomes much harder to access education, healthcare and justice.`
  },
  {
    number: "07", section: "FILMMAKING", duration: "0:55",
    title: "Why does it feel so real?",
    image: "https://images.openai.com/static-rsc-4/83SKyjsCSe0p6oBINJ2HlE8334s9l3v8HY1LT0aKyQA2dvhBk26QP8PNf90Ynxab3dDPLBltj4dvfGPcuG0sPbhPt6i2h7aqLWwKZ31ow9Cc0Q6tv-oQa32W53iSRw4THqzRtPii1tkXr0C2p8FdM8VDdyQmjd4iAQVzJMaJcV4?purpose=inline",
    imageAlt: "Nadine Labaki with Zain during the film",
    layout: "craft",
    points: [
      { title: "Non-professional performers", text: "Natural reactions and lived experience" },
      { title: "Handheld, close framing", text: "The camera stays close to people and their environment" },
      { title: "Street-level perspective", text: "The city feels crowded, immediate and difficult to escape" },
      { title: "Emotional restraint", text: "Small gestures can feel more powerful than speeches" }
    ],
    script: `The film’s style is essential to its message. Labaki worked with non-professional performers, some of whom had experiences similar to the conditions shown in the story. Their performances often feel spontaneous rather than theatrical. The camera stays close to faces and bodies, placing us inside crowded streets and intimate spaces. This makes the world feel immediate, almost documentary-like. Instead of explaining every social problem through dialogue, the film lets us observe daily routines, exhaustion and small gestures of care. The result can be uncomfortable, but that discomfort is part of the film’s purpose: it makes distant social issues feel human and immediate.`
  },
  {
    number: "08", section: "INTERPRETATION", duration: "0:55",
    title: "Who is really on trial?",
    image: "https://images.openai.com/static-rsc-4/lydAe33KU0al8U1hqN3pkoRuya7dtCOudIvDUTV-0HfXhWRAtgEJ5l_raje5JwDec-0Jd1zEo9xMpcfnjxEMoUDNAnumg1fUXFwzlRGVCAnyTZdiHAMQ7TQ754jJV0vRjcCyChvuzDEHnrVUJmfxH9PDoiziFek1CYD68uRAcms?purpose=inline",
    imageAlt: "Zain’s face in a close-up from Capernaum",
    layout: "question",
    statement: "Is Zain putting his parents on trial — or is he putting society on trial?",
    body: "The courtroom becomes a mirror held up to the adults, institutions and systems around him.",
    script: `For me, the courtroom is the film’s central metaphor. On the surface, Zain is accusing his parents. But the story also asks whether society has failed him. Parents have responsibility, yet poverty, weak protection systems and unequal access to rights shape the choices people can make. The film does not offer an easy answer or suggest that every harmful action can be excused. Instead, it asks us to look at the wider conditions that allow children to be neglected. That is what makes the story more complex than a simple accusation against one family.`
  },
  {
    number: "09", section: "MY RESPONSE", duration: "0:45",
    title: "A film that refuses to look away",
    image: "https://images.openai.com/static-rsc-4/oaE-Vimdf1K9YSRTzHJCFBj-t-f6Yxsf4lUtfLN-csX4Pg6vonJSFJDz3aHIcc6jewBYc0luVOiyEJ7BXYfWADfQYKi5c7vSWdK7ezPpawSufqksgIgUiKZfR53QCEi4RRxs0vlTra5YZ0Tursx1h6Tm3NdVltHHj3pTUFQMj7U?purpose=inline",
    imageAlt: "Zain beside Yonas in Capernaum",
    layout: "response",
    highlights: ["It turns statistics into a human story.", "It shows resilience without romanticising suffering.", "It leaves the audience with responsibility, not comfort."],
    script: `What makes Capernaum powerful to me is that it turns broad social issues into the experience of one child. It is difficult to watch, but the film does not ask us to feel pity and then forget. It shows Zain’s intelligence and resilience without pretending that resilience makes suffering acceptable. A child should not have to be heroic just to survive. The film’s greatest strength is that it makes the audience question what it considers normal, and whether looking away is itself a kind of failure.`
  },
  {
    number: "10", section: "CLOSING", duration: "0:55",
    title: "What kind of world have we created?",
    image: "https://images.openai.com/static-rsc-4/qkxdQCz445g2rG0lNnrx5RyT2lINaqcAWnfd-lLI-PQLMXkQETCvx997BwhVxl9sOhQ_WNbUSYFiDgENZm3I2BlyC1_ytOhFmJq9sjr6oAQ55cMfWP5Fm8V51vNvnbUSOwGFhTBVEZfdzbaeyhdR03dGkDMWI1hGbNP0RxjXqOM?purpose=inline",
    imageAlt: "Zain in the courtroom at the centre of Capernaum",
    layout: "closing",
    script: `To conclude, Capernaum is not an easy film to watch. It makes us uncomfortable, it makes us question society, and it forces us to look at realities that many people would rather ignore. For me, the most powerful thing about this film is that Zain is not asking for a perfect life. He is asking for something much more basic: the right to be a child. We cannot choose where we are born, or the circumstances of our childhood. But as a society, we can choose how we treat the most vulnerable among us. So I would like to end with one final question: If a child has to go to court to ask why he was born, maybe the real question is not why he was born, but what kind of world we have created for him. Thank you for listening.`
  }
];

const sec = d => { const [m, s] = d.split(":"); return +m * 60 + +s; };
const fmt = t => `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
const TOTAL = 600;
const CREDIT_MS = [4200, 5600, 5600]; // directed by / starring / presented by (then THE END stays)
// Sony Classics promo still, shown as-is (its own title stays). Or drop /public/images/home.jpg
const HOME_IMG = "https://sonyclassics.com/capernaum/img/share.jpg";
const SOUND = true; // set to false for total silence
let ac;
function beep(f, d, g = 0.12, type = "sine") {
  if (!SOUND) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), v = ac.createGain(), t = ac.currentTime;
    o.type = type; o.frequency.value = f;
    v.gain.setValueAtTime(g, t); v.gain.exponentialRampToValueAtTime(0.001, t + d);
    o.connect(v).connect(ac.destination); o.start(); o.stop(t + d);
  } catch {}
}
// Camera move per slide: push-in, pull-out, pan left, pan right
const MOVES = ["push", "pull", "panl", "panr"];
// Local photos win: drop /public/images/01.jpg ... 10.jpg and they replace the remote stills.
const bg = s => `url("/images/${s.number}.jpg"), url("${s.image}")`;

const listFor = s =>
  s.bullets?.map(b => [b]) ||
  s.facts?.map(f => [f.label[0] + f.label.slice(1).toLowerCase(), f.value]) ||
  s.steps?.map(x => [x.title, x.text]) ||
  s.characters?.map(c => [c.name, `${c.role}. ${c.description}`]) ||
  s.themes?.map(t => [t.title, t.text]) ||
  s.points?.map(p => [p.title, p.text]) ||
  s.highlights?.map(h => [h]);

export default function App() {
  const [nav, setNav] = useState({ i: 0, prev: null });
  const index = nav.i, leaving = nav.prev;
  const setIndex = f => setNav(n => { const i = typeof f === "function" ? f(n.i) : f; return i === n.i ? n : { i, prev: n.i }; });
  const [phase, setPhase] = useState("home");
  const [count, setCount] = useState(3);
  const [cstep, setCstep] = useState(0);
  const idxRef = useRef(0);
  idxRef.current = index;
  const [showScript, setShowScript] = useState(false);
  const [overview, setOverview] = useState(false);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const slide = slides[index];
  const list = listFor(slide);

  const next = () => {
    if (idxRef.current === slides.length - 1) { setRunning(false); setOverview(false); setShowScript(false); setCstep(0); setPhase("credits"); return; }
    setRunning(true); setIndex(i => Math.min(slides.length - 1, i + 1));
  };
  const prev = () => setIndex(i => Math.max(0, i - 1));
  const start = () => { beep(900, 0.05, 0.08, "square"); setElapsed(0); setCount(3); setPhase("count"); };
  const goHome = () => { setNav({ i: 0, prev: null }); setElapsed(0); setRunning(false); setOverview(false); setShowScript(false); setCstep(0); setPhase("home"); };

  useEffect(() => {
    const onKey = (e) => {
      const k = e.key.toLowerCase();
      if (phase === "home") { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); start(); } return; }
      if (phase === "credits") { if (k === "h") goHome(); return; }
      if (phase !== "play") return;
      if (k === "h") goHome();
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (k === "n") setShowScript(v => !v);
      if (k === "t") setRunning(v => !v);
      if (k === "f") document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
      if (e.key === "Escape") setOverview(v => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed(t => t + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (nav.prev === null) return;
    const t = setTimeout(() => setNav(n => ({ i: n.i, prev: null })), 2000);
    return () => clearTimeout(t);
  }, [nav]);

  useEffect(() => {
    if (phase !== "count") return;
    if (count <= 0) { beep(46, 1.8, 0.5); setPhase("play"); setRunning(true); return; }
    if (count < 3) beep(900, 0.05, 0.08, "square");
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, count]);

  useEffect(() => {
    if (phase !== "credits") return;
    if (cstep === 3) { beep(46, 2.2, 0.5); return; }
    const t = setTimeout(() => setCstep(s => s + 1), CREDIT_MS[cstep]);
    return () => clearTimeout(t);
  }, [phase, cstep]);

  const l = slide.layout;
  const headline =
    l === "hero" ? <h1>{slide.title}</h1> :
    l === "quote" ? <blockquote>{slide.quote}<br /><em>{slide.quoteAnswer}</em></blockquote> :
    l === "question" ? <blockquote>{slide.statement}</blockquote> :
    <h2>{slide.title}</h2>;
  const lead = slide.subtitle || slide.quoteCredit || slide.body ||
    (l === "closing" ? "“A child should not have to be heroic just to survive.”" : null);

  if (phase === "home") return <main className="stage">
    <div className="shot still" style={{ backgroundImage: `url("/images/home.jpg"), url("${HOME_IMG}")` }} />
    <div className="shade home-shade" /><div className="grain" />
    <section className="copy home-copy">
      <p className="sub">Prix du jury · Cannes 2018 · Oscar nominee</p>
      <p className="sub">2018 · Nadine Labaki · Drama · Lebanon · 2h06</p>
      <p className="lead">In the slums of Beirut, twelve-year-old Zain sues his parents for giving him life. A ten-minute look at how the film makes us judge the adults.</p>
      <div className="hbtns"><button className="play" onClick={start}>▶ Play</button><button className="ghost" onClick={() => { setPhase("play"); setOverview(true); }}>Chapters</button></div>
    </section>
  </main>;

  if (phase === "count") return <main className="stage leader" key={count}>
    <div className="grain" />
    <svg className="ring" viewBox="0 0 200 200"><circle cx="100" cy="100" r="88" /><line x1="0" y1="100" x2="200" y2="100" /><line x1="100" y1="0" x2="100" y2="200" /></svg>
    <div className="sweep" /><span className="num">{count}</span><div className="flash" />
  </main>;

  if (phase === "credits") return <main className="stage credits" key={cstep}>
    <div className="grain" />
    <div className={`cr cr${cstep}`} style={{ "--d": `${CREDIT_MS[cstep] || 0}ms` }}>
      {cstep === 0 && <><p className="sub">Directed by</p><h2>Nadine Labaki</h2></>}
      {cstep === 1 && <><p className="sub">Starring</p><p className="cast">Zain Al Rafeea<br />Yordanos Shiferaw<br />Boluwatife Treasure Bankole<br />Kawthar Al Haddad<br />Fadi Kamel Youssef</p></>}
      {cstep === 2 && <><p className="sub">Presented by</p><p className="big">Anas MESRI<i>&amp;</i>Djoumana LOUMI</p></>}
      {cstep === 3 && <><p className="end">THE END</p><button className="again" onClick={goHome}>Back to start · H</button></>}
    </div>
  </main>;

  return <main className="stage" onClick={e => { if (!e.target.closest("button,.notes")) (e.clientX > innerWidth * 0.35 ? next() : prev()); }}>
    <div className={`shot ${MOVES[index % 4]}`} key={"s" + index} role="img" aria-label={slide.imageAlt} style={{ backgroundImage: bg(slide) }} />
    <div className="shade" />
    <div className="grain" />

    <header className="bar top">
      <a className="wordmark" href="#" onClick={e => { e.preventDefault(); setIndex(0); }}>CAPERNAUM</a>
      <span className={`clock ${running ? "on" : ""}`}>{fmt(elapsed)} <i>/ {fmt(TOTAL)}</i></span>
    </header>

    <section className={`copy ${l}`} key={"c" + index}>
      {headline}
      {lead && <p className={l === "closing" || l === "split" || l === "question" ? "lead" : "sub"}>{lead}</p>}
      {list && <ol className="items">{list.map(([h, p], i) => <li key={h} style={{ "--i": i }}><b>{h}</b>{p && <span>{p}</span>}</li>)}</ol>}
      {l === "closing" && <p className="sub">Thank you for listening.</p>}
    </section>

    {showScript && <aside className="notes">
      <p>{slide.script}</p>
      <div><button onClick={() => navigator.clipboard?.writeText(slide.script)}>Copy</button><span>{slide.duration} speaking time</span></div>
    </aside>}

    <footer className="bar bottom">
      <span className="chapter">{slide.section}</span>
      <nav className="track" aria-label="Chapters">
        {slides.map((s, i) => <button key={s.number} style={{ flex: sec(s.duration) }} className={i <= index ? "done" : ""} aria-label={`Go to slide ${i + 1}: ${s.section}`} title={s.section} onClick={() => setIndex(i)} />)}
      </nav>
      <button className="count" onClick={() => setOverview(true)} aria-label="Open chapter overview">{slide.number} / 10</button>
    </footer>

    {overview && <div className="overview" role="dialog" aria-modal="true" aria-label="Chapters">
      <button className="close home" onClick={goHome}>Home</button>
      <button className="close" onClick={() => setOverview(false)}>Close</button>
      <div className="ogrid">{slides.map((s, i) => <button key={s.number} className={index === i ? "sel" : ""} onClick={() => { setIndex(i); setOverview(false); }}><img src={s.image} alt="" loading="lazy" /><span>{s.number}</span><strong>{s.title}</strong></button>)}</div>
    </div>}
  </main>;
}