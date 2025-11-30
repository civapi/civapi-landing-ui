import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Globe from "./Globe";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
                      bg-[size:4rem_4rem] 
                      [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] 
                      opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8 mb-6 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 lg:mt-0"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 500+ NGOs worldwide
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]">
                Humanitarian{" "}
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  Data, Unified
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Access conflict events, displacement, infrastructure, crisis funding,
                and satellite imagery through one powerful API.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* "Get your API key" (primary) — largest on mobile */}
              <Button className="text-base px-6 py-4 w-48 sm:text-lg sm:px-8 sm:py-6 sm:w-auto">
                Get your API key <ArrowRight className="ml-2" />
              </Button>
              {/* "Explore docs" — bit smaller but still readable */}
              <Button
                variant="outline"
                className="text-base px-5 py-3 w-40 sm:text-lg sm:px-8 sm:py-6 sm:w-auto"
              >
                Explore docs
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SIDE — GLOBE */}
          <div className="relative h-[400px] sm:h-[700px] flex items-center justify-center">
            
            {/* Responsive GLOBE SIZE */}
            <div className="relative w-[450px] h-[800px] pt-20 lg:pt-0 pb-20 lg:pb-0 sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] lg:w-[1000px] lg:h-[1000px] pointer-events-none bg-transparent
              flex justify-center items-center sm:justify-start sm:items-start">
              <Globe />
            </div>

            {/* FLOATING CARDS - hide on small screens */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="hidden sm:block absolute top-20 -left-4 bg-card/80 backdrop-blur-xl 
                         border border-border/50 rounded-2xl p-4 shadow-2xl"
            >
              <p className="text-sm font-semibold text-primary">Real-time Data</p>
              <p className="text-xs text-muted-foreground">Updated hourly</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="hidden sm:block absolute bottom-20 -right-4 bg-card/80 backdrop-blur-xl 
                         border border-border/50 rounded-2xl p-4 shadow-2xl"
            >
              <p className="text-sm font-semibold text-secondary">99.9% Uptime</p>
              <p className="text-xs text-muted-foreground">Enterprise ready</p>
            </motion.div>

          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
