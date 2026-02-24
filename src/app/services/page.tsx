import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Fractional CTO Services - Equity-for-Code Partnership | 1337ITS",
  description:
    "Get senior CTO leadership without $200k+ salary. We partner with startups through equity: lower cash, long-term alignment. Proven track record with BKwire, Caprix.",
};

/* ── Service Tiers ── */
const serviceTiers = [
  {
    name: "Starter Partnership",
    price: "$2,000/month",
    equity: "20% equity",
    tagline: "Get your technical foundation right from day one",
    ideal: "Pre-seed to Seed · <$500k ARR · No technical co-founder",
    commitment: "10 hours/week · 20 hours/month development",
    features: [
      "Weekly 1-hour strategy calls + async Slack access (24-48hr response)",
      "Architecture design and technology stack selection",
      "MVP development and infrastructure setup",
      "Code reviews for external developers",
      "Fundraising support (technical due diligence, investor decks)",
    ],
    contract: "12-month minimum, renewable annually",
    cta: "Get Started",
  },
  {
    name: "Growth Partnership",
    price: "$5,000/month",
    equity: "15% equity",
    tagline: "Scale your engineering org with confidence",
    ideal: "Seed to Series A · $500k-$3M ARR · 5-20 people, 2-8 engineers",
    commitment: "20 hours/week · 40 hours/month development",
    features: [
      "Bi-weekly 2-hour strategy sessions + weekly standups + async (4-12hr response)",
      "Team building: hiring, onboarding, code reviews, culture",
      "Operational excellence: CI/CD, observability, incident response",
      "OKRs & metrics: engineering productivity, sprint planning",
      "Full feature development and DevOps automation",
    ],
    contract: "12-month minimum, renewable annually",
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Scale Partnership",
    price: "$10,000/month",
    equity: "10% equity",
    tagline: "Executive-level leadership for high-growth companies",
    ideal: "Series A to B · $3M-$20M ARR · 20-100 people, 10-40 engineers",
    commitment: "30-40 hours/week · 60 hours/month allocation",
    features: [
      "Daily async check-ins + weekly exec meetings + quarterly board meetings (2-4hr response SLA)",
      "Full CTO responsibilities: strategy, org design, budget, M&A diligence",
      "Executive peer: report to CEO, partner with C-suite",
      "Team leadership: manage eng managers, 1:1s, performance reviews",
      "Strategic architecture and technical M&A support",
    ],
    contract: "12-month minimum, renewable annually",
    cta: "Get Started",
  },
];

/* ── Comparison Data ── */
const comparisonData = [
  {
    feature: "Annual Cost",
    fractional: "$24k-$120k + equity",
    fullTime: "$200k-$350k + equity",
    agency: "$180k-$360k (no equity)",
  },
  {
    feature: "Equity Alignment",
    fractional: "✅ 10-20% (true partnership)",
    fullTime: "✅ 2-5% (market rate)",
    agency: "❌ None (vendor)",
  },
  {
    feature: "Start Time",
    fractional: "1 week",
    fullTime: "3-6 months",
    agency: "2-4 weeks",
  },
  {
    feature: "Experience",
    fractional: "15+ years, multiple exits",
    fullTime: "Variable (often first-time)",
    agency: "Variable (often junior)",
  },
  {
    feature: "Hands-On Code",
    fractional: "✅ Yes (we ship)",
    fullTime: "✅ Yes",
    agency: "⚠️ Limited",
  },
  {
    feature: "Flexibility",
    fractional: "✅ Scale up/down",
    fullTime: "❌ Fixed cost",
    agency: "⚠️ Contractual tiers",
  },
  {
    feature: "Risk",
    fractional: "Low (12mo contract)",
    fullTime: "High (salary + benefits)",
    agency: "Medium (agency lock-in)",
  },
  {
    feature: "Business Alignment",
    fractional: "✅ Equity = exit incentive",
    fullTime: "⚠️ Salary = hours incentive",
    agency: "❌ Billable hours incentive",
  },
];

