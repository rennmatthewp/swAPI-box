import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('getCrawl() calls fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({
          results: []
        })
      })
    );
    const renderedApp = shallow(<App />);

    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
  });

  it('should set the state of the crawl after fetch is called in getCrawl', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                title: 'A New Hope',
                episode_id: 4,
                opening_crawl: 'some scroll',
                created: 1977
              }
            ]
          })
      })
    );
    const expected = [
      { title: 'A New Hope', filmNum: 4, body: 'some scroll', date: 1977 }
    ];

    const renderedApp = await shallow(<App />);
    await renderedApp.update();
    await renderedApp.update();
    expect(renderedApp.state('crawl')).toEqual(expected);
  });

  it('should match the snapshot', async () => {
    const renderedApp = await shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });
});
