import SuggestionsService from '../../../src/js/services/suggestions-service';

const mockSuggestions = {
  results: {
    docs: [
      {name: 'Manchester'},
      {name: 'London'}
    ]
  }
}

const mockFetchResponse = {
  json: () => { return mockSuggestions }
}

test('should call fetch with correct URL when getSuggestions is called', async () => {
  let searchTerm = 'mysearchterm';
  fetch = jest.fn(() => new Promise(resolve => resolve(mockFetchResponse)));
  
  await SuggestionsService.getSuggestions(searchTerm);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchTerm}`);
});

test('should return suggestions when getSuggestions is called', async () => {
  let searchTerm = 'mysearchterm';
  fetch = jest.fn(() => new Promise(resolve => resolve(mockFetchResponse)));
  
  let response = await SuggestionsService.getSuggestions(searchTerm);

  expect(response).toEqual(mockSuggestions.results.docs);
});