'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    useEffect(() => {
        const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
        const emojis = ['🔥', '⚡', '🚀', '💫', '✨', '🎯', '💎', '🌟', '⭐', '🎨', '💡', '🔮', '🎪', '🎭', '🎨', '🎲', '🎯', '🎊', '🎉', '🎈'];
        
        const textElements = document.querySelectorAll('.animate-text');
        textElements.forEach((element) => {
            if (!element.textContent) return;
            const originalText = element.textContent;
            const chars = originalText.split('');
            
            element.innerHTML = chars
                .map((char) => `<span class="inline-block">${char}</span>`)
                .join('');

            const spans = element.querySelectorAll('span');

            gsap.set(spans, {
                opacity: 0,
                y: 50,
                rotation: 15,
            });

            gsap.to(spans, {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                delay: 0,
            });

            // Efeito de scramble inicial - troca as letras aleatoriamente
            spans.forEach((span, index) => {
                const originalChar = chars[index];
                let scrambleCount = 0;
                const maxScrambles = 8;

                const scrambleInterval = setInterval(() => {
                    if (scrambleCount < maxScrambles) {
                        // Alterna entre caracteres normais e emojis
                        const useEmoji = Math.random() < 0.3; // 30% chance de emoji
                        const randomChar = useEmoji 
                            ? emojis[Math.floor(Math.random() * emojis.length)]
                            : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                        
                        span.textContent = randomChar;
                        
                        // Adiciona pequena animação na troca
                        gsap.fromTo(span, 
                            { scale: 1.2, rotation: Math.random() * 20 - 10 },
                            { scale: 1, rotation: 0, duration: 0.1, ease: 'power2.out' }
                        );
                        
                        scrambleCount++;
                    } else {
                        // Revela a letra original
                        span.textContent = originalChar;
                        gsap.fromTo(span,
                            { scale: 1.3, color: '#fbbf24' }, // Amarelo no momento da revelação
                            { scale: 1, color: '#000000', duration: 1.0, ease: 'back.out(1.7)' }
                        );
                        clearInterval(scrambleInterval);
                    }
                }, 80 + (index * 100)); // Delay progressivo para cada letra
            });

            // Efeito de scramble contínuo após a animação inicial - com ordenação sequencial
            setTimeout(() => {
                let currentIndex = 0;
                let direction = 1; // 1 para direita, -1 para esquerda
                const totalSpans = spans.length;

                const sequentialScramble = () => {
                    const span = spans[currentIndex];
                    const originalChar = span.textContent;
                    
                    let scrambleSteps = 0;
                    const maxSteps = 10; // Número de passos de scramble para cada letra
                    
                    const scrambleStep = () => {
                        if (scrambleSteps < maxSteps) {
                            // Alterna entre caracteres normais e emojis
                            const useEmoji = Math.random() < 0.2; // 20% chance de emoji
                            const randomChar = useEmoji 
                                ? emojis[Math.floor(Math.random() * emojis.length)]
                                : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                            
                            span.textContent = randomChar;
                            gsap.to(span, { 
                                scale: 1.2, 
                                rotation: Math.random() * 15 - 7.5,
                                duration: 0.15,
                                ease: 'power2.out'
                            });
                            scrambleSteps++;
                            setTimeout(scrambleStep, 100);
                        } else {
                            // Volta para a letra original
                            span.textContent = originalChar;
                            gsap.to(span, { 
                                scale: 1, 
                                rotation: 0,
                                color: '#fbbf24',
                                duration: 0.3, 
                                ease: 'back.out(1.7)',
                                onComplete: () => {
                                    gsap.to(span, {
                                        color: '#000000',
                                        duration: 0.5
                                    });
                                }
                            });
                        }
                    };
                    
                    scrambleStep();
                    
                    // Avança para a próxima letra
                    currentIndex += direction;
                    
                    // Inverte a direção quando chega ao final
                    if (currentIndex >= totalSpans - 1) {
                        direction = -1;
                        currentIndex = totalSpans - 1;
                    } else if (currentIndex <= 0) {
                        direction = 1 ;
                        currentIndex = 0;
                    }
                    
                    // Agenda a próxima execução
                    setTimeout(sequentialScramble, 800 + Math.random() * 400);
                };
                
                // Inicia o scramble sequencial
                setTimeout(sequentialScramble, 1000);
                
                // Efeito de hover individual mantido
                spans.forEach((span, index) => {
                    const originalChar = chars[index];
                    
                    span.addEventListener('mouseenter', () => {
                        let hoverScrambles = 0;
                        const maxHoverScrambles = 5;

                        const hoverInterval = setInterval(() => {
                            if (hoverScrambles < maxHoverScrambles) {
                                // Mais chance de emoji no hover
                                const useEmoji = Math.random() < 0.1; // 20% chance de emoji
                                const randomChar = useEmoji 
                                    ? emojis[Math.floor(Math.random() * emojis.length)]
                                    : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                                
                                span.textContent = randomChar;
                                gsap.to(span, { 
                                    scale: 1.3, 
                                    rotation: Math.random() * 30 - 15,
                                    duration: 0.1 
                                });
                                hoverScrambles++;
                            } else {
                                span.textContent = originalChar;
                                gsap.to(span, { 
                                    scale: 1, 
                                    rotation: 0,
                                    duration: 0.2, 
                                    ease: 'back.out(1.7)' 
                                });
                                clearInterval(hoverInterval);
                            }
                        }, 80);
                    });
                });
            }, 3000);
        });

        // Animação dos textos descritivos
        gsap.from('.description-text', {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 2.5,
        });

        // Animação do indicador de scroll (mobile)
        gsap.from('.scroll-indicator', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out',
            delay: 3,
        });
    }, []);

    return (
        <div id="inicio" className="relative h-screen w-full overflow-hidden bg-white">
            {/* SVG Background */}
            <div className="absolute inset-0 z-0">
                <svg 
                    className="absolute inset-0 w-full h-full object-cover" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1440 856" 
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <g filter="url(#filter0_fn_72_303)">
                        <circle cx="719.5" cy="-51.5" r="436.5" fill="#FFE44B"/>
                    </g>
                    <defs>
                        <filter id="filter0_fn_72_303" x="-417" y="-1188" width="2273" height="2273" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="350" result="effect1_foregroundBlur_72_303"/>
                            <feTurbulence type="fractalNoise" baseFrequency="50 50" stitchTiles="stitch" numOctaves="3" result="noise" seed="1682"/>
                            <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
                            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                                <feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                            </feComponentTransfer>
                            <feComposite operator="in" in2="effect1_foregroundBlur_72_303" in="coloredNoise1" result="noise1Clipped"/>
                            <feFlood floodColor="rgba(15, 15, 15, 0.15)" result="color1Flood"/>
                            <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1"/>
                            <feMerge result="effect2_noise_72_303">
                                <feMergeNode in="effect1_foregroundBlur_72_303"/>
                                <feMergeNode in="color1"/>
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

           <div className="absolute inset-0 z-10">
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        
                        backgroundSize: '40px 40px'
                    }}
                />
                {/* Smaller grid overlay */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '10px 10px'
                    }}
                />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-20 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400/10 rounded-full blur-lg animate-bounce delay-500"></div>
            </div>

            <div className="hidden md:block">
                <div className="mt-48 inset-0 flex items-center justify-start pl-8 lg:pl-16 xl:pl-20 z-30">
                    <h1 className="animate-text text-[16vw] p-8 font-semibold text-black/80 leading-none tracking-tight select-none whitespace-nowrap pointer-events-none cursor-default">
                        GABRIEL
                    </h1>
                </div>

                <div className="bottom-1/4 left-0 right-0 z-30 flex justify-between items-end w-full px-8 lg:px-16 xl:px-20">
                    <div className="description-text max-w-5xl lg:max-w-3xl ml-8 lg:ml-16">
                        <p className="text-base lg:text-xl text-black leading-relaxed">
                            Olá, sou Gabriel, designer no Brasil. Dou vida a ideias inovadoras por meio dos meus designs e programação e colaborações.
                        </p>
                    </div>

                    <div className="description-text max-w-xs lg:max-w-md mr-8 lg:mr-16 text-right">
                        <p className="text-base lg:text-xl text-black leading-relaxed">
                            Dou vida a ideias inovadoras por meio de meus designs e colaborações.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden">
                <div className="absolute inset-0 flex flex-col justify-center items-center z-40 px-4">
                    <h1 className="animate-text text-[60px] xs:text-[80px] sm:text-[100px] font-black text-black/80 leading-none tracking-tight select-none text-center mb-8">
                        GABRIEL
                    </h1>

                    <div className="description-text text-center max-w-sm">
                        <p className="text-lg xs:text-xl font-medium text-black/90 mb-6">
                            Designer & Developer
                        </p>
                        <p className="text-sm xs:text-base text-black leading-relaxed">
                            Olá, sou Gabriel, designer no Brazil. Dou vida a ideias inovadoras por meio dos meus designs, programação e colaborações.
                        </p>
                    </div>
                </div>

                <div className="scroll-indicator absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40">
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-10 border-2 border-black/60 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-black/60 rounded-full mt-2 animate-bounce"></div>
                        </div>
                        <p className="text-xs text-black/60 mt-2">Role para baixo</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 z-40 w-full">
                <span className="text-xs sm:text-sm text-black">© Gabriel Dias 2025</span>
                <span className="text-xs sm:text-sm text-black hidden md:block">
                    (Role para baixo)
                </span>
            </div>
        </div>
    );
};

export default Hero;