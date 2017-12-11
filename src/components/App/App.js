import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import CardContainer from '../../containers/CardContainer/CardContainer';
import './App.css';

import { getFilm } from "../../helper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }
  
  // async componentDidMount() {
  //   const film = await getFilm();
  //   this.setState({ film })
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer crawlText={this.state.film} />
      </div>
    );
  }
}

export default App;
