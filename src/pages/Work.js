import ProjectBox from '../components/ProjectBox'
import work_data from '../data/work.json'

export default function Work() {
    return(
        <div id="work-page">
            <div id="home-header">         
                <div id="home-banner-contents">
                    <div id="greeting-message">
                        <h1 id="greeting-line1">Hi, I'm Molly!</h1>
                        <p id="greeting-line2">Software engineer and pilot who loves music streaming, trees, and sports.</p>
                    </div>
                </div>
            </div>

            <h2>Work</h2>
            <div id="work-section">
                {work_data.map((project, index) => (
                    <ProjectBox i={index} {...project} />
                ))}
            </div>
        </div>
    )
}