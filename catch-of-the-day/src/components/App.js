import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

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
  
  componentWillMount() { /// specifically comes from react, see docs - "invoked once, both on the client and server, immediately before the initial rendering occurs. If you call `setState` within this method, `render()` will see the updated state and will be executed only once despite the state change."
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
    
    ///checking storage for previous order
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    
    if(localStorageRef) {
      //update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef),
      })
    }
  }
  
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
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
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order} 
          params={this.props.params}
        />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
// start by running `npm start` in the terminal
// 17: just pass over the parts of the state you need
// 18: this all sounded about like word salad. Gotta revisit
// 19: The stuff from 18 is sounding less word-salad-y but the concept of `shouldComponentUpdate` is not making a whole lotta sense to me