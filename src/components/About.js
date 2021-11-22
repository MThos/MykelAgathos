import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div id="about-section">
                <div>
                    <p><span className="bold bigger-font">Hello, I'm Mykel Agathos.</span><br/><br/>I have been a software developer for as long as I can remember. I started in Windows 3.1 with Visual Basic 3.0 <span className="italic">(16-bit...)</span> and now work in Visual Studio 2019 (soon to be 2022!). What a long strange road it's been. During that period of time I've learned a lot of programming languages &#8212; PHP, JavaScript, and recently Python. I am recently focused on ReactJS, as it is both quick to develop with high reusability of its components, has a large community behind it, and in all honestly &#8212; is the most in-demand development skill for the web currently.</p>
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
                    <p>I currently work my day job as a software developer, as well as database administrator and system administrator. It is a very fast paced environment where every minute of downtime is in the tens of thousands of dollars. This has taught me to work efficiently, but also in a fast-paced environment. It is both a very stressful but rewarding job where I have got to put my hands in all the different facets of the information technology sector.</p>
                    <p>For more information about me, please see my LinkedIn at the top of the page, or check my latest projects.</p>
                    <p>If you have any questions, services, job offers, or just simply assistance with development in one of the languages I work in &#8212; <span className="bold">please feel free to reach out to me</span> from my social links at the top of the page. Fastest response will be by email or text message.</p>
                </div>                
            </div>
        );
    }
}

export default About;