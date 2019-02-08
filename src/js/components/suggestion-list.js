import React from 'react';
import { connect } from 'react-redux';
import SuggestionsService from '../services/suggestions-service';

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
  }
}

export class SuggestionList extends React.Component {

  constructor() {
    super();

    this.state = {
      suggestions: []
    }

    this.getSuggestions = this.getSuggestions.bind(this);
    this.highlightSearchTerm = this.highlightSearchTerm.bind(this);
  }
  
  componentWillReceiveProps(newProps) {
    this.getSuggestions(newProps.searchTerm)
  }

  render() {
    return(
      <div className={this.state.suggestions.length > 0 ? 'list open' : 'list'}>
        {this.state.suggestions.map((suggestion, index) => {
          var suggestionName = this.highlightSearchTerm(suggestion.name, this.props.searchTerm);
          return <div className="item" key={index}>
            <p className="title" dangerouslySetInnerHTML={{__html: suggestionName}}></p>
            {suggestion.region && suggestion.country && <p className="description">{suggestion.region}, {suggestion.country}</p>}
          </div>;
        })}
      </div>
    );
  }

  async getSuggestions(searchTerm) {
    if(searchTerm.length > 1) {
      let suggestions = await SuggestionsService.getSuggestions(searchTerm);
      this.setState({ suggestions });
      return;
    }

    this.setState({ suggestions: [] });
    return;
  }

  highlightSearchTerm(suggestion, searchTerm) {
    return suggestion.toLowerCase().replace(searchTerm, `<span>${searchTerm}</span>`);
  }
}

export default connect(mapStateToProps, null)(SuggestionList);