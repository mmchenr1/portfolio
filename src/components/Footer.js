import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return(
        <div id="footer">
            {/* <div id="footer-contents"> */}
                <h2 id="footer-message">Let's get in touch!</h2>
                <div id="footer-icons">
                    <a href="mailto:molly_mchenry@brown.edu" target="_blank" alt="link to email me">
                        <IconButton class="clickable" aria-label="email">
                            <MailOutlineIcon/>
                        </IconButton>
                    </a>

                    <a href="https://github.com/mmchenr1" target="_blank" alt="link to my GitHub page">
                        <IconButton class="clickable" aria-label="github">
                            <GitHubIcon/>
                        </IconButton>
                    </a>

                    <a href="https://www.linkedin.com/in/molly-mchenry-35a56b235/" target="_blank" alt="link to my LinkedIn profile">
                        <IconButton class="clickable" aria-label="linkedin">
                            <LinkedInIcon/>
                        </IconButton>
                    </a>
                    
                </div>
                <p id="footer-small-message"> made with ❤️ by M</p>
            {/* </div> */}
        </div>
    )
}