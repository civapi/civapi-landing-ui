import { Layers, Heart, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "All your humanitarian data in one place",
    description: "No more juggling multiple APIs. Access conflict, displacement, funding, infrastructure, and satellite data through one unified interface.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Designed for NGOs & development teams",
    description: "Built with the humanitarian sector in mind. Ethical data practices, transparent sourcing, and pricing that scales with your mission.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Simple API, powerful dashboard",
    description: "Developer-friendly REST API with comprehensive docs. Or use our dashboard to query, visualize, and export data without writing code.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Shield,
    title: "Ethical data & ACLED integration",
    description: "Responsible data handling with clear sourcing. Includes managed ACLED access via separate licensing for conflict event analysis.",
    color: "from-teal-500 to-green-500"
  }
];

const Features = () => {
  return (
    <section id="product" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">Why CivAPI?</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built for humanitarian and development organizations who need reliable, ethical data access.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 mb-6`}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
