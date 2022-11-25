const ENDPOINT = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&resultType=core';

const processResponse = ({ nextCursorMark, hitCount, resultList }) => {
  return {
    nextCursorMark,
    hitCount,
    results: resultList.result
  };
}
export const fetchSearchResults = (params) => {
  let url = ENDPOINT;
  Object.keys(params).forEach(param => {
    const value = params[param];
    if (value) {
      url = url.concat(`&${param}=${value}`);
    }
  });
  return fetch(url)
    .then(response => response.json())
    .then(processResponse);
}

