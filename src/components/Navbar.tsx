import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "The Book", href: "/#book" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blog", href: "/#blog" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-xl bg-background/90 shadow-lg shadow-foreground/5 border-b border-gold/10"
        : "backdrop-blur-md bg-background/60"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-foreground group">
          <span className="inline-block transition-all duration-300 group-hover:text-gradient-gold">
            Akhilesh Somani
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              {link.href.startsWith("/#") ? (
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              )}
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <a
              href="#book"
              className="text-sm font-medium bg-gold text-gold-foreground px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:scale-105"
            >
              Get the Book
            </a>
          </motion.li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground transition-all duration-300 hover:text-gold"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/98 backdrop-blur-xl border-b border-gold/10"
          >
            <ul className="flex flex-col items-center gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="w-full"
                >
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-center text-lg font-medium text-muted-foreground py-3 transition-all duration-300 hover:text-gold hover:bg-gold/5"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-center text-lg font-medium text-muted-foreground py-3 transition-all duration-300 hover:text-gold hover:bg-gold/5"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-2"
              >
                <a
                  href="#book"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-base font-medium bg-gold text-gold-foreground px-8 py-3 rounded-full"
                >
                  Get the Book
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
