export default function Navbar() {    
    return(
        <div id="navbar">
            <a id="site-title" className="clickable" href="/">Molly McHenry</a>
            <div id="page-links">
                <a className="navbar-link clickable" href="/" id="work-link">Work</a>
                <a className="navbar-link clickable" href="/About" id="about-link">About</a>
                <a className="navbar-link clickable" id="resume-link" 
                    href='/assets/Resume_Embedded_Systems_Molly_McHenry.pdf' target="_blank">
                    Resume</a>
                
            </div>
        </div>
    )
}