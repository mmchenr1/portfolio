export default function About() {
    return(
        <div id="about-page">
            <h1>About</h1>
            <div id="about-contents" className="inline-contents">
                <div className="inline-images">
                    <img id="about-img" src="../assets/personal-pic.jpg" alt="Me in the snow in RI, holding a snow heart"></img>
                </div>
                <div id="about-text-blurb">
                    <p>
                        I'm Molly McHenry, a software engineer and pilot passionate about data pipelines and backend infrastructure development.
                    </p>

                    <p>
                        As a hands-on and collaborative problem-solver, I love working with a team during the design and development processes. There's few things I enjoy more than ideating code and system structures with a group. I believe in intuitive, scalable, and dynamic software systems and love building them out!
                    </p>

                    <p>
                        I'm currently studying at Brown University and working as a software developer at IRIS Therapeutic Devices. 
                    </p>
                </div>
            </div>
        </div>
    )
}