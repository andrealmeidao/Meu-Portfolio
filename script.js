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
        text: "Sou Técnico em Tecnologia da Informação, estudo Ciência da Computação e tenho certificação em Python. Combino conhecimento em desenvolvimento web, automação, redes de computadores e suporte técnico. Estou em busca ativa de uma oportunidade profissional onde possa contribuir com minhas habilidades técnicas e crescer continuamente.",
        link: { href: "#projetos", label: "Ver meus trabalhos" },
    },
    {
        title: "O Que Busco",
        text: "Procuro minha primeira oportunidade como desenvolvedor júnior, técnico de TI, suporte técnico ou freelancer. Sou versátil e pronto para atuar em áreas como programação, infraestrutura, montagem/conserto de computadores ou gestão de dados. Quero evoluir tecnicamente e entregar soluções práticas e de qualidade.",
        link: { href: "#contato", label: "Vamos conversar" },
    },
    {
        title: "Meu Diferencial",
        text: "Tenho formação técnica sólida combinada com estudos acadêmicos. Domino programação e também lido com infraestrutura, redes e hardware. Essa bagagem ampla me permite resolver problemas sob diferentes perspectivas, seja em código, na rede ou na máquina física.",
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
        period: "Desde mar 2026 | Em andamento",
        description: "Formação acadêmica ampliando visão em estrutura de software, algoritmos, arquitetura de sistemas, segurança da informação e fundamentos para crescimento profissional de longo prazo.",
        tags: ["Computação", "Algoritmos", "Fundamentos", "Especialização"],
    },
    {
        image: "imagens/logo-python.webp",
        alt: "Logo Python",
        title: "Certificação Python",
        subtitle: "Certificação Profissional em Python",
        period: "Concluído em 2025",
        description: "Certificação que valida conhecimento em programação Python, automação de processos, manipulação de dados e boas práticas de desenvolvimento. Diferencial importante para atuar em automação e backend.",
        tags: ["Python", "Automação", "Certificação", "Validado"],
    },
];

const SKILL_GROUPS = [
    {
        title: "Programação",
        items: ["Python", "JavaScript", "PHP", "Node.js"],
    },
    {
        title: "Front-end",
        items: ["HTML5", "CSS3", "Bootstrap", "Design responsivo"],
    },
    {
        title: "Dados & Aplicações",
        items: ["SQL", "MySQL", "Planilhas Excel", "Estruturação de consultas"],
    },
    {
        title: "Automação",
        items: ["PyAutoGUI", "Automação de processos", "Scripts Python", "Produtividade"],
    },
    {
        title: "Redes e Infraestrutura",
        items: ["Criação de redes", "Protocolo TCP/IP", "Configuração de switches", "Troubleshooting"],
    },
    {
        title: "Suporte Técnico & Hardware",
        items: ["Montagem de PCs", "Conserto de computadores", "Diagnóstico de problemas", "Manutenção preventiva"],
    },
];

const PROJECTS = [
    {
        number: "01",
        title: "Automação com PyAutoGUI",
        description: "Projeto voltado para automatizar tarefas repetitivas no computador, como preenchimento de tabelas e interação com interfaces, reduzindo esforço manual e ganhando produtividade.",
        stack: ["Python", "PyAutoGUI", "Automação"],
        href: "https://github.com/andrealmeidao/Automatiza-o-de-tabelas-usando-Pyautogui",
        label: "Ver no GitHub",
    },
    {
        number: "02",
        title: "ClimasxCity",
        description: "Aplicação web que consome dados em tempo real da OpenWeather API para apresentar clima, temperatura, umidade e vento em uma interface simples e direta.",
        stack: ["HTML", "CSS", "JavaScript", "API"],
        href: "https://github.com/andrealmeidao/ClimasxCity---Tempo",
        label: "Explorar projeto",
    },
    {
        number: "03",
        title: "Lista de Tarefas",
        description: "Projeto de produtividade com operações básicas de uma to-do list, persistência local e foco em prática de JavaScript no navegador.",
        stack: ["HTML", "CSS", "JavaScript"],
        href: "https://github.com/andrealmeidao/Lista-de-Tarefas-To-Do",
        label: "Abrir repositório",
    },
];

const CONTACTS = [
    {
        title: "LinkedIn",
        description: "Perfil com formação técnica e acadêmica, competências diversas e posicionamento profissional aberto a oportunidades como desenvolvedor, técnico de TI ou suporte técnico.",
        href: "https://www.linkedin.com/in/andr%C3%A9-almeida-03a192377/",
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
                        <span>Técnico em T.I, Programação e Suporte Técnico</span>
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
                            🎯 Aberto a Oportunidades
                        </div>
                        <h1>
                            Técnico em T.I com visão ampla em programação e infraestrutura
                        </h1>
                        <p>
                            Sou desenvolvedor em formação, mas também domino redes, suporte técnico e hardware. Busco oportunidades como desenvolvedor júnior, técnico de TI ou profissional versátil que possa atuar em diferentes frentes da tecnologia.
                        </p>
                        <div className="hero-actions">
                            <a href="#contato" className="button">
                                ✉️ Entrar em contato
                            </a>
                            <a
                                href="https://www.linkedin.com/in/andr%C3%A9-almeida-03a192377/"
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
                                    <strong>Python</strong>
                                </div>
                                <div className="mini-stat">
                                    <span>Estudando</span>
                                    <strong>Computação</strong>
                                </div>
                                <div className="mini-stat">
                                    <span>Áreas de atuação</span>
                                    <strong>6+</strong>
                                </div>
                                <div className="mini-stat">
                                    <span>Projetos</span>
                                    <strong>3+</strong>
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
                                Minha trajetória combina formação técnica prática com certificações e estudos acadêmicos. Isso me dá uma visão ampla da tecnologia: desde código até infraestrutura e hardware.
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
                                Tenho experiência em programação, desenvolvimento web, automação, redes de computadores e suporte técnico. Essa combinação de habilidades me permite ser versátil e abordar projetos por diferentes ângulos.
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

                        <aside className="glass-card skills-panel">
                            <h3>Em desenvolvimento</h3>
                            <ul className="focus-list">
                                <li>
                                    <span>
                                        <strong>Primeira oportunidade</strong>
                                        <br />
                                        Pronto para contribuir com habilidades técnicas e crescer profissionalmente.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Projetos com impacto</strong>
                                        <br />
                                        Buscando desafios que permitam aplicar conhecimento diverso.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Especialização contínua</strong>
                                        <br />
                                        Estudando para aprofundar em áreas de interesse específicas.
                                    </span>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </section>

                <section className="section reveal" id="projetos">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Projetos</span>
                            <h2>Trabalhos que demonstram minha evolução</h2>
                            <p>
                                Aqui estão alguns projetos que representam meu aprendizado em automação, desenvolvimento web e programação. Cada um conta uma parte da minha trajetória técnica.
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
                            <h2>Vamos conversar!</h2>
                            <p>
                                Se você tem uma oportunidade, quer conhecer meus projetos ou simplemente quer conversar sobre tecnologia, entre em contato. Estou aberto a propostas em desenvolvimento, infraestrutura ou suporte técnico.
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
                <span>© 2026 André de Almeida Oliveira. Portfólio profissional em construção.</span>
                <a href="https://github.com/andrealmeidao" target="_blank" rel="noreferrer">
                    github.com/andrealmeidao
                </a>
            </footer>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
