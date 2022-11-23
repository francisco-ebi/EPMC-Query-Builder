const ENDPOINT = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&resultType=core';

export const fetchSearchResults = (query) => {
  const url = `${ENDPOINT}&query=${query}`;
  return fetch(url)
  .then(response => response.json());
}

