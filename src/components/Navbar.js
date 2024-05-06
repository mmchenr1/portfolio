export default function Navbar() {    
    return(
        <div id="navbar">
            <p id="site-title">Molly McHenry</p>
            <div id="page-links">
                <a className="navbar-link" href="/" id="work-link">Work</a>
                <a className="navbar-link" href="/About" id="about-link">About</a>
                <a className="navbar-link" id="resume-link" 
                    href='/assets/Molly_McHenry_Resume.pdf' target="_blank">
                    Resume</a>
                
            </div>
        </div>
    )
}