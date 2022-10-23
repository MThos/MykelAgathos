import React from 'react';
import Icon from './Icon';
import SocialMedia from './SocialMedia';

const Header = () => {
  return(
    <header className="fade-in">
      <Icon image="ma-icon" />
      <div id="name">Mykel Agathos</div>
      <div id="social-media">
        <SocialMedia 
          link="http://www.instagram.com/mykelagathos" 
          tooltip="#mykelagathos"
          image="instagram.webp" />
        <SocialMedia 
          link="http://www.facebook.com/mykel.agathos" 
          tooltip="Mykel Agathos"
          image="facebook.webp" />
        <SocialMedia 
          link="https://twitter.com/AgathosMykel" 
          tooltip="@AgathosMykel"
          image="twitter.webp" />
        <SocialMedia 
          link="https://github.com/MThos" 
          tooltip="https://github.com/MThos"
          image="github.webp" />
        <SocialMedia 
          link="https://www.linkedin.com/in/mykel-agathos/" 
          tooltip="Mykel Agathos"
          image="linkedin.webp" />
        <SocialMedia 
          link="tel:+12263763450" 
          tooltip="226.376.3450"
          image="whatsapp.webp" />
        <SocialMedia 
          link="mailto:mykel.thos@gmail.com" 
          tooltip="mykel.thos@gmail.com"
          image="email.webp" />
      </div>
    </header>
  )
}

export default Header;