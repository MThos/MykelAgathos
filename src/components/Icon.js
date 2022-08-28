import React from 'react';

const Icon = (props) => {
  return (
    <div id={props.image}>
      <img src={"/images/compressed/" + props.image + ".webp"} alt="ma icon" />
    </div>
  );
}

export default Icon;