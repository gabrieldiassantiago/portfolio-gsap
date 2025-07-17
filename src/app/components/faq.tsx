"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const faqs = [
    {
        question: "Você oferece manutenção contínua para os sites que cria?",
        answer:
            "Sim, ofereço manutenção contínua para garantir que seu site permaneça atualizado e funcione sem problemas. Isso inclui atualizações regulares, backups e suporte técnico.",
    },
    {
        question: "Você entrega o site pronto para uso?",
        answer: "Sim, entrego o site pronto para uso, com todas as funcionalidades implementadas e testadas. Meu objetivo é garantir que você possa começar a usar seu site imediatamente após a entrega.",
    },
    {
        question: "Você está aberto a colaborações ou trabalho em meio período?",
        answer: "Sim, estou aberto a colaborações e trabalho em meio período. Se você tiver um projeto específico em mente, sinta-se à vontade para entrar em contato e discutirmos como podemos trabalhar juntos.",
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
                            layout
                            className={`rounded-2xl overflow-hidden border-none transition-colors duration-300 ${
                                openIndex === idx ? "bg-black text-white" : "bg-white text-black shadow-md"
                            }`}
                        >
                            <button
                                className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                            >
                                {faq.question}
                                <motion.span
                                    className="ml-4 text-2xl"
                                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ArrowDownIcon />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ 
                                            height: "auto", 
                                            opacity: 1,
                                            transition: {
                                                height: { duration: 0.4, ease: "easeInOut" },
                                                opacity: { duration: 0.3, delay: 0.1 }
                                            }
                                        }}
                                        exit={{ 
                                            height: 0, 
                                            opacity: 0,
                                            transition: {
                                                height: { duration: 0.3, ease: "easeInOut" },
                                                opacity: { duration: 0.2 }
                                            }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            initial={{ y: -10 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -10 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="px-6 pb-5 text-base text-gray-300"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
