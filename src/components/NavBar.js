import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div id="nav-bar">
                <div className="nav-link">
                    <a href="#about">about</a>
                </div>
                <div className="nav-link">
                    <a href="#projects">projects</a>
                </div>
                <div className="nav-link">
                    <a href="#skills">skills</a>
                </div>
                <div className="nav-link">
                    <a href="#services">services</a>
                </div>
                <div className="nav-link">
                    <a href="#setup">setup</a>
                </div>
                <div className="nav-link">
                    <a href="#contact">contact</a>
                </div>
            </div>            
        );
    }
}

export default NavBar;