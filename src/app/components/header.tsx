"use client"

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
    { id: "inicio", label: "Início", icon: Home },
    { id: "sobre", label: "Sobre", icon: User },
    { id: "servicos", label: "Serviços", icon: Briefcase },
    { id: "projetos", label: "Projetos", icon: Briefcase },
    { id: "contato", label: "Contato", icon: Mail },
];

export default function Header() {

    const [activeSection, setActiveSection] = useState("inicio");
    const navRef = useRef<HTMLDivElement | null>(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    const handleClick = (sectionId: string) => {
        setActiveSection(sectionId);

        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const updateIndicator = useCallback(() => {
        const activeBtn = navRef.current?.querySelector<HTMLButtonElement>(
            `button[data-id="${activeSection}"]`
        );
        if (activeBtn && navRef.current) {
            const btnRect = activeBtn.getBoundingClientRect();
            const navRect = navRef.current.getBoundingClientRect();
            setIndicator({ left: btnRect.left - navRect.left, width: btnRect.width });
        }
    }, [activeSection]);

    useEffect(() => {
        updateIndicator();
    }, [updateIndicator]);
    useEffect(() => {
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [updateIndicator]);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-auto">
         
            <div
                ref={navRef}
                className="relative flex gap-2  rounded-3xl h-12 md:h-14 bg-black/90 backdrop-blur-sm px-3 md:px-2 text-center justify-center items-center py-2 md:py-3 shadow-lg border border-white/10"
            >
               
                <motion.span
                    className="absolute top-1 bottom-1 z-[1] rounded-3xl bg-white/90"
                    animate={{ left: indicator.left, width: indicator.width }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                {menuItems.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        type="button"
                        data-id={id}
                        onClick={() => handleClick(id)}
                        className={`relative z-[2] flex items-center justify-center gap-2 rounded-3xl px-3 md:px-5 py-2 md:py-3 text-base font-semibold transition-colors w-12 md:w-auto ${
                            activeSection === id ? "text-black" : "text-white/70 hover:text-white"
                        }`}
                    >
                        <Icon size={18} />
                        <span className="hidden md:inline">{label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}