import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import CardContainer from '../../containers/CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }
  
  componentDidMount() {
    this.getCrawl()

  }

  getCrawl() {
    fetch('https://swapi.co/api/films/')
    .then((result) => result.json())
    .then(this.formatCrawl)    
    .then((crawl) => this.setState({crawl}))
  }

  formatCrawl(response) {
    return response.results.map( film => {
      return {  title: film.title,
                filmNum: film.episode_id,
                crawlText: film.opening_crawl,
                date: film.created
            }
    })
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
