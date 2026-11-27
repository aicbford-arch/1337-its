import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Agent Engineering Insights | 1337 IT Solutions",
  description:
    "Technical insights on building production AI agents, cloud-native architecture, and DevOps automation from the 1337 IT Solutions team.",
};

const posts = [
  {
    slug: "why-vibe-coded-ai-agents-fail-in-production",
    title: "Why vibe-coded AI agents fail in production — and how to fix them",
    date: "March 2026",
    summary:
      "The gap between an AI agent demo and a production agent is enormous. We break down the five failure modes we see most often — and the engineering patterns that prevent them.",
    tags: ["AI Agents", "Production Engineering", "LangGraph"],
  },
];

export default function BlogPage() {
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
              <Link href="/ai-agents" className="text-sm text-slate-400 hover:text-white transition-colors">AI Agents</Link>
              <Link href="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="text-sm text-cyan-400 font-medium">Blog</Link>
              <Link href="/#portfolio" className="text-sm text-slate-400 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/#contact" className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 py-20 sm:py-28">
          <div className="absolute inset-x-10 -top-16 h-48 rounded-full bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/40 to-emerald-300/30 blur-[110px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                Insights &amp; Engineering Notes
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Blog
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Technical deep-dives on AI agents, cloud-native architecture, and building
                production systems that actually work.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-white/10 bg-slate-900/40 p-8"
                >
                  <p className="text-xs font-medium text-slate-500">{post.date}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-300">
                    {post.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-[#EEEDFE] px-2.5 py-0.5 text-xs font-medium text-[#3C3489]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/ai-agents"
                      className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn about our AI Agent services ↗
                    </Link>
                  </div>
                </article>
              ))}
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
