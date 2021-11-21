import React, {Component} from 'react';

class Section extends Component {
    render() {
        if (this.props.content === "about") {
            return (
                <div id="about-section">
                    <h3 className="section-header">About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus fermentum facilisis. Aenean ac neque at turpis auctor fermentum et eu mauris. Sed tempor magna condimentum dui sollicitudin, a tempor tellus rutrum. Nulla enim lacus, porttitor eget ornare sed, rhoncus a diam. In eget mi nec sapien egestas dapibus vel id justo. Etiam viverra odio orci, in mattis quam gravida et. Aenean fringilla ac nibh vel bibendum. Donec sollicitudin tincidunt metus vel euismod. Morbi pellentesque, odio eu lacinia accumsan, nisl ante iaculis mauris, in tincidunt mauris purus nec justo. Vestibulum facilisis pharetra purus, sed fermentum turpis dictum id. Etiam nulla nunc, scelerisque nec nunc a, cursus fringilla felis. Maecenas rhoncus augue vehicula felis aliquam maximus. Curabitur sodales, ex at luctus dictum, metus sapien lacinia felis, in dictum arcu tellus ut neque.</p>
                    <p>Vivamus consectetur odio lorem, nec semper sapien feugiat quis. Morbi diam turpis, placerat in felis quis, elementum efficitur diam. Morbi vitae rhoncus felis, tempor finibus mi. Sed lacinia sapien sem, sit amet facilisis erat dictum eget. Donec eget iaculis ligula, sed facilisis nunc.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus fermentum facilisis. Aenean ac neque at turpis auctor fermentum et eu mauris. Sed tempor magna condimentum dui sollicitudin, a tempor tellus rutrum. Nulla enim lacus, porttitor eget ornare sed, rhoncus a diam. In eget mi nec sapien egestas dapibus vel id justo. Etiam viverra odio orci, in mattis quam gravida et. Aenean fringilla ac nibh vel bibendum. Donec sollicitudin tincidunt metus vel euismod. Morbi pellentesque, odio eu lacinia accumsan, nisl ante iaculis mauris, in tincidunt mauris purus nec justo. Vestibulum facilisis pharetra purus, sed fermentum turpis dictum id. Etiam nulla nunc, scelerisque nec nunc a, cursus fringilla felis. Maecenas rhoncus augue vehicula felis aliquam maximus. Curabitur sodales, ex at luctus dictum, metus sapien lacinia felis, in dictum arcu tellus ut neque. Maecenas rhoncus augue vehicula felis aliquam maximus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus fermentum facilisis. Aenean ac neque at turpis auctor fermentum et eu mauris. Sed tempor magna condimentum dui sollicitudin, a tempor tellus rutrum. Nulla enim lacus, porttitor eget ornare sed, rhoncus a diam. In eget mi nec sapien egestas dapibus vel id justo. Etiam viverra odio orci, in mattis quam gravida et. Aenean fringilla ac nibh vel bibendum. Donec sollicitudin tincidunt metus vel euismod. Morbi pellentesque, odio eu lacinia accumsan, nisl ante iaculis mauris, in tincidunt mauris purus nec justo. Vestibulum facilisis pharetra purus, sed fermentum turpis dictum id. Etiam nulla nunc, scelerisque nec nunc a, cursus fringilla felis. Maecenas rhoncus augue vehicula felis aliquam maximus. Curabitur sodales, ex at luctus dictum, metus sapien lacinia felis, in dictum arcu tellus ut neque. Maecenas rhoncus augue vehicula felis aliquam maximus.</p>
                </div>            
            );
        } else if (this.props.content === "projects") {
            return (
                <div id="projects-section">
                    <h3 className="section-header">Projects</h3>
                    <p>Projects</p>
                </div>
            );
        }  else if (this.props.content === "skills") {
            return (
                <div id="skills-section">
                    <h3 className="section-header">Skills</h3>
                    <div className="flex">
                        <div className="column-one">
                            <div className="bold">Languages</div>
                            <ul>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Python</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>SCSS</li>
                                <li>Visual Basic</li>
                                <li>C#</li>
                            </ul>
                        </div>
                        <div className="column-two">
                            <div className="bold">Frameworks</div>
                            <ul>
                                <li>ReactJS</li>
                                <li>Laravel</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>Flask</li>
                                <li>Django</li>
                                <li>.NET</li>
                            </ul>
                        </div>
                        <div className="column-three">
                            <div className="bold">Databases</div>
                            <ul>
                                <li>SQL Server</li>
                                <li>MySQL</li>
                                <li>MariaDB</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                            </ul>
                        </div>        
                        <div>
                            <div className="bold">DevOps</div>
                            <ul>
                                <li>Digital Ocean</li>
                                <li>Amazon AWS</li>
                                <li>Microsoft Azure</li>
                                <li>Heroku</li>
                                <li>LAMP</li>
                                <li>WAMP</li>
                                <li>Cloudflare</li>
                                <li>SEO</li>
                            </ul>
                        </div>
                        <div>
                            <div className="bold">Other</div>
                            <ul>
                                <li>Git</li>
                                <li>TFS</li>
                                <li>Visual Studio</li>
                                <li>Unit Testing</li>
                                <li>Cybersecurity</li>
                            </ul>
                        </div>       
                    </div>
                </div>
            );
        }  else if (this.props.content === "services") {
            return (
                <div id="services-section">
                    <h3 className="section-header">Services Available</h3>
                    <p>Services</p>
                </div>
            );
        }  else if (this.props.content === "setup") {
            return (
                <div id="setup-section">
                    <h3 className="section-header">System Setup</h3>
                    <div className="bold">Monitor</div>
                    <ul>
                        <li>49" Curved Super Ultrawide (Samsung)</li>
                        <li>5120 x 1440 / Dual QHD 32:9</li>
                        <li>120Hz / HDR</li>
                    </ul>
                    <br/>
                    <div className="flex">
                        <div className="column-one">
                            <div className="bold">Macbook Pro 14"</div>
                            <ul>
                                <li>2021</li>
                                <li>M1 Pro</li>
                                <li>10C CPU / 16C GPU SOC</li>
                                <li>16 Core Neural Engine</li>
                                <li>16GB Unified Memory</li>
                                <li>200GBs Memory Bandwidth</li>
                                <li>1TB NVME SSD (5000+ R/W)</li>
                                <li>3024 x 1964 (254 ppi) / 120 Hz</li>
                                <li>6K External Monitor Support</li>
                                <li>802.11ax WiFi / Bluetooth 5</li>
                                <li>Thunderbolt 4 / USB 4</li>
                                <li>70 Watt Battery (10 to 17 Hours)</li>
                                <li>MagSafe 3 Fast Charge (50% in 30m)</li>
                                <li>14" Display / 3.5 Pounds</li>
                                <li>MacOS 12 / Windows 11 ARM</li>
                                <li>Geekbench 5: 1772 / 12562</li>
                            </ul>
                        </div>
                        <div className="column-two">
                            <div className="bold">Custom Built PC</div>
                            <ul>
                                <li>2020</li>
                                <li>Ryzen 7 3700X / 8 Core / 3700MHz (AMD)</li>
                                <li>X570 Aorus Elite WIFI (Gigabyte)</li>
                                <li>64GB RAM / 3000MHz (GSkill)</li>
                                <li>GeForce RTX 2080 (Gigabyte)</li>
                                <li>750W PSU / 80 Gold (Thermaltake)</li>
                                <li>2x 1TB NVME SSD (Samsung 970 Evo) </li>
                                <li>2x 8TB HDD (Western Digital NAS)</li>
                                <li>AIO 360MM CPU Radiator (Thermaltake)</li>
                                <li>View 37 ARGB Case (Thermaltake)</li>
                                <li>802.11ac WiFi / Bluetooth 5</li>
                                <li>G903 Wireless Mouse (Logitech)</li>
                                <li>G915 TKL Keyboard (Logitech)</li>
                                <li>Arctis 7 Headset (Steelseries)</li>
                                <li>Windows 10</li>
                                <li>Geekbench 5: 1242 / 8402</li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            );
        }   
    }
}

export default Section;