import React from 'react';
import AnimateStyled from 'animate-styled';

const NotFound = () => {
  return (
    <div id="notfound-section">
      <AnimateStyled name="fadeIn" iterationCount="1" duration="1s">
        <div id="notfound-title" className="bold">PAGE NOT FOUND!</div>
        <div id="notfound-description">
          <p>This is embarrassing but ...</p>
          <p>I cannot find the page you have requested.</p>
          <p>It is possible you tried to go somewhere that doesn't exist ...</p>
          <p className="bold red">... really it is probably my fault! :(</p>
        </div>
      </AnimateStyled>
    </div>
  );
}

export default NotFound;