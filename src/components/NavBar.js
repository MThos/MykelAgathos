import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        let name = this.props.content;
        let active = this.props.active;
        
        return (
            <div className="nav-link">
                {
                    active === name ? ( 
                        <a id={name} className="active" onClick={e => this.props.onClick(e)}>{name}</a>
                    ) : (                            
                        <a id={name} className="underline" onClick={e => this.props.onClick(e)}>{name}</a>
                    )
                }
            </div>     
        );
    }
}

export default NavBar;