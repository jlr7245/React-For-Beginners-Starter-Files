import React from 'react'; /// have to do this at the top of every component
import { getFunName } from '../helpers';
import { render } from 'react-dom';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        { /* Here is a comment.... has to be inside yr html bc otherwise it's read as another top-level element. how disagreeable */ }
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </form>
      )
  }
}

export default StorePicker;


/// vid 4: have to self-close tags.. can't do for ex `<br>`, has to be `<br/>`