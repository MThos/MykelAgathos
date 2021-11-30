import React, {Component} from 'react';
import AnimateStyled from 'animate-styled';

class Services extends Component {
    render() {
        return (
            <div id="services-section">
                <AnimateStyled name="bounceInUp" iterationCount="1" duration="1s">
                    <div>
                        <div className="section-title">I offer a lot of different services!</div>
                        <p>If something isn't listed or if the area you are looking for doesn't include a specific feature I am sure we can work with you on it &#8212; <span class="bold">please feel free to ask.</span></p>
                        <p>I am willing to work with people to meet their needs and around most budgets &#8212; <span class="bold">big or small projects.</span></p>
                        <br/>
                        <div>
                            <div class="bold">Web Development</div>
                            <ul>
                                <li>Single-page or Multi-page Apps</li>
                                <li>Proof of Concepts</li>
                                <li>Overhaul of Existing Site</li>
                                <li>E-Commerce</li>
                                <li>Blogs</li>
                                <li>Portfolios</li>
                                <li>Corporate / Not For Profit</li>
                                <li>Small / Medium Business</li>
                                <li>Company Internal Portals</li>
                            </ul>
                        </div>
                        <br/>
                        <div>
                            <div class="bold">Web Design</div>
                            <ul>
                                <li>Proof of Concepts</li>
                                <li>Redesign of Existing Site</li>
                                <li>Design Specific Pages</li>
                            </ul>
                        </div>
                        <br/>
                        <div>
                            <div class="bold">Database Administration</div>
                            <ul>
                                <li>Maintenance Plan Setup</li>
                                <li>Backup Redundancy Setup</li>
                                <li>Database Design</li>
                                <li>Database Overhaul</li>
                                <li>Troubleshooting</li>
                                <li>Security</li>
                            </ul>
                        </div>
                        <br/>
                        <div>
                            <div class="bold">Cloud / Hosting Administration</div>
                            <ul>
                                <li>Cloud / Hosting Setup</li>
                                <li>AWS / Azure / Digital Ocean / Heroku</li>
                                <li>Cloudflare CDN / DDOS Protection / Cache Setup</li>
                                <li>Stress Testing</li>
                                <li>Search Engine Optimization</li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                </AnimateStyled>
            </div>
        );
    }
}

export default Services;