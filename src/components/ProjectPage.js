import { useEffect, useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkIcon from '@mui/icons-material/Link';
import PartifulStyleGuide from './PartifulStyleGuide'; 

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
          {/* <img id="cover-img" src={project.main_image}></img> */}
          <a id="proj-img-link" href="https://uiux-development.vercel.app/" target="_blank">
            <img id="cover-img" src={project.main_image} alt='image of ${project.name} final product'></img>
            <div class="open-in-new-window-overlay">
              <OpenInNewIcon style={{ fontSize: 80 }} />
            </div>
          </a>

          <div className='proj-description-tags'>
            <h3>01  Project</h3>
            <div id="section-01-contents">
              <p>{project.description_long}</p>
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
            <div id="info-contents">
              <p><b>Role:</b> { project.role}</p>
              {project.collaborators && <p><b>Collaborators:</b> {project.collaborators}</p>}
              <p><b>Timeline:</b>  {project.timeline}</p>
            </div>
          </div>

          <div id="proj-jump-to">
            <div id="proj-jump-to">
              <h3>03  Jump To</h3>
              <div id="jump-to-links">
                {project.sections.map((section, index) => (
                  <a key={index} href={`/${project.route}#section-${index + 4}`}>
                    {`${String(index+4).padStart(2, '0')}${title_spacing}${section.title}`}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {project.sections.map((section, index) => (
          <Section key={index} id={`section-${index + 4}`} i={index+4} {...section}/>
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
  const sectionClass = props.i % 2 === 0 ? "project-section alt-proj-section-background": "project-section"; // Conditionally apply class

  return(
    <div className={sectionClass}>
      <h3>{formattedIndex}{title_spacing}{props.title}</h3>
      <div className="section-contents">

          <div className='inline-contents'>
            {props.inline_images && props.inline_images.map((image, index) => (
              <img key={index} src={image}/>
            ))}

            <div className="section-text">
              
              {props.text && props.text.map((item, index) => (
                <p key={index} className="proj-text-section">{item}</p>
              ))}
              
              
              {props.list && props.list.length > 0 && (
                <ol>
                  {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          </div>

          {props.links && props.links.map((l, index) => (
              <a key={index} href={l.link} target="_blank" className="link clickable">
                <LinkIcon/>
                {l.name}
              </a>
            ))}

          {props.full_images && props.full_images.map((image, index) => (
            <img key={index} src={image} className='full-img'/>
          ))}

          {props.title === "Style Guide" && <PartifulStyleGuide />}

        </div>
    </div>
  )
}
