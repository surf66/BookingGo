module.exports = {
  async getSuggestions(searchTerm) {
    return await fetch(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchTerm}`)
        .then(response => { return response.json(); })
        .then(suggestions => { return suggestions.results.docs; });
  }
}