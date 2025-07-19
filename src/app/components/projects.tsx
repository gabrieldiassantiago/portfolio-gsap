"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const filterOptions = [
    { id: 'todos', label: 'Todos', value: 'todos' },
    { id: 'design', label: 'Design/UI/UX', value: 'design' },
    { id: 'branding', label: 'Branding', value: 'branding' },
    { id: 'desenvolvimento', label: 'Desenvolvimento', value: 'desenvolvimento' }
];




const Projects = () => {
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeFilter, setActiveFilter] = useState('todos');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (activeFilter === 'todos') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.filterCategory === activeFilter));
        }
    }, [activeFilter]);

    useEffect(() => {
        projectRefs.current.forEach((ref, index) => {
            if (ref) {
                const card = ref;
                const image = ref.querySelector('.project-image');
                const overlay = ref.querySelector('.project-overlay');
                const icon = ref.querySelector('.project-icon');
                const title = ref.querySelector('.project-title');

                const handleMouseEnter = () => {
                    const tl = gsap.timeline();
                    
                    tl.to(card, {
                        y: -15,
                        duration: 0.4,
                        ease: "power2.out"
                    })
                    .to(image, {
                        scale: 1.1,
                        duration: 0.6,
                        ease: "power2.out"
                    }, 0)
                    .to(overlay, {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    }, 0.1)
                    .to(icon, {
                        scale: 1.2,
                        rotation: 45,
                        duration: 0.3,
                        ease: "back.out(1.7)"
                    }, 0.2)
                    .to(title, {
                        color: "#d1d5db",
                        duration: 0.3,
                        ease: "power2.out"
                    }, 0.1);
                };

                const handleMouseLeave = () => {
                    const tl = gsap.timeline();
                    
                    tl.to(card, {
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    })
                    .to(image, {
                        scale: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    }, 0)
                    .to(overlay, {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    }, 0)
                    .to(icon, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    }, 0)
                    .to(title, {
                        color: "#ffffff",
                        duration: 0.3,
                        ease: "power2.out"
                    }, 0);
                };

                card.addEventListener('mouseenter', handleMouseEnter);
                card.addEventListener('mouseleave', handleMouseLeave);

                return () => {
                    card.removeEventListener('mouseenter', handleMouseEnter);
                    card.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        });
    }, [filteredProjects]);

    return (
        <section id="projetos" className=" rounded-4xl bg-black text-white py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-12 lg:mb-16">
                    <div className="mb-6 sm:mb-8 lg:mb-0 flex-1 lg:pr-6 xl:pr-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold mb-4 sm:mb-6 leading-[0.9] lg:leading-[0.85]"
                        >
                            Meus melhores projetos
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-300 text-sm sm:text-base lg:text-lg pt-8 max-w-md lg:max-w-xl leading-relaxed"
                        >
                            Seja criando uma identidade de marca, projetando um 
                            site ou desenvolvendo materiais de marketing, eu me 
                            esforço para entender as necessidades e entregar 
                            resultados que gerem impacto.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:flex-shrink-0 lg:self-end"
                    >
                        <button className="group flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
                            <span className="font-medium">Ver todos os projetos</span>
                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                ↗
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center lg:justify-start"
                >
                    {filterOptions.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-4 py-2 sm:px-6 sm:py-3  rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                                activeFilter === filter.value
                                    ? 'bg-white text-black'
                                    : 'border border-white/20 text-white hover:bg-white/10'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                ref={el => { projectRefs.current[index] = el; }}
                                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -60, scale: 0.9 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.1 * index,
                                    ease: "easeOut"
                                }}
                                layout
                                className="cursor-pointer"
                            >
                                <Link href={`/projects/${project.slug}`} className="block">
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 aspect-[4/3] mb-3 sm:mb-4">
                                        {/* Placeholder para a imagem */}
                                        <div className="project-image w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                            <Image
                                                src={project.image}
                                                alt={project.title}  
                                                fill
                                                className="object-cover rounded-xl sm:rounded-2xl transition-transform duration-300 ease-in-out"
                                            />
                                        </div>

                                        {/* Overlay com hover effect */}
                                        <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center">
                                            <div className="project-icon w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                                                <span className="text-black text-lg sm:text-xl">↗</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="space-y-1 sm:space-y-2">
                                        <h3 className="project-title text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
                                            {project.category}
                                        </p>
                                    </div>

                                    {/* project tags */}
                                    <div className="flex flex-wrap gap-2">
                                      {project.tags && project.tags.map((tag, tagIndex) => {
                                        return (
                                            <span key={tagIndex} className="text-xs sm:text-sm bg-white text-gray-900 font-semibold mt-4 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        );
                                      })}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-400 text-lg">
                            Nenhum projeto encontrado nesta categoria.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
