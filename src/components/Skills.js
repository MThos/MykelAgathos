import React from 'react';

const Skills = () => {
  return (
    <div id="skills-section" className="fade-in">
      <div>
        <div className="section-title">
          WOW! Look at all those skills!</div>
        <p>I have used, and I am familiar within many areas of the information technology sector &#8212; not only development. I have acquired some of these skills from before I was high school, some in college, some on the job, and honestly some in the last month. I'm always learning as the field is ever changing. In this industry of technology, if you fall behind, you will quickly find yourself playing catch up.</p>
        <p>Skills marked with a <span className="checkmark relative">&#10003;</span> are ones I am currently in the process of trying to use daily and master &#8212; not just simply understand how to use it, but the fundamentals behind it as well.</p>
      </div>
      <br/>
      <div id="skills-list" className="flex">
        <div className="column-one">
          <div className="skill-type-header bold underline">Languages</div>
          <ul className="skills-list-ul">
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Visual Basic</li>
            <li>C#</li>
            <li>Python</li>
            <li>Swift</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
          </ul>
        </div>
        <div className="column-two">
          <div className="skill-type-header bold underline">Frameworks</div>
          <ul className="skills-list-ul">
            <li>ReactJS<span className="checkmark">&#10003;</span></li>
            <li>NodeJS<span className="checkmark">&#10003;</span></li>
            <li>ElectronJS</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Flask</li>
            <li>.NET</li>
          </ul>
        </div>
        <div className="column-three">
          <div className="skill-type-header bold underline">Databases</div>
          <ul className="skills-list-ul">
            <li>MongoDB<span className="checkmark">&#10003;</span></li>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>Redis</li>
          </ul>
        </div>        
        <div className="column-four">
          <div className="skill-type-header bold underline">Server / Cloud</div>
          <ul className="skills-list-ul">
            <li>Azure<span className="checkmark">&#10003;</span></li>
            <li>Heroku<span className="checkmark">&#10003;</span></li>
            <li>Digital Ocean<span className="checkmark">&#10003;</span></li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Apache</li>
            <li>Nginx</li>
            <li>LAMP</li>
            <li>WAMP</li>
          </ul>
        </div>
        <div className="column-five">
          <div className="skill-type-header bold underline">Other</div>
          <ul className="skills-list-ul">
            <li>GitHub</li>
            <li>TFS</li>
            <li>SEO</li>
            <li>VSCode</li>
            <li>XCode</li>
            <li>Cloudflare</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;