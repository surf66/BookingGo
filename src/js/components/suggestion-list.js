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
  }
  
  componentWillReceiveProps(newProps) {
    this.getSuggestions(newProps.searchTerm)
  }

  render() {
    return(
      <React.Fragment>
        {this.state.suggestions.map((suggestion, index) => {
          return <p key={index}>{suggestion.name}, {suggestion.city}, {suggestion.country}</p>;
        })}
      </React.Fragment>
    );
  }

  async getSuggestions(searchTerm) {
    let suggestions = await SuggestionsService.getSuggestions(searchTerm);
    this.setState({ suggestions });
  }
}

export default connect(mapStateToProps, null)(SuggestionList);