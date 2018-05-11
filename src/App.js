import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardForm from './refactor/components/CardForm.jsx'
import AddressForm from './refactor/components/AddressForm.jsx'
import AddCardContainer from './refactor/containers/AddCardContainer.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCardContainer />
      </div>
    );
  }
}

export default App;
