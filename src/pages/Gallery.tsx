import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight, X } from "lucide-react";
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

const photos = [
  { src: concert, label: "Kigali Live 2024" },
  { src: wedding, label: "Serena Estate Wedding" },
  { src: conference, label: "East Africa Business Summit" },
  { src: festival, label: "Kwita Izina Festival" },
  { src: government, label: "National Dialogue Council" },
  { src: ledwall, label: "MTN Brand Launch" },
  { src: lighting, label: "BK Group Anniversary" },
  { src: drone, label: "Nyanza Cultural Festival" },
  { src: livestream, label: "RwandAir Broadcast" },
  { src: mixer, label: "Kigali Jazz Junction" },
  { src: speakers, label: "AfriTech Summit" },
  { src: heroStage, label: "New Year Countdown" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Gallery"
        title="A view from the front of house."
        subtitle="Photography and video from recent productions across Rwanda."
        image={festival}
      />

      {/* ── Showreel ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">Showreel</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-charcoal md:text-6xl">
              Watch the reel.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="group relative mt-10 aspect-video overflow-hidden rounded-3xl">
              <img
                src={heroStage}
                alt="Showreel preview"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-ink/40" />
              <button
                aria-label="Play showreel"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="grid h-24 w-24 place-items-center rounded-full bg-white/95 text-burgundy shadow-2xl transition-transform group-hover:scale-110">
                  <Play size={28} className="translate-x-0.5" fill="currentColor" />
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Photo mosaic ── */}
      <section className="bg-ink py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow-light">Photography</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-6xl">
              From behind the console.
            </h2>
          </Reveal>

          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {photos.map((p, i) => (
              <Reveal key={i} delay={(i % 6) * 50}>
                <button
                  onClick={() => setLightbox(p)}
                  className="group relative w-full overflow-hidden rounded-xl focus:outline-none"
                  aria-label={`View ${p.label}`}
                >
                  <img
                    src={p.src}
                    alt={p.label}
                    className={`w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105 ${
                      i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-left text-sm font-semibold text-white">{p.label}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="eyebrow">Your event next</span>
                <h2 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                  Ready to create something worth photographing?
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn-primary">
                  Request a Quote <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn-outline">View portfolio</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="max-h-[85vh] w-auto object-contain"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
              <p className="font-heading font-bold text-white">{lightbox.label}</p>
            </div>
          </div>
        </div>
      )}
    </SiteShell>
  );
}
