import React, {Component} from 'react';

class Section extends Component {
    render() {
        if (this.props.content === "about") {
            return (
                <div id="about-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus fermentum facilisis. Aenean ac neque at turpis auctor fermentum et eu mauris. Sed tempor magna condimentum dui sollicitudin, a tempor tellus rutrum. Nulla enim lacus, porttitor eget ornare sed, rhoncus a diam. In eget mi nec sapien egestas dapibus vel id justo. Etiam viverra odio orci, in mattis quam gravida et. Aenean fringilla ac nibh vel bibendum. Donec sollicitudin tincidunt metus vel euismod. Morbi pellentesque, odio eu lacinia accumsan, nisl ante iaculis mauris, in tincidunt mauris purus nec justo. Vestibulum facilisis pharetra purus, sed fermentum turpis dictum id. Etiam nulla nunc, scelerisque nec nunc a, cursus fringilla felis. Maecenas rhoncus augue vehicula felis aliquam maximus. Curabitur sodales, ex at luctus dictum, metus sapien lacinia felis, in dictum arcu tellus ut neque.</p>
                    <p>Vivamus consectetur odio lorem, nec semper sapien feugiat quis. Morbi diam turpis, placerat in felis quis, elementum efficitur diam. Morbi vitae rhoncus felis, tempor finibus mi. Sed lacinia sapien sem, sit amet facilisis erat dictum eget. Donec eget iaculis ligula, sed facilisis nunc.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus fermentum facilisis. Aenean ac neque at turpis auctor fermentum et eu mauris. Sed tempor magna condimentum dui sollicitudin, a tempor tellus rutrum. Nulla enim lacus, porttitor eget ornare sed, rhoncus a diam. In eget mi nec sapien egestas dapibus vel id justo. Etiam viverra odio orci, in mattis quam gravida et. Aenean fringilla ac nibh vel bibendum. Donec sollicitudin tincidunt metus vel euismod. Morbi pellentesque, odio eu lacinia accumsan, nisl ante iaculis mauris, in tincidunt mauris purus nec justo. Vestibulum facilisis pharetra purus, sed fermentum turpis dictum id. Etiam nulla nunc, scelerisque nec nunc a, cursus fringilla felis. Maecenas rhoncus augue vehicula felis aliquam maximus. Curabitur sodales, ex at luctus dictum, metus sapien lacinia felis, in dictum arcu tellus ut neque. Maecenas rhoncus augue vehicula felis aliquam maximus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus fermentum facilisis. Aenean ac neque at turpis auctor fermentum et eu mauris. Sed tempor magna condimentum dui sollicitudin, a tempor tellus rutrum. Nulla enim lacus, porttitor eget ornare sed, rhoncus a diam. In eget mi nec sapien egestas dapibus vel id justo. Etiam viverra odio orci, in mattis quam gravida et. Aenean fringilla ac nibh vel bibendum. Donec sollicitudin tincidunt metus vel euismod. Morbi pellentesque, odio eu lacinia accumsan, nisl ante iaculis mauris, in tincidunt mauris purus nec justo. Vestibulum facilisis pharetra purus, sed fermentum turpis dictum id. Etiam nulla nunc, scelerisque nec nunc a, cursus fringilla felis. Maecenas rhoncus augue vehicula felis aliquam maximus. Curabitur sodales, ex at luctus dictum, metus sapien lacinia felis, in dictum arcu tellus ut neque. Maecenas rhoncus augue vehicula felis aliquam maximus.</p>
                </div>            
            );
        } else if (this.props.content === "projects") {
            return (
                <div id="projects-section">
                    Projects
                </div>
            );
        }  else if (this.props.content === "skills") {
            return (
                <div id="skills-section">
                    Skills
                </div>
            );
        }  else if (this.props.content === "services") {
            return (
                <div id="services-section">
                    Services
                </div>
            );
        }  else if (this.props.content === "setup") {
            return (
                <div id="setup-section">
                    Setup
                </div>
            );
        }  else if (this.props.content === "contact") {
            return (
                <div id="contact-section">
                    Contact
                </div>
            );
        }   
    }
}

export default Section;