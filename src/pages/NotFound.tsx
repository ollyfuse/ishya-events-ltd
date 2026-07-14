import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const quickLinks = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/equipment", label: "Equipment" },
  { to: "/contact", label: "Contact" },
];

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="container-x mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-burgundy font-heading text-base font-black text-white">
            I
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-black tracking-tight text-charcoal">
              ISHYA
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
              Events Ltd
            </span>
          </span>
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-charcoal"
        >
          <ArrowLeft size={16} /> Go back
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="max-w-xl text-center">
          {/* Large 404 */}
          <p className="font-display text-[10rem] font-bold leading-none text-burgundy/10 md:text-[14rem]">
            404
          </p>

          <div className="-mt-6 md:-mt-10">
            <span className="eyebrow justify-center">Page not found</span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-6xl">
              Off the run sheet.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              The page you're looking for isn't part of this production. It may have
              been moved, renamed, or never existed.
            </p>
          </div>

          {/* Primary actions */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              Return home <ArrowRight size={18} />
            </Link>
            <Link to="/quote" className="btn-outline">
              Request a Quote
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-14">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Or jump to
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {quickLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-charcoal transition-colors hover:border-burgundy hover:text-burgundy"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ISHYA Events Ltd · Kigali, Rwanda
        </p>
      </div>
    </div>
  );
}
