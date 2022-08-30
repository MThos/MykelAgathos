import React from 'react';

const NotFound = () => {
  return (
    <div id="notfound-section" className="fade-in">
      <div id="notfound-title" className="bold">PAGE NOT FOUND!</div>
      <div id="notfound-description">
        <p>This is embarrassing but ...</p>
        <p>I cannot find the page you have requested.</p>
        <p>It is possible you tried to go somewhere that doesn't exist ...</p>
        <p className="bold red">... really it is probably my fault! :(</p>
      </div>
    </div>
  );
}

export default NotFound;