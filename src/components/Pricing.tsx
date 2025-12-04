import { Button } from "@/components/ui/button";
import { Check, Zap, Sparkles, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    credits: "300",
    description: "Perfect for small projects",
    price: "$29",
    icon: Zap,
    features: [
      "300 API credits",
      "Basic documentation access",
      "Email support",
      "Community forum access"
    ]
  },
  {
    name: "Standard",
    credits: "1000",
    description: "Most popular choice",
    price: "$79",
    icon: Sparkles,
    popular: true,
    features: [
      "1,000 API credits",
      "Full documentation access",
      "Priority email support",
      "Dashboard analytics",
      "Custom queries"
    ]
  },
  {
    name: "Professional",
    credits: "5000",
    description: "For high-volume needs",
    price: "$299",
    icon: Crown,
    features: [
      "5,000 API credits",
      "Dedicated support",
      "Advanced analytics",
      "Custom integrations",
      "SLA guarantee",
      "Team collaboration"
    ]
  }
];

const formatApiCalls = (credits: string) => {
  const numericCredits = Number(credits.replace(/,/g, ""));
  if (Number.isNaN(numericCredits)) {
    return null;
  }

  const formattedCredits = numericCredits.toLocaleString();
  const totalCalls = (numericCredits * 1000).toLocaleString();
  return `${formattedCredits} x 1,000 = ${totalCalls} API calls`;
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Simple Credit-Based Pricing
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            No monthly subscriptions. Pay only for what you use with our flexible credit system.
          </p>
        </motion.div>
        
        {/* How Credits Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-20 rounded-3xl border-2 border-primary/30 bg-primary/5 backdrop-blur-sm p-10"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">How Credits Work</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg"><strong className="text-foreground">1 credit</strong> = 1,000 standard API calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg"><strong className="text-foreground">Satellite images</strong> use credits based on image price</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg"><strong className="text-foreground">ACLED access</strong> via separate license (not credits)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-secondary/20">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Free Tier</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">Get started with <strong className="text-foreground">free credits</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">No credit card <strong className="text-foreground">required to explore</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">Full access to <strong className="text-foreground">dashboard and docs</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-semibold mb-3">Top Up Credits As You Go</h3>
          <p className="text-lg text-muted-foreground">Choose the credit package that fits your needs</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const numericCredits = Number(plan.credits.replace(/,/g, ""));
            const displayCredits = Number.isNaN(numericCredits)
              ? plan.credits
              : numericCredits.toLocaleString();
            const apiCallBreakdown = formatApiCalls(plan.credits);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className={`relative rounded-3xl backdrop-blur-sm p-10 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-primary bg-primary/5 shadow-2xl shadow-primary/30 md:scale-110"
                    : "border border-border/50 bg-card/40 hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
                  >
                    <Icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-2">{displayCredits}</h3>
                  {apiCallBreakdown && (
                    <p className="text-sm text-muted-foreground mb-2">{apiCallBreakdown}</p>
                  )}
                  <p className="text-sm text-primary font-semibold mb-2">{plan.name}</p>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <Button 
                  asChild
                  className={`w-full mb-8 text-base py-6 ${
                    plan.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50" 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <a href="https://dashboard.civapi.com/" target="_blank" rel="noreferrer">
                    Purchase Credits
                  </a>
                </Button>
                
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.popular && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10 animate-glow-pulse" />
                )}
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Button asChild variant="link" className="text-primary hover:text-primary/80 text-lg">
            <a href="https://dashboard.civapi.com/" target="_blank" rel="noreferrer">
              View credits in dashboard →
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
