import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <div id="skills-section">
                <div className="flex">
                    <div className="column-one">
                        <div className="bold">Languages</div>
                        <ul>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SCSS</li>
                            <li>Visual Basic</li>
                            <li>C#</li>
                        </ul>
                    </div>
                    <div className="column-two">
                        <div className="bold">Frameworks</div>
                        <ul>
                            <li>ReactJS</li>
                            <li>Laravel</li>
                            <li>jQuery</li>
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
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </div>        
                    <div>
                        <div className="bold">Server / Cloud</div>
                        <ul>
                            <li>Digital Ocean</li>
                            <li>Amazon AWS</li>
                            <li>Microsoft Azure</li>
                            <li>Heroku</li>
                            <li>LAMP</li>
                            <li>WAMP</li>
                            <li>Cloudflare</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div>
                        <div className="bold">Other</div>
                        <ul>
                            <li>Git</li>
                            <li>TFS</li>
                            <li>Visual Studio</li>
                            <li>Unit Testing</li>
                            <li>Cybersecurity</li>
                        </ul>
                    </div>       
                </div>
            </div>
        );
    }
}

export default Skills;