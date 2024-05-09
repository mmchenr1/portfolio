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
  console.log("HERE")
  console.log(project.image_link)
  return (
    <div id={project} className="project-page">
      <div id="progress-bar-container">
      <div id="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <div id="project-contents">
        <h2 id="project-header">{project.name}</h2>

        <div id="proj-overview-section">
          {project.image_link ? (
            <a id="cover-img-container">
              <img id="cover-img" src={project.main_image} alt='image of ${project.name} final product'></img>
                <a className="open-in-new-window-overlay"  href={project.image_link} target="_blank">
                  <OpenInNewIcon style={{ fontSize: 80 }} />
                </a>
            </a>
          ) :
            <a id="cover-img-container">
              <img id="cover-img" src={project.main_image} alt='image of ${project.name} final product'></img>
            </a>
          }

          <div id='proj-description-section'>
            <h3>01{title_spacing}Project</h3>
            <p>{project.description_long}</p>
          </div>
        </div>

        <div id="proj-info-nav-section">
          <div id="proj-info">
            <h3>02{title_spacing}Info</h3>
            <div id="info-contents">
              <p><b>Role:</b> { project.role}</p>
              {project.frameworks && <p><b>Frameworks:</b> {project.frameworks.join(', ')}</p>}
              {project.collaborators && <p><b>Collaborators:</b> {project.collaborators}</p>}
              <p><b>Timeline:</b>  {project.timeline}</p>
            </div>
          </div>

          <div id="proj-jump-to">
            <div id="proj-jump-to">
              <h3>03{title_spacing}Jump To</h3>
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
          <Section key={index} i={index+4} {...section}/>
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
    <div className={sectionClass} id={`section-${props.i}`}>
      <h3>{formattedIndex}{title_spacing}{props.title}</h3>
      <div className="section-contents">

          <div className='inline-contents'>
            {props.inline_images && props.inline_images.map((image, index) => (
              <img key={index} src={image}/>
            ))}

          {props.carousel && (
            <Carousel items={[...props.carousel]} />
          )}


            <div className="section-text">

              {props.contents && props.contents.map((content, index) => (
                <ContentComponent key={index} content={content} />
              ))}
              
            </div>
          </div>

          {props.full_images && props.full_images.map((image, index) => (
            <img key={index} src={image} className='full-img'/>
          ))}

          {props.title === "Style Guide" && <PartifulStyleGuide />}

        </div>
    </div>
  )
}


const ContentComponent = ({ content }) => {
  if(content.text){
    return <p className="proj-text-section">{content.text}</p>
  } else if (content.list){
    return(
        <ol className="proj-list-section">
          {content.list.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ol>
    )
  } else if (content.links){
    return(
      <div className="links-container">
         {content.links && content.links.map((l, index) => (
          <a key={index} href={l.link} target="_blank" className="link clickable">
            <LinkIcon/>
            {l.name}
          </a>
        ))}
      </div>
    )
  } else if (content.subsections){
    return(
      <div className="subsections-container">
        {content.subsections && content.subsections.map((item, index) => (
          <CollapsableSubsection {...item} index={index}/>
        ))}
      </div >
    )
  }
}

const Subsection = (props) => {
  return(
    <div className="project-subsection">
      <h4>{props.title}</h4>
      <div className={`subsection-contents`}>

          <div className='inline-contents'>
            {props.inline_images && props.inline_images.map((image, index) => (
              <img key={index} src={image}/>
            ))}

            <div className="section-text">
              {props.contents && props.contents.map((content, index) => (
                <ContentComponent key={index} content={content} />
              ))}
            </div>
          </div>

          {props.full_images && props.full_images.map((image, index) => (
            <img key={index} src={image} className='full-img'/>
          ))}

          {props.title === "Style Guide" && <PartifulStyleGuide />}

        </div>
    </div>
  )
}

const CollapsableSubsection = (props) => {
  const [isCollapsed, setIsCollapsed] = useState('collapsed');
  const i = String(props.index).padStart(2, '0');

  return(
    <div className="project-subsection">
      <div className="subsection-toggle-header">
        <IconButton
          className={`collapse-button clickable ${isCollapsed ? 'collapsed' : 'expanded'}`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <h4 className="collapsable-header">{i}{title_spacing}{props.title}</h4>
          {isCollapsed ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </IconButton>
      </div>
      
      <div className={`subsection-contents collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>

          <div className='inline-contents'>
            {props.inline_images && props.inline_images.map((image, index) => (
              <img key={index} src={image}/>
            ))}

            <div className="section-text">
              {props.contents && props.contents.map((content, index) => (
                <ContentComponent key={index} content={content} />
              ))}
            </div>
          </div>

          {props.full_images && props.full_images.map((image, index) => (
            <img key={index} src={image} className='full-img'/>
          ))}

          {props.title === "Style Guide" && <PartifulStyleGuide />}

        </div>
    </div>
  )
}
