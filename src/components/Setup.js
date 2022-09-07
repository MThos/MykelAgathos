import React from 'react';

const Setup = () => {
  return (
    <div id="setup-section" className="fade-in">
      <div>
        <div className="section-title">What setups do I use, you ask?</div>                    
        <p>There are two machines I use every day. I have a <span className='bold'>custom PC</span> that I built myself and I use this for certain development environments such as .NET WebForms and WAMP setups because the new M1 MacBook Pro that I now use does not support Windows Bootcamp, though I do have Windows 11 ARM running through Parallels.</p>
        <p>The machine I do the most development on would definitely be my <span className='bold'>MacBook Pro 14"</span> &#8212; it's lightning fast because of the new M1 chips &#8212; is very portable with incredible battery life &#8212; and because I am constantly out of the house on the weekends, it allows me to continue to do development wherever I might find myself.</p>
        <p>My <span className='bold'>Samsung super-ultrawide monitor</span> is incredible as the screen real estate cannot be overstated. It is honestly hard to put into words how useful the extra space is until you use one. I would highly recommend anyone who is on the fence about getting one to go into a store and try one out &#8212; you will be hooked!</p>
      </div>
      <br/>
      <div className="flex">
        <div className="column-one">
          <div className="bold">Macbook Pro 14"</div>
          <ul>
            <li>2021</li>
            <li>M1 Pro</li>
            <li>10C CPU / 16C GPU SOC</li>
            <li>16C Neural Engine</li>
            <li>16GB Unified Memory</li>
            <li>200GBs Memory Bandwidth</li>
            <li>1TB NVME SSD (5000+ R/W)</li>
            <li>3024 x 1964 (254 ppi) / 120Hz</li>
            <li>6K External Monitor Support</li>
            <li>802.11ax WiFi / Bluetooth 5</li>
            <li>Thunderbolt 4 / USB 4</li>
            <li>70 Watt Battery (10 to 17 Hours)</li>
            <li>MagSafe 3 Fast Charge</li>
            <li>14" Display / 3.5 Pounds</li>
            <li>macOS 12.5 / Windows 11 ARM</li>
            <li>Geekbench 5: 1772 / 12562</li>
          </ul>
        </div>
        <div className="column-two">
          <div className="bold">Custom Built PC</div>
          <ul>
            <li>2022</li>
            <li>Ryzen 5600X / 6C / 3.7GHz (AMD)</li>
            <li>X570 Rog Strix (ASUS)</li>
            <li>64GB RAM / 3200MHz (GSkill)</li>
            <li>GeForce RTX 2080 (Gigabyte)</li>
            <li>850W PSU / 80%+ Gold (ASUS)</li>
            <li>2x 1TB NVME SSD (Samsung 970) </li>
            <li>2x 8TB HDD (Western Digital)</li>
            <li>360MM CPU Radiator (Corsair)</li>
            <li>4000D Airflow (Corsair)</li>
            <li>802.11ac WiFi / Bluetooth 5</li>
            <li>G903 Wireless Mouse (Logitech)</li>
            <li>G915 TKL Keyboard (Logitech)</li>
            <li>G733 Headset (Logitech)</li>
            <li>Windows 11 / Ubuntu 18</li>
            <li>Geekbench 5: 1553 / 8202</li>
          </ul>
        </div>                        
      </div>
      <br/>
      <div>
        <div className="bold">Monitor</div>
        <ul>
          <li>49" Super Ultrawide (Samsung)</li>
          <li>Curved (1800R)</li>
          <li>5120 x 1440 / Dual QHD / 32:9</li>
          <li>120Hz / 1ms / HDR</li>
          <li>125% ARGB Color Gamut</li>
          <li>Picture by Picture (PBP)</li>
        </ul>
      </div>
    </div>
  );
}

export default Setup;