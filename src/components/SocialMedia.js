import React, {Component} from 'react';

class SocialMedia extends Component {
    render() {
        return (
            <div id="social-media">
                <a href="http://www.instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    data-tip="@magathos" 
                    data-border="true" 
                    data-place="bottom"
                    data-background-color="black">
                        <img className="social-icon" src="/images/instagram.png" alt="@magathos" />
                </a>
                <a href="http://www.facebook.com" 
                    target="_blank" 
                    rel="noreferrer"
                    data-tip="Mykel Agathos" 
                    data-border="true" 
                    data-place="bottom"
                    data-background-color="black">
                        <img className="social-icon" src="/images/facebook.png" alt="Mykel Agathos" />
                </a>
                <a href="http://www.twitter.com" 
                    target="_blank"
                    rel="noreferrer"
                    data-tip="#magathos" 
                    data-border="true" 
                    data-place="bottom"
                    data-background-color="black">
                        <img className="social-icon" src="/images/twitter.png" alt="@magathos" />
                </a>
                <a href="https://github.com/MThos" 
                    target="_blank" 
                    rel="noreferrer"
                    data-tip="https://github.com/MThos"
                    data-border="true" 
                    data-place="bottom"
                    data-background-color="black">
                        <img className="social-icon" src="/images/github.png" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/mykel-agathos/" 
                    target="_blank" 
                    rel="noreferrer"
                    data-tip="Mykel Agathos" 
                    data-border="true" 
                    data-place="bottom"
                    data-background-color="black">
                        <img className="social-icon" src="/images/linkedin.png" alt="Mykel Agathos" />
                </a>
                <a href="tel:+12263763450" 
                    target="_blank" 
                    rel="noreferrer"
                    data-tip="226.376.3450"
                    data-border="true" 
                    data-place="bottom"
                    data-background-color="black">
                        <img className="social-icon" src="/images/whatsapp.png" alt="226.376.3450" />
                </a>
                <a href="mailto:mykel.thos@gmail.com" 
                    target="_blank" 
                    rel="noreferrer"
                    data-tip="mykel.thos@gmail.com" 
                    data-border="true" 
                    data-place="bottom"
                    data-background-color="black">
                        <img className="social-icon" src="/images/email.png" alt="mykel.thos@gmail.com" />
                </a>
            </div>
        );
    }
}

export default SocialMedia;