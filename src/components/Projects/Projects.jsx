import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
import "./Projects.css";

export default function Projects({ limit }) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section className="section-wrapper projects-section" id="projects">
            {/* Put the entire two-column layout inside the shared section-container */}
            <div className="section-container page-inner">
                <div className="projects-layout">
                    <div className="projects-left">
                        <div className="projects-header">
                            <h1 className="projects-title">Projects</h1>
                            <p className="projects-intro">
                                Case studies showcasing backend systems, APIs, and data engineering work.
                                Each project emphasizes scalable architecture and production-ready code.
                            </p>
                        </div>
                    </div>

                    <div className="projects-right">
                        <div className="projects-grid">
                            {displayProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    description={project.description}
                                    tags={project.tags}
                                    github={project.github}
                                    status={project.status}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
