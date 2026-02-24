import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

/* ── Stats ── */
const stats = [
  {
    value: "10%",
    label: "Equity stakes held",
    detail: "We put skin in the game with every venture partner",
  },
  {
    value: "3",
    label: "Products live in market",
    detail: "BKwire · Caprix · RunBook Co-Pilot",
  },
  {
    value: "40%",
    label: "Faster release cadences",
    detail: "GitOps + AI-assisted delivery pipelines",
  },
  {
    value: "$0",
    label: "CTO salary required",
    detail: "Enterprise-grade leadership via equity partnership",
  },
];

/* ── Services ── */
const servicePillars = [
  {
    icon: "☁️",
    title: "Cloud Native Architecture",
    summary:
      "Production-grade infrastructure on AWS, GCP, or Azure—designed for scale from day one, not bolted on later.",
    bullets: [
      "Kubernetes orchestration, serverless, and edge deployments",
      "Multi-cloud landing zones with Terraform and policy-as-code",
      "FinOps telemetry that ties infrastructure spend to business outcomes",
    ],
    outcome: "Ship on infrastructure that grows with your revenue, not your headcount.",
  },
  {
    icon: "⚙️",
    title: "DevOps & CI/CD Automation",
    summary:
      "Automated pipelines, developer platforms, and observability stacks that let small teams ship like large ones.",
    bullets: [
      "GitHub Actions / GitLab CI with supply-chain security baked in",
      "Internal developer platforms and self-service infrastructure",
      "SLO-driven observability tied to executive dashboards",
    ],
    outcome: "Every engineer ships confidently. Every deploy is traceable and reversible.",
  },
  {
    icon: "🤖",
    title: "AI Ops & Intelligent Automation",
    summary:
      "We embed AI into your operations—not as a demo, but as a force multiplier that closes incidents and accelerates decisions.",
    bullets: [
      "LLM-powered runbook copilots and proactive anomaly detection",
      "Knowledge graphs fused with telemetry for self-diagnosing systems",
      "Workflow automation that eliminates toil, not just tracks it",
    ],
    outcome: "Incidents resolve before Slack wakes up the on-call engineer.",
  },
  {
    icon: "⚡",
    title: "AI-Assisted Product Development",
    summary:
      "Pair senior architects with AI-assisted development to build production applications at startup speed with enterprise quality.",
    bullets: [
      "Zero-to-one SaaS builds with architecture that investors can diligence",
      "AI-augmented coding workflows that 3x delivery velocity",
      "Component libraries, design systems, and reusable platform modules",
    ],
    outcome: "Go from idea to revenue-generating product in weeks, not quarters.",
  },
];

/* ── Portfolio ── */
const portfolio = [
  {
    name: "BKwire",
    url: "https://bkwire.com",
    role: "Equity Partner · CTO",
    category: "Financial Risk Intelligence",
    description:
      "BKwire is a bankruptcy monitoring and alert platform that helps businesses track when their customers file for bankruptcy. In thin-margin industries—fuel distribution, wholesale, logistics—losing even one receivable to an undetected filing can cost tens of thousands. BKwire delivers real-time alerts so companies can act immediately: adjusting credit terms, filing claims, and protecting their bottom line before it's too late.",
    impact: [
      "Real-time bankruptcy filing alerts saving clients thousands per incident",
      "Multi-cloud data pipeline architecture spanning AWS and GCP",
      "Compliance-ready onboarding and institutional-grade research tools",
    ],
    testimonial:
      "\"BKwire has been a game-changer, saving us thousands of dollars by instantly alerting us to customers who filed for bankruptcy. Before BKwire, we were blind to timely notices, leaving us vulnerable in an industry where margins are razor-thin.\"",
  },
  {
    name: "Caprix",
    url: "https://caprix.ai",
    role: "Equity Partner · CTO",
    category: "Research Lab Management",
    description:
      "Caprix is a lab management platform purpose-built for research labs and Principal Investigators scaling their programs. As labs grow, what once felt organized becomes chaos: overlapping grants, shifting timelines, and hours lost to manual tracking. Caprix gives PIs the visibility to scale their impact without scaling the administrative burden—grant tracking, resource allocation, and timeline management in one intelligent system.",
    impact: [
      "\"Scaling Science Without Scaling Chaos\" — operational clarity for growing labs",
      "Grant lifecycle management from proposal through compliance reporting",
      "Resource visibility that lets PIs focus on science, not spreadsheets",
    ],
    testimonial: null,
  },
  {
    name: "RunBook Co-Pilot",
    url: null,
    role: "1337ITS Product",
    category: "AI-Powered Operations",
    description:
      "RunBook Co-Pilot is our emerging AI operations product—an intelligent system that bridges the gap between documentation and action. It transforms static runbooks into living, context-aware copilots that guide operators through incidents, automate routine procedures, and capture institutional knowledge that typically walks out the door with senior engineers.",
    impact: [
      "LLM-powered agents that subscribe to status pages and alert streams",
      "Automatic postmortem capture and knowledge base enrichment",
      "Workflow engine that turns tribal knowledge into repeatable automation",
    ],
    testimonial: null,
  },
];

