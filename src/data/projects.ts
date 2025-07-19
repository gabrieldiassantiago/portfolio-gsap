export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    image: string;
    description: string;
    longDescription: string;
    tags: string[];
    filterCategory: string;
    technologies: string[];
    year: string;
    client?: string;
    duration?: string;
    role: string;
    challenge: string;
    solution: string;
    results?: string[];
    gallery?: string[];
    liveUrl?: string;
    githubUrl?: string;
    behanceUrl?: string;
    testimonial?: {
        text: string;
        author: string;
        position: string;
        company: string;
        avatar?: string;
    };
}

export const projects: Project[] = [
    {
        id: 1,
        title: "MiniMania",
        slug: "minimania",
        category: "Open Source do antigo MiniMundos/SmallWorlds",
        image: "/images/minimania.png",
        description: "Plataforma digital bancária com foco em experiência do usuário e design moderno",
        longDescription: "MiniMania é uma reimaginação completa do clássico MiniMundos/SmallWorlds. Este projeto open source representa um mundo virtual moderno, onde os usuários podem interagir, personalizar avatares e participar de atividades sociais em um ambiente seguro e divertido.",
        tags: ["UI/UX", "Web Design", "Branding", "Product Design"],
        filterCategory: "design",
        technologies: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
        year: "2024",
        client: "Projeto Open Source",
        duration: "8 meses",
        role: "Full Stack Developer & UI/UX Designer",
        challenge: "Recriar a experiência nostálgica do MiniMundos com tecnologias modernas, mantendo a essência social e interativa que cativava milhões de usuários, enquanto garantia performance e escalabilidade.",
        solution: "Desenvolvi uma arquitetura moderna usando React e Node.js, implementei comunicação em tempo real com Socket.io, criei um sistema de avatares personalizáveis e ambientes interativos, tudo com foco na experiência do usuário.",
        results: [
            "Mais de 1000 usuários cadastrados na versão beta",
            "95% de satisfação dos usuários nos testes",
            "Performance 80% superior ao sistema original",
            "Comunidade ativa de 50+ desenvolvedores contribuindo"
        ],
        gallery: [
            "/images/minimania-1.jpg",
            "/images/minimania-2.jpg",
            "/images/minimania-3.jpg"
        ],
        liveUrl: "https://minimania.com",
        githubUrl: "https://github.com/minimania",
        testimonial: {
            text: "O Gabriel trouxe vida nova ao nosso projeto dos sonhos. Sua visão técnica e criativa foi fundamental para recriar a magia do MiniMundos.",
            author: "João Silva",
            position: "Fundador",
            company: "MiniMania Community"
        }
    },
    {
        id: 2,
        title: "Fulldev",
        slug: "fulldev",
        category: "Vencedor do Hackathon da Fulldev",
        image: "/images/fulldev.jpg",
        description: "Plataforma de construção de formulários e automação de processos",
        longDescription: "Projeto vencedor do Hackathon Fulldev 2024. Uma plataforma inovadora que utiliza IA para criar formulários inteligentes e automatizar fluxos de trabalho complexos, revolucionando a forma como empresas coletam e processam dados.",
        tags: ["Hackathon", "Web Development", "IA", "UI/UX", "Product Design"],
        filterCategory: "desenvolvimento",
        technologies: ["Next.js", "TypeScript", "OpenAI", "Prisma", "TailwindCSS", "Vercel"],
        year: "2024",
        client: "Hackathon Fulldev",
        duration: "48 horas",
        role: "Full Stack Developer & Product Designer",
        challenge: "Criar uma solução completa em 48 horas que resolvesse o problema de formulários complexos e automação de processos para empresas de todos os tamanhos.",
        solution: "Desenvolvi uma plataforma que usa IA para gerar formulários automaticamente baseados em descrições em linguagem natural, com automações inteligentes e analytics em tempo real.",
        results: [
            "1º lugar no Hackathon Fulldev 2024",
            "Interesse de 3 investidores",
            "Mais de 500 empresas na lista de espera",
            "Menção em 5 publicações especializadas"
        ],
        liveUrl: "https://fulldev-winner.vercel.app",
        githubUrl: "https://github.com/fulldev-project"
    },
    {
        id: 3,
        title: "Torra Mansa",
        slug: "torra-mansa",
        category: "Branding",
        image: "/images/torramansa.png",
        description: "Solução tecnológica para agricultura inteligente e sustentável",
        longDescription: "Projeto completo de branding para a Torra Mansa, empresa especializada em soluções sustentáveis para o agronegócio. O trabalho envolveu desde a criação da identidade visual até o desenvolvimento da estratégia de comunicação digital.",
        tags: ["Branding", "Design", "Sustentabilidade"],
        filterCategory: "branding",
        technologies: ["Adobe Illustrator", "Figma", "After Effects", "Photoshop"],
        year: "2023",
        client: "Torra Mansa Agro",
        duration: "3 meses",
        role: "Brand Designer & Visual Identity",
        challenge: "Criar uma identidade visual que transmitisse inovação tecnológica e sustentabilidade, diferenciando a empresa em um mercado tradicional e conservador.",
        solution: "Desenvolvi uma identidade visual moderna que combina elementos orgânicos com tecnologia, usando uma paleta de cores que representa sustentabilidade e inovação, com tipografia limpa e versátil.",
        results: [
            "Aumento de 150% no reconhecimento da marca",
            "Crescimento de 200% nas redes sociais",
            "Conquista de 5 novos clientes enterprise",
            "Prêmio de Melhor Identidade Visual - AgTech 2023"
        ],
        behanceUrl: "https://behance.net/torramansa-branding"
    }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentProject: Project, limit: number = 3): Project[] => {
    return projects
        .filter(project => 
            project.id !== currentProject.id && 
            (project.filterCategory === currentProject.filterCategory || 
             project.tags.some(tag => currentProject.tags.includes(tag)))
        )
        .slice(0, limit);
};
