import Image from 'next/image'

export function About() {
    return (
        <section id="sobre" className="min-h-screen bg-white py-16 md:py-20 text-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <span className="text-sm font-medium uppercase text-zinc-500">
                            Sobre mim
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                            Um mergulho nas experiências e lições aprendidas da minha
                            vida/carreira
                        </h1>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-8 w-full max-w-xl mx-auto lg:mx-0">
                        <div className="w-full max-w-[800px] aspect-square overflow-hidden rounded-2xl">
                            <Image
                                src="/gab.png"
                                alt="Gabriel"
                                width={800}
                                height={800}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-4 text-zinc-600 w-full max-w-[800px]">
                            <p>
                                Olá, sou Gabriel, um designer e desenvolvedor apaixonado em
                                tecnologia que mora no Brazil. Com um olhar diferenciado e que
                                foge dos padrões tradicionais de projetos, busco dar não só vida a
                                ideias, mas <span className="font-bold">construir projetos que são escaláveis e fora do
                                padrão, que deixa um impacto na vida das pessoas de verdade.</span>
                            </p>
                            <p>
                                Each experience has not only honed my skills but also deepened my
                                understanding of the impact design can have on peoples lives. I
                                believe that good design is not just about making things look
                                pretty; its about solving problems and enhancing user
                                experiences. I am always eager to learn and grow, continuously
                                seeking out new challenges that push the boundaries of my
                                creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
