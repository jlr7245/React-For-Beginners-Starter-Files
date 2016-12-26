import React from 'react';

const Header = (props) => { //// now it's a "stateless functional component". thanks
  return (
    <header className="top">
      <h1>Catch 
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
    )
}

export default Header;