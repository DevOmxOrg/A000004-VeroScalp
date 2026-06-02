import { createFileRoute } from "@tanstack/react-router";
import client1 from "@/assets/client-1.jpg.asset.json";
import client2 from "@/assets/client-2.jpg.asset.json";

const heroPortrait = client2.url;
const beforeSmp = client1.url;
const afterSmp = client2.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vero Scalp — Premium Scalp Micro Pigmentation Studio" },
      {
        name: "description",
        content:
          "Award-winning scalp micro pigmentation studio. Restore your hairline with medical-grade precision and undetectable artistry.",
      },
      { property: "og:title", content: "Vero Scalp — Premium SMP Studio" },
      {
        property: "og:description",
        content:
          "Non-surgical hairline restoration delivered by master technicians. Book a private consultation.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="font-sans text-brand-dark bg-brand-bg antialiased min-h-screen">
      <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-slate-100">
        <nav className="flex items-center justify-between px-6 lg:px-8 py-5 max-w-7xl mx-auto">
          <a href="#top" className="text-2xl font-serif tracking-tight">
            VERO SCALP
          </a>
          <div className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-widest">
            <a href="#process" className="hover:text-brand-muted transition-colors">The Process</a>
            <a href="#gallery" className="hover:text-brand-muted transition-colors">Gallery</a>
            <a href="#about" className="hover:text-brand-muted transition-colors">About</a>
            <a href="#faq" className="hover:text-brand-muted transition-colors">FAQ</a>
          </div>
          <a
            href="#book"
            className="border border-brand-dark px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all"
          >
            Book Consult
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative px-6 lg:px-8 pt-16 pb-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand-muted mb-6 block">
                Master Technicians · Est. 2014
              </span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8">
                Confidence, <br />
                <span className="italic text-brand-muted">Redefined.</span>
              </h1>
              <p className="text-lg text-brand-muted max-w-md mb-10 leading-relaxed">
                The world's most advanced non-surgical solution for hair loss.
                Restore your hairline with medical-grade precision and
                undetectable artistry.
              </p>
              <div className="flex items-center gap-8">
                <a
                  href="#gallery"
                  className="bg-brand-dark text-white px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-brand-muted transition-all"
                >
                  View Results
                </a>
                <div className="text-[10px] uppercase tracking-widest text-brand-muted leading-relaxed">
                  Over 500+ <br />
                  Successful Procedures
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroPortrait}
                alt="Side profile of a man with a sharply defined SMP hairline"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover rounded-sm outline outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl max-w-[260px] border border-slate-100 hidden md:block">
                <p className="text-sm italic font-serif leading-snug">
                  "I finally feel like myself again. The detail is
                  indistinguishable from real hair follicles."
                </p>
                <p className="text-[10px] uppercase tracking-widest mt-4 font-semibold text-brand-muted">
                  — Marcus T.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-white py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">
                  Undetectable Artistry
                </h2>
                <p className="text-brand-muted leading-relaxed">
                  Our specialized technique replicates individual hair follicles
                  using proprietary pigments matched precisely to your natural
                  hair shade and skin tone.
                </p>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest pb-2 border-b-2 border-brand-dark">
                The Vero Method
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img
                  src={beforeSmp}
                  alt="Scalp before SMP treatment showing thinning hair"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-brand-muted font-medium">
                  <span>Session 1</span>
                  <span>Initial State</span>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  src={afterSmp}
                  alt="Scalp after SMP treatment with dense realistic follicles"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-brand-muted font-medium">
                  <span>Session 3</span>
                  <span>Final Result</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand-muted mb-4 block">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic">
              Three steps to restoration.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "01", title: "Consultation", body: "A private design session to map your new hairline based on facial structure, age, and lifestyle." },
              { n: "02", title: "Pigmentation", body: "Multi-layered sessions using medical-grade organic pigments to build depth and realistic density." },
              { n: "03", title: "Final Refinement", body: "Subtle final touches ensure a seamless blend between micro-pigments and your natural hair." },
            ].map((step) => (
              <div key={step.n} className="border-t border-slate-200 pt-8">
                <span className="text-[10px] font-bold text-brand-accent mb-4 block tracking-widest">
                  {step.n}
                </span>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand-muted mb-6 block">
                Our Studio
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
                A decade of <br />precision craftsmanship.
              </h2>
              <p className="text-brand-muted leading-relaxed mb-6">
                Vero Scalp was founded on a single principle: scalp micro
                pigmentation is as much an art as it is a clinical procedure.
                Every hairline is hand-drafted, every follicle placed with
                intent.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Our lead technicians have trained across London, New York and
                Milan — bringing a globally informed eye to every restoration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Procedures", value: "500+" },
                { label: "Years Practicing", value: "10" },
                { label: "5-Star Reviews", value: "320" },
                { label: "Avg. Sessions", value: "3" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-slate-200 pt-6">
                  <div className="text-4xl font-serif mb-2">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand-muted mb-4 block">
              Frequently Asked
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic">Considered answers.</h2>
          </div>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {[
              { q: "Is the procedure painful?", a: "Most clients describe the sensation as mild. We use topical numbing where appropriate and pace sessions for comfort." },
              { q: "How long do results last?", a: "Results typically last 4–6 years before a subtle refresh session is recommended to maintain optimal density." },
              { q: "Will it look natural?", a: "Our layered technique replicates the variance of real follicles. The result is undetectable, even at conversational distance." },
              { q: "How many sessions are required?", a: "Most restorations require 2–3 sessions spaced 7–14 days apart, depending on scalp tone and desired density." },
            ].map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-serif">{item.q}</span>
                  <span className="text-brand-muted text-2xl font-serif transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm text-brand-muted leading-relaxed mt-4 max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="book" className="bg-brand-dark text-white py-32 text-center">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Ready to restore <br />your natural edge?
            </h2>
            <p className="text-slate-400 mb-12 text-sm leading-relaxed">
              Join hundreds who have reclaimed their confidence. Consultations
              are private, professional, and free of charge.
            </p>
            <a
              href="mailto:hello@veroscalp.com"
              className="inline-block bg-white text-brand-dark px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              Schedule Your Consultation
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 px-6 lg:px-8 bg-brand-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-serif">VERO SCALP</div>
          <div className="text-[10px] text-brand-muted uppercase tracking-widest">
            © 2024 Vero SMP Studio — Premium Aesthetic Solutions
          </div>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-brand-dark transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
