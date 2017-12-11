export const fetchAndParse = async url => {
  try {
    const initialFetch = await fetch(url);
    return initialFetch.json();
  } catch (error) {
    return 'error:', error;
  }
};

export const getFilm = async () => {
  try {
    const film = await fetchAndParse(`https://swapi.co/api/films/${filmNum}`);
    return formatFilmObject(film);
  } catch (error) {
    return 'error:', error;
  }
};

const filmNum = Math.ceil(Math.random() * 7);

const formatFilmObject = ({ title, opening_crawl, release_date }) => {
  return {
    crawl: formatCrawlText(opening_crawl),
    title: title,
    year: releaseYear(release_date)
  };
};

const releaseYear = fullDate => fullDate.split('-')[0];

const formatCrawlText = rawCrawlText => {
  const regEx = new RegExp(/\s{3,}/, 'g');
  let crawl = rawCrawlText.replace(regEx, '###');
  return (crawl = crawl.split('###'));
};

export const getPeople = async () => {
  const peopleObject = await fetchAndParse('https://swapi.co/api/people');
  return formatPeople(peopleObject.results);
};

const formatPeople = peopleArray => {
  const unresolvedPromises = peopleArray.map(async person => {
    const { name, homeworld, species } = person;
    let homeworldData = await fetchAndParse(homeworld);
    let speciesData = await fetchAndParse(species);

    return {
      name,
      stats: {
        homeworld: homeworldData.name,
        species: speciesData.name,
        population: homeworldData.population,
        language: speciesData.language
      },
      favorite: false,
      cardCategory: 'people'
    };
  });

  return Promise.all(unresolvedPromises);
};
