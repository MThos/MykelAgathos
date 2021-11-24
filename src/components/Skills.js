import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <div id="skills-section">
                <div>
                    <div className="setup-title">WOW! Look at all those skills!</div>
                    <p>I have used and am very familiar with many area's of the infotech sector, not only strictly development. I have acquired some of these skills from before I was high school, some in college, some on the job and some in the last month. I'm always learning, as the field is ever changing and if you lag behind, you will quickly find yourself left behind or playing catch up.</p>
                    <p>Skills marked with a red asterick are ones I am currently in the process of trying to use daily and master &#8212; not just simply understand how to use it, but the fundamentals behind it as well.</p>
                </div>
                <br/>
                <div className="flex">
                    <div className="column-one">
                        <div className="bold">Languages</div>
                        <ul>
                            <li>JavaScript<span class="asterick bold">*</span></li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SCSS / SASS</li>
                            <li>Visual Basic</li>
                            <li>C#</li>
                        </ul>
                    </div>
                    <div className="column-two">
                        <div className="bold">Frameworks</div>
                        <ul>
                            <li>ReactJS<span class="asterick bold">*</span></li>
                            <li>Laravel</li>
                            <li>jQuery</li>
                            <li>jQueryUI</li>
                            <li>Bootstrap</li>
                            <li>Flask</li>
                            <li>Django</li>
                            <li>.NET</li>
                        </ul>
                    </div>
                    <div className="column-three">
                        <div className="bold">Databases</div>
                        <ul>
                            <li>SQL Server</li>
                            <li>MySQL</li>
                            <li>MariaDB</li>
                            <li>MongoDB<span class="asterick bold">*</span></li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>        
                    <div>
                        <div className="bold">Server / Cloud</div>
                        <ul>
                            <li>Digital Ocean</li>
                            <li>Amazon AWS</li>
                            <li>Microsoft Azure<span class="asterick bold">*</span></li>
                            <li>Heroku<span class="asterick bold">*</span></li>
                            <li>Docker</li>
                            <li>Apache / Nginx</li>
                            <li>LAMP</li>
                            <li>WAMP</li>
                            <li>Cloudflare</li>
                        </ul>
                    </div>
                    <div>
                        <div className="bold">Other</div>
                        <ul>
                            <li>Git / Github</li>
                            <li>Microsoft TFS</li>
                            <li>SEO</li>
                            <li>Visual Studio</li>
                            <li>Unit Testing</li>
                            <li>Cybersecurity</li>
                            <li>CCNA Certificate</li>
                        </ul>
                    </div>       
                </div>
            </div>
        );
    }
}

export default Skills;