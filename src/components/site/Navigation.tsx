import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/equipment", label: "Equipment" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset scroll state when navigating so it re-evaluates on new page
  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 40);
  }, [pathname]);

  // On homepage: transparent until scrolled. On all other pages: always dark.
  const headerBg = !isHome || scrolled
    ? "bg-ink/95 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
    : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container-x mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-burgundy font-heading text-base font-black text-white">
            I
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-black tracking-tight text-white">
              ISHYA
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-white/50">
              Events Ltd
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.startsWith(l.to) ? "text-white" : "text-white/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/quote" className="btn-primary !py-2.5 !px-5 !text-sm">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="grid h-10 w-10 place-items-center text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-ink/98 px-5 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/quote" className="btn-primary mt-4 text-center">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
