import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Akhilesh Somani</h3>

        <div className="flex justify-center gap-6 mb-8">
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
              className="text-muted-foreground transition-opacity duration-300 hover:opacity-60"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Akhilesh Somani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
