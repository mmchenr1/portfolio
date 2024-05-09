import ProjectBox from '../components/ProjectBox'
import work_data from '../data/work.json'

export default function Work() {
    return(
        <div id="work-page">
            <div id="home-header">
                
            <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
            {/* Define the clip path using an SVG image */}
            <defs>
                <clipPath id="clip-svg">
                <rect width="100%" height="100%"/>
                    <path d="M1280 410.013C1280 513.704 993.462 597.762 640 597.762C286.538 597.762 0 513.704 0 410.013C0 306.322 302.038 310.016 655.5 310.016C1008.96 310.016 1280 306.322 1280 410.013Z
                    M300 400Q400 400 500 500Q600 600 700 500Q800 400 900 400Q1000 400 1100 400L1100 100L300 100Z"/>
                </clipPath>
           </defs>
            </svg>
            
                <div id="home-banner-contents">
                    <div id="greeting-message">
                        <p id="greeting-line1">Hi, I'm Molly!</p>
                        <p id="greeting-line2">Embedded software engineer, currently at Brown U and IRIS, Inc.</p>
                    </div>

                    {/* <div id="headshot-container">
                        <img id="headshot" src={require('../public/assets/placeholder.png')}></img>
                    </div> */}
                </div>
            </div>

            <h1>Work</h1>
            <div id="work-section">
                {work_data.map((project, index) => (
                    <ProjectBox key={index} {...project} />
                ))}
            </div>
        </div>
    )
}