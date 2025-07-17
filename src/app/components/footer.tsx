"use client"

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const footerSections = [
  {
    title: "Support",
    links: [
      { name: "Support Center", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Troubleshooting", href: "#" },
      { name: "Feedback", href: "#" }
    ]
  },
  {
    title: "Products",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Expertise", href: "#" },
      { name: "About Us", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Live Chat", href: "#" },
      { name: "Phone Support", href: "#" },
      { name: "Email Support", href: "#" },
      { name: "Service Status", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Community Forums", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Data Insight", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "Careers", href: "#" },
      { name: "Newsroom", href: "#" },
      { name: "Events", href: "#" },
      { name: "Contact Us", href: "#" }
    ]
  }
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" }
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const heroSection = heroSectionRef.current;
    const links = linksRef.current;
    const bottom = bottomRef.current;

    if (!footer || !heroSection || !links || !bottom) return;

    // GSAP ScrollTrigger animation for footer entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom-=100",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    // Animate hero section
    tl.fromTo(heroSection, 
      { 
        y: 100, 
        opacity: 0,
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Animate links sections with stagger
    tl.fromTo(links.children,
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.6"
    );

    // Animate bottom section
    tl.fromTo(bottom,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.4"
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-zinc-900 text-white relative overflow-hidden"
      id="contato"
    >
      {/* Yellow decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 transform -translate-x-16 -translate-y-16 rotate-45"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 transform translate-x-24 -translate-y-24 rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400 transform translate-x-12 translate-y-12 rotate-45"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div ref={heroSectionRef} className="pt-16 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Let's Whip Up
              <br />
              <span className="text-white">Something Fun!</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-zinc-900 px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors duration-300"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white px-8 py-3 rounded-full font-medium border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Links Section */}
        <div ref={linksRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-t border-zinc-700">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stay Connected Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-zinc-700"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-semibold mb-6"
          >
            Stay Connected
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`text-zinc-400 ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div 
          ref={bottomRef} 
          className="py-8 border-t border-zinc-700 flex flex-col lg:flex-row justify-between items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 lg:mb-0"
          >
            <p className="text-zinc-400 text-sm mb-2">
              I bring innovative ideas to life through my designs
              <br />
              and collaborations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm"
          >
            Copyright © Baskara 2025
          </motion.div>
        </div>
      </div>

      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-yellow-400/5 to-transparent rounded-full"
        />
      </div>
    </footer>
  );
}
