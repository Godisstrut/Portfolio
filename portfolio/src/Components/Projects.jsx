import {useState} from "react";
import "./Projects.css";
import {projects} from "./ProjectsData";

function Projects() {

    const [openProject, setOpenProject] = useState(null); // Null means no project is open
    function toggleProject(index) {
        if (openProject === index) {
            setOpenProject(null);
        } else {
            setOpenProject(index);
        }
    }
    return (
    <section id="projects" className="projects">
      <h1>Mina Projekt</h1>

      <div className="project-container">
        {projects.map((project, index) => {
          const isOpen = openProject === index;
          return (
            <article
              key={index}
              className={`project-card ${isOpen ? "open" : ""}`}
              onClick={() => toggleProject(index)}>
              <div className="project-content">
                <div className="project-header">
                  <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                <div className={`project-video ${isOpen ? "open" : ""}`}>
                    {project.video ? (
                        <video muted loop playsInline autoPlay={isOpen} preload="metadata">
                        <source src={project.video} type="video/mp4" />
                        </video>
                    ) : (
                        <div className="video-placeholder">
                        <span>Ingen demo-video</span>
                        </div>
                    )}
                </div>
                <div className="project-technologies">
                  {project.technology.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Hemsida
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;