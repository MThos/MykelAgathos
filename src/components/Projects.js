import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return (
            <div id="projects-section">
                <div className="project-example">
                    <div className="project-title">
                        League Census
                    </div>
                    <div className="project-link">
                        <a href="https://leaguecensus.com" target="_blank" 
                rel="noreferrer">leaguecensus.com</a>
                    </div>
                    <div className="project-desc">
                    League Census is a Django web application for retrieval of summoner, champion, item and server status information by pulling data from Riot Games API. The application is a work in progress and is built from code I had originally written in PHP and JavaScript many years ago and I am now in the process of converting it to Django. It is constantly being improved and updated as I find the time between other projects and work. Any data is stored in MongoDB and comes directly from the File System flat json files provided by Riot Games Data Dragon website or by calls directly to Riot Games API &#8212; or Redis cache. Caching of data is handled by both Redis and Cloudflare.<br/><br/>
                    <div className="project-git">
                        <img className="project-git-icon" src="/images/github.png" alt="Github" />
                        <a href="https://github.com/MThos/lolcensus" target="_blank" rel="noreferrer">Github Repository</a>
                    </div>
                    <br/>
                    <div className="bold ul-header">Technical Specifications:</div>
                    <ul>
                        <li>Django</li>
                        <li>Python</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                        <li>Nginx</li>
                        <li>Gunicorn</li>
                        <li>Digital Ocean &#8212; 1x vCPU / 2GB RAM</li>
                        <li>Cloudflare &#8212; DNS / Firewall/ Caching / SSL</li>
                    </ul>
                    </div>
                    <img className="project-image" src="/images/leaguecensus.png" alt="League Census" />                    
                </div>
            </div>
        );
    }
}

export default Projects;