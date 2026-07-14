import type { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="relative h-[52vh] min-h-[420px] w-full">
        <img
          src={image}
          alt=""
          className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/85" />
        <div className="container-x relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-16">
          <span className="eyebrow-light animate-fade-up">{eyebrow}</span>
          <h1 className="animate-fade-up mt-4 max-w-4xl font-display text-5xl leading-[1.02] text-white md:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className="animate-fade-up mt-5 max-w-2xl text-base text-white/80 md:text-lg"
              style={{ animationDelay: "150ms" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
