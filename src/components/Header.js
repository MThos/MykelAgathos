import React from 'react';
import Icon from './Icon';
import SocialMedia from './SocialMedia';
import AnimateStyled from 'animate-styled';

const Header = () => {
  return(
    <header>
      <AnimateStyled name="zoomIn" iterationCount="1" duration="2s">
        <Icon image="ma-icon" />
      </AnimateStyled>
      <div id="name">Mykel Agathos</div>
      <AnimateStyled name="zoomIn" iterationCount="1" duration="2s">
        <div id="social-media">
          <SocialMedia 
            link="http://www.instagram.com" 
            tooltip="#mykelagathos"
            image="instagram.png" />
          <SocialMedia 
            link="http://www.facebook.com" 
            tooltip="Mykel Agathos"
            image="facebook.png" />
          <SocialMedia 
            link="http://www.twitter.com" 
            tooltip="@mykelagathos"
            image="twitter.png" />
          <SocialMedia 
            link="https://github.com/MThos" 
            tooltip="https://github.com/MThos"
            image="github.png" />
          <SocialMedia 
            link="https://www.linkedin.com/in/mykel-agathos/" 
            tooltip="Mykel Agathos"
            image="linkedin.png" />
          <SocialMedia 
            link="tel:+12263763450" 
            tooltip="226.376.3450"
            image="whatsapp.png" />
          <SocialMedia 
            link="mailto:mykel.thos@gmail.com" 
            tooltip="mykel.thos@gmail.com"
            image="email.png" />
        </div>
      </AnimateStyled>
    </header>
  )
}

export default Header;