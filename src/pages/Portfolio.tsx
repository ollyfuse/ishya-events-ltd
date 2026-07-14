import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import wedding from "@/assets/wedding.jpg";
import conference from "@/assets/conference.jpg";
import festival from "@/assets/festival.jpg";
import concert from "@/assets/concert.jpg";
import government from "@/assets/government.jpg";
import ledwall from "@/assets/ledwall.jpg";
import lighting from "@/assets/lighting.jpg";
import drone from "@/assets/drone.jpg";
import livestream from "@/assets/livestream.jpg";
import mixer from "@/assets/mixer.jpg";
import speakers from "@/assets/speakers.jpg";
import heroStage from "@/assets/hero-stage.jpg";

type Category =
  | "All"
  | "Weddings"
  | "Corporate"
  | "Concerts"
  | "Conferences"
  | "Government"
  | "Festivals";

const items: {
  img: string;
  title: string;
  category: Exclude<Category, "All">;
  tall?: boolean;
}[] = [
  { img: concert, title: "Kigali Live 2024", category: "Concerts", tall: true },
  { img: wedding, title: "Serena Estate Wedding", category: "Weddings" },
  { img: conference, title: "East Africa Business Summit", category: "Conferences" },
  { img: festival, title: "Kwita Izina Festival", category: "Festivals", tall: true },
  { img: government, title: "National Dialogue Council", category: "Government" },
  { img: ledwall, title: "MTN Brand Launch", category: "Corporate", tall: true },
  { img: lighting, title: "BK Group 25th Anniversary", category: "Corporate" },
  { img: drone, title: "Nyanza Cultural Festival", category: "Festivals" },
  { img: livestream, title: "RwandAir Broadcast", category: "Corporate" },
  { img: mixer, title: "Kigali Jazz Junction", category: "Concerts" },
  { img: heroStage, title: "New Year Countdown", category: "Concerts", tall: true },
  { img: speakers, title: "AfriTech Summit", category: "Conferences" },
];

const categories: Category[] = [
  "All",
  "Weddings",
  "Corporate",
  "Concerts",
  "Conferences",
  "Government",
  "Festivals",
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active],
  );

  return (
    <SiteShell>
      <PageHero
        eyebrow="Portfolio"
        title="Selected productions."
        subtitle="Weddings, concerts, national ceremonies and festivals — a curated view of our recent work."
        image={concert}
      />

      <section className="py-20 md:py-24">
        <div className="container-x mx-auto max-w-7xl">

          {/* ── Filter pills ── */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const on = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                    on
                      ? "border-burgundy bg-burgundy text-white shadow-[0_10px_30px_-12px_rgba(139,30,45,0.6)]"
                      : "border-border bg-white text-charcoal hover:border-burgundy hover:text-burgundy"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* ── Masonry grid ── */}
          <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {filtered.map((it, i) => (
              <Reveal key={`${it.title}-${i}`} delay={(i % 6) * 60}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={it.img}
                    alt={it.title}
                    className={`w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105 ${
                      it.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                    loading="lazy"
                    width={1400}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                      {it.category}
                    </span>
                    <h3 className="mt-2 font-display text-2xl text-white">{it.title}</h3>
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
                <span className="eyebrow">Your event next</span>
                <h2 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                  Let's add your production to this list.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn-primary">
                  Request a Quote <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">Talk to us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
