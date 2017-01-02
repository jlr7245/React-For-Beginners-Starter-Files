import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component { //// `Component` HAS TO BE UPPERCASE!!!!
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
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
  
  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    });
  }
  
  addToOrder(key) {
    /// state copy
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update state
    this.setState({order})
  }
  
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
// start by running `npm start` in the terminal
// 17: just pass over the parts of the state you need