import { useNavigate } from 'react-router-dom';

export default function ProjectBox(props) {
    const { name, description_short, frameworks } = props;
    const navigate = useNavigate();
    return(
        <div className="work-square clickable" 
            id={name}
            onClick={() => navigate(`${props.route}`)}
            key={props.i}
        >
            <img src={props.cover_image.path} alt={props.cover_image.alt} className="work-square-image"/>
            <div className="work-square-overlay">
                <div className="overlay-contents">
                    <p className="work-name">
                        {name}
                    </p>
                    <p className="work-description">
                        {description_short}
                    </p>
                    
                    {frameworks && 
                    <p className="frameworks">{frameworks.join(', ')}</p>}
                </div>
            </div>
        </div>
    )
}

function Tag(props) {
    return(
        <div className="framework-tag">
            <p className="tag-text">
                {props.tag}
            </p>
        </div>
    )
}