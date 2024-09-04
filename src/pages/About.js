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
                        I'm Molly McHenry, an embedded software engineer and pilot passionate about developing electronic aviation technology, centering on safety and intuitive design.
                    </p>

                    <p>
                        As a hands-on and collaborative problem-solver, I love working with a team during the design and development processes. I specialize in designing, developing, and testing real-time embedded systems, state machines, and communication protocols.
                    </p>

                    <p>
                        I'm currently studying at Brown University and working as an embedded software developer at IRIS Therapeutic Devices. 
                    </p>
                </div>
            </div>
        </div>
    )
}