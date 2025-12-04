import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Dashboard", href: "https://dashboard.civapi.com/", external: true },
    { label: "API Docs", href: "https://docs.civapi.com/", external: true }
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Support", href: "mailto:info@civapi.com" }
  ],
  Legal: [
    { label: "Privacy Policy", href: "https://static.civapi.com/privacy-policy", external: true },
    { label: "Terms of Service", href: "https://static.civapi.com/terms-of-use", external: true }
  ]
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              CivAPI
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Humanitarian & development data, unified in one API.
            </p>
          </motion.div>
          
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
            >
              <h4 className="font-semibold mb-6 text-lg">{category}</h4>
              <ul className="space-y-4">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a 
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 border-t border-border/50"
        >
          <div className="text-center text-muted-foreground space-y-1">
            <p>© 2025 CivAPI. All rights reserved. Built with purpose for humanitarian organizations.</p>
            <p>© Ceratonia Siliqua Group LLC 2025. All rights reserved. Built with {"<3"} for humanity.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
