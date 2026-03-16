"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle,
  Leaf,
  MessageCircle,
  HelpCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Kombolcha, Ethiopia"],
    link: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+251983029638", "Mon-Fri 9am-5pm EAT"],
    link: "tel:+251983029638",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["ezedinmoh1@gmail.com"],
    link: "mailto:ezedinmoh1@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9am - 5pm", "Saturday: 10am - 2pm"],
    link: null,
  },
];

const faqs = [
  {
    question: "What makes your products eco-friendly?",
    answer: "All our products are made with 100% natural, plant-based ingredients. We use biodegradable formulas, sustainable packaging, and carbon-neutral manufacturing processes.",
  },
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes! Our products are formulated without harsh chemicals, fragrances, or dyes. They're dermatologist-tested and suitable for even the most sensitive skin.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship to the United States and Canada. We're working on expanding our shipping options to more countries soon.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact us for a full refund or exchange.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Form submitted:", formData);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-background via-secondary/30 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <MessageCircle className="h-4 w-4" />
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our products or sustainability practices? 
              We'd love to hear from you. Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {info.link && i === 0 ? (
                    <a href={info.link} className="hover:text-primary transition-colors">
                      {detail}
                    </a>
                  ) : (
                    detail
                  )}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                Send Us a Message
              </h2>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for reaching out. We'll get back to you within 24-48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Map & FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Find Me Online
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Telegram", href: "https://t.me/ezedinmoh", color: "bg-blue-500" },
                  { label: "Instagram", href: "https://www.instagram.com/ezedin__moh", color: "bg-pink-500" },
                  { label: "TikTok", href: "https://www.tiktok.com/@ezedinmoh", color: "bg-black" },
                  { label: "Facebook", href: "https://www.facebook.com/ezedinmoh", color: "bg-blue-600" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/ezedinmoh", color: "bg-blue-700" },
                  { label: "GitHub", href: "https://github.com/ezedinmoh", color: "bg-gray-800" },
                  { label: "Twitter/X", href: "https://x.com/ezedinmoh", color: "bg-black" },
                  { label: "YouTube", href: "https://www.youtube.com/@ezedin_moh", color: "bg-red-600" },
                  { label: "Discord", href: "https://discord.com/users/ezedinmoh", color: "bg-indigo-600" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-3 ${s.color} text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between"
                    >
                      <span className="font-medium text-foreground pr-4">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        className="text-primary flex-shrink-0"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Leaf className="h-12 w-12 text-primary-foreground/80 mx-auto mb-4" />
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-md mx-auto">
              Get exclusive offers, eco-tips, and be the first to know about new products.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-foreground text-card rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
