import { AlertCircle, Users, DollarSign, Building, Satellite, Map } from "lucide-react";
import { motion } from "framer-motion";

const datasets = [
  {
    icon: AlertCircle,
    title: "Conflict Events",
    description: "Real-time conflict and crisis event data, including ACLED integration via separate license.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Displacement & Population",
    description: "Migration patterns, refugee flows, and population movement data from trusted sources.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Crisis Funding",
    description: "Humanitarian funding flows, aid allocation, and development finance tracking.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Building,
    title: "Infrastructure Data",
    description: "Critical infrastructure, administrative boundaries, and development indicators.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Satellite,
    title: "Satellite Imagery",
    description: "On-demand satellite image tasking with credit-based pricing for custom captures.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Map,
    title: "Geospatial Analysis",
    description: "Location-based queries, spatial filtering, and geographic data enrichment.",
    color: "from-indigo-500 to-blue-500"
  }
];

const DataSection = () => {
  return (
    <section id="data" className="py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Humanitarian Data
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Access multiple critical datasets through one unified API, with transparent sourcing and ethical data practices.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datasets.map((dataset, index) => {
            const Icon = dataset.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`group relative rounded-3xl backdrop-blur-sm p-8 transition-all duration-300 ${
                  dataset.highlight
                    ? "border-2 border-secondary/50 bg-secondary/5 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/30"
                    : "border border-border/50 bg-card/40 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${dataset.color} bg-opacity-10 mb-6`}
                >
                  <Icon className={`w-7 h-7 ${dataset.highlight ? "text-secondary" : "text-primary"}`} />
                </motion.div>
                
                <h3 className="text-2xl font-semibold mb-4">{dataset.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dataset.description}
                </p>
                
                {/* Enhanced glow for highlighted card */}
                {dataset.highlight && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataSection;
