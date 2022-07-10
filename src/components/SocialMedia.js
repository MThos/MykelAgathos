import React from 'react';

const SocialMedia = (props) => {
  let link = props.link;
  let tooltip = props.tooltip;
  let image = props.image;

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

export default SocialMedia;