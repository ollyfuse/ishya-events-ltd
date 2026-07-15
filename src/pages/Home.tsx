import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music2,
  Monitor,
  Lightbulb,
  Radio,
  Plane,
  Sparkles,
  Award,
  Users,
  ShieldCheck,
  Zap,
  Quote,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import heroStage from "@/assets/hero-stage.jpg";
import wedding from "@/assets/wedding.jpg";
import conference from "@/assets/conference.jpg";
import festival from "@/assets/festival.jpg";
import concert from "@/assets/concert.jpg";
import mixer from "@/assets/mixer.jpg";
import ledwall from "@/assets/ledwall.jpg";
import lighting from "@/assets/lighting.jpg";
import drone from "@/assets/drone.jpg";
import livestream from "@/assets/livestream.jpg";

const services = [
  { icon: Sparkles, title: "Event Management", desc: "End-to-end production of premium events, from concept to encore.", href: "/services/event-management" },
  { icon: Music2, title: "Professional Sound", desc: "Line-array PA systems tuned for arenas, ballrooms and open air.", href: "/services/sound" },
  { icon: Monitor, title: "LED Screens", desc: "Indoor and outdoor LED walls with high pixel density and bright output.", href: "/services/led-screens" },
  { icon: Lightbulb, title: "Stage Lighting", desc: "Cinematic lighting design with moving heads, wash and beam fixtures.", href: "/services/lighting" },
  { icon: Radio, title: "Livestream Production", desc: "Multi-cam broadcast, streaming to YouTube, Facebook or private networks.", href: "/services/livestream" },
  { icon: Plane, title: "Drone Cinematography", desc: "Aerial photo and 4K video, licensed pilots, gimbal-stabilised.", href: "/services/drone" },
];

const projects = [
  { img: concert, title: "Kigali Live 2024", tag: "Concert" },
  { img: wedding, title: "Serena Estate Wedding", tag: "Wedding" },
  { img: conference, title: "East Africa Business Summit", tag: "Conference" },
  { img: festival, title: "Kwita Izina Festival", tag: "Festival" },
];

