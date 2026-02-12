import {useState, useEffect, useRef} from "react";
import "./Projects.css";
import {projects} from "./ProjectsData";

function Projects() {

    // Null betyder att inget projekt är öppet, annars index för det öppna projektet
    const [openProject, setOpenProject] = useState(null);
    const videoRefs = useRef({});

    function toggleProject(index) {
        if (openProject === index) {
            setOpenProject(null);
        } else {
            setOpenProject(index);
        }
    }
      useEffect(() => { // Pausa alla videos när ett projekt öppnas eller stängs
    Object.values(videoRefs.current).forEach(v => {
      if (!v) return;
      v.pause();
    });

    // Spelar upp videon för projektet som öppnades
    if (openProject !== null) {
      const v = videoRefs.current[openProject];
      if (v) {
        const p = v.play();
      }
    }
  }, [openProject]);

    return (
    <section id="projects" className="projects">
      <h1>Mina Projekt</h1>

      <div className="project-container">
        {projects.map((project, index) => {
          const isOpen = openProject === index; // Kollar om projektet är öppet
          
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
                        <video ref={el => videoRefs.current[index] = el} muted loop playsInline autoPlay={isOpen} preload="metadata">
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