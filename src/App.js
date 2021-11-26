import { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import AnimateStyled from 'animate-styled';
import './App.css';
import Icon from './components/Icon';
import Name from './components/Name';
import SocialMedia from './components/SocialMedia';
import NavBar from './components/NavBar';
import Section from './components/Section';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: "about"
    }
  }

  onClick = link => {
    this.setState({ active: link.target.id });
  }

  render() {
    return (
      <main className="App">
        <header>
          <Icon image="ma-icon" />
          <Name />
          <AnimateStyled name="zoomIn" iterationCount="1" duration="1s">
            <div id="social-media">
              <SocialMedia 
                link="http://www.instagram.com" 
                tooltip="@magathos"
                image="instagram.png" />
              <SocialMedia 
                link="http://www.facebook.com" 
                tooltip="Mykel Agathos"
                image="facebook.png" />
              <SocialMedia 
                link="http://www.twitter.com" 
                tooltip="#magathos"
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
        <nav id="nav-bar">
          <NavBar 
            content="about"
            active={this.state.active}
            onClick={this.onClick} />
          <NavBar 
            content="projects" 
            active={this.state.active}
            onClick={this.onClick} />
          <NavBar 
            content="skills" 
            active={this.state.active}
            onClick={this.onClick} />
          <NavBar 
            content="services" 
            active={this.state.active}
            onClick={this.onClick} />
          <NavBar 
            content="setup" 
            active={this.state.active}
            onClick={this.onClick} />
        </nav>
        <section>
          <Section content={this.state.active} />
        </section>
        <footer>
          <Icon image="canada" />
        </footer>
        <ReactTooltip />
      </main>
    );
  }  
}

export default App;
