import React, { Component } from 'react';
import AnimateStyled from 'animate-styled';

class Skills extends Component {
    render() {
        return (
            <div id="skills-section">
                <AnimateStyled name="bounceInUp" iterationCount="1" duration="1s">
                    <div>
                        <div className="section-title">
                        WOW! Look at all those skills!</div>
                        <p>I have used and am familiar within many areas of the information technology sector &#8212; not only strictly development. I have acquired some of these skills from before I was high school, some in college, some on the job and some in the last month. I'm always learning, as the field is ever changing and if you lag behind, you will quickly find yourself left behind or playing catch up.</p>
                        <p>Skills marked with a <span class="checkmark relative">&#10003;</span> are ones I am currently in the process of trying to use daily and master &#8212; not just simply understand how to use it, but the fundamentals behind it as well.</p>
                    </div>
                    <br/>
                    <div id="skills-list" className="flex">
                        <div>
                            <div className="skill-type-header bold underline">Languages</div>
                            <ul className="skills-flex">
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Python</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>SCSS / SASS</li>
                                <li>Visual Basic</li>
                                <li>C#</li>
                            </ul>
                        </div>
                        <div>
                            <div className="skill-type-header bold underline">Frameworks</div>
                            <ul className="skills-flex">
                                <li>ReactJS<span class="checkmark">&#10003;</span></li>
                                <li>Laravel</li>
                                <li>jQuery</li>
                                <li>jQueryUI</li>
                                <li>Bootstrap</li>
                                <li>Flask</li>
                                <li>Django</li>
                                <li>.NET</li>
                            </ul>
                        </div>
                        <div>
                            <div className="skill-type-header bold underline">Databases</div>
                            <ul className="skills-flex">
                                <li>SQL Server</li>
                                <li>MySQL</li>
                                <li>MariaDB</li>
                                <li>MongoDB<span class="checkmark">&#10003;</span></li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>        
                        <div>
                            <div className="skill-type-header bold underline">Server / Cloud</div>
                            <ul className="skills-flex">
                                <li>Digital Ocean</li>
                                <li>AWS<span class="checkmark">&#10003;</span></li>
                                <li>Azure<span class="checkmark">&#10003;</span></li>
                                <li>Heroku</li>
                                <li>Docker</li>
                                <li>Apache / Nginx</li>
                                <li>LAMP</li>
                                <li>WAMP</li>
                                <li>Cloudflare</li>
                            </ul>
                        </div>
                        <div>
                            <div className="skill-type-header bold underline">Other</div>
                            <ul className="skills-flex">
                                <li>Git / Github</li>
                                <li>Microsoft TFS</li>
                                <li>SEO</li>
                                <li>Visual Studio</li>
                                <li>Unit Testing</li>
                                <li>Cybersecurity</li>
                                <li>CCNA</li>
                            </ul>
                        </div>       
                    </div>
                </AnimateStyled>
            </div>
        );
    }
}

export default Skills;