const testimonials = [
  {
    quote: "ISHYA turned our brand launch into a cinematic experience. The LED wall, sound and lighting were flawless — every guest asked who produced it.",
    author: "Aline U.",
    role: "Head of Marketing, MTN Rwanda",
  },
  {
    quote: "From the first call to the final beat drop, the team delivered like a global production house. World-class craft, right here in Kigali.",
    author: "David M.",
    role: "Festival Director, Kigali Live",
  },
  {
    quote: "The most professional AV partner we've worked with in East Africa. Punctual, discreet, and technically brilliant.",
    author: "Sarah K.",
    role: "Protocol Office, Government of Rwanda",
  },
];
function VideoBackground({ src }: { src: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function Home() {
  return (
    <SiteShell>
     {/* ── Hero ── */}
      <section className="relative min-h-screen w-full overflow-hidden">
                      <VideoBackground src="/ishyaevent_eq_web.mp4" />


        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/95" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_20%,rgba(139,30,45,0.35),transparent_60%)]" />


        {/* Hero content */}
        <div className="container-x relative z-10 mx-auto flex max-w-7xl flex-col pt-36 pb-56 md:pt-48 md:pb-64">
          <span className="eyebrow-light animate-fade-up">Rwanda · Est. Premium Event Production</span>
          <h1 className="animate-fade-up mt-6 max-w-5xl font-display text-5xl leading-[0.98] text-white sm:text-6xl md:text-8xl">
            Unforgettable events,
            <br />
            <span className="italic text-white/80">engineered with</span>{" "}
            <span className="text-gradient-burgundy">precision.</span>
          </h1>
          <p
            className="animate-fade-up mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            style={{ animationDelay: "150ms" }}
          >
            ISHYA Events Ltd delivers world-class sound, lighting, LED, livestream and
            drone production for weddings, concerts, conferences and festivals across
            East Africa.
                    </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <Link to="/quote" className="btn-primary">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-ghost">
              View our work
            </Link>
          </div>
        </div>


        {/* KPI bar */}
        <div
          className="animate-fade-in-slow absolute inset-x-0 bottom-0 z-10"
          style={{ animationDelay: "700ms" }}
        >
          <div className="container-x mx-auto max-w-7xl">
            <div className="glass-dark grid grid-cols-2 gap-6 rounded-t-3xl px-6 py-8 md:grid-cols-4 md:px-10">
              {[
                { n: 480, s: "+", label: "Events produced" },
                { n: 12, s: "+", label: "Years of craft" },
                { n: 250, s: "+", label: "Enterprise clients" },
                { n: 30, s: "K+", label: "Attendees hosted" },
              ].map((k) => (
                <div key={k.label}>
                  <div className="font-display text-3xl text-white md:text-5xl">
                    <StatCounter to={k.n} suffix={k.s} />
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/60">
                    {k.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="relative py-28 md:py-36">
        <div className="container-x mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-charcoal md:text-6xl">
              A production house for the moments that matter.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are engineers, designers, and storytellers based in Kigali. For over a
              decade we have built the sound systems, LED walls and lighting rigs behind
              Rwanda's most talked-about weddings, national ceremonies, corporate summits
              and live music.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Every production begins the same way — with a conversation, a run sheet,
              and a commitment: nothing on our watch is left to chance.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-burgundy"
            >
              Our story <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-secondary/60 py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal md:text-6xl">
                Full-stack audiovisual production.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/services" className="btn-outline">All services</Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Link to={s.href} className="card-lux group block h-full p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-burgundy/10 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                    <s.icon size={24} />
                  </div>
                  <h3 className="mt-8 font-heading text-2xl font-bold text-charcoal">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-burgundy">
                    Discover <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ISHYA ── */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="container-x mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Why ISHYA</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-6xl">
              Craft you can trust when the lights come up.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We combine international-grade equipment with Rwandan hospitality. Our team
              plans in obsessive detail, rehearses relentlessly, and shows up early —
              because the show is the only deadline that matters.
            </p>
            <div className="divider-lux mt-10" />
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div>
                <div className="font-display text-4xl text-burgundy">
                  <StatCounter to={100} suffix="%" />
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  On-time delivery
                </p>
              </div>
              <div>
                <div className="font-display text-4xl text-burgundy">
                  <StatCounter to={24} suffix="/7" />
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Production support
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            {[
              { icon: Award, title: "Award-winning teams", desc: "Producers, engineers and designers with international festival credits." },
              { icon: ShieldCheck, title: "Redundant systems", desc: "Backup power, mixers and cameras on every show — no single point of failure." },
              { icon: Zap, title: "Modern inventory", desc: "L-Acoustics-class line arrays, Robe fixtures, Absen LED and Blackmagic broadcast." },
              { icon: Users, title: "In-house crew", desc: "60+ certified technicians. No subcontracting the moments that matter." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="card-lux h-full p-7">
                  <f.icon size={22} className="text-burgundy" />
                  <h3 className="mt-6 font-heading text-lg font-bold text-charcoal">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured projects ── */}
      <section className="bg-ink py-28 text-white md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="eyebrow-light">Featured productions</span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
                Selected recent work.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/portfolio" className="btn-ghost">View portfolio</Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-[420px] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                    width={1400}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="eyebrow-light">{p.tag}</span>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client logos ── */}
      <section className="border-y border-border bg-white py-16">
        <div className="container-x mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by leading organisations across Africa
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-6">
            {["MTN", "BK Group", "RwandAir", "Serena", "Kigali Live", "Rwanda Gov"].map((brand) => (
              <div key={brand} className="grid place-items-center">
                <span className="font-heading text-xl font-black tracking-wider text-charcoal/40 transition-colors hover:text-charcoal">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">Client voices</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-charcoal md:text-6xl">
              What partners say after the last light goes down.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <figure className="card-lux flex h-full flex-col p-8">
                  <Quote size={28} className="text-burgundy" />
                  <blockquote className="mt-6 flex-1 text-base leading-relaxed text-charcoal">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 border-t border-border pt-5">
                    <div className="font-heading font-bold text-charcoal">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment mosaic teaser ── */}
      <section className="bg-secondary/60 py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="eyebrow">The arsenal</span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal md:text-6xl">
                Broadcast-grade equipment. Ready to roll.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/equipment" className="btn-outline">Full inventory</Link>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { img: mixer, label: "Digital Mixers" },
              { img: ledwall, label: "LED Walls" },
              { img: lighting, label: "Stage Lighting" },
              { img: drone, label: "Cinema Drones" },
              { img: livestream, label: "Broadcast Kits" },
              { img: concert, label: "Line Array PA" },
              { img: conference, label: "AV Systems" },
              { img: festival, label: "Staging" },
            ].map((it, i) => (
              <Reveal key={it.label} delay={i * 40}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={it.img}
                    alt={it.label}
                    className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                    loading="lazy"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      {it.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-burgundy py-28 text-white md:py-36">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroStage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy-dark to-ink/80" />
        <div className="container-x relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow-light">Let's build something unforgettable</span>
            <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] md:text-7xl">
              Your next event, produced to the highest standard on the continent.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/quote"
                className="btn-primary bg-white !text-burgundy shadow-none hover:!bg-white/95"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-ghost">Talk to a producer</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
