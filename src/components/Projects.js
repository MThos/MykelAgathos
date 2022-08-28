import React from 'react';
import AnimateStyled from 'animate-styled';

const Projects = () => {
  return (
    <div id="projects-section">
      <AnimateStyled name="fadeIn" iterationCount="1" duration="1s">
        <div className="project-example">
          <div className="section-title">
            League Census
          </div>
          <div className="project-link">
            <a href="https://www.leaguecensus.com" target="_blank" rel="noreferrer">https://www.leaguecensus.com</a>
          </div>
          <div className="project-desc">
            League Census is a ReactJS App for retrieval of champion and item information by pulling data from <a href="https://developer.riotgames.com/" target="_blank" rel="noreferrer">Riot Games API</a> as well as through <a href="https://github.com/meraki-analytics/lolstaticdata" target="_blank" rel="noreferrer">Meraki Analytics' LOLStaticData</a>.<br/><br/>
            The application is a work in progress and is built from code I had originally written in PHP and another version in Python many years ago and am now converting to Javascript. It is constantly being improved and updated. Any data comes directly from the FileSystem flat json files or by calls directly to Riot Games API (or cache). Caching of data is handled by Cloudflare.<br/><br/>
          <div className="project-git">
            <img className="project-git-icon" src="/images/compressed/github.webp" alt="Github" />
            <a href="https://github.com/MThos/lol" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
          <br/>
          <div className="bold ul-header">Technical Specifications:</div>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Digital Ocean &#8212; (App Platform CDN)</li>
              <li>Cloudflare &#8212; DNS / Firewall/ Caching / SSL</li>
            </ul>
          </div>
          <img className="project-image" src="/images/compressed/lol_example_1.webp" alt="League Census" />
          <img className="project-image" src="/images/compressed/lol_example_2.webp" alt="League Census" />
        </div>
        <span className="project-border"></span>
        <div className="project-example">
          <div className="section-title">
            CybrSecure
          </div>
          <div className="project-link">
            iOS App Store
          </div>
          <div className="project-desc">
            A simple but powerful secure password generator. You get the option of password length (10 to 20 characters) and whether you include numbers, symbols, uppercase and/or lowercase letters. Simply tap the lock icon to generate a secure password and then tap to copy the password. Most of the custom code can be found in ViewController.swift<br/><br/>
          <div className="project-git">
            <img className="project-git-icon" src="/images/compressed/github.webp" alt="Github" />
            <a href="https://github.com/MThos/CybrSecure" target="_blank" rel="noreferrer">Github Repository</a>
          </div>
          <br/>
          <div className="bold ul-header">Technical Specifications:</div>
            <ul>
              <li>iOS</li>
              <li>macOS</li>
              <li>Xcode</li>
            </ul>
          </div>
          <img className="project-image project-image-cybrsecure" src="/images/compressed/cybrsecure.webp" alt="CybrSecure" />
        </div>
      </AnimateStyled>
    </div>
  );
}

export default Projects;