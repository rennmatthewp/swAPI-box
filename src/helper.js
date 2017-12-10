const fetchAndParse = async url => {
  const initialFetch = await fetch(url);
  return initialFetch.json();
};

const filmNum = Math.ceil(Math.random() * 7)

export const getFilm = async () => {
  const film = await fetchAndParse(`https://swapi.co/api/films/${filmNum}`);
  return film;
};
