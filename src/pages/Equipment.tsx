import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import speakers from "@/assets/speakers.jpg";
import mixer from "@/assets/mixer.jpg";
import ledwall from "@/assets/ledwall.jpg";
import lighting from "@/assets/lighting.jpg";
import drone from "@/assets/drone.jpg";
import livestream from "@/assets/livestream.jpg";
import heroStage from "@/assets/hero-stage.jpg";
import concert from "@/assets/concert.jpg";

const equipment = [
  {
    img: speakers,
    title: "Line Array Speakers",
    category: "Sound",
    items: [
      "L-Acoustics-class arrays",
      "Full-range top boxes",
      "Subwoofer stacks",
      "Delay towers",
    ],
  },
  {
    img: mixer,
    title: "Digital Mixers",
    category: "Sound",
    items: [
      "DiGiCo SD-Series",
      "Yamaha CL / QL",
      "Behringer X32",
      "Stage boxes & snakes",
    ],
  },
  {
    img: mixer,
    title: "Microphones",
    category: "Sound",
    items: [
      "Shure Axient wireless",
      "Sennheiser EW-DX",
      "Neumann broadcast",
      "Shure SM condensers",
    ],
  },
  {
    img: ledwall,
    title: "LED Walls",
    category: "Video",
    items: [
      "Absen P2.6 indoor",
      "Unilumin P3.9 outdoor",
      "Curved & transparent panels",
      "Novastar processors",
    ],
  },
  {
    img: lighting,
    title: "Stage Lighting",
    category: "Lighting",
    items: [
      "Robe MegaPointe",
      "Chauvet Rogue R2X",
      "LED PAR wash",
      "Blinders & strobes",
    ],
  },
  {
    img: lighting,
    title: "Moving Heads",
    category: "Lighting",
    items: [
      "Beam, wash & profile",
      "Motorised trussing",
      "Haze & atmospherics",
      "Follow spots",
    ],
  },
  {
    img: drone,
    title: "Cinema Drones",
    category: "Aerial",
    items: [
      "DJI Inspire 3",
      "Mavic 3 Cine",
      "Licensed RCAA pilots",
      "6K ProRes capture",
    ],
  },
  {
    img: livestream,
    title: "Livestream Kits",
    category: "Broadcast",
    items: [
      "ATEM Extreme switcher",
      "Multi-camera PTZ",
      "Bonded LiveU encoders",
      "Graphics & lower-thirds",
    ],
  },
  {
    img: heroStage,
    title: "Staging & Trussing",
    category: "Structures",
    items: [
      "Modular decks",
      "Global truss systems",
      "Ground supports",
      "Cable ramps & scenics",
    ],
  },
];

const categories = [...new Set(equipment.map((e) => e.category))];

export default function Equipment() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Equipment"
        title="Broadcast-grade inventory, always ready."
        subtitle="A meticulously maintained arsenal — the same equipment powering our headline productions is available to hire."
        image={concert}
      />

      {/* ── Category legend ── */}
      <section className="border-b border-border bg-white py-8">
        <div className="container-x mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment cards ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map((eq, i) => (
              <Reveal key={`${eq.title}-${i}`} delay={i * 60}>
                <div className="card-lux overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={eq.img}
                      alt={eq.title}
                      className="h-full w-full object-cover transition-transform duration-[1.1s] hover:scale-105"
                      loading="lazy"
                      width={1200}
                      height={900}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-burgundy backdrop-blur">
                      {eq.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-charcoal">
                      {eq.title}
                    </h3>
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {eq.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-burgundy" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hire note ── */}
      <section className="bg-ink py-20 text-white md:py-24">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <span className="eyebrow-light">Equipment hire</span>
                <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight md:text-4xl">
                  Need specific gear for your production?
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                  All equipment is available for dry hire or as part of a full production
                  package with our crew. Contact us for availability and rates.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn-primary">
                  Request a Quote <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
