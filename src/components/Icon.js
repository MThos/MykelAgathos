import React from 'react';

const Icon = (props) => {
  return (
    <div id={props.image}>
      <img src={"/images/" + props.image + ".png"} alt="ma icon" />
    </div>
  );
}

export default Icon;