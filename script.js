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
        text: "Sou estudante de Ciência da Computação e também curso o Técnico em Tecnologia da Informação. Estou construindo uma base prática em desenvolvimento web, Python e automação para transformar aprendizado em projetos reais.",
        link: { href: "#projetos", label: "Ver projetos" },
    },
    {
        title: "Objetivo Profissional",
        text: "Busco minha primeira oportunidade como desenvolvedor júnior, estagiário ou freelancer. Quero atuar em projetos onde eu possa evoluir tecnicamente e entregar soluções úteis com código limpo, interfaces claras e automação inteligente.",
        link: { href: "#contato", label: "Vamos conversar" },
    },
    {
        title: "O Que Estou Construindo",
        text: "Meu foco está em portfólio, automação de processos com Python, interfaces front-end e projetos que mostrem evolução contínua. Cada entrega é uma chance de praticar mais organização, documentação e visão de produto.",
        link: { href: "https://github.com/andrealmeidao", label: "Abrir GitHub", external: true },
    },
];

const JOURNEY = [
    {
        image: "imagens/matriz-de-bordado-grau-tecnico-cod-01333-bordado.webp",
        alt: "Logo do Grau Técnico",
        title: "Grau Técnico",
        subtitle: "Curso Técnico Integrado em Tecnologia da Informação",
        period: "fev 2024 - abr 2026",
        description: "Base forte em lógica, programação orientada a objetos, front-end, bancos de dados e ferramentas úteis para o dia a dia de desenvolvimento.",
        tags: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
        image: "imagens/logo-by-anhanguera-desktop.webp",
        alt: "Logo da Anhanguera",
        title: "Anhanguera Educacional",
        subtitle: "Bacharelado em Ciência da Computação",
        period: "Desde mar 2026 | Em andamento",
        description: "Formação acadêmica ampliando visão de estrutura de software, raciocínio computacional e fundamentos para crescimento de longo prazo na área.",
        tags: ["Computação", "Estrutura de software", "Evolução profissional"],
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
        title: "Dados",
        items: ["SQL", "MySQL", "Estruturação de consultas", "Modelagem básica"],
    },
    {
        title: "Automação",
        items: ["PyAutoGUI", "Automação de processos", "Automação de tarefas", "Produtividade"],
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
        description: "Perfil com formação, competências e posicionamento profissional para oportunidades como desenvolvedor júnior.",
        href: "https://www.linkedin.com/in/andr%C3%A9-almeida-03a192377/",
        action: "Visitar LinkedIn",
    },
    {
        title: "GitHub",
        description: "Repositórios, estudos práticos e projetos que mostram minha evolução em automação, front-end e desenvolvimento web.",
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
                        <strong>Andre Almeida</strong>
                        <span>Python, automação e front-end</span>
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
                        <span className="eyebrow">Disponível para estágio, júnior e freelance</span>
                        <h1>Construindo projetos com Python, automação e web.</h1>
                        <p>
                            Sou Andre Almeida, desenvolvedor em formação com foco em Python,
                            automação de processos e interfaces web. Estou transformando estudo
                            em portfólio com projetos práticos que mostram organização,
                            curiosidade técnica e vontade de evoluir rápido.
                        </p>

                        <div className="hero-actions">
                            <a className="button" href="#projetos">Ver projetos</a>
                            <a className="button-secondary" href="https://github.com/andrealmeidao" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                            <a className="button-secondary" href="https://www.linkedin.com/in/andr%C3%A9-almeida-03a192377/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="hero-grid">
                        <div className="glass-card">
                            <h3>Resumo rápido</h3>
                            <p>
                                Estudante de Ciência da Computação e Técnico em TI, com foco em
                                aprendizado aplicado. Trabalho com Python, HTML, CSS,
                                JavaScript, bancos de dados e automação com PyAutoGUI.
                            </p>
                        </div>

                        <div className="hero-highlights">
                            <div className="mini-stat">
                                <span>Foco principal</span>
                                <strong>Python + Automação</strong>
                            </div>
                            <div className="mini-stat">
                                <span>Base complementar</span>
                                <strong>Front-end e APIs</strong>
                            </div>
                            <div className="mini-stat">
                                <span>Objetivo</span>
                                <strong>Primeira oportunidade</strong>
                            </div>
                            <div className="mini-stat">
                                <span>Prática atual</span>
                                <strong>Portfólio real</strong>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section reveal">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Apresentação</span>
                            <h2>Quem eu sou hoje</h2>
                            <p>
                                Esta página foi pensada para comunicar meu momento atual de forma
                                mais profissional: foco, trajetória, habilidades e projetos que
                                mostram na prática como estou evoluindo.
                            </p>
                        </div>
                    </div>

                    <div className="story-grid">
                        {STORY_CARDS.map((card) => (
                            <article className="story-card" key={card.title}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                                <a
                                    className="link-inline"
                                    href={card.link.href}
                                    target={card.link.external ? "_blank" : undefined}
                                    rel={card.link.external ? "noreferrer" : undefined}
                                >
                                    {card.link.label}
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section reveal" id="jornada">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Jornada</span>
                            <h2>Formação e evolução</h2>
                            <p>
                                Minha formação combina base técnica e graduação, o que tem me
                                ajudado a desenvolver disciplina, repertório e visão de longo
                                prazo na área de tecnologia.
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
                            <h2>Ferramentas que já uso</h2>
                            <p>
                                Organizei minhas habilidades por grupos para deixar mais claro
                                onde já tenho prática e para onde estou direcionando meu
                                crescimento nos próximos projetos.
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
                            <h3>No que estou focando agora</h3>
                            <ul className="focus-list">
                                <li>
                                    <span>
                                        <strong>Portfólio mais forte</strong>
                                        <br />
                                        Melhorar apresentação, documentação e consistência.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Projetos com mais profundidade</strong>
                                        <br />
                                        Sair de páginas simples para aplicações mais completas.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Primeira oportunidade</strong>
                                        <br />
                                        Mostrar valor com projetos reais, limpos e bem descritos.
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
                            <h2>Trabalhos que representam minha evolução</h2>
                            <p>
                                Estes projetos mostram meu foco atual em automação, front-end e
                                aplicações práticas. A ideia é que cada um deles conte uma parte
                                da minha trajetória como desenvolvedor.
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
                                    {project.label}
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section reveal" id="contato">
                    <div className="section-head">
                        <div>
                            <span className="section-tag">Contato</span>
                            <h2>Onde me encontrar</h2>
                            <p>
                                Se você quiser acompanhar meus projetos, conhecer melhor minha
                                trajetória ou conversar sobre oportunidades, estes são os
                                principais canais.
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
                <span>© 2026 Andre Almeida. Portfólio pessoal em evolução.</span>
                <a href="https://github.com/andrealmeidao" target="_blank" rel="noreferrer">
                    github.com/andrealmeidao
                </a>
            </footer>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
