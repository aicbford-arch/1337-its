import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production AI Agents — Built, Deployed, and Operated | 1337 IT Solutions",
  description:
    "We architect, containerize, deploy, and operate autonomous AI agent systems on GCP and AWS. LangGraph, Anthropic Claude, MCP, Cloud Run, EKS. St. Louis, MO.",
};

const agentArchetypes = [
  {
    title: "Operations Agents",
    description:
      "Incident response, runbook execution, alert triage, and postmortem generation. Agents that keep systems running without waking the on-call engineer.",
  },
  {
    title: "Data Pipeline Agents",
    description:
      "ETL orchestration, data quality monitoring, schema migration, and anomaly detection. Agents that keep your data flowing and trustworthy.",
  },
  {
    title: "Customer Ops Agents",
    description:
      "Ticket routing, response drafting, escalation detection, and knowledge base maintenance. Agents that improve resolution time and customer satisfaction.",
  },
  {
    title: "Compliance & Audit Agents",
    description:
      "Policy enforcement, audit trail generation, regulatory change monitoring, and documentation validation. Agents that keep you compliant automatically.",
  },
];

const techStack = [
  { name: "LangGraph", description: "State machine orchestration for multi-agent workflows" },
  { name: "Anthropic Claude", description: "Primary LLM backbone" },
  { name: "MCP (Model Context Protocol)", description: "Standardized tool integration" },
  { name: "GCP Cloud Run / AWS ECS", description: "Serverless, per-request agent deployment" },
  { name: "GKE / EKS", description: "Kubernetes for multi-agent systems and long-running workflows" },
  { name: "pgvector", description: "Production vector memory on Cloud SQL or RDS" },
  { name: "LangSmith", description: "Full trace observability for every agent run" },
  { name: "Terraform", description: "Infrastructure-as-code for repeatable deployments" },
  { name: "GitLab CI + Kaniko", description: "Automated build and deploy pipeline" },
];

const deliveryProcess = [
  { phase: "01", title: "Discovery", detail: "Audit your workflows, identify the highest-ROI agent opportunities, and define success metrics." },
  { phase: "02", title: "Architecture", detail: "Design the agent system: state machines, tool integrations, memory strategy, and deployment topology." },
  { phase: "03", title: "Build", detail: "Implement, test, and iterate. Every agent run is traced and observable from day one." },
  { phase: "04", title: "Deploy", detail: "Containerize, ship to Cloud Run, ECS, or Kubernetes (GKE/EKS), wire up monitoring, alerting, and rollback." },
  { phase: "05", title: "Operate", detail: "Ongoing optimization, drift detection, model upgrades, and knowledge transfer to your team." },
];

export default function AIAgentsPage() {
  return (
    <div className="grid-pattern flex min-h-screen flex-col bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors">
              1337<span className="text-cyan-400">ITS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/ai-agents" className="text-sm text-cyan-400 font-medium">AI Agents</Link>
              <Link href="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link>
              <Link href="/#portfolio" className="text-sm text-slate-400 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/#partnership" className="text-sm text-slate-400 hover:text-white transition-colors">Partnership</Link>
              <Link href="/#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link>
              <Link href="/#contact" className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 py-20 sm:py-32">
          <div className="absolute inset-x-10 -top-16 h-48 rounded-full bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/40 to-emerald-300/30 blur-[110px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/10 blur-[80px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                AI Agent Development &amp; Deployment
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Production AI Agents
              </h1>
              <h2 className="mt-4 text-2xl font-medium text-slate-300 sm:text-3xl">
                Built, Deployed, and Operated on GCP &amp; AWS
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-200 sm:text-xl">
                We don&apos;t build AI agent demos. We architect, containerize, deploy,
                and operate autonomous agent systems that handle real workflows —
                from DevOps incident response to compliance monitoring to customer ops.
              </p>
              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Book a Technical Assessment ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="border-b border-white/10 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Anyone can vibe-code an agent prototype.
              </h2>
              <p className="mt-4 text-2xl text-slate-300">
                Enterprise requires something harder.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                The gap between a demo agent and a production agent is the same as the gap
                between a script and a system. Production means state management, error recovery,
                observability, security, cost controls, and graceful degradation — not just
                a prompt and an API key.
              </p>
            </div>
          </div>
        </section>

        {/* What We Build — Agent Archetypes */}
        <section className="border-b border-white/10 bg-gradient-to-r from-cyan-900/30 via-slate-900/60 to-fuchsia-900/30 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                What We Build
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Four Agent Archetypes
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2">
              {agentArchetypes.map((arch) => (
                <div key={arch.title} className="glow-ring rounded-3xl border border-white/10 bg-slate-900/50 p-8">
                  <h3 className="text-xl font-semibold text-white">{arch.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{arch.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="border-b border-white/10 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200/80">
                Our Stack
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                The Tools Behind Our Agents
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((tool) => (
                <div key={tool.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">{tool.name}</p>
                  <p className="mt-2 text-xs text-slate-400">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Process */}
        <section className="border-b border-white/10 bg-slate-900/40 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200/80">
                Our Process
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                From Discovery to Production
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {deliveryProcess.map((step) => (
                <div key={step.phase} className="rounded-2xl border border-white/5 bg-black/30 p-6">
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
          </div>
        </section>

        {/* RunBook Co-Pilot Proof Case */}
        <section className="border-b border-white/10 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200/80">
                Proof of Execution
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                RunBook Co-Pilot
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                Our flagship AI agent product — a production system for DevOps and SRE teams
                that subscribes to alert streams, reasons through incidents, executes remediation,
                and auto-generates postmortems. The proof that we build what we sell.
              </p>
              <p className="mt-4 text-sm font-medium text-cyan-200/80">
                Built with: LangGraph · Anthropic Claude · MCP · GCP Cloud Run · pgvector · LangSmith · GitLab CI
              </p>
              <div className="mt-8">
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:border-white"
                >
                  See Full Portfolio ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to build production AI agents?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                We offer a free 45-minute technical assessment for qualified companies.
                No sales pitch — just an honest evaluation of your AI agent opportunities.
              </p>
              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Book a Technical Assessment ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} 1337 IT Solutions LLC. All rights reserved.</p>
        <p className="mt-1">AI Agents · Cloud Native · DevOps · Equity Partnerships</p>
      </footer>
    </div>
  );
}
