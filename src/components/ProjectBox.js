import { useNavigate } from 'react-router-dom';

export default function ProjectBox(props) {
    const { name, description, frameworks } = props;
    const navigate = useNavigate();

    return(
        <div className="work-square clickable" 
            id={name}
            onClick={() => navigate(`${props.route}`)}
        >
            <div className="work-square-overlay">
                <div className="overlay-contents">
                    <p className="work-name">
                        {name}
                    </p>
                    <p className="work-description">
                        {description}
                    </p>
                    
                    <div className="tags">
                        {frameworks.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </div>
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