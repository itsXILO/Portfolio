const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "AI SaaS Platform",
    description:
      "A full-stack AI SaaS platform that enables users to generate AI images and videos, remove image backgrounds, erase objects, and share creations through a community feed. The platform includes secure authentication, subscription management, and social features such as likes and follows.",
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "React",
      "Vite",
      "Tailwind CSS",
      "Clerk",
      "Stripe",
      "Cloudinary",
    ],
    githubLinks: [
      { label: "GitHub", url: "https://github.com/itsXILO/saas-app" },
    ],
  },
  {
    title: "Classroom Management System",
    description:
      "A modern classroom management platform that allows teachers to create and manage classrooms, post assignments, schedule exams and contests with timers, and monitor student progress. Students can join classrooms, complete assignments, and access course materials through a responsive dashboard.",
    techStack: [
      "React",
      "Refine",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Arcjet",
    ],
    githubLinks: [
      {
        label: "Backend",
        url: "https://github.com/itsXILO/management-backend",
      },
      {
        label: "Frontend",
        url: "https://github.com/itsXILO/management-refine-based-frontend",
      },
    ],
  },
  {
    title: "Nano-DSL",
    description:
      "A declarative domain-specific language (DSL) for Linux system observability that allows users to define custom monitoring rules using a simple syntax. Built with a custom parser and a terminal UI, it compiles DSL commands into executable monitoring tasks and supports an extensible plugin architecture.",
    techStack: ["Python", "Lark Parser", "Textual", "Linux", "DSL Design"],
    githubLinks: [
      { label: "GitHub", url: "https://github.com/itsXILO/nano-dsl" },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 flex flex-col justify-between hover:bg-white/5 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.githubLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm font-medium"
                  >
                    <GithubIcon className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
