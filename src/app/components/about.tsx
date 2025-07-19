import Image from 'next/image'

export function About() {
    return (
        <section id="sobre" className=" bg-white py-16 md:py-20 text-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <span className="text-sm font-medium uppercase text-zinc-500">
                            Sobre mim
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                            Curioso, criativo, doido por ☕ e de um pouquinho de código
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
                                Hey :), sou o Gabriel, mas você pode me chamar de Gab. Sou um designer e desenvolvedor apaixonado em
                                tecnologia que mora no Brasil. Sou não só um profissional, mas também um criador com um olhar diferenciado e que
                                foge dos padrões tradicionais de projetos, busco dar não só vida a
                                ideias, mas <span className="font-bold">construir projetos que são escaláveis e fora do
                                padrão, que deixa um impacto na vida das pessoas de verdade.</span>
                            </p>
                            <p>
                                Minha jornada começou cedo, aos 14 anos, quando meu pai deu meu primeiro notebook.
                                Comecei a explorar o mundo digital, aprendi a programar e me apaixonei por criar coisas novas e a melhorar a vida das pessoas através da tecnologia.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
