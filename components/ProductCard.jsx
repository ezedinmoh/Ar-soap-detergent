"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Star, Check, Sparkles, Leaf } from "lucide-react";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            {product.bestseller && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                <Sparkles className="h-3 w-3" />
                Bestseller
              </div>
            )}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {product.image && !imgError ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <Leaf className="h-16 w-16 text-primary/40" />
                </div>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews})</span>
            </div>

            <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isAdded
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                aria-label={isAdded ? "Added to cart" : `Add ${product.name} to cart`}
              >
                {isAdded ? (
                  <>
                    <Check className="h-4 w-4" />
                    Added
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
