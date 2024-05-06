import { useEffect, useState } from 'react';

const title_spacing = "   ";
export default function ProjectBox(props) {
  const project = props.project;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const progressWidth = (scrollTop / (scrollHeight - clientHeight - 353)) * 100;
      setScrollProgress(progressWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id={props.project} className="project-page">
      <div id="progress-bar-container">
      <div id="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <div id="project-contents">
        <h2 id="project-header">{project.name}</h2>

        <div id="proj-overview-section">
          <img id="cover-img" src={project.main_image}></img>
          <div className='proj-description-tags'>
            <h3>01  Project</h3>
            <div id="section-01-contents">
              <p>{project.description}</p>
              <div className="tags">
                {project.frameworks.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="proj-info-nav-section">
          <div id="proj-info">
            <h3>02  Info</h3>
            <p><b>Role:</b> { project.role}</p>
            <p><b>Collaborators:</b>  {project.collaborators}</p>
            <p><b>Timeline:</b>  {project.timeline}</p>
          </div>
          <div id="proj-jump-to">
            <div id="proj-jump-to">
              <h3>03  Jump To</h3>
              {/* Map out links for each section */}
              {project.sections.map((section, index) => (
                <a key={index} href={`#section-${index + 4}`}>
                  {`${String(index+4).padStart(2, '0')}${title_spacing}${section.title}`}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {project.sections.map((section, index) => (
          <Section key={index} id={`#section-${index + 4}`} i={index+4} {...section}/>
        ))}

      </div>
    </div>
  );
};


function Tag(props) {
  return(
      <div className="framework-tag">
          <p className="tag-text">
              {props.tag}
          </p>
      </div>
  )
};

function Section(props) {
  const formattedIndex = String(props.i).padStart(2, '0');

  return(
    <div className="project-section">
      <h3>{formattedIndex}{title_spacing}{props.title}</h3>
      <div className="section-contents">
          {props.images.map((image, index) => (
            <img key={index} src={image}/>
          ))}


          <p>{props.text}</p>
        </div>
    </div>
  )
}