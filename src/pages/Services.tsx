import { Link } from "react-router-dom";
import { ArrowRight, Music2, Monitor, Lightbulb, Radio, Plane, Sparkles, Video } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import mixer from "@/assets/mixer.jpg";
import ledwall from "@/assets/ledwall.jpg";
import lighting from "@/assets/lighting.jpg";
import drone from "@/assets/drone.jpg";
import livestream from "@/assets/livestream.jpg";
import concert from "@/assets/concert.jpg";
import conference from "@/assets/conference.jpg";

export const SERVICES = [
  {
    slug: "event-management",
    icon: Sparkles,
    title: "Event Management",
    short: "End-to-end production, from concept to encore.",
    img: conference,
    long: "We manage the full production lifecycle — venue design, run-of-show, vendor coordination, guest experience, technical rehearsals and live show-calling. One producer, one team, one accountable partner.",
  },
  {
    slug: "sound",
    icon: Music2,
    title: "Professional Sound Systems",
    short: "Line-array PA tuned for arenas, ballrooms and open air.",
    img: mixer,
    long: "Line-array PA systems, digital consoles, wireless microphone infrastructure and monitor systems calibrated by our audio engineers for perfect intelligibility from the front row to the back.",
  },
  {
    slug: "led-screens",
    icon: Monitor,
    title: "LED Screens",
    short: "High-density indoor & outdoor LED walls.",
    img: ledwall,
    long: "Absen and Unilumin LED walls in a range of pixel pitches, with processors, redundancy and content management. Curved, transparent and daylight-bright configurations available.",
  },
  {
    slug: "lighting",
    icon: Lightbulb,
    title: "Stage Lighting",
    short: "Cinematic lighting design and programming.",
    img: lighting,
    long: "Full lighting design from moody wedding wash to concert-grade moving heads. Robe, Chauvet and Martin fixtures programmed on grandMA and Chamsys consoles.",
  },
  {
    slug: "livestream",
    icon: Radio,
    title: "Livestream Production",
    short: "Multi-cam broadcast to any platform.",
    img: livestream,
    long: "Full broadcast production with multi-camera switching, graphics, replay and streaming to YouTube, Facebook, Zoom or private CDN. Redundant encoders and bonded connectivity.",
  },
  {
    slug: "drone",
    icon: Plane,
    title: "Drone Photography & Videography",
    short: "4K aerial captures by licensed pilots.",
    img: drone,
    long: "Licensed pilots operating cinema-grade drones for aerial photography, 4K video, and live broadcast angles. Full compliance with Rwandan aviation regulations.",
  },
  {
    slug: "av-production",
    icon: Video,
    title: "Complete Audiovisual Production",
    short: "Turnkey AV for the largest programs.",
    img: concert,
    long: "For tenders and headline productions we deliver a fully integrated AV package — sound, lighting, LED, video, broadcast, staging and technical direction under one roof.",
  },
];

export default function Services() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="A full production house, under one roof."
        subtitle="Seven disciplines, one accountable team. Each service can be delivered standalone or as part of a complete production package."
        image={concert}
      />

      {/* ── Service cards ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to={`/services/${s.slug}`}
                className="card-lux group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105"
                    loading="lazy"
                    width={1400}
                    height={875}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent" />
                  <div className="absolute left-6 top-6 grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-burgundy backdrop-blur">
                    <s.icon size={20} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-heading text-2xl font-bold text-charcoal">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-burgundy">
                    Learn more{" "}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="eyebrow">Ready to plan?</span>
                <h2 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                  Tell us about your event.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="btn-primary">
                  Request a Quote <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">Contact us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
