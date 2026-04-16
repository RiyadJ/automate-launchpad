import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Sun, Moon, Globe, Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { id: "comparison", en: "Compare", ar: "مقارنة" },
  { id: "services", en: "Services", ar: "خدمات" },
  { id: "how-it-works", en: "Process", ar: "العملية" },
  { id: "testimonials", en: "Proof", ar: "شهادات" },
  { id: "faq", en: "FAQ", ar: "أسئلة" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState("EN");
  const [showNavCTA, setShowNavCTA] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDark(systemPrefersDark);
    if (!systemPrefersDark) {
      document.documentElement.classList.add("light");
    }

    const saved = localStorage.getItem("preferredLanguage") || "EN";
    setLanguage(saved);
    document.documentElement.dir = saved === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = saved === "AR" ? "ar" : "en";
  }, []);

  /* Listen on .snap-container (not window) for CTA visibility */
  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;

    const handleScroll = () => {
      const heroCTA = document.getElementById("hero-cta");
      if (heroCTA) {
        const rect = heroCTA.getBoundingClientRect();
        setShowNavCTA(rect.bottom < 0);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      document.documentElement.classList.toggle("light");
      return !prev;
    });
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "EN" ? "AR" : "EN";
      document.documentElement.dir = next === "AR" ? "rtl" : "ltr";
      document.documentElement.lang = next === "AR" ? "ar" : "en";
      localStorage.setItem("preferredLanguage", next);
      window.dispatchEvent(
        new CustomEvent("languageChange", { detail: next }),
      );
      return next;
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  }, []);

  const isAr = language === "AR";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 glass-panel border-b border-ink-line/20"
      dir="ltr"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <LayoutGroup>
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
              onClick={() =>
                document
                  .querySelector(".snap-container")
                  ?.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <img
                src={
                  isDark
                    ? "/lovable-uploads/a270aaad-d239-493f-9118-0d53a9fd87fd.png"
                    : "/lovable-uploads/f294ea93-bf1a-479a-98e1-b191f9897ffa.png"
                }
                alt="Aotumate"
                className="h-5 w-auto"
              />
            </motion.div>

            {/* Desktop nav */}
            <motion.nav
              className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-[0.68rem] uppercase tracking-mono-wide
                             text-steel/60 hover:text-foreground transition-colors whitespace-nowrap"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {isAr ? item.ar : item.en}
                </motion.button>
              ))}
            </motion.nav>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Nav CTA — appears after hero CTA scrolls out */}
              <AnimatePresence>
                {showNavCTA && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={() =>
                      window.open(
                        "https://cal.com/riyad-jaamour/30-mins-discovery-call",
                        "_blank",
                      )
                    }
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-sm
                               border border-gold/40 bg-gold/5
                               font-mono text-[0.65rem] uppercase tracking-mono-wider text-gold
                               hover:bg-gold hover:text-ink-deep transition-colors"
                  >
                    {isAr ? "احجز مكالمة" : "Book a Call"}
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-steel/50 hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ y: -14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 14, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isDark ? (
                      <Sun className="h-3.5 w-3.5" />
                    ) : (
                      <Moon className="h-3.5 w-3.5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 flex items-center gap-1 text-steel/50 hover:text-foreground transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="h-3.5 w-3.5" />
                <span className="font-mono text-[0.6rem] uppercase tracking-mono-wider">
                  {language}
                </span>
              </button>

              {/* Mobile menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-steel/50 hover:text-foreground transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </LayoutGroup>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-ink-line/30 py-4"
            >
              <nav
                className={`flex flex-col space-y-3 ${isAr ? "items-end" : "items-start"}`}
              >
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="font-mono text-[0.72rem] uppercase tracking-mono-wide
                               text-steel/60 hover:text-foreground transition-colors"
                  >
                    {isAr ? item.ar : item.en}
                  </button>
                ))}
                <button
                  onClick={() =>
                    window.open(
                      "https://cal.com/riyad-jaamour/30-mins-discovery-call",
                      "_blank",
                    )
                  }
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-sm
                             border border-gold/40 bg-gold/5
                             font-mono text-[0.68rem] uppercase tracking-mono-wider text-gold
                             hover:bg-gold hover:text-ink-deep transition-colors"
                >
                  {isAr ? "احجز مكالمة" : "Book a Call"}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