/* ── FAQ Data ── */
const faqs = [
  {
    q: "What if we need to hire a full-time CTO later?",
    a: "Built into our model. Many clients transition fractional → full-time after Series A. We can help recruit your full-time CTO and stay on as advisor/board member.",
  },
  {
    q: "How do you handle multiple clients?",
    a: "We cap our portfolio at 4 clients max (1 Scale, 2 Growth, 1 Starter). This ensures we never overcommit and each client gets the hours promised.",
  },
  {
    q: "What if we can't afford the monthly retainer right now?",
    a: "We can structure deferred compensation (equity-only until funding closes) or phase in retainer over 3-6 months. Let's discuss your runway.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. Standard mutual NDA before any technical discussions or code access.",
  },
  {
    q: "What happens to equity if we pivot or shut down?",
    a: "Equity vests only during active engagement. If you shut down, unvested equity is forfeited. If you pivot, we reassess fit and adjust scope or exit gracefully.",
  },
  {
    q: "Can you provide references?",
    a: "Yes. We can connect you with current clients (with their permission) or investor references.",
  },
  {
    q: "What industries do you work in?",
    a: "Current portfolio: Fintech (BKwire), B2B SaaS (Caprix). Open to any B2B software, marketplace, or API-first companies. We avoid direct competitors within our portfolio.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes—that's our sweet spot. We translate technical complexity into business language and help you make informed decisions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800/50 bg-zinc-950/90 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-zinc-100 hover:text-emerald-400 transition-colors"
            >
              1337<span className="text-emerald-500">ITS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm text-emerald-400 font-medium"
              >
                Services
              </Link>
              <Link
                href="/#portfolio"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/#contact"
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-950 py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
                Your Startup Deserves a CTO.
                <br />
                <span className="text-emerald-400">
                  You Shouldn&apos;t Have to Pay $300k for One.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Fractional CTO services for startups. Lower upfront cost,
                long-term alignment through equity. We succeed when you succeed.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Link
                  href="#tiers"
                  className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
                >
                  View Service Tiers
                </Link>
                <Link
                  href="/#portfolio"
                  className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 transition-colors"
                >
                  See Case Studies
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> 2 current equity
                  partnerships
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> $10.5M raised by
                  portfolio
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> 15+ years
                  experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="border-b border-zinc-800/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                The Full-Time CTO Dilemma
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                You need technical leadership to ship product, raise capital,
                and scale your team. But hiring a full-time CTO means:
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-red-500">❌</span>
                  <span>
                    <strong>$200-$350k/year salary</strong> + benefits + equity
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-red-500">❌</span>
                  <span>
                    <strong>3-6 months to hire</strong> (if you find the right
                    person)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-red-500">❌</span>
                  <span>
                    <strong>High risk</strong> if they&apos;re not the right fit
                    (termination costs, knowledge loss)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-red-500">❌</span>
                  <span>
                    <strong>Expensive at seed stage</strong> when cash runway
                    is everything
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-lg font-medium text-zinc-200">
                The result? Founders delay critical technical decisions, ship
                broken MVPs, accumulate tech debt, or make bad early hires.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="border-b border-zinc-800/50 bg-zinc-900/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Fractional CTO. Full Partnership.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                1337ITS provides senior technical leadership without the
                full-time price tag. We take equity instead of high salaries
                because <strong className="text-zinc-200">we believe in your vision</strong>.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>Start immediately</strong> (no 6-month hiring
                    process)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>60-80% lower cash cost</strong> than full-time CTO
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>Aligned incentives</strong> (we win when you exit)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>Proven experience</strong> (15+ years, multiple
                    exits)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>Flexible commitment</strong> (scale up/down as you
                    grow)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section id="tiers" className="border-b border-zinc-800/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Three Tiers. One Goal: Your Success.
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                  Pick the tier that matches your stage. All tiers include equity
                  participation and hands-on execution.
                </p>
              </div>

              <div className="mt-16 grid gap-8 lg:grid-cols-3">
                {serviceTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative flex flex-col rounded-2xl border ${
                      tier.popular
                        ? "border-emerald-500 bg-zinc-900 ring-2 ring-emerald-500/20"
                        : "border-zinc-800 bg-zinc-900/50"
                    } p-8 shadow-xl`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-emerald-600 px-3 py-1 text-center text-sm font-semibold text-white">
                        Most Popular
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-zinc-100">
                        {tier.name}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-400">{tier.tagline}</p>
                      <p className="mt-6 flex items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-tight text-zinc-100">
                          {tier.price}
                        </span>
                        <span className="text-sm font-semibold text-emerald-400">
                          + {tier.equity}
                        </span>
                      </p>
                      <p className="mt-2 text-sm text-zinc-500">{tier.ideal}</p>
                      <p className="mt-4 text-sm font-medium text-zinc-300">
                        {tier.commitment}
                      </p>
                      <ul className="mt-8 space-y-3">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-sm text-zinc-300">
                            <span className="text-emerald-500 shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-xs text-zinc-500">{tier.contract}</p>
                    </div>
                    <Link
                      href="/#contact"
                      className={`mt-8 block rounded-md px-4 py-3 text-center text-sm font-semibold transition-colors ${
                        tier.popular
                          ? "bg-emerald-600 text-white hover:bg-emerald-500"
                          : "border border-zinc-700 text-zinc-100 hover:bg-zinc-800"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-b border-zinc-800/50 bg-zinc-900/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center mb-12">
                How We Compare
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="py-4 px-4 text-left font-semibold text-zinc-100">
                        Feature
                      </th>
                      <th className="py-4 px-4 text-left font-semibold text-emerald-400">
                        1337ITS Fractional CTO
                      </th>
                      <th className="py-4 px-4 text-left font-semibold text-zinc-400">
                        Full-Time CTO
                      </th>
                      <th className="py-4 px-4 text-left font-semibold text-zinc-400">
                        CTO Agency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b border-zinc-800/50">
                        <td className="py-4 px-4 font-medium text-zinc-300">
                          {row.feature}
                        </td>
                        <td className="py-4 px-4 text-emerald-400">
                          {row.fractional}
                        </td>
                        <td className="py-4 px-4 text-zinc-400">
                          {row.fullTime}
                        </td>
                        <td className="py-4 px-4 text-zinc-400">{row.agency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Why Equity */}
        <section className="border-b border-zinc-800/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Why We Take Equity (And Why You Should Want Us To)
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Traditional consulting has a fatal flaw:{" "}
                <strong className="text-zinc-200">misaligned incentives</strong>.
              </p>
              <ul className="mt-8 space-y-3 text-zinc-400">
                <li className="flex gap-3">
                  <span>•</span>
                  <span>
                    Hourly consultants profit from more hours, not better outcomes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>
                    Agencies optimize for contract renewals, not your success
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>
                    No skin in the game = conservative advice, no long-term
                    commitment
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-lg font-medium text-zinc-200">
                We&apos;re different. We take equity because:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>We succeed when you exit</strong> (not when we bill
                    more hours)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>We&apos;re committed for the long haul</strong> (equity
                    vests over 4 years)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>We give strategic advice optimized for outcomes</strong>{" "}
                    (not billability)
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="text-emerald-500">✅</span>
                  <span>
                    <strong>We signal confidence to investors</strong> (we believe
                    in your vision enough to bet on it)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-zinc-800/50 bg-zinc-900/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center mb-12">
                Frequently Asked Questions
              </h2>
              <dl className="space-y-8">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <dt className="text-lg font-semibold text-zinc-100">
                      {faq.q}
                    </dt>
                    <dd className="mt-2 text-zinc-400">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Ready to Partner?
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Let&apos;s talk. No sales pitch—just an honest conversation about
                whether we&apos;re a fit for your stage and goals.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-zinc-200">
                  What to expect:
                </h3>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li>• 30-minute discovery call (video or phone)</li>
                  <li>• Custom proposal within 48 hours</li>
                  <li>• Start within 7 days of agreement</li>
                </ul>
              </div>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
                >
                  Schedule Discovery Call
                </Link>
                <Link
                  href="mailto:cbford@1337itsolutions.com"
                  className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 transition-colors"
                >
                  Email Blake Directly
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-zinc-100">
                1337<span className="text-emerald-500">ITS</span>
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                Technical Co-Founder Partnerships · Venture Studio · Cloud Native
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-400">Navigation</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                <li>
                  <Link href="/" className="hover:text-zinc-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-zinc-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="hover:text-zinc-300">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-zinc-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-400">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                <li>📧 cbford@1337itsolutions.com</li>
                <li>🌐 St. Louis, Missouri · Remote-First</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800/50 pt-8 text-center text-sm text-zinc-600">
            © {new Date().getFullYear()} 1337 IT Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
