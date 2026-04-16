import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riyadjaamour/",
    svg: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com/JaamourRiyad",
    svg: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/r1y4dja3mour/",
    svg: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@rjaamour",
    svg: (
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005.16 20.8a6.34 6.34 0 0010.86-4.43V7.83a8.2 8.2 0 004.77 1.52v-2.66a4.83 4.83 0 01-1.2 0z" />
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@r1y4dja3mour",
    svg: (
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.024.921-.767 2.205-1.202 3.61-1.224 1.04-.016 1.99.14 2.836.465-.034-.79-.173-1.46-.416-2.016-.313-.715-.81-1.2-1.478-1.44-.712-.256-1.603-.324-2.645-.202l-.26-2.066c1.364-.172 2.54-.087 3.498.252 1.043.369 1.86 1.058 2.428 2.047.498.869.784 1.93.867 3.222.55.299 1.04.653 1.467 1.06.932.888 1.552 2.022 1.843 3.375.476 2.212.026 4.574-1.675 6.318-1.888 1.937-4.327 2.74-7.669 2.762zm1.508-8.236c-.644-.019-1.404.07-1.942.478-.378.287-.606.699-.578 1.132.025.405.247.793.648 1.053.464.3 1.097.452 1.778.42 1.037-.056 1.82-.426 2.33-1.1.383-.506.648-1.165.79-1.963-.916-.038-1.974-.016-3.026-.02z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@RiyadJaamour",
    svg: (
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState("EN");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("preferredLanguage") || "EN";
    setLanguage(saved);
    setIsDark(!document.documentElement.classList.contains("light"));

    const handler = (e: CustomEvent) => setLanguage(e.detail);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === "class") {
          setIsDark(!document.documentElement.classList.contains("light"));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener("languageChange", handler as EventListener);
    return () => {
      window.removeEventListener("languageChange", handler as EventListener);
      observer.disconnect();
    };
  }, []);

  const isAr = language === "AR";

  return (
    <footer className="border-t border-ink-line/50 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main row */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 md:gap-16 py-12 md:py-16 items-start">
            {/* Logo + description */}
            <div className="space-y-4">
              <img
                src={
                  isDark
                    ? "/lovable-uploads/a270aaad-d239-493f-9118-0d53a9fd87fd.png"
                    : "/lovable-uploads/f294ea93-bf1a-479a-98e1-b191f9897ffa.png"
                }
                alt="Aotumate"
                className="h-5 w-auto"
              />
              <p className="text-muted-foreground/70 text-[0.85rem] leading-relaxed max-w-[40ch]">
                {isAr
                  ? "أنظمة أتمتة مصمّمة بعناية. عمليات هادئة، عوائد متراكمة."
                  : "Automation systems built with intent. Quiet operations, compounding returns."}
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <span className="section-meta block mb-3">
                {isAr ? "تواصل" : "Contact"}
              </span>
              <a
                href="mailto:Riyad@aotumate.com"
                className="block text-muted-foreground/70 text-[0.82rem] hover:text-foreground transition-colors"
              >
                Riyad@aotumate.com
              </a>
              <a
                href="https://cal.com/riyad-jaamour/30-mins-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground/70 text-[0.82rem] hover:text-foreground transition-colors"
              >
                {isAr ? "احجز مكالمة استكشافية" : "Book a Discovery Call"}
              </a>
              <span className="block text-muted-foreground/50 text-[0.82rem]">
                {isAr ? "جدة، السعودية" : "Jeddah, SA"}
              </span>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <span className="section-meta block mb-3">
                {isAr ? "تابعنا" : "Social"}
              </span>
              <div className="flex flex-wrap gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-1.5 text-steel/50 hover:text-gold transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {s.svg}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-ink-line/30 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <span className="font-mono text-[0.6rem] uppercase tracking-mono-wider text-steel/40">
              &copy; {currentYear} Aotumate.{" "}
              {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}
            </span>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="font-mono text-[0.6rem] uppercase tracking-mono-wider text-steel/40 hover:text-steel/70 transition-colors"
              >
                {isAr ? "الخصوصية" : "Privacy"}
              </Link>
              <Link
                to="/terms-of-service"
                className="font-mono text-[0.6rem] uppercase tracking-mono-wider text-steel/40 hover:text-steel/70 transition-colors"
              >
                {isAr ? "الشروط" : "Terms"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
