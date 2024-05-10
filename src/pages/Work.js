import ProjectBox from '../components/ProjectBox'
import work_data from '../data/work.json'

export default function Work() {
    return(
        <div id="work-page">
            <div id="home-header">         
                <div id="home-banner-contents">
                    <div id="greeting-message">
                        <p id="greeting-line1">Hi, I'm Molly!</p>
                        <p id="greeting-line2">Embedded software engineer and pilot who loves coffee, trees, and electronic aviation technology.</p>
                    </div>
                </div>
            </div>

            <h1>Work</h1>
            <div id="work-section">
                {work_data.map((project, index) => (
                    <ProjectBox i={index} {...project} />
                ))}
            </div>
        </div>
    )
}