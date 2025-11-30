import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Dashboard", href: "#" },
    { label: "Data Sources", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "API Docs", href: "#" }
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Support", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Status", href: "#" }
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Data Ethics", href: "#" }
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
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
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
          <p className="text-center text-muted-foreground">
            © 2025 CivAPI. All rights reserved. Built with purpose for humanitarian organizations.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
