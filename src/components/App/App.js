import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import CardContainer from '../../containers/CardContainer/CardContainer';

import { getFilm } from "../../helper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }
  
  async componentDidMount() {
    const film = await getFilm();
    this.setState({ film })
  }

  // getCrawl() {
  //   fetch('https://swapi.co/api/films/')
  //   .then((result) => result.json())
  //   .then(this.formatCrawl)    
  //   .then((crawl) => this.setState({crawl}))
  // }

  // formatCrawl(response) {
  //   return response.results.map( film => {
  //     return {  title: film.title,
  //               filmNum: film.episode_id,
  //               body: film.opening_crawl,
  //               date: film.created
  //           }
  //   })
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
