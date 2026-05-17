"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products?category=Soaps", label: "Soaps" },
  { href: "/products?category=Detergents", label: "Detergents" },
  { href: "/products?category=Laundry%20Aids", label: "Laundry Aids" },
  { href: "/products?category=Specialty%20Items", label: "Specialty Items" },
];

const socialLinks = [
  { href: "https://www.facebook.com/ezedinmoh", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/ezedin__moh", label: "Instagram", icon: Instagram },
  { href: "https://x.com/ezedinmoh", label: "Twitter/X", icon: Twitter },
];

export default function Footer() {
  // Fix: use a stable year that matches between server and client
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-foreground text-card" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-accent" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-card tracking-tight">
                  AR Soap
                </span>
                <span className="text-xs text-card/70 -mt-1 tracking-wider uppercase">
                  & Detergent
                </span>
              </div>
            </Link>
            <p className="text-card/80 text-sm leading-relaxed mb-6">
              Pure Cleanliness, Naturally. We craft eco-friendly soaps and detergents 
              using sustainable ingredients that are gentle on your skin and the planet.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-card/10 rounded-full text-card hover:bg-accent hover:text-foreground transition-colors"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-card mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-card/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-card mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-card/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-card mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="text-card/80 text-sm not-italic leading-relaxed">
                  Kombolcha, Ethiopia
                </address>
              </li>
              <li>
                <a
                  href="tel:+251983029638"
                  className="flex items-center gap-3 text-card/80 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  +251983029638
                </a>
              </li>
              <li>
                <a
                  href="mailto:ezedinmoh1@gmail.com"
                  className="flex items-center gap-3 text-card/80 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  ezedinmoh1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm text-center sm:text-left">
              {currentYear} AR Soap and Detergent. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-card/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-card/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
