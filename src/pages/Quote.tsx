import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import mixer from "@/assets/mixer.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  eventType: z.string().min(1, "Choose an event type"),
  eventDate: z.string().min(1, "Choose a date"),
  location: z.string().trim().min(2, "Where is the event?").max(120),
  guests: z.string().min(1, "Estimate the guest count"),
  services: z.array(z.string()).min(1, "Pick at least one service"),
  budget: z.string().min(1, "Choose a budget range"),
  message: z.string().trim().min(10, "Give us a few sentences").max(1500),
});

const serviceOptions = [
  "Event Management",
  "Professional Sound",
  "LED Screens",
  "Stage Lighting",
  "Livestream Production",
  "Drone Cinematography",
  "Complete AV Production",
];

const steps = [
  { n: "01", t: "You share your brief", d: "Fill out the form with as much detail as you have." },
  { n: "02", t: "We call to align", d: "A producer reviews your event and asks the right questions." },
  { n: "03", t: "You receive a proposal", d: "A detailed technical & commercial proposal within 24 hours." },
];

export default function Quote() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      eventType: String(fd.get("eventType") ?? ""),
      eventDate: String(fd.get("eventDate") ?? ""),
      location: String(fd.get("location") ?? ""),
      guests: String(fd.get("guests") ?? ""),
      services,
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Request a Quote"
        title="Let's design your production."
        subtitle="Tell us about your event and we'll come back within 24 hours with a tailored proposal."
        image={mixer}
      />

      <section className="py-24 md:py-32">
        <div className="container-x mx-auto grid max-w-7xl gap-16 md:grid-cols-12">

          {/* ── Left: process steps ── */}
          <Reveal className="md:col-span-4">
            <span className="eyebrow">What happens next</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
              A conversation, then a proposal.
            </h2>
            <ol className="mt-10 space-y-8">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-2xl text-burgundy">{s.n}</span>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal">{s.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="divider-lux mt-12" />

            <div className="mt-10 space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-charcoal">Prefer to call?</p>
              <a
                href="tel:+250788000000"
                className="block font-medium text-burgundy hover:underline"
              >
                +250 788 000 000
              </a>
              <a
                href="https://wa.me/250788000000"
                target="_blank"
                rel="noreferrer"
                className="block font-medium text-burgundy hover:underline"
              >
                WhatsApp us
              </a>
            </div>
          </Reveal>

          {/* ── Right: form ── */}
          <Reveal className="md:col-span-8" delay={100}>
            {submitted ? (
              <div className="card-lux flex flex-col items-center p-14 text-center">
                <CheckCircle2 size={44} className="text-burgundy" />
                <h3 className="mt-6 font-display text-3xl text-charcoal">
                  Request received
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Thank you. A producer will reach out within 24 hours with the next
                  steps.
                </p>
                <Link to="/" className="btn-primary mt-8">
                  Back to home
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card-lux space-y-6 p-8 md:p-12">

                {/* Row 1 */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Field
                    label="Full name"
                    name="name"
                    error={errors.name}
                    placeholder="Your full name"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    error={errors.email}
                    placeholder="you@example.com"
                  />
                  <Field
                    label="Phone / WhatsApp"
                    name="phone"
                    error={errors.phone}
                    placeholder="+250 7XX XXX XXX"
                  />
                  <Field
                    label="Company (optional)"
                    name="company"
                    error={errors.company}
                    placeholder="Organisation name"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid gap-6 md:grid-cols-2">
                  <SelectField
                    label="Event type"
                    name="eventType"
                    error={errors.eventType}
                    options={[
                      "Wedding",
                      "Corporate Event",
                      "Concert",
                      "Conference",
                      "Government Event",
                      "Festival",
                      "Other",
                    ]}
                  />
                  <Field
                    label="Event date"
                    name="eventDate"
                    type="date"
                    error={errors.eventDate}
                  />
                  <Field
                    label="Location / Venue"
                    name="location"
                    error={errors.location}
                    placeholder="City or venue name"
                  />
                  <SelectField
                    label="Estimated guests"
                    name="guests"
                    error={errors.guests}
                    options={[
                      "< 100",
                      "100 – 300",
                      "300 – 1,000",
                      "1,000 – 5,000",
                      "5,000+",
                    ]}
                  />
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal">
                    Services needed
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {serviceOptions.map((s) => {
                      const on = services.includes(s);
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggleService(s)}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                            on
                              ? "border-burgundy bg-burgundy text-white"
                              : "border-border bg-white text-charcoal hover:border-burgundy"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="mt-2 text-sm text-destructive">{errors.services}</p>
                  )}
                </div>

                {/* Budget */}
                <SelectField
                  label="Budget range (USD)"
                  name="budget"
                  error={errors.budget}
                  options={[
                    "< $5,000",
                    "$5,000 – $15,000",
                    "$15,000 – $50,000",
                    "$50,000 – $150,000",
                    "$150,000+",
                  ]}
                />

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-charcoal"
                  >
                    Tell us about your event
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1500}
                    className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
                    placeholder="Format, vibe, must-haves, artists, references..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send request <ArrowRight size={18} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

/* ── Reusable field components ── */

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
      />
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
