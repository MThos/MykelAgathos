import React from 'react';
import AnimateStyled from 'animate-styled';

const Services = () => {
  return (
    <div id="services-section">
      <AnimateStyled name="fadeIn" iterationCount="1" duration="1s">
        <div>
          <div className="section-title">I offer a lot of different services!</div>
          <p>If something isn't listed or if the area you are looking for doesn't include a specific feature I am sure we can work with you on it &#8212; <span className="bold">please feel free to ask.</span></p>
          <p>I am willing to work with people to meet their needs and around any budget &#8212; <span className="bold">big or small projects.</span></p>
        </div>
        <br/>
        <div className="flex">
          <div className="column-one">
            <div className="bold underline">Web Development</div>
            <ul className="services-list-ul">
              <li>Single Page Apps</li>
              <li>Multi Page Apps</li>
              <li>Proof of Concepts</li>
              <li>e-Commerce</li>
              <li>Blogs</li>
              <li>Portfolios</li>
              <li>Not For Profit</li>
              <li>Small Business</li>
              <li>Medium Business</li>
              <li>Company Portals</li>
            </ul>
          </div>
          <br/>
          <div className="column-two">
            <div className="bold underline">Database Administration</div>
            <ul className="services-list-ul">
              <li>Maintenance Plans</li>
              <li>Backup Redundancy</li>
              <li>Schema Design</li>
              <li>Troubleshooting</li>
              <li>Security</li>
            </ul>
          </div>
          <br/>
          <div className="column-three">
            <div className="bold underline">Cloud / Hosting</div>
            <ul className="services-list-ul">
              <li>Cloud Setup</li>
              <li>Hosting Setup</li>
              <li>Cloudflare Setup</li>
              <li>Stress Testing</li>
              <li>Search Optimization</li>
            </ul>
          </div>
        </div>
        <br/>
      </AnimateStyled>
    </div>
  );
}

export default Services;