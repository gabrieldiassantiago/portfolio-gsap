"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Eye, Calendar, User, Clock, Award } from 'lucide-react';
import { Project, getProjectBySlug, getRelatedProjects } from '@/data/projects';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
    const project = getProjectBySlug(params.slug);
    const relatedProjects = project ? getRelatedProjects(project) : [];
    const heroRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current && imageRef.current) {
            const tl = gsap.timeline();
            
            tl.fromTo(heroRef.current, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
            .fromTo(imageRef.current, 
                { scale: 1.1, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }, 
                "-=0.5"
            );
        }
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                        Voltar ao início
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link 
                        href="/#projetos"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Voltar aos projetos
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-12 lg:pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Project Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div>
                                <motion.span 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-sm font-medium uppercase text-gray-400 tracking-wider"
                                >
                                    {project.category}
                                </motion.span>
                                
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-2"
                                >
                                    {project.title}
                                </motion.h1>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                            >
                                {project.longDescription}
                            </motion.p>

                            {/* Project Meta */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="grid grid-cols-2 gap-4 lg:gap-6"
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Calendar size={16} />
                                        <span className="text-sm">Ano</span>
                                    </div>
                                    <p className="font-medium">{project.year}</p>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <User size={16} />
                                        <span className="text-sm">Função</span>
                                    </div>
                                    <p className="font-medium">{project.role}</p>
                                </div>

                                {project.duration && (
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Clock size={16} />
                                            <span className="text-sm">Duração</span>
                                        </div>
                                        <p className="font-medium">{project.duration}</p>
                                    </div>
                                )}

                                {project.client && (
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Award size={16} />
                                            <span className="text-sm">Cliente</span>
                                        </div>
                                        <p className="font-medium">{project.client}</p>
                                    </div>
                                )}
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors group"
                                    >
                                        <Eye size={18} />
                                        Ver projeto
                                        <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors group"
                                    >
                                        <Github size={18} />
                                        Ver código
                                        <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                )}
                            </motion.div>

                            {/* Tags */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="flex flex-wrap gap-2"
                            >
                                {project.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Project Image */}
                        <motion.div 
                            ref={imageRef}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-12 lg:py-20 bg-gray-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                        {/* Challenge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold">Desafio</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.challenge}
                            </p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold">Solução</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.solution}
                            </p>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold">Tecnologias</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-white text-black rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Results */}
            {project.results && project.results.length > 0 && (
                <section className="py-12 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Resultados</h3>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                Os impactos positivos e métricas alcançadas com este projeto
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {project.results.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                                >
                                    <p className="text-lg font-medium">{result}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonial */}
            {project.testimonial && (
                <section className="py-12 lg:py-20 rounded-4xl w-full md:w-max mx-auto
                
                bg-black border-gray-900 border-[0.2px]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                                "{project.testimonial.text}"
                            </blockquote>
                            <div className="flex items-center justify-center gap-4">
                                <div className="text-left">
                                    <p className="font-bold">{project.testimonial.author}</p>
                                    <p className="text-gray-400">
                                        {project.testimonial.position} • {project.testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="py-12 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Projetos relacionados</h3>
                            <p className="text-gray-300 text-lg">
                                Outros trabalhos que podem te interessar
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {relatedProjects.map((relatedProject, index) => (
                                <motion.div
                                    key={relatedProject.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                >
                                    <Link 
                                        href={`/projects/${relatedProject.slug}`}
                                        className="block group"
                                    >
                                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-800 mb-4">
                                            <Image
                                                src={relatedProject.image}
                                                alt={relatedProject.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                    <ExternalLink className="text-black" size={20} />
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                                            {relatedProject.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            {relatedProject.category}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectPage;
