import { Link } from "react-router-dom";
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import wedding from "@/assets/wedding.jpg";
import conference from "@/assets/conference.jpg";

const values = [
  { icon: Sparkles, title: "Craft first", desc: "Every cable, cue and camera angle is intentional." },
  { icon: Heart, title: "Hospitality", desc: "We treat every guest, artist and client like family." },
  { icon: Target, title: "On-time, always", desc: "Rehearsed, redundant, ready before doors open." },
  { icon: Eye, title: "Bold design", desc: "We build shows that look and feel unmistakably premium." },
];

const team = [
  { name: "Jean-Paul K.", role: "Founder & Executive Producer" },
  { name: "Aline M.", role: "Head of Production" },
  { name: "Eric R.", role: "Lighting Designer" },
  { name: "Sandrine U.", role: "Client Director" },
];

export default function About() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About ISHYA"
        title="A decade of building Rwanda's biggest stages."
        subtitle="From a single mixer in a Kigali living room to national ceremonies, weddings, and continental broadcasts."
        image={conference}
      />

      {/* ── Story ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-6xl">
              Founded on a simple obsession: never miss a cue.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              ISHYA Events Ltd was founded in Kigali with a mission to raise the bar for
              event production in East Africa. What began as a small AV rental company
              grew into a full production house of engineers, designers, broadcasters and
              drone pilots.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Today we deliver hundreds of events a year — from intimate garden weddings
              to national ceremonies watched by millions. The obsession hasn't changed:
              never miss a cue, never break the moment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="bg-secondary/60 py-28 md:py-36">
        <div className="container-x mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-lux h-full p-10">
              <Target size={28} className="text-burgundy" />
              <h3 className="mt-6 font-display text-3xl text-charcoal">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To deliver world-class event production experiences that elevate Rwandan
                and East African moments to a global standard — with integrity, precision,
                and hospitality.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-lux h-full p-10">
              <Eye size={28} className="text-burgundy" />
              <h3 className="mt-6 font-display text-3xl text-charcoal">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To be Africa's most trusted event production company — the partner brands,
                governments and artists call when the moment cannot fail.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">Values</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-charcoal md:text-6xl">
              What guides every production.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-lux h-full p-8">
                  <v.icon size={22} className="text-burgundy" />
                  <h3 className="mt-6 font-heading text-lg font-bold text-charcoal">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-ink py-28 text-white md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow-light">The team</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              People behind the productions.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                    <img
                      src={i % 2 === 0 ? wedding : conference}
                      alt={m.name}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                      width={800}
                      height={1000}
                    />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-bold">{m.name}</h3>
                  <p className="text-sm text-white/60">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statistics ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { n: 480, s: "+", label: "Events delivered" },
              { n: 12, s: "+", label: "Years of experience" },
              { n: 60, s: "+", label: "In-house crew" },
              { n: 250, s: "+", label: "Enterprise clients" },
            ].map((k) => (
              <Reveal key={k.label}>
                <div>
                  <div className="font-display text-5xl text-burgundy md:text-6xl">
                    <StatCounter to={k.n} suffix={k.s} />
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {k.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="eyebrow">Work with us</span>
                <h2 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                  Ready to build something unforgettable?
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn-primary">Request a Quote</Link>
                <Link to="/contact" className="btn-outline">Get in touch</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
