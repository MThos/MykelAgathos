import { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './App.css';
import Icon from './components/Icon';
import Name from './components/Name';
import SocialMedia from './components/SocialMedia';
import NavBar from './components/NavBar';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="Header">
          <Icon image="ma-icon" />
          <Name />
          <SocialMedia />
        </header>
        <nav className="Nav">
          <NavBar />
        </nav>
        <section>
          <About />
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