/* ── Partnership Model ── */
const partnershipSteps = [
  {
    phase: "01",
    title: "Discovery",
    detail:
      "We start with a deep technical and business assessment—not a sales pitch. We need to understand your architecture, market position, and growth trajectory to determine if a partnership makes sense for both sides.",
  },
  {
    phase: "02",
    title: "Partnership Terms",
    detail:
      "We structure an equity-for-engineering arrangement that aligns incentives. Lower upfront costs for you, long-term upside for us. Every deal is bespoke—because every company's needs and stage are different.",
  },
  {
    phase: "03",
    title: "Build & Ship",
    detail:
      "We embed as your technical co-founder: architecting systems, shipping product, hiring your first engineers, and building the infrastructure that scales. This isn't staff augmentation—it's committed partnership.",
  },
  {
    phase: "04",
    title: "Grow Together",
    detail:
      "Because we hold equity, we stay invested in your success long after the initial build. Ongoing CTO-level guidance, architecture reviews, and strategic technical leadership—because your growth is literally our growth.",
  },
];

/* ── Values ── */
const values = [
  {
    title: "Aligned Incentives",
    description:
      "We take equity because we believe in what we build. When your company succeeds, we succeed. No misaligned hourly billing that rewards slow delivery.",
  },
  {
    title: "Technical Excellence",
    description:
      "Every system we build is designed to be acquired, scaled, or handed off cleanly. Investor-ready architecture, comprehensive documentation, and no technical debt traps.",
  },
  {
    title: "Founder Empathy",
    description:
      "We've built products from zero. We understand the difference between a $200k architecture astronaut recommendation and what actually needs to ship this quarter.",
  },
  {
    title: "Sustainable Growth",
    description:
      "We don't burn through runway building cathedrals. We ship incrementally, validate continuously, and scale infrastructure in lockstep with revenue.",
  },
];

