"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Leaf, Droplets, Recycle, Heart, Star, Quote } from "lucide-react";
import { products, testimonials } from "@/lib/data";
import ProductCarousel from "@/components/ProductCarousel";

const heroVideos = [
  "/videos/hero1.mp4",
  "/videos/hero2.mp4",
  "/videos/hero3.mp4",
  "/videos/hero4.mp4",
  "/videos/hero5.mp4",
];

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "All our products are made with organic, plant-based ingredients.",
  },
  {
    icon: Droplets,
    title: "Biodegradable",
    description: "Safe for the environment, breaking down naturally without harm.",
  },
  {
    icon: Recycle,
    title: "Sustainable",
    description: "Eco-friendly packaging and zero-waste manufacturing processes.",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "Never tested on animals, always gentle on your skin.",
  },
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

export default function HomePage() {
  const bestsellers = products.filter((p) => p.bestseller);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-secondary/30 to-accent/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              >
                <Leaf className="h-4 w-4" />
                Eco-Friendly Cleaning
              </motion.span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                <span className="block">Pure Cleanliness,</span>
                <span className="text-primary">Naturally</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Discover our range of eco-friendly soaps and detergents, crafted with 
                natural ingredients that are gentle on your skin and kind to the planet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Shop Products
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground text-foreground rounded-full text-lg font-medium hover:bg-foreground hover:text-card transition-colors"
                  >
                    Our Story
                  </motion.button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-8 mt-12">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary">10K+</span>
                  <span className="text-sm text-muted-foreground">Happy Customers</span>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary">100%</span>
                  <span className="text-sm text-muted-foreground">Natural</span>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary">Zero</span>
                  <span className="text-sm text-muted-foreground">Plastic Waste</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Video Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl transform -rotate-3" />
                <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl aspect-square">
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={currentVideo}
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    >
                      <source src={heroVideos[currentVideo]} type="video/mp4" />
                    </motion.video>
                  </AnimatePresence>

                  {/* Slide dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {heroVideos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentVideo(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === currentVideo ? "w-5 bg-white" : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Organic</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Fresh</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bestsellers Carousel */}
      <section className="bg-background">
        <ProductCarousel products={bestsellers} title="Bestselling Products" />
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/aboutarsoap.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                About AR Soap
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Committed to Sustainability and Your Well-being
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2015, AR Soap and Detergent began with a simple mission: 
                to create cleaning products that work beautifully without harming 
                our planet. Every product we make is thoughtfully formulated with 
                natural, sustainable ingredients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From our solar-powered manufacturing facility to our plastic-free 
                packaging, we're committed to minimizing our environmental footprint 
                while maximizing clean.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-card rounded-full font-medium hover:bg-foreground/90 transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="bg-background p-6 rounded-2xl border border-border"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
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
              Ready to Make the Switch?
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join thousands of eco-conscious consumers who have made the switch 
              to natural, sustainable cleaning products.
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground rounded-full text-lg font-medium hover:bg-card/90 transition-colors"
              >
                Shop All Products
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
