"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    company: "Screentime",
    logo: "/screentime.svg",
    name: "Screentime",
    testimonial:
      "Initially, we were hesitant about partnering with Baskara due to our concerns regarding their approach. However, their exceptional expertise and innovative strategies have completely transformed our project for the better.",
  },
  {
    id: 2,
    company: "Goodwell",
    logo: "/goodwell.svg",
    name: "Goodwell",
    testimonial:
      "Initially, we were hesitant about partnering with Baskara due to our concerns regarding their approach. However, their exceptional expertise and innovative strategies have completely transformed our project for the better.",
  },
  {
    id: 3,
    company: "BuildingBlocks",
    logo: "buildingblocks.svg",
    name: "BuildingBlocks",
    testimonial:
      "Initially, we were hesitant about partnering with Baskara due to our concerns regarding their approach. However, their exceptional expertise and innovative strategies have completely transformed our project for the better.",
  },
  {
    id: 4,
    company: "Clandestine",
    logo: "clandestine.svg",
    name: "Clandestine",
    testimonial:
      "Initially, we were hesitant about partnering with Baskara due to our concerns regarding their approach. However, their exceptional expertise and innovative strategies have completely transformed our project for the better.",
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: -containerWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: containerWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth * 0.8;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, testimonials.length - 1));
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section id="testimonials" className=" bg-white py-16 md:py-20 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 lg:mb-16">
          <div className="mb-8 lg:mb-0 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              O que meus clientes dizem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base lg:text-lg leading-relaxed"
            >
              Explore o feedback dos clientes sobre meu serviço e seu impacto em suas experiências.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-3 lg:flex-shrink-0 lg:self-end"
          >
            <button
              onClick={scrollLeft}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              →
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-80 lg:w-96 xl:w-[400px] snap-start"
              >
                <div className="flex items-center gap-3 mb-6">
                    <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        width={120}
                        height={40}
                        className="w-auto h-auto object-cover"
                    />
                </div>
                <h3 className="text-2xl lg:text-2xl font-semibold mb-6 text-black">{testimonial.name}</h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {testimonial.testimonial}
                </p>
                <div className="w-full h-px bg-gray-200 mt-8"></div>
              </motion.div>
            ))}
          </div>

          {/* Progress line */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-black w-12" : "bg-gray-300 w-8"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Testimonials;
