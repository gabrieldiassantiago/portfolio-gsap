"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const faqs = [
  {
    question: "What design services do you offer?",
    answer:
      "I offer a range of design services, including [List specific services, e.g., logo and brand identity design, user interface (UI) and user experience (UX) design for web/mobile applications, digital illustration, packaging design, and simple portfolio/business website development].",
  },
  {
    question: "How does your design process typically work?",
    answer: "...",
  },
  {
    question: "Are you open to collaboration or part-time work?",
    answer: "...",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "...",
  },
  {
    question: "How do I start a project with you?",
    answer: "...",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="contato" className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4"
          >
            Coisas que você<br />pode se perguntar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-md"
          >
            Aqui estão algumas perguntas comuns, juntamente com suas respostas, para ajudar a esclarecer qualquer confusão.
          </motion.p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className={`rounded-2xl overflow-hidden border-none ${openIndex === idx ? "bg-black text-white" : "bg-white text-black shadow-md"}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold focus:outline-none"
                onClick={() => setOpenIndex(idx)}
              >
                {faq.question}
                <span className="ml-4 text-2xl">
                  {openIndex === idx ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </span>
              </button>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-base text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
