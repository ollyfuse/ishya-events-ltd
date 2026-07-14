import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import conference from "@/assets/conference.jpg";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+250 788 000 000",
    sub: "Mon – Sat, 08:00 – 19:00 CAT",
    href: "tel:+250788000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+250 788 000 000",
    sub: "Fastest response channel",
    href: "https://wa.me/250788000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@ishya.rw",
    sub: "We reply within 24 hours",
    href: "mailto:hello@ishya.rw",
  },
];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to a producer."
        subtitle="Reach us in Kigali by phone, WhatsApp, email — or stop by the studio."
        image={conference}
      />

      {/* ── Contact cards ── */}
      <section className="py-24 md:py-32">
        <div className="container-x mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {contactCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-lux flex h-full items-start gap-5 p-8 transition-colors hover:border-burgundy/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-burgundy/10 text-burgundy">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold text-charcoal">
                    {c.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Office + map ── */}
      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="container-x mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Our studio</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
              Kigali headquarters.
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-burgundy" />
                KG 11 Ave, Kacyiru, Kigali, Rwanda
              </p>
              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-burgundy" />
                +250 788 000 000
              </p>
              <p className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-burgundy" />
                hello@ishya.rw
              </p>
              <p className="pl-7 text-sm">Open Monday – Saturday · 08:00 – 19:00 CAT</p>
            </div>

            <div className="mt-10 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-charcoal transition-colors hover:border-burgundy hover:bg-burgundy hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/quote" className="btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <iframe
                title="ISHYA Events Ltd — Kigali"
                src="https://www.google.com/maps?q=Kigali+Convention+Centre&output=embed"
                className="h-[520px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quick message form ── */}
      <section className="py-24 md:py-32">
        <div className="container-x mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <span className="eyebrow">Send a message</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
              We'll get back to you within 24 hours.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              For detailed event enquiries, use our full{" "}
              <Link to="/quote" className="font-semibold text-burgundy hover:underline">
                quote request form
              </Link>
              . This form is for quick questions and general enquiries.
            </p>
          </Reveal>

          <Reveal className="md:col-span-8" delay={100}>
            {submitted ? (
              <div className="card-lux flex flex-col items-center p-14 text-center">
                <CheckCircle2 size={44} className="text-burgundy" />
                <h3 className="mt-6 font-display text-3xl text-charcoal">Message sent</h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Thank you for reaching out. A member of our team will be in touch
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card-lux space-y-6 p-8 md:p-10">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-charcoal">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={150}
                    className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={1500}
                    className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send message <ArrowRight size={18} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
