import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import CardContainer from '../../containers/CardContainer/CardContainer';
import './App.css';

import { getFilm, getPeople } from '../../helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      film: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  async componentDidMount() {
    const film = await getFilm();
    const people = await getPeople();
    this.setState({ film, people });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer 
          crawlText={this.state.film}
          people={this.state.people}
          />
      </div>
    );
  }
}

export default App;
