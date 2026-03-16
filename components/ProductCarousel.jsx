"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products, title = "Featured Products" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
  
  // Handle wrapping for smooth carousel
  if (visibleProducts.length < itemsPerPage && currentIndex > 0) {
    const remaining = itemsPerPage - visibleProducts.length;
    visibleProducts.push(...products.slice(0, remaining));
  }

  return (
    <section 
      className="py-12 lg:py-16"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
            {title}
          </h2>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"
              aria-label="Next products"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </motion.button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
              }}
            >
              {visibleProducts.map((product, index) => (
                <ProductCard key={`${product.id}-${index}`} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
