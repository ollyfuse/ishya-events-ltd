import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "./Services";

const capabilities: Record<string, string[]> = {
  "event-management": [
    "Producer-led show calling",
    "Run-of-show design",
    "Vendor coordination",
    "Guest experience design",
    "Technical rehearsals",
    "On-site production management",
  ],
  sound: [
    "L-Acoustics-class line arrays",
    "Digital mixing (DiGiCo, Yamaha)",
    "Wireless microphone systems",
    "In-ear monitor rigs",
    "System tuning by audio engineers",
    "Full redundancy on critical paths",
  ],
  "led-screens": [
    "Absen & Unilumin LED walls",
    "P2.6 to P10 pixel pitches",
    "Curved & modular configurations",
    "High-brightness outdoor rated",
    "Video processing & scaling",
    "Content design & playback",
  ],
  lighting: [
    "Moving heads, wash & beam fixtures",
    "grandMA & Chamsys programming",
    "Truss & rigging design",
    "Atmospheric haze & effects",
    "Lighting design consulting",
    "Themed color programming",
  ],
  livestream: [
    "Multi-camera switching",
    "Graphics & lower thirds",
    "Instant replay",
    "YouTube / Facebook / Zoom / private CDN",
    "Bonded internet & backup encoders",
    "Multi-language audio feeds",
  ],
  drone: [
    "Licensed pilots (RCAA-compliant)",
    "4K & 6K cinema drones",
    "Gimbal-stabilised capture",
    "Live broadcast integration",
    "Aerial photography",
    "Post-production color grading",
  ],
  "av-production": [
    "Turnkey AV package",
    "Single point of accountability",
    "Custom staging & set design",
    "Full broadcast integration",
    "Multi-day production support",
    "Tender-grade documentation",
  ],
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const caps = capabilities[service.slug] ?? [];

  return (
    <SiteShell>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-20">
        <div className="relative h-[62vh] min-h-[500px]">
          <img
            src={service.img}
            alt={service.title}
            className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/95" />
          <div className="container-x relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-16">
            <span className="eyebrow-light animate-fade-up">Service</span>
            <h1 className="animate-fade-up mt-4 max-w-4xl font-display text-5xl leading-[1.02] text-white md:text-7xl">
              {service.title}
            </h1>
            <p
              className="animate-fade-up mt-5 max-w-2xl text-lg text-white/85"
              style={{ animationDelay: "150ms" }}
            >
              {service.short}
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Overview</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-5xl">
              Precision engineered. Rehearsed to perfection.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            <p className="text-lg leading-relaxed text-muted-foreground">{service.long}</p>
            <div className="mt-10">
              <Link to="/quote" className="btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-secondary/60 py-28">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">What's included</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-5xl">
              Capabilities
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caps.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-burgundy/10 text-burgundy">
                    <Check size={16} />
                  </div>
                  <p className="font-medium text-charcoal">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="py-28 md:py-36">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow">Explore more</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
              Other services
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SERVICES.filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s, i) => (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="card-lux group flex items-center gap-5 p-6"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-burgundy/10 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                      <s.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-charcoal">{s.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{s.short}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink py-28 text-white md:py-36">
        <div className="container-x mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Ready to plan your next production?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Tell us about your event and we'll design a package that fits the moment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/quote" className="btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-ghost">All services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
