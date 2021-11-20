import { Component } from 'react';
import ReactTooltip from 'react-tooltip';
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
      content: "about"
    }
  }

  onClick = link => {
    this.setState({ content: link.target.id });
  }

  render() {
    return (
      <main className="App">
        <header>
          <Icon image="ma-icon" />
          <Name />
          <SocialMedia />
        </header>
        <nav>
          <NavBar content={this.state.content} onClick={this.onClick} />
        </nav>
        <section>
          <Section content={this.state.content} />
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
