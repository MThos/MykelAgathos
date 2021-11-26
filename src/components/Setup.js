import React, { Component } from 'react';
import AnimateStyled from 'animate-styled';

class Setup extends Component {
    render() {
        return (
            <div id="setup-section">
                <AnimateStyled name="bounceInUp" iterationCount="1" duration="1s">
                    <div>
                        <div className="setup-title">What setups do I use, you ask?</div>                    
                        <p>There are two machines I use every day. I have a custom PC that I built myself and I use this for certain development environments such as VB.NET and WAMP setups as the new M1 Macbook's do not currently support Windows. I also game on my PC. The machine I do the most development on is definitely my Macbook Pro. This machine is lightning fast at everything it does because of the new M1 chips. Also, because I am constantly out of the house on the weekends, it allows me to continue to do development wherever I might be.</p>
                        <p>My super-ultrawide monitor is incredible as the screen real estate cannot be matched, and it is honestly hard to put into words how good it is until you start to use one. I would highly recommend anyone who is on the fence about getting one to go into a store and try one out &#8212; you will be hooked!</p>
                    </div>
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
                                <li>3024 x 1964 (254 ppi) / 120Hz</li>
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
                                <li>850W PSU / 80%+ Gold (Thermaltake)</li>
                                <li>2x 1TB NVME SSD (Samsung 970 Evo) </li>
                                <li>2x 8TB HDD (Western Digital NAS)</li>
                                <li>AIO 360MM CPU Radiator (Thermaltake)</li>
                                <li>View 37 ARGB Case (Thermaltake)</li>
                                <li>802.11ac WiFi / Bluetooth 5</li>
                                <li>G903 Wireless Mouse (Logitech)</li>
                                <li>G915 TKL Keyboard (Logitech)</li>
                                <li>Arctis 7 Headset (Steelseries)</li>
                                <li>Windows 10 / Ubuntu 18</li>
                                <li>Geekbench 5: 1242 / 8702</li>
                            </ul>
                        </div>                        
                    </div>
                    <br/>                    
                    <div className="bold">Monitor</div>
                    <ul>
                        <li>49" Curved Super Ultrawide (Samsung)</li>
                        <li>5120 x 1440 / Dual QHD / 32:9</li>
                        <li>120Hz / 1ms / HDR</li>
                        <li>125% ARGB Color Gamut</li>
                        <li>Picture by Picture (PBP)</li>
                    </ul>
                </AnimateStyled>
            </div>
        );
    }
}

export default Setup;