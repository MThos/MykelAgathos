import React from 'react';
import AnimateStyled from 'animate-styled';

const About = () => {
  return (
    <div id="about-section">
      <AnimateStyled name="fadeIn" iterationCount="1" duration="1s">
        <div>
          <div className="section-title">Hello, I'm Mykel Agathos.</div>
          <p>I have been a software developer for as long as I can remember. I started in Windows 3.1 with Visual Basic 3.0 <span className="italic">(16-bit...)</span> and now work in Visual Studio 2022 and Visual Studio Code. What a long strange road it's been. During that period of time I've learned a lot of programming languages &#8212; PHP, JavaScript, and recently Python. I have recently been focused on ReactJS, as it is both quick for development, has a high reusability of components, has a large community behind it, and in all honestly &#8212; is the most in-demand development skill for the web currently.</p>
        </div>                
        <div className="margin-top-bottom">
          <span>I have earned three diplomas in the last decade:</span>
          <ul className="bold">
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
        <div>
          <p>I currently work my day job as a software developer, as well as database administrator and system administrator. It is a very fast paced environment where every minute of downtime could be in the tens of thousands of dollars. This has taught me to work efficiently in a fast-paced, constantly changing environment. It is both a very stressful but rewarding job where I have got to involve myself in all the different facets of the information technology sector.</p>
          <p>For more information about me, please see my LinkedIn at the top of the page, or check my latest projects.</p>
          <p>If you have any questions, services, job offers, or just simply assistance with development in one of the languages I work in &#8212; <span className="bold">please feel free to reach out to me</span> via my contact links at the top of the page.</p>
          <p>I will respond the fastest by LinkedIn or text message.</p>
          <br/>
          <p>Regards,</p>
        </div>
        <div id="signature">
          <img src="/images/compressed/signature.webp" alt="Mykel Agathos signature" />
          <br/>
          Mykel Agathos
        </div>      
      </AnimateStyled>
    </div>
  );
}

export default About;