import { Instagram, Linkedin, Facebook, Youtube, Globe, Mail, ArrowUp } from "lucide-react";

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

          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/theakhilesh-somani" },
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/theakhileshsomani" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/theakhileshsomani" },
              { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@theakhileshsomani" },
              { icon: Globe, label: "Website", href: "http://akhileshsomani.com" },
              { icon: Mail, label: "Email", href: "mailto:somani.akhil09@gmail.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-md hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground/80 mb-12 max-w-2xl mx-auto border border-border/40 p-6 rounded-lg bg-card/50">
            <div className="text-center">
              <p className="uppercase tracking-widest text-gold/60 mb-1">Publisher</p>
              <p className="font-medium">Bluerose Publishers</p>
            </div>
            <div className="text-center">
              <p className="uppercase tracking-widest text-gold/60 mb-1">Date</p>
              <p className="font-medium">23 January 2024</p>
            </div>
            <div className="text-center">
              <p className="uppercase tracking-widest text-gold/60 mb-1">ISBN-10</p>
              <p className="font-medium">9359897817</p>
            </div>
            <div className="text-center">
              <p className="uppercase tracking-widest text-gold/60 mb-1">Language</p>
              <p className="font-medium">Hindi / English</p>
            </div>
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
