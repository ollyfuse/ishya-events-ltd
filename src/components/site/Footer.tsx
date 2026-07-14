import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x mx-auto max-w-7xl py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-burgundy font-heading text-lg font-black text-white">
                I
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-black tracking-tight text-white">ISHYA</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">Events Ltd</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Rwanda's premier event production company. We design, engineer and deliver
              unforgettable experiences — from intimate weddings to national stages.
            </p>
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-burgundy hover:bg-burgundy hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/portfolio", "Portfolio"],
                ["/equipment", "Equipment"],
                ["/gallery", "Gallery"],
                ["/quote", "Request a Quote"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-burgundy-glow" />
                <span>KG 11 Ave, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-burgundy-glow" />
                <a href="tel:+250788000000" className="hover:text-white">+250 788 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-burgundy-glow" />
                <a href="mailto:hello@ishya.rw" className="hover:text-white">hello@ishya.rw</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ISHYA Events Ltd. All rights reserved.</p>
          <p>Crafted in Kigali · Delivered across East Africa</p>
        </div>
      </div>
    </footer>
  );
}
