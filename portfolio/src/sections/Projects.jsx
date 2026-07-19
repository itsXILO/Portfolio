import { Github } from "lucide-react";

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
                    <Github className="w-4 h-4" />
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
