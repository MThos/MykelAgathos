import React, {Component} from 'react';

class SocialMedia extends Component {
    render() {
        let link = this.props.link;
        let tooltip = this.props.tooltip;
        let image = this.props.image;

        return (
            <a href={link}
                target="_blank" 
                rel="noreferrer"
                data-tip={tooltip} 
                data-border="true" 
                data-place="bottom"
                data-background-color="black">
                    <img className="social-icon" src={"/images/" + image} alt={tooltip} />
            </a>
        );
    }
}

export default SocialMedia;