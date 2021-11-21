import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div id="nav-bar">
                <div className="nav-link">
                    {
                        this.props.content === "about" ? ( 
                            <a id="about" href="#about" className="active" onClick={e => this.props.onClick(e)}>about</a>
                        ) : (                            
                            <a id="about" href="#about" onClick={e => this.props.onClick(e)}>about</a>
                        )
                    }
                </div>
                <div className="nav-link">
                    {
                        this.props.content === "projects" ? ( 
                            <a id="projects" href="#projects" className="active" onClick={e => this.props.onClick(e)}>projects</a>
                        ) : (                            
                            <a id="projects" href="#projects" onClick={e => this.props.onClick(e)}>projects</a>
                        )
                    }                    
                </div>
                <div className="nav-link">
                    {
                        this.props.content === "skills" ? ( 
                            <a id="skills" href="#skills" className="active" onClick={e => this.props.onClick(e)}>skills</a>
                        ) : (                            
                            <a id="skills" href="#skills" onClick={e => this.props.onClick(e)}>skills</a>
                        )
                    }                    
                </div>
                <div className="nav-link">
                    {
                        this.props.content === "services" ? ( 
                            <a id="services" href="#services" className="active" onClick={e => this.props.onClick(e)}>services</a>
                        ) : (                            
                            <a id="services" href="#services" onClick={e => this.props.onClick(e)}>services</a>
                        )
                    }                    
                </div>
                <div className="nav-link">
                    {
                        this.props.content === "setup" ? ( 
                            <a id="setup" href="#setup" className="active" onClick={e => this.props.onClick(e)}>setup</a>
                        ) : (                            
                            <a id="setup" href="#setup" onClick={e => this.props.onClick(e)}>setup</a>
                        )
                    }                    
                </div>
            </div>            
        );
    }
}

export default NavBar;