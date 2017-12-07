import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import CardContainer from '../../containers/CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
