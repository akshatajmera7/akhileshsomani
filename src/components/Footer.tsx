import { Instagram, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto">
        {/* Back to top */}
        <div className="flex justify-center -mt-24 mb-12">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-lg hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        <div className="text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Akhilesh Somani</h3>
          <p className="text-sm text-muted-foreground mb-8">Author of <em className="font-serif">The 9 Wonders</em></p>

          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@akhileshsomani.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-md hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-6" />

          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Akhilesh Somani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
