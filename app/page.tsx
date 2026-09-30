import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <h1>Your Name</h1>
        <p className="intro">
          I&apos;m learning to code by building things I can hold, hear, and
          use. This page is where those projects end up.
        </p>
        <nav className="links" aria-label="Elsewhere">
          <a href="https://github.com/your-username">GitHub</a>
          <a href="mailto:you@example.com">Email</a>
        </nav>
      </header>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <ul className="projects">
          {projects.map((project) => (
            <li key={project.title} className="project">
              <div className="project-head">
                <h3>
                  {project.href ? (
                    <a href={project.href}>{project.title}</a>
                  ) : (
                    project.title
                  )}
                </h3>
                <span
                  className={
                    project.status === "In progress"
                      ? "status status-wip"
                      : "status status-done"
                  }
                >
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              <p className="stack">{project.stack.join(", ")}</p>
            </li>
          ))}
        </ul>
        <p className="more">More projects will show up here as I finish them.</p>
      </section>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>
        <p>
          I&apos;m a beginner programmer. I pick projects that end in something
          tangible, then learn whatever I need to get them working.
        </p>
      </section>
    </main>
  );
}
