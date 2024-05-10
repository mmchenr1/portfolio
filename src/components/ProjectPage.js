import { useEffect, useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkIcon from '@mui/icons-material/Link';
import PartifulStyleGuide from './PartifulStyleGuide'; 
import Carousel from './Carousel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import IconButton from '@mui/material/IconButton';


const title_spacing = "\u00A0\u00A0\u00A0";

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const id_tag = project.name.replace(/\s+/g, '-');;

  return (
    <div id={id_tag} className="project-page">
      <div id="progress-bar-container">
      <div id="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <div id="project-contents">
        <h1 id="project-header">{project.name}</h1>

        <div id="proj-overview-section">
          {project.image_link ? (
            <a id="cover-img-container">
              <img id="cover-img" className={`${id_tag}-img`}
                src={project.main_image.path} 
                alt={project.main_image.alt}/>

                <a className="open-in-new-window-overlay"  href={project.image_link} target="_blank">
                  <OpenInNewIcon style={{ fontSize: 80 }} />
                </a>
            </a>
          ) :
            <a id="cover-img-container">
              <img id="cover-img" className={`${id_tag}-img`}
              src={project.main_image.path} alt={project.main_image.alt}></img>
            </a>
          }

          <div id='proj-description-section'>
            <h2>01{title_spacing}Project</h2>
            <p>{project.description_long}</p>
          </div>
        </div>

        <div id="proj-info-nav-section">
          <div id="proj-info">
            <h2>02{title_spacing}Info</h2>
            <div id="info-contents">
              <p><b>Role:</b> { project.role}</p>
              {project.frameworks && <p><b>Frameworks:</b> {project.frameworks.join(', ')}</p>}
              {project.collaborators && <p><b>Collaborators:</b> {project.collaborators}</p>}
              <p><b>Timeline:</b>  {project.timeline}</p>
            </div>
          </div>

          <div id="proj-jump-to">
            <div id="proj-jump-to">
              <h2>03{title_spacing}Jump To</h2>
              <div id="jump-to-links">
                {project.sections.map((section, index) => (
                  <a key={index} href={`#${section.title}`} onClick={() => scrollToSection(`section-${index + 4}`)}>
                    {`${String(index + 4).padStart(2, '0')}${title_spacing}${section.title}`}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {project.sections.map((section, index) => (
          <Section key={index} i={index+4} {...section} id_tag={id_tag}/>
        ))}

      </div>
    </div>
  );
};

function Section(props) {
  const formattedIndex = String(props.i).padStart(2, '0');
  const sectionClass = props.i % 2 === 0 ? "project-section alt-proj-section-background": "project-section"; // Conditionally apply class

  return(
    <div className={sectionClass} id={`section-${props.i}`}>
      <h2>{formattedIndex}{title_spacing}{props.title}</h2>
      <div className="section-contents">

          <div className='inline-contents'>
            {props.inline_images && props.inline_images.map((image, index) => {
              const projectName = image.path.split('/')[2]; // extract the project name
              const imgName = image.path.split('/')[3].split('.')[0]; // extract the image name
              return (
                <img key={index} src={image.path} className={`${projectName}-${imgName}`} alt={image.alt} />
              );
            })}

          {props.carousel && (
            <Carousel items={[...props.carousel]} />
          )}

          {props.inline_video && (
            <video controls autoPlay muted>
              <source src={props.inline_video.path} type="video/mp4" alt={props.inline_video.alt}/>
            </video>
          )}


            <div className="section-text">

              {props.contents && props.contents.map((content, index) => (
                <ContentComponent key={index} content={content} />
              ))}
              
            </div>
          </div>

          {props.full_images && props.full_images.map((image, index) => {
            const projectName = image.path.split('/')[2]; // extract the project name
            const imgName = image.path.split('/')[3].split('.')[0]; // extract the image name
            return (
              <img key={index} src={image.path} className={`full-img ${projectName}-${imgName}`} alt={image.alt} />
            );
          })}

          {props.title === "Style Guide" && <PartifulStyleGuide />}

        </div>
    </div>
  )
}


const ContentComponent = ({ content }) => {
  if (content.text) {
    return <p className="proj-text-section">{content.text}</p>;
  } else if (content.list) {
    return (
      <ol className="proj-list-section">
        {content.list.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ol>
    );
  } else if (content.links) {
    return (
      <div className="links-container">
        {content.links && content.links.map((l, index) => (
          <a key={`${content}-${index}`} href={l.link} target="_blank" className="link clickable">
            <LinkIcon />
            <p>{l.name}</p>
          </a>
        ))}
      </div>
    );
  } else if (content.subsections) {
    return (
      <div className="subsections-container">
        {content.subsections && content.subsections.map((item, index) => (
          <CollapsableSubsection key={`${content}-${index}`} {...item} i={index} />
        ))}
      </div>
    );
  }
};


const Subsection = (props) => {
  return(
    <div className="project-subsection">
      <h3>{props.title}</h3>
      <div className={`subsection-contents`}>

          <div className='inline-contents'>
          {props.inline_images && props.inline_images.map((image, index) => {
              const projectName = image.path.split('/')[2]; // extract the project name
              const imgName = image.path.split('/')[3].split('.')[0]; // extract the image name
              return (
                <img key={index} src={image.path} className={`${projectName}-${imgName}`} alt={image.alt} />
              );
            })}

            <div className="section-text">
              {props.contents && props.contents.map((content, index) => (
                <ContentComponent key={index} content={content} />
              ))}
            </div>
          </div>

          {props.full_images && props.full_images.map((image, index) => {
            const projectName = image.path.split('/')[2]; // extract the project name
            const imgName = image.path.split('/')[3].split('.')[0]; // extract the image name
            return (
              <img key={index} src={image.path} className={`full-img ${projectName}-${imgName}`} alt={image.alt} />
            );
          })}

          {props.title === "Style Guide" && <PartifulStyleGuide />}

        </div>
    </div>
  )
}

const CollapsableSubsection = (props) => {
  const [isCollapsed, setIsCollapsed] = useState('collapsed');
  // const i = String(props.index).padStart(2, '0');

  return(
    <div className="project-subsection" key={props.i}>
      <div className="subsection-toggle-header">
        <IconButton
          className={`collapse-button clickable ${isCollapsed ? 'collapsed' : 'expanded'}`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <h3 className="collapsable-header">{props.title}</h3>
          {isCollapsed ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </IconButton>
      </div>
      
      <div className={`subsection-contents collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>

          <div className='inline-contents'>
            {props.inline_images && props.inline_images.map((image, index) => {
              const projectName = image.path.split('/')[2]; // extract the project name
              const imgName = image.path.split('/')[3].split('.')[0]; // extract the image name
              return (
                <img key={index} src={image.path} className={`${projectName}-${imgName}`} alt={image.alt} />
              );
            })}

            <div className="section-text">
              {props.contents && props.contents.map((content, index) => (
                <ContentComponent key={index} content={content} />
              ))}
            </div>
          </div>

          {props.full_images && props.full_images.map((image, index) => {
            const projectName = image.path.split('/')[2]; // extract the project name
            const imgName = image.path.split('/')[3].split('.')[0]; // extract the image name
            return (
              <img key={index} src={image.path} className={`full-img ${projectName}-${imgName}`} alt={image.alt} />
            );
          })}

          {props.title === "Style Guide" && <PartifulStyleGuide />}

        </div>
    </div>
  )
}
