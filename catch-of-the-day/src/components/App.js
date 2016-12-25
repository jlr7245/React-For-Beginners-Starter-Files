import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component { //// `Component` HAS TO BE UPPERCASE!!!!
  render() {
    ///console.log(this);
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
// start by running `npm start` in the terminal