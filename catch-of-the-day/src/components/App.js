import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component { //// `Component` HAS TO BE UPPERCASE!!!!
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    ///initial state
    this.state = {
      fishes: {},
      order: {},
    };
  }
  
  addFish(fish) {
    // update state
    const fishes = {...this.state.fishes}; // seems fake but ok? maybe a different way of doing the object loops i've been doing?
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes });
  }
  
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
// start by running `npm start` in the terminal