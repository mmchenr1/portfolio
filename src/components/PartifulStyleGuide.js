import React from "react";

const PartifulStyleGuide = () => {
  return (
    <div id="partiful-style-guide">  
        <div>   
            <h4>Fonts</h4>
            <p class="SYNE">SYNE: 700 weight used for event titles (44px), pop-up titles (25px), and names on profile pages (28px). </p>
                <p class="TWK-Lausanne-Pan">TWK Lausanne Pan:
                
                <ul class="font-list">
                    <li class="TWK-Lausanne-Pan f700">700 weight is used for page headings in the top panel (18px) and subsection headings (18px). </li>
                    <li class="TWK-Lausanne-Pan f550">550 weight is used for button text (14px for in page button, 16px for pop-up buttons) and names of profile cards (16px). </li>
                    <li class="TWK-Lausanne-Pan f350">350 weight is used for both large body text (20px) and regular body text (12px).</li>
                </ul>
            </p>
        </div>    
        
        <div>
        <h4>Colors</h4>
            <p>
                We built our prototype on Partiful's convention of a dark background (191B1D) with white text (FFFFFF).
                Additionally, we were provided with multiple custom gradients and image overlays, which augment the dark background color and can be seen in our hi-fi mockups.
                We also used colors common to these provided overlays to create gradient and radial backgrounds for our popups and calls to action. 
                We also added a yellow color for our completed profile badges, which was then incorporated as an accent color in the popups.
            </p>

            <div class="color-flex" id="background-color-circles">
                <div>
                    <span id="color-AE0FC8"></span> 
                    <p>#AE0FC8</p>
                    <p><b>Dark Violet</b></p>
                </div>
                
                <div>
                    <span id="color-6F00FC"></span> 
                    <p> #6F00FC </p>
                    <p><b>Electric Indigo</b>
                    </p>
                </div>
                
                <div>
                    <span id="color-4B1097"></span> 
                    <p> #4B1097</p>
                    <p><b>Indigo</b>
                    </p>
                </div>

                <div>
                    <span id="color-FFD480"></span> 
                    <p> #FFD480 </p>
                    <p><b>Jasmine</b></p>
                </div>
            </div>
        </div>

        <div>
        <h4>Icons</h4>
            <div class="icon-section">
                <div class="icon-item">
                    
                    <img class="icon" src="../assets/partiful/icons/Chat.svg" alt="Camera Icon"/>
                    <figcaption>Chat</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/Camera Icon.svg" alt="Camera Icon"/>
                    <figcaption>Camera</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/Link.svg" alt="Camera Icon"/>
                    <figcaption>Song Link</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/Clock.svg" alt="Camera Icon"/>
                    <figcaption>Clock</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/Instagram.svg" alt="Camera Icon"/>
                    <figcaption>Socials</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/PencilUnlock.svg" alt="Camera Icon"/>
                    <figcaption>Unlock Completion</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/CompleteBadge.svg" alt="Camera Icon"/>
                    <figcaption>Complete Badge</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/PartyCount.svg" alt="Camera Icon"/>
                    <figcaption>Mutual Party Count</figcaption>
                </div>
                
                <div class="icon-item">
                    <img class="icon" src="../assets/partiful/icons/Users.svg" alt="Camera Icon"/>
                    <figcaption>Users</figcaption>
                </div>
            </div>
        </div>
        
        <div>
            <h4>Others</h4>
            <p>Square corners should always be used, unless using 100% rounded corners in special cases, like buttons. We also created components to use for our profile cards, drawing on the preexisting style guide.</p>
        </div>
    </div>
    )
}

export default PartifulStyleGuide;