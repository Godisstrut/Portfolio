import { useState, useRef, useEffect } from "react";
import "./Projects.css";
import { projects } from "./ProjectsData";

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const videoRefs = useRef({});
  const prevOpenRef = useRef(null);

  const toggleProject = (index) => {
    if (openProject === index) {
      setOpenProject(null);
      return;
    }
    setOpenProject(index);
  };

  useEffect(() => {
    // pausa förra 
    if (prevOpenRef.current !== null) {
      videoRefs.current[prevOpenRef.current]?.pause();
    }

    // spela nya
    if (openProject !== null) {
      videoRefs.current[openProject]?.play().catch(() => {});
    }

    prevOpenRef.current = openProject;
  }, [openProject]);

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
              onClick={() => toggleProject(index)}
            >
              <div className="project-content">
                <div className="project-header">
                  <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                <div className={"project-video " + (isOpen ? "open" : "")}>
                  {project.video ? (
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el;
                      }}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
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