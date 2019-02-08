import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';
import { SearchTermActions } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return ({
    setSearchTerm: bindActionCreators(SearchTermActions.setSearchTerm, dispatch)
  })
}

export class SearchField extends React.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.storeSearchTerm = debounce(1000, this.storeSearchTerm);
  }

  render() {
    return(
      <div className="field-container">
        <label htmlFor="pickup-location">Pick-up Location</label>
        <input type="text" id="pickup-location" name="pickup-location" placeholder="city, airport, station, region, district..." onChange={this.handleChange} />
      </div>
    );
  }

  handleChange(event) {
    let searchTerm = event.target.value;
    this.storeSearchTerm(searchTerm);
  }

  storeSearchTerm(searchTerm) {
    this.props.setSearchTerm(searchTerm);
  }
}

export default connect(null, mapDispatchToProps)(SearchField);