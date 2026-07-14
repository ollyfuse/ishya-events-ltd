import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-end px-5">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <a
          href="https://wa.me/250788000000"
          target="_blank"
          rel="noreferrer"
          className="animate-floaty grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`grid h-11 w-11 place-items-center rounded-full bg-charcoal text-white shadow-lg transition-all duration-300 hover:bg-burgundy ${
            show ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  );
}
