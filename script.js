const { useEffect, useState } = React;

const NAV_LINKS = [
    { href: "#sobre", label: "Sobre" },
    { href: "#jornada", label: "Jornada" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
];

const STORY_CARDS = [
    {
        title: "Sobre Mim",
        text: `Sou desenvolvedor Full Stack com foco em Backend, Técnico em Informática e estudante de Ciência da Computação.
        Tenho experiência no desenvolvimento de aplicações web, APIs e soluções de automação, utilizando tecnologias como Java, Spring Boot, React, TypeScript, Python e bancos de dados relacionais.
            Buscando desenvolver sistemas organizados, funcionais. Atualmente, venho aprofundando meus conhecimentos em Backend, arquitetura de aplicações, APIs e soluções envolvendo Inteligência Artificial e automação.`,
        link: { href: "#projetos", label: "Ver meus trabalhos" },
    },
    {
        title: "O Que Busco",
        text: `Busco minha próxima oportunidade na área de desenvolvimento de software, principalmente em posições de Backend ou Full Stack.

Quero atuar em um ambiente onde possa aplicar meus conhecimentos em Java, Spring Boot, APIs, bancos de dados e desenvolvimento web, enquanto continuo evoluindo tecnicamente através de projetos e desafios reais.`,
        link: { href: "#contato", label: "Vamos conversar" },
    },
    {
        title: "Meu Diferencial",
        text: `formação técnica em informática me proporcionou uma visão que vai além do desenvolvimento: também tenho contato com redes, hardware, suporte e infraestrutura. Isso me ajuda a compreender melhor o ambiente em que uma aplicação realmente funciona.
Embora tenha interesse especial em Backend, consigo compreender e trabalhar nas diferentes camadas de uma aplicação, conectando frontend, APIs e banco de dados.
    Tenho facilidade para aprender novas tecnologias e gosto de transformar o conhecimento adquirido em projetos práticos. Atualmente, também venho explorando automação e Inteligência Artificial, ampliando as possibilidades das soluções que desenvolvo.`,
        link: { href: "https://github.com/andrealmeidao", label: "Explorar GitHub", external: true },
    },
];

const JOURNEY = [
    {
        image: "imagens/matriz-de-bordado-grau-tecnico-cod-01333-bordado.webp",
        alt: "Logo do Grau Técnico",
        title: "Técnico em T.I",
        subtitle: "Curso Técnico Integrado em Tecnologia da Informação",
        period: "fev 2024 - abr 2026",
        description: "Formação técnica completa com foco em lógica de programação, orientação a objetos, desenvolvimento web, bancos de dados, redes de computadores, montagem e manutenção de computadores.",
        tags: ["Python", "HTML", "CSS", "JavaScript", "MySQL", "Redes", "Hardware"],
    },
    {
        image: "imagens/logo-by-anhanguera-desktop.webp",
        alt: "Logo da Anhanguera",
        title: "Bacharelado em Computação",
        subtitle: "Ciência da Computação - Anhanguera Educacional",
        period: "Desde fev 2026 | Em andamento",
        description: "Formação acadêmica ampliando visão em programação, estrutura de software, algoritmos, arquitetura de sistemas, segurança da informação e fundamentos para crescimento profissional de longo prazo.",
        tags: ["C", "Gestão de projetos", "Modelagem de Dados", "JavaScript", "Python", "Banco de Dados", "Segurança da Informação"],
    },
    {
        image: "https://imgs.search.brave.com/Cikwdy8knBlj9KLTNdvOz9hE5BjVaF-fCHWLA_6eMdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ZldG9yZXMtcHJl/bWl1bS90dXRvcmlh/bC1kZS1saW5ndWFn/ZW0tZGUtcHJvZ3Jh/bWFjYW8tcHl0aG9u/LWxpdnJvLWRlLXRl/eHRvLW1hcmNhZG9y/LXZlcm1lbGhvLWVz/Y3JpdGEtZGUtcHJv/Z3JhbWFzLWNvZGlm/aWNhY2FvLXByb2dy/YW1hZG9yLW1hbnVh/bC1kZXNlbnZvbHZp/bWVudG8tZGUtc29m/dHdhcmUtZGVzZW52/b2x2ZWRvci1jdXJz/b3MtZXhwcmVzc29z/LWVzdHVkYW5kby1l/ZHVjYWNhby1tYXRl/cmlhaXMtZWR1Y2Fj/aW9uYWlzXzcyNzM4/NS0xNjMyMi5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA",
        alt: "Logo Python",
        title: "Certificação Python",
        subtitle: "Certificação Profissional em Python",
        period: "Concluído em 2025",
        description: "Certificação que valida conhecimento em programação Python, automação de processos, manipulação de dados e boas práticas de desenvolvimento. Diferencial importante para atuar em automação e backend.",
        tags: ["Python", "Automação de tarefas", "manipulação de dados", "Pyautogui"],
    },
    {
        image: "https://imgs.search.brave.com/Vcal48BXCzmjNF59Lsuk9XG3zga-v1tel1Ytz-fcZ1M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYWlj/aHUtdXBsb2Fkcy5z/My5hbWF6b25hd3Mu/Y29tL2xvZ29fZmlh/cC1mYWN1bGRhZGUt/ZGUtaW5mb3JtYXRp/Y2EtZS1hZG1pbmlz/dHJhY2FvLXBhdWxp/c3RhXzMwN1U3UC5w/bmc",
        alt: "Logo Python",
        title: "Certificação Agentes Autônomos (Agentic AI)",
        subtitle: "Certificação Profissional em criação de Inteligencias Artificiais, Agentic e agentes autônomos",
        period: "Concluído em 2026",
        description: "Capacitação em Inteligência Artificial Agentic e agentes autônomos, com foco em conceitos, aplicações e automação de processos por meio de sistemas inteligentes.",
        tags: ["Langgraph", "Pydantic AI", "Agents SDK", "Agentes Autônomos",   "CrewAI", "n8n",],
    },
];

const SKILL_GROUPS = [
    {
        title: "Backend",
        items: ["JavaScript", "Spring Boot", "Java", "Node.js", "APIs RESTful", "Python"],
    },
    {
        title: "Frontend",
        items: ["HTML5", "CSS3", "Bootstrap", "React", "Next.js", "TypeScript"],
    },
    {
        title: "Banco de Dados",
        items: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Modelagem de dados"],
    },
    {
        title: "Automação",
        items: ["PyAutoGUI", "Automação de processos", "Agentes Autônomos", "Langgraph", "n8n", "CrewAI"],
    },
    {
        title: "Ferramentas e DevOps",
        items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux"],
    },
    {
        title: "Competências complementares",
        items: ["Criação de redes", "Protocolo TCP/IP", "Configuração de switches", "Troubleshooting", "Diagnóstico de problemas"],
    },
];

const PROJECTS = [
    {
        number: "01",
        title: "KashDuv",
        description: "Aplicação de controle financeiro com API Spring Boot e frontend React. Permite cadastro de usuários, registro de transações, categorização e visualização de saldo e histórico.",
        stack: ["Java", "Spring Boot", "React", "API RESTful","Node.js", "PostgreSQL", "JavaScript", "TypeScript", "Flyway", "Dockerfile", "Postman"],
        href: "https://github.com/andrealmeidao/KashDuv",
        label: "Ver no GitHub",
    },
    {
        number: "02",
        title: "Worklane",
        description: "Aplicação fullstack de gestão visual de trabalho, inspirada em ferramentas Kanban. O Worklane permite organizar projetos em boards, acompanhar tarefas por etapas e colaborar com outras pessoas em um único espaço de trabalho.",
        stack: ["JavaScript", "React 18", "React Router", "Vite", "Axios", "dnd-kit", "React Hot Toast", "Prisma ORM", "Node.js", "Express", "PostgreSQL", "Docker", "JWT", "Bcrypt"],
        href: "https://github.com/andrealmeidao/Worklane",
        label: "Explorar projeto",
    },
    {
        number: "03",
        title: "Chatbot RAG",
        description: "Chatbot inteligente para consulta de documentos corporativos. O projeto usa RAG (Retrieval-Augmented Generation) para encontrar informações relevantes na base de conhecimento da empresa e responder a perguntas com mais contexto, agilidade e rastreabilidade. !Ainda em fase de desenvolvimento.",
        stack: ["Python 3.11", "FastAPI", "Uvicorn", "Langchain", "Pydantic AI", "FAISS", "NumPy", "SQLite", "Embeddings OpenAI", "Pipeline RAG", "pypdf", "python-docx", "Vite", "JavaScript", "Docker", "GitHub Actions"],
        href: "https://github.com/andrealmeidao/Chatbot-RAG",
        label: "Abrir repositório",
    },
];

const CONTACTS = [
    {
        title: "LinkedIn",
        description: "Perfil com formação técnica e acadêmica, competências diversas e posicionamento profissional aberto a oportunidades como desenvolvedor, técnico de TI ou suporte técnico.",
        href: "https://www.linkedin.com/in/andr%C3%A9-de-almeida-oliveira-03a192377/",
        action: "Visitar LinkedIn",
    },
    {
        title: "GitHub",
        description: "Repositórios, estudos práticos e projetos que mostram minha evolução em automação, front-end, desenvolvimento web e soluções técnicas diversas.",
        href: "https://github.com/andrealmeidao",
        action: "Ver GitHub",
    },
];

function App() {
    const [activeSection, setActiveSection] = useState("#sobre");

    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.16 }
        );

        reveals.forEach((item) => observer.observe(item));

        const sections = document.querySelectorAll("section[id]");
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 }
        );

        sections.forEach((section) => sectionObserver.observe(section));

        return () => {
            observer.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    return (
        <div className="app-shell">
            <header className="topbar">
                <div className="brand">
                    <div className="brand-mark">AA</div>
                    <div className="brand-copy">
                        <strong>André de Almeida Oliveira</strong>
                        <span>Desenvolvedor Full Stack JavaScript</span>
                    </div>
                </div>

                <nav className="nav-links" aria-label="Navegação principal">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={
                                activeSection === link.href
                                    ? {
                                          background: "rgba(255,255,255,0.84)",
                                          color: "var(--text)",
                                      }
                                    : undefined
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </header>

            <main>
                <section className="hero reveal" id="sobre">
                    <div className="hero-copy">
                        <div className="eyebrow">
                             Aberto a Oportunidades
                        </div>
                        <h1>
                            Desenvolvedor Full Stack com foco em Backend, construindo APIs e aplicações web com Java, Spring Boot, TypeScript, React e PostgreSQL.
                        </h1>
                        <p>
                            Sou desenvolvedor em formação, mas também domino redes, suporte técnico e hardware. Busco oportunidades como desenvolvedor júnior, técnico de TI ou profissional versátil que possa atuar em diferentes frentes da tecnologia.
                        </p>
                        <div className="hero-actions">
                            <a href="#contato" className="button">
                                ✉️ Entrar em contato
                            </a>
                            <a
                                href="https://www.linkedin.com/in/andr%C3%A9-de-almeida-oliveira-03a192377/"
                                target="_blank"
                                rel="noreferrer"
                                className="button-secondary"
                            >
                                Meu LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="hero-grid">
                        <div className="glass-card">
                            <h3>Formação Técnica</h3>
                            <p>
                                Técnico em Tecnologia da Informação com base sólida em programação, redes e hardware.
                            </p>
                            <div className="hero-highlights">
                                <div className="mini-stat">
                                    <span>Certificado em</span>
                                    <strong>Python e Criação de Agentes Autônomos</strong>
                                </div>
                                <div className="mini-stat">
                                    <span>Estudando</span>
                                    <strong>Ciências da Computação</strong>
                                </div>
                                <div className="mini-stat">
                                    <span>Áreas de atuação</span>
                                    <strong>Backend, APIs, Aplicações Web e Agentes Autônomos</strong>
                                </div>
                                <div className="mini-stat">
                                    <span>Projetos</span>
                                    <strong>6+</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section reveal" id="sobre-cards">
                    <div className="story-grid">
                        {STORY_CARDS.map((card) => (
                            <article className="story-card" key={card.title}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                                <a
                                    href={card.link.href}
                                    className="link-inline"
                                    target={card.link.external ? "_blank" : undefined}
                                    rel={card.link.external ? "noreferrer" : undefined}
                                >
                                    {card.link.label} →
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section reveal" id="jornada">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Jornada</span>
                            <h2>Formação técnica e acadêmica</h2>
                            <p>
                                 Ciência da Computação
                                    [Anhanguera] · Em andamento <br />

                                 Técnico em Informática
                                    [Grau Técnico] · Concluído
                            </p>
                        </div>
                    </div>

                    <div className="timeline">
                        {JOURNEY.map((item) => (
                            <article className="timeline-card" key={item.title}>
                                <div className="timeline-logo">
                                    <img src={item.image} alt={item.alt} />
                                </div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>
                                        <strong>{item.subtitle}</strong>
                                    </p>
                                    <p>{item.description}</p>
                                    <div className="timeline-meta">
                                        <span className="meta-pill">{item.period}</span>
                                        {item.tags.map((tag) => (
                                            <span className="meta-pill" key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section reveal" id="habilidades">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Habilidades</span>
                            <h2>Múltiplas competências em tecnologia</h2>
                            <p>
                                Tenho experiência em programação, desenvolvimento web, automação, Backend e Agentes autônomos. Essa combinação de habilidades me permite ser versátil e abordar projetos por diferentes ângulos.
                            </p>
                        </div>
                    </div>

                    <div className="skills-shell">
                        <div className="skills-grid">
                            {SKILL_GROUPS.map((group) => (
                                <article className="skill-card" key={group.title}>
                                    <h3>{group.title}</h3>
                                    <ul>
                                        {group.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        
                    </div>
                </section>

                <section className="section reveal" id="projetos">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Projetos</span>
                            <h2>Trabalhos que demonstram minha evolução</h2>
                            <p>
                                Aqui estão alguns projetos que representam meu aprendizado em automação, desenvolvimento web e Backend, etc. Cada um conta uma parte da minha trajetória técnica.
                            </p>
                        </div>
                    </div>

                    <div className="project-grid">
                        {PROJECTS.map((project) => (
                            <article className="project-card" key={project.title}>
                                <span className="project-number">{project.number}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ul className="project-stack">
                                    {project.stack.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <a
                                    className="project-link"
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {project.label} →
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section reveal" id="contato">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Contato</span>
                            <h2>Vamos conversar</h2>
                            <p>
                                Se você tem uma oportunidade, quer conhecer meus projetos, entre em contato. Estou aberto a propostas.
                            </p>
                        </div>
                    </div>

                    <div className="contact-grid">
                        {CONTACTS.map((contact) => (
                            <article className="contact-card" key={contact.title}>
                                <h3>{contact.title}</h3>
                                <p>{contact.description}</p>
                                <a
                                    className="contact-link"
                                    href={contact.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {contact.action}
                                </a>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <span>© 2026 André de Almeida Oliveira.</span>
                <a href="https://github.com/andrealmeidao" target="_blank" rel="noreferrer">
                    github.com/andrealmeidao
                </a>
            </footer>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
