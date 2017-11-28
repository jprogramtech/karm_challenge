import React, { Component } from 'react';
import ItemCreator from './item_creator';
import ItemList from './item_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="first">
        <h1>Welcome to Sallys lemonade stand!!</h1>
        <h2>Enter an item to be displayed below </h2>
        <ItemCreator />
        <ItemList />
        </div>
      </div>
    );
  }
}

export default App;
