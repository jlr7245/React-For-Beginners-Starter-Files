import React from 'react'; /// have to do this at the top of every component
import { getFunName } from '../helpers';
import { render } from 'react-dom';

class StorePicker extends React.Component {
/*  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this); /// aw yis this thing i did for m'game
  }*/
  goToStore(event) {
    event.preventDefault();
    /// first grab the text from the box
    // second transition from / to /store/:storeId
    console.log('you changed the URL');
    console.log(this.storeInput.value)
  } /// relisten to vid 10 3 min in
  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* Here is a comment.... has to be inside yr html bc otherwise it's read as another top-level element. how unpleasant */ }
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={ (input) => {this.storeInput = input} }/>
        <button type="submit">Visit Store</button>
      </form>
      )
  }
}

export default StorePicker;


/// vid 4: have to self-close tags.. can't do for ex `<br>`, has to be `<br/>`