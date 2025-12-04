import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Data", href: "#data" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "https://docs.civapi.com/", external: true },
  { label: "FAQ", href: "#faq" }
];

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <motion.button 
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-transparent border-none focus:outline-none cursor-pointer"
              aria-label="Back to top"
            >
              CivAPI
            </motion.button>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <ThemeToggle />
            <Button asChild variant="ghost" className="text-sm hover:bg-primary/10">
              <a href="https://dashboard.civapi.com/" target="_blank" rel="noreferrer">
                Sign in
              </a>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <a href="https://dashboard.civapi.com/" target="_blank" rel="noreferrer">
                Get API key
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