export default function Home() {
  return (
    <div className="grid-pattern">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-white">1337</span>
          <span className="text-xl font-light text-slate-400">IT Solutions</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
          <a href="#partnership" className="transition hover:text-white">Partnership</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <Link
            href="#contact"
            className="rounded-xl bg-white/10 px-4 py-2 font-medium text-white transition hover:bg-white/20"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* ════════════════ Hero ════════════════ */}
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-cyan-500/10 sm:p-12 lg:p-16">
          <div className="absolute inset-x-10 -top-16 h-48 rounded-full bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/40 to-emerald-300/30 blur-[110px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/10 blur-[80px]" />

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Technical Co-Founder Partnerships · Venture Studio · Cloud Native
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            We don&apos;t just consult.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
              We invest in your success.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            1337 IT Solutions is a venture studio and technical consulting firm that partners with
            startups and growth-stage companies through equity-for-engineering arrangements. You get
            enterprise-grade CTO leadership and cloud-native architecture. We get a stake in your
            future. Your success becomes our success—literally.
          </p>

          <div className="mt-10 flex flex-col gap-4 text-sm font-semibold sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore a Partnership ↗
            </Link>
            <a
              href="#partnership"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-base text-white transition hover:border-white"
            >
              How It Works
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-200">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════ Value Proposition Banner ════════════════ */}
        <section className="mt-16 rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-900/30 via-slate-900/60 to-fuchsia-900/30 p-8 sm:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Enterprise-grade technical leadership.
              <br />
              Without the $300K+ CTO salary.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              Traditional consulting bills by the hour and walks away when the contract ends. We take
              equity stakes because we&apos;re building something together. That means we care about
              your architecture decisions in year three, not just the deliverable in sprint two.
            </p>
          </div>
        </section>

        {/* ════════════════ Services ════════════════ */}
        <section id="services" className="mt-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
              What We Build
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Capabilities that compound
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              Every engagement produces reusable assets—Terraform modules, CI/CD templates, AI
              workflows, component libraries—so each partnership makes the next one faster and better.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {servicePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glow-ring flex flex-col rounded-3xl border border-white/10 bg-slate-900/50 p-8"
              >
                <div>
                  <span className="text-2xl">{pillar.icon}</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{pillar.summary}</p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-100">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <p className="rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-emerald-200/90">
                    → {pillar.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════ Portfolio ════════════════ */}
        <section id="portfolio" className="mt-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200/80">
              Proof of Execution
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Portfolio Companies
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              We don&apos;t just advise—we build, own, and operate. These are companies where
              1337ITS serves as technical co-founder with meaningful equity stakes and ongoing CTO
              leadership.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {portfolio.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                  <div className="lg:flex-1">
                    <div className="flex items-center gap-3">
                      <span className="rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-200/80">
                        {project.role}
                      </span>
                      <span className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-cyan-200/80">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                      {project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-cyan-200"
                        >
                          {project.name} <span className="text-lg">↗</span>
                        </Link>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-200">
                      {project.description}
                    </p>
                    {project.testimonial && (
                      <blockquote className="mt-6 rounded-2xl border-l-2 border-cyan-400/40 bg-white/5 p-5 text-sm italic leading-relaxed text-slate-300">
                        {project.testimonial}
                      </blockquote>
                    )}
                  </div>
                  <div className="lg:w-80">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/70">
                      What We Built
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-100">
                      {project.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ════════════════ Partnership Model ════════════════ */}
        <section id="partnership" className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/40 p-8 sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200/80">
                How We Work
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                The Equity Partnership Model
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Most consulting firms optimize for billable hours. We optimize for outcomes. Our
                equity-for-engineering model means lower upfront costs for you and aligned long-term
                incentives for both sides. We&apos;re not vendors—we&apos;re partners.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {partnershipSteps.map((step) => (
                <div
                  key={step.phase}
                  className="rounded-2xl border border-white/5 bg-black/30 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 text-sm font-bold text-white">
                      {step.phase}
                    </span>
                    <p className="text-lg font-semibold text-white">{step.title}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200">{step.detail}</p>
                </div>
              ))}
            </div>

            {/* Who this is for */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">Who This Is For</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">Startups</p>
                  <p className="mt-2 text-sm text-slate-300">
                    You have product-market fit but not a $300K budget for a CTO. You need someone
                    who can architect systems, ship code, and make technical hiring decisions—with
                    skin in the game.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-cyan-200">Growth-Stage Companies</p>
                  <p className="mt-2 text-sm text-slate-300">
                    You&apos;re scaling from startup to mid-size and your technical foundations need
                    to scale too. We bring the architecture and operations expertise to grow without
                    breaking.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-cyan-200">Non-Technical Founders</p>
                  <p className="mt-2 text-sm text-slate-300">
                    You have the domain expertise and market insight. We bring the technical
                    co-founder capability—architecture, team building, and engineering
                    leadership—without giving up a founder seat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ About / Company Story ════════════════ */}
        <section id="about" className="mt-24">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/40 p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200/80">
              Our Story
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Built different. On purpose.
            </h2>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 text-base leading-relaxed text-slate-200">
                <p>
                  1337 IT Solutions was born from a simple observation: the consulting industry is
                  fundamentally misaligned. Traditional firms bill by the hour, which means they&apos;re
                  incentivized to make projects take longer. They staff junior engineers at senior
                  rates. They deliver recommendations instead of running systems. And when the
                  contract ends, they walk away—regardless of whether what they built actually works.
                </p>
                <p>
                  We wanted to build a different kind of firm. One where we&apos;re invested—literally—in
                  the success of what we build. Where our engineers stay because they&apos;re
                  co-owners, not contractors. Where the measure of a good engagement isn&apos;t
                  billable hours captured, but whether the company we partnered with is thriving
                  two years later.
                </p>
                <p>
                  That conviction led to our equity-for-engineering model: we trade cloud-native
                  architecture, DevOps automation, AI operations, and CTO-level leadership for
                  meaningful ownership stakes in the companies we build with. It&apos;s a model that
                  only works if we&apos;re genuinely good at what we do—because our upside depends
                  entirely on our partners&apos; success.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Build the premier AI-powered venture studio and technical consulting firm—where
                    every partnership creates compounding value through shared ownership, reusable
                    IP, and a portfolio of companies that prove our work delivers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Partner with ambitious teams to build transformative technology through
                    equity-aligned relationships. Give startups and growth companies access to the
                    technical leadership that usually requires $500K+ in payroll—structured so both
                    sides win.
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  {values.map((v) => (
                    <div key={v.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <p className="text-sm font-semibold text-white">{v.title}</p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        {v.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ Contact ════════════════ */}
        <section
          id="contact"
          className="mt-24 grid gap-10 rounded-[32px] border border-white/10 bg-black/40 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200/80">
              Start a Conversation
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s build together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200">
              We take on a small number of equity partnerships per year—enough to give each the
              attention it deserves. If you&apos;re building something meaningful and need a
              technical co-founder who&apos;s in it for the long run, we should talk.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Equity partnerships, retainer engagements, and advisory arrangements all welcome.
              Expect a candid technical assessment and partnership proposal within 72 hours.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-100">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>cbford@1337itsolutions.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🌐</span>
                <span>St. Louis, Missouri · Remote-First</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🎯</span>
                <span>Cloud Native · DevOps · AI Ops · Technical Co-Founder Partnerships</span>
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 1337 IT Solutions LLC. All rights reserved.</p>
          <p className="mt-1">
            Cloud Native · DevOps · AI Ops · Equity Partnerships
          </p>
        </footer>
      </main>
    </div>
  );
}
