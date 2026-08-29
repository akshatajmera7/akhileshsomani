import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const GOOGLE_FORM_URL = "https://forms.gle/EpbLTF72mWNv7rcD8";

const navLinks = [
  { label: "The Book", href: "/#book" },
  { label: "The Wealth Code", href: "/#upcoming-book" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "https://akhileshsomani.blogspot.com", external: true },
  { label: "Connect", href: "/#connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/95 shadow-md shadow-foreground/5 border-b border-gold/15 py-3"
          : "backdrop-blur-md bg-background/70 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg sm:text-xl font-bold tracking-wide text-foreground group flex items-center gap-1.5">
          <span className="inline-block transition-all duration-300 group-hover:text-gradient-gold">
            Akhilesh Somani
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground group py-1"
                >
                  {link.label}
                </a>
              ) : link.href.startsWith("/#") ? (
                <a
                  href={link.href}
                  className="relative text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="relative text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              )}
            </motion.li>
          ))}

          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider bg-gold text-gold-foreground px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:scale-105 inline-flex items-center gap-1.5"
            >
              <span>Connect</span>
              <ExternalLink size={13} />
            </a>
          </motion.li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-foreground hover:text-gold hover:bg-gold/10 transition-all"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background/98 backdrop-blur-2xl border-b border-gold/20 shadow-2xl px-6 py-6"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-semibold text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-xl px-4 py-3 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-semibold text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-xl px-4 py-3 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-semibold text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-xl px-4 py-3 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}

              <li className="pt-3 mt-2 border-t border-border/40 flex flex-col gap-2.5">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-sm font-bold uppercase tracking-wider bg-gold text-gold-foreground py-3.5 rounded-xl shadow-md shadow-gold/20 flex items-center justify-center gap-2"
                >
                  <span>Connect with Akhilesh</span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href="https://www.amazon.in/9-WONDERS-AKHILESH-SOMANI/dp/9359897817"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-xs font-semibold uppercase tracking-wider border border-border/80 text-foreground py-3 rounded-xl hover:border-gold hover:text-gold transition-colors"
                >
                  Buy The 9 Wonders
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
