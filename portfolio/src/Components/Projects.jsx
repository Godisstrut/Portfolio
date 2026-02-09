import "./Projects.css";
import {projects} from "./ProjectsData";

function Projects() {
    return(
        <section className="projects">
            <h1>Mina Projekt</h1>
            <div className="project-container">
                {projects.map((project, index) => (
                    <article key={index} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technology.map((tech, i) => (
                                    <span key={i}>{tech}</span>))}
                            </div>
                            <div className="project-links">
                                <a href={project.live} target="_blank" rel="noopener noreferrer">Hemsida</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects