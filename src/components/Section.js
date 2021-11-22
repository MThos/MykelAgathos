import React, {Component} from 'react';
import Setup from './Setup';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';

class Section extends Component {
    render() {
        if (this.props.content === "about") {
            return (
                <About />            
            );
        } else if (this.props.content === "projects") {
            return (
                <Projects />
            );
        }  else if (this.props.content === "skills") {
            return (
                <Skills />
            );
        }  else if (this.props.content === "services") {
            return (
                <Services />
            );
        }  else if (this.props.content === "setup") {
            return (
                <Setup />
            );
        }   
    }
}

export default Section;