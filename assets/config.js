/* ============================================================
   SITE CONFIGURATION — edit everything here
   ============================================================ */
const SITE_CONFIG = {
  // Stats (placeholder values — replace with real figures)
  stats: [
    { value: 50,  suffix: "+",  label: "Projects" },
    { value: 10,  suffix: "+",  label: "Technologies" },
    { value: "24/7", suffix: "", label: "Development" },
    { value: 100, suffix: "%",  label: "Passion" },
  ],

  services: [
    { title:"FiveM Development", icon:"server",
      desc:"Custom FiveM resources, frameworks, systems, vehicles, UI, server infrastructure, and immersive roleplay experiences." },
    { title:"Roblox Development", icon:"gamepad",
      desc:"Custom Roblox experiences, gameplay systems, UI, progression systems, economy systems, and multiplayer experiences." },
    { title:"Web Development", icon:"globe",
      desc:"Modern websites, dashboards, landing pages, control panels, and web applications." },
    { title:"Software Development", icon:"terminal",
      desc:"Custom tools, automation systems, utilities, APIs, and desktop/web applications." },
    { title:"UI/UX Design", icon:"layers",
      desc:"Modern interfaces designed around usability, performance, and visual identity." },
    { title:"Custom Development", icon:"spark",
      desc:"If a project doesn't fit into an existing category, Phantom Forge can create a custom solution." },
  ],

  projectFilters: ["ALL","GAMES","SOFTWARE","WEB","TOOLS"],

  // status: "live" | "dev" | "private" | "archived"
  projects: [
    { id:"phantomguard", name:"PhantomGuard", category:"SOFTWARE", categoryLabel:"Security Technology",
      status:"live", image:"", video:"", art:"shield", initials:"PG",
      desc:"Security and protection technology engineered to detect, prevent, and neutralize threats in real time.",
      features:["Real-time threat detection engine","Behavioral anomaly analysis","Encrypted telemetry & audit logging","Modular rule system with hot reload","Dashboard with live alerts"],
      tech:["TypeScript","Node.js","Redis","PostgreSQL","Docker"],
      links:[{label:"View Documentation",url:"#"},{label:"Request Access",url:"#contact"}] },
    { id:"phantomcore", name:"PhantomCore", category:"GAMES", categoryLabel:"Game Server Framework",
      status:"dev", image:"", video:"", art:"core", initials:"PC",
      desc:"A high-performance game server framework and infrastructure layer built for scalable multiplayer worlds.",
      features:["Modular resource architecture","Optimized network sync & state replication","Built-in economy, inventory & permission systems","Web-based admin control panel","Plugin API for third-party extensions"],
      tech:["Lua","C#","TypeScript","MySQL","React"],
      links:[{label:"Roadmap",url:"#"},{label:"Join Waitlist",url:"#contact"}] },
    { id:"beatforge", name:"Beat Forge", category:"TOOLS", categoryLabel:"AI-Assisted Mapping",
      status:"dev", image:"", video:"", art:"beat", initials:"BF",
      desc:"AI-assisted Beat Saber mapping technology that turns audio into playable, rhythm-accurate maps.",
      features:["Audio analysis & beat detection","AI-generated note patterns by difficulty","Manual editor with live preview","One-click export to standard map format","Style presets & community sharing"],
      tech:["Python","PyTorch","Electron","TypeScript","FFmpeg"],
      links:[{label:"Learn More",url:"#"},{label:"Get Notified",url:"#contact"}] },
    { id:"nova", name:"NOVA", category:"WEB", categoryLabel:"DNS & Network Management",
      status:"private", image:"", video:"", art:"nova", initials:"N",
      desc:"Advanced DNS and network management technology with a modern control plane and global visibility.",
      features:["Managed DNS with instant propagation","Traffic analytics & geo insights","Automated failover & health checks","API-first with full CLI","Role-based team access"],
      tech:["Go","Next.js","gRPC","ClickHouse","Kubernetes"],
      links:[{label:"Request Demo",url:"#contact"}] },
  ],

  technologies: [
    { name:"Lua", kind:"Scripting", glyph:"Lua", color:"#2C2D72" },
    { name:"JavaScript", kind:"Language", glyph:"JS", color:"#b8a600" },
    { name:"TypeScript", kind:"Language", glyph:"TS", color:"#3178C6" },
    { name:"Python", kind:"Language", glyph:"Py", color:"#3572A5" },
    { name:"C#", kind:"Language", glyph:"C#", color:"#68217A" },
    { name:"Luau", kind:"Roblox", glyph:"Lu", color:"#00A2FF" },
    { name:"React", kind:"Frontend", glyph:"Re", color:"#0f7f95" },
    { name:"Next.js", kind:"Framework", glyph:"N", color:"#222" },
    { name:"Node.js", kind:"Runtime", glyph:"No", color:"#3c873a" },
    { name:"Tailwind", kind:"Styling", glyph:"Tw", color:"#0b8f9e" },
    { name:"MySQL", kind:"Database", glyph:"My", color:"#00618a" },
    { name:"Docker", kind:"DevOps", glyph:"Dk", color:"#0d63a5" },
  ],

  // Placeholder team — replace with real members. photo: "" uses initials.
  team: [
    { name:"Founder Name", role:"FOUNDER / LEAD DEVELOPER", photo:"", bio:"Architects the systems and vision behind every project forged in the studio.",
      links:{ github:"#", twitter:"#", discord:"#" } },
    { name:"Developer Name", role:"GAME SYSTEMS ENGINEER", photo:"", bio:"Specializes in FiveM and Roblox gameplay systems, performance, and networking.",
      links:{ github:"#", twitter:"#" } },
    { name:"Designer Name", role:"UI / UX DESIGNER", photo:"", bio:"Crafts the interfaces and visual identity that make every experience feel premium.",
      links:{ twitter:"#", discord:"#" } },
  ],

  contact: {
    email: "contact@phantomforge.dev",
    discord: "discord.gg/phantomforge",
    location: "Remote · Worldwide",
    socials: [
      { label:"Discord", url:"#" }, { label:"GitHub", url:"#" }, { label:"Twitter / X", url:"#" }, { label:"YouTube", url:"#" }
    ]
  },

  forgeLog: [
    "> compiling phantomcore/resources … ok",
    "> syncing 42 entities @ 60hz … stable",
    "> beatforge: analysing track (128 bpm) … done",
    "> nova: propagating dns records … 0.9s",
    "> phantomguard: 0 threats · 1,204 requests scanned",
    "> deploying build #1187 → production … ✓",
  ],

  process: [
    { title:"Discovery", desc:"We learn your goals, players, constraints, and success metrics before a single line is written." },
    { title:"Blueprint", desc:"Architecture, scope, milestones, and UI wireframes — so you know exactly what is being forged." },
    { title:"Forge", desc:"Iterative development with weekly builds, previews, and direct communication on Discord." },
    { title:"Temper", desc:"Performance profiling, QA, security review, and polish until it feels premium." },
    { title:"Launch & Support", desc:"Deployment, documentation, and ongoing updates so your product keeps evolving." },
  ],

  // Placeholder testimonials — replace with real client quotes.
  testimonials: [
    { name:"Client Name", role:"Server Owner · FiveM Community", rating:5, quote:"The framework Phantom Forge built runs smoother than anything we've used. Player count doubled in a month." },
    { name:"Client Name", role:"Founder · Roblox Studio", rating:5, quote:"Clear communication, on-time milestones, and a progression system our players genuinely love." },
    { name:"Client Name", role:"CTO · SaaS Startup", rating:5, quote:"They treated our dashboard like a product, not a ticket. The attention to UX detail was outstanding." },
  ],

  faq: [
    { q:"What kind of projects do you take on?", a:"FiveM resources and frameworks, Roblox experiences, web platforms and dashboards, custom software and tools, plus UI/UX design. If it's digital and interactive, we can likely forge it." },
    { q:"How does pricing work?", a:"Most projects are quoted as a fixed price after a short discovery call. Larger or ongoing work can be structured as milestones or a monthly retainer. Ready-made products have upfront prices on the Products page." },
    { q:"How long does a typical project take?", a:"Small scripts or landing pages: 1–2 weeks. Mid-sized systems: 3–8 weeks. Full frameworks or platforms: 2–4 months. We share a milestone timeline before starting." },
    { q:"Do I own the code?", a:"Yes. Custom work is delivered with full source and ownership transfers on final payment. Off-the-shelf products are licensed per the terms shown on the product." },
    { q:"Do you offer support after launch?", a:"Every project includes a support window for fixes. Optional maintenance plans cover updates, monitoring, and new features." },
  ],

  /* ---------------- PRODUCTS PAGE ---------------- */
  // price: number (0 = free, null = custom quote). period: "mo" for subscriptions.
  products: [
    { id:"pf-inventory", name:"Phantom Inventory", category:"FIVEM", platform:"FiveM", type:"script", status:"live", badge:"Best Seller", art:"core", initials:"PI",
      price:39.99, desc:"Drag-and-drop grid inventory with weight, durability, metadata items, stashes, and a slick React UI.",
      features:["Grid + slot modes","Item metadata & durability","Stashes, trunks, gloveboxes","Framework agnostic (ESX / QB / standalone)","Fully escrow-free source"],
      tech:["Lua","React","TypeScript"], links:[{label:"Documentation",url:"#"}] },
    { id:"pf-hud", name:"Phantom HUD", category:"FIVEM", platform:"FiveM", type:"script", status:"live", art:"nova", initials:"PH",
      price:24.99, desc:"Minimal, configurable HUD with vehicle cluster, status bars, minimap styling, and player settings.",
      features:["Live settings menu","Speedometer & fuel","Status rings","Themeable colors","Optimized 0.01ms idle"],
      tech:["Lua","Vue","CSS"], links:[{label:"Preview Video",url:"#"}] },
    { id:"phantomcore-lic", name:"PhantomCore Framework", category:"FIVEM", platform:"FiveM", type:"framework", status:"dev", badge:"Coming Soon", art:"core", initials:"PC",
      price:null, desc:"Full server framework: jobs, economy, inventory, permissions, and an admin web panel — built for scale.",
      features:["Modular resource system","Web admin panel","Economy & jobs","Optimized state sync","Migration tools from ESX/QB"],
      tech:["Lua","TypeScript","MySQL","React"], links:[{label:"Roadmap",url:"#"}] },
    { id:"rbx-progression", name:"Progression Kit", category:"ROBLOX", platform:"Roblox", type:"framework", status:"live", art:"shield", initials:"PK",
      price:29, desc:"Plug-in leveling, XP curves, unlock trees, and daily rewards with DataStore-safe persistence.",
      features:["Configurable XP curves","Skill/unlock trees","Daily & streak rewards","ProfileService-ready","Leaderboards"],
      tech:["Luau","Roblox Studio"], links:[{label:"Marketplace",url:"#"}] },
    { id:"rbx-economy", name:"Economy Engine", category:"ROBLOX", platform:"Roblox", type:"framework", status:"live", art:"nova", initials:"EE",
      price:34, desc:"Currencies, shops, trading, and gamepass/dev-product integration with anti-exploit validation.",
      features:["Multi-currency wallets","Shop & inventory UI","Secure trading","Dev product hooks","Analytics events"],
      tech:["Luau","Knit"], links:[{label:"Docs",url:"#"}] },
    { id:"beatforge-pro", name:"Beat Forge Pro", category:"TOOLS", platform:"Desktop", type:"tool", status:"dev", badge:"Early Access", art:"beat", initials:"BF",
      price:9, period:"mo", desc:"AI-assisted Beat Saber mapping — generate, edit, and export maps in minutes.",
      features:["Auto beat detection","Difficulty presets","Live 3D preview","One-click export","Cloud map library"],
      tech:["Python","Electron"], links:[{label:"Join Early Access",url:"#"}] },
    { id:"nova-cloud", name:"NOVA Cloud", category:"SOFTWARE", platform:"Web", type:"service", status:"private", art:"nova", initials:"N",
      price:19, period:"mo", desc:"Managed DNS with instant propagation, health checks, failover, and a clean control panel.",
      features:["Anycast DNS","Health checks & failover","Analytics","REST API + CLI","Team roles"],
      tech:["Go","Next.js"], links:[{label:"Request Access",url:"#"}] },
    { id:"phantomguard-lite", name:"PhantomGuard Lite", category:"SOFTWARE", platform:"Server", type:"tool", status:"live", art:"shield", initials:"PG",
      price:0, desc:"Free, lightweight protection agent with rate limiting, IP reputation, and Discord alerts.",
      features:["Rate limiting","IP reputation lists","Discord webhooks","Single binary","Free forever"],
      tech:["Go"], links:[{label:"GitHub",url:"#"}] },
    { id:"web-studio-kit", name:"Studio Website Kit", category:"WEB", platform:"Web", type:"template", status:"live", art:"core", initials:"SK",
      price:49, desc:"A premium dark-theme website template for game studios and communities, with CMS-ready sections.",
      features:["12 sections","Dark/neon theme","Responsive","SEO ready","Easy config file"],
      tech:["HTML","CSS","JavaScript"], links:[{label:"Live Demo",url:"#"}] },
  ],

  tiers: [
    { name:"Starter", price:"From $499", note:"one-time", desc:"A single script, page, or small system.", cta:"Get a Quote",
      includes:["1 focused deliverable","Source code included","14 days of fixes","Discord support"] },
    { name:"Studio", price:"From $2,500", note:"per project", desc:"Multi-system builds, full experiences, dashboards.", cta:"Start a Project", featured:true,
      includes:["Architecture & UI design","Weekly builds & previews","Performance & QA pass","60 days of support","Documentation"] },
    { name:"Forge Partner", price:"Custom", note:"monthly retainer", desc:"A dedicated team continuously building your product.", cta:"Talk to Us",
      includes:["Dedicated developers","Priority roadmap","Monitoring & maintenance","Unlimited iterations","Strategic guidance"] },
  ],

  productFaq: [
    { q:"How are products delivered?", a:"Instantly after checkout via download link and email. FiveM scripts include installation guides; Roblox kits are delivered as models and source." },
    { q:"Are the FiveM scripts escrow-protected?", a:"No — all Phantom Forge scripts ship as full open source so you can customize freely. Licenses are per-server." },
    { q:"Can I get a refund?", a:"Digital products are non-refundable once downloaded, but if something doesn't work as advertised we'll fix it or refund you." },
    { q:"Do you offer bulk or reseller licensing?", a:"Yes, contact us for multi-server or community-wide licensing." },
  ]
};
