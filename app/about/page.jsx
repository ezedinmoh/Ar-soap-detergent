"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Recycle, 
  Heart, 
  Award, 
  Users, 
  Target, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { teamMembers } from "@/lib/data";

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest organic and plant-based ingredients, ensuring every product is gentle on your skin and safe for your family.",
  },
  {
    icon: Globe,
    title: "Environmental Responsibility",
    description: "From production to packaging, we minimize our carbon footprint and use renewable resources wherever possible.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "We never test on animals and ensure all our ingredients and suppliers meet strict ethical standards.",
  },
  {
    icon: Recycle,
    title: "Zero Waste Mission",
    description: "Our packaging is 100% recyclable or compostable, and we're working towards completely plastic-free operations by 2025.",
  },
];

const milestones = [
  { year: "2015", event: "AR Soap and Detergent founded in Portland, Oregon" },
  { year: "2017", event: "Launched first fully biodegradable detergent line" },
  { year: "2019", event: "Achieved carbon-neutral manufacturing" },
  { year: "2021", event: "Expanded to all 50 states with nationwide shipping" },
  { year: "2023", event: "Eliminated single-use plastic from all packaging" },
  { year: "2024", event: "Reached 10,000+ happy customers milestone" },
];

const certifications = [
  "USDA Organic Certified",
  "Leaping Bunny Certified",
  "B Corp Certified",
  "EPA Safer Choice Partner",
  "Carbon Neutral Certified",
  "Zero Waste Certified",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-accent/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              Our Story
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Crafting a Cleaner, <span className="text-primary">Greener</span> Future
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Since 2015, we've been on a mission to revolutionize the cleaning industry 
              with products that are as effective as they are sustainable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At AR Soap and Detergent, we believe that clean shouldn't come at the 
                cost of our planet. Our mission is to provide powerful, effective 
                cleaning solutions that harness the best of nature without the 
                harmful chemicals found in conventional products.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every bottle we produce, every bar we craft, represents our commitment 
                to a future where sustainability and effectiveness go hand in hand. 
                We're not just making cleaning products – we're creating a movement 
                towards mindful consumption.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.slice(0, 3).map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    <CheckCircle className="h-4 w-4" />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src="/videos/mission1.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src="/videos/mission2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src="/videos/mission3.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src="/videos/mission4.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing ingredients 
              to packaging our products.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-4 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                  <div className="bg-card p-4 rounded-xl border border-border inline-block">
                    <span className="block text-primary font-bold text-lg mb-1">
                      {milestone.year}
                    </span>
                    <p className="text-foreground text-sm">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 border-4 border-background" />
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              Our Team
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet the People Behind AR
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of sustainability enthusiasts, chemists, and 
              eco-warriors working to make clean living accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              Certifications
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
              Certified Excellence
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                variants={fadeInUp}
                className="bg-card p-4 rounded-xl border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground text-sm font-medium">{cert}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every purchase supports our mission to create a cleaner, greener world. 
              Experience the difference that natural, sustainable products can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground rounded-full text-lg font-medium hover:bg-card/90 transition-colors"
                >
                  Shop Our Products
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-full text-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
