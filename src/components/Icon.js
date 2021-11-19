import React, {Component} from 'react';

class Icon extends Component {
    render() {
        return (
            <div id={this.props.image}>
                <img src={"/images/" + this.props.image + ".png"} alt="ma icon" />
            </div>
        );
    }
}

export default Icon;