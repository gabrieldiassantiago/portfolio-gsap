"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        id: 1,
        icon: "/uidesign.svg",
        title: "UI Design",
        description: "Com uma sólida experiência em design de interface de usuário, crio interfaces bonitas e que atendem a necessidade do usuário.",
        color: "#FF5722"
    },
    {
        id: 2,
        icon: "/uxresearch.svg",
        title: "UX Research",
        description: "Realizo pesquisas e escuta ativa para entender os usuários, mapear dores e transformar a experiência do usuário",
        color: "#FF5722"
    },
    {
        id: 3,
        icon: "/branding.svg",
        title: "Branding Design",
        description: "Transformo ideias em identidades e marcas fortes. Crio marcas que fazem a diferença no mercado, com clareza e emoção.",
        color: "#FF5722"
    },
    {
        id: 4,
        icon: "/dev.svg",
        title: "Desenvolvimento Fullstack",
        description: "Crio sites, sistemas e aplicações web/mobile. Prezo por performance, escalabilidade e clareza, entrego o produto pronto.",
        color: "#FF5722"
    }
];

const Services = () => {
    const renderIcon = (icon: string) => {
        if (icon.includes('.')) {
            return (
                <Image
                    src={icon}
                    alt="Service icon"
                    width={16}
                    height={16}
                    className="w-8 h-8 lg:w-6 lg:h-6 text-white"
                />
            );
        }
        return <span className="text-3xl lg:text-4xl">{icon}</span>;
    };

    return (
        <section id="servicos" className=" bg-white py-36 text-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
                    {/* Left Column - Main Title */}
                    <div className="flex flex-col gap-4 max-w-xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-sm font-medium uppercase text-zinc-500"
                        >
                            Coisas que eu faço
                        </motion.span>
                        
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter"
                        >
                           Tenho experiência para resolver problemas reais 
                        </motion.h2>
                    </div>

                    {/* Right Column - Description */}
                    <div className="flex flex-col gap-4 max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-zinc-600 leading-relaxed"
                        >
                            Tenho experiência na área, mas o que realmente me move é o desafio em 
                            resolver problemas reais. Eu quero oferecer soluções escaláveis, criativas e 
                            que impactam pessoas, facilitar a vida e destravar processos complexos.
                        </motion.p>
                    </div>
                </div>

                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            className="rounded-[1.25rem] p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
                            style={{ backgroundColor: '#F6F6F6' }}
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ 
                                    rotate: 10,
                                    transition: { duration: 0.2 }
                                }}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-6"
                                style={{ backgroundColor: service.color }}
                            >
                                {renderIcon(service.icon)}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg lg:text-xl font-bold text-black mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm lg:text-base text-zinc-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </section>
    );
};

export default Services;
