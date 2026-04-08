export default function ArambhiInvestmentsWebsite() {
  const features = [
    {
      title: "Curated Private Deals",
      text: "Access carefully screened real estate and private market opportunities built for long-term value, disciplined risk, and investor clarity.",
    },
    {
      title: "Transparent Structure",
      text: "Straightforward investment summaries, sponsor details, expected timelines, and a cleaner way to understand each opportunity before you commit.",
    },
    {
      title: "Relationship-First Approach",
      text: "We focus on trust, communication, and thoughtful capital placement instead of flashy promises or overly complex language.",
    },
  ];

  const steps = [
    "Create your investor profile and tell us your interests.",
    "Review curated opportunities with clear deal highlights.",
    "Connect with our team and move forward with confidence.",
  ];

  const deals = [
    {
      name: "Hospitality Growth",
      type: "Select Hotel Redevelopment",
      desc: "Value-add hospitality projects in strong travel corridors with repositioning potential and active asset management.",
    },
    {
      name: "Urban Mixed-Use",
      type: "Retail + Residential",
      desc: "Balanced mixed-use developments designed for cash flow resilience and long-term neighborhood demand.",
    },
    {
      name: "Boutique Commercial",
      type: "Small Format Assets",
      desc: "Targeted commercial opportunities with room for operational improvement and stronger lease performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_22%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6">
          <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-red-400">Arambhi Investments</div>
              <div className="mt-1 text-sm text-white/65">Private capital. Real opportunities. Clear decisions.</div>
            </div>
            <nav className="hidden gap-8 text-sm text-white/80 md:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#opportunities" className="transition hover:text-white">Opportunities</a>
              <a href="#process" className="transition hover:text-white">How It Works</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </header>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300">
              Built for modern private investors
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A modern investment platform for people who want
              <span className="text-red-400"> clarity, access, and confidence</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Arambhi Investments connects qualified investors with thoughtfully selected private opportunities across real estate and growth-focused asset classes. Our approach is simple: fewer gimmicks, better communication, and smarter presentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-medium shadow-lg shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500"
              >
                Request Access
              </a>
              <a
                href="#opportunities"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
              >
                Explore Opportunities
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold">Investor-First</div>
                <div className="mt-2 text-sm text-white/65">Simple presentation, thoughtful due diligence, cleaner communication.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold">Selective</div>
                <div className="mt-2 text-sm text-white/65">Focused deal pipeline instead of overwhelming volume.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold">Professional</div>
                <div className="mt-2 text-sm text-white/65">A premium brand presence that feels credible and modern.</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-red-600/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-black/40">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Featured Opportunity</div>
                    <div className="mt-1 text-2xl font-semibold">Select Hospitality Fund</div>
                  </div>
                  <div className="rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm text-red-300">Open for Review</div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/45">Asset Focus</div>
                    <div className="mt-2 text-lg font-medium">Hospitality / Value Add</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/45">Investment Horizon</div>
                    <div className="mt-2 text-lg font-medium">Medium to Long Term</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/45">Approach</div>
                    <div className="mt-2 text-lg font-medium">Active Management</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/45">Investor Experience</div>
                    <div className="mt-2 text-lg font-medium">Clear & Guided</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-red-500/15 to-transparent p-4 text-sm leading-7 text-white/70">
                  This sample panel gives the homepage a premium investment feel without copying the reference site. You can later replace this with real deal metrics, legal disclaimers, and your investor onboarding flow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-red-400">About us</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A stronger digital identity for a serious investment brand.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {features.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-red-400">Opportunities</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Investment themes we can highlight on your platform</h2>
            </div>
            <p className="max-w-2xl text-white/65">
              These sections are placeholders with smart positioning. Once you have final deal details, we can turn this into a live investor-facing website with real offerings, FAQs, and compliance language.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {deals.map((deal) => (
              <div key={deal.name} className="group rounded-[1.75rem] border border-white/10 bg-neutral-900/60 p-6 transition hover:-translate-y-1 hover:border-red-500/30 hover:bg-neutral-900">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
                  {deal.type}
                </div>
                <h3 className="mt-5 text-2xl font-semibold group-hover:text-red-300">{deal.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{deal.desc}</p>
                <div className="mt-8 text-sm text-red-300">View sample overview →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-red-400">How it works</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A smoother path from interest to investment.</h2>
            <p className="mt-5 max-w-xl text-white/65">
              Your site should not just look premium. It should also help users understand what to do next. This flow makes your company feel organized and trustworthy.
            </p>
          </div>
          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-lg font-semibold">
                  {index + 1}
                </div>
                <div className="pt-2 text-base text-white/80">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-red-950/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-12">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-red-400">Why this version works</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Premium look, original structure, and easier to adapt for your company.</h2>
              <p className="mt-5 max-w-2xl text-white/65">
                I designed this with a strong investment-industry feel, but not as a copy. The layout is cleaner, the messaging is more flexible, and it can be expanded into a full site with About, Opportunities, Investor Login, FAQ, and Contact pages.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-950/80 p-6">
              <div className="text-sm text-white/50">Suggested next additions</div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li>• Investor sign-up / qualification form</li>
                <li>• Real project gallery or portfolio page</li>
                <li>• Legal disclaimer and risk disclosure section</li>
                <li>• Team or founder credibility section</li>
                <li>• Contact form with calendar booking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-red-400">Contact</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s build Arambhi Investments into a polished digital brand.</h2>
            <p className="mt-5 max-w-2xl text-white/65">
              Replace the text below with your real company details, lead form, and investor intake flow when you’re ready to launch.
            </p>
          </div>

          <form className="grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/30" placeholder="Full name" />
            <input className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/30" placeholder="Email address" />
            <input className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/30" placeholder="Investment interest" />
            <textarea className="min-h-[120px] rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none placeholder:text-white/30" placeholder="Tell us a little about what you're looking for" />
            <button type="button" className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-medium transition hover:bg-red-500">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
