const fetchAndParse = async url => {
  const initialFetch = await fetch(url);
  return initialFetch.json();
};

const filmNum = Math.ceil(Math.random() * 7);

export const getFilm = async () => {
  try {
    const film = await fetchAndParse(`https://swapi.co/api/films/${filmNum}`);
    return formatFilmObject(film);
  } catch (error) {
    return console.log('error:', error)
  }
};

const formatFilmObject = ({ title, opening_crawl, release_date }) => {
  return {
    title: title,
    crawl: opening_crawl,
    year: releaseYear(release_date)
  };
};

const releaseYear = fullDate => {
  return fullDate.split('-')[0];
};
