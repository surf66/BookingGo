import React from 'react';

export default class Form extends React.Component {
  render() {
    return(
      <form className="pickup-form">
        <h1>Let's find your ideal car</h1>
        <div className="field-container">
          <label htmlFor="pickup-location">Pick-up Location</label>
          <input type="text" id="pickup-location" name="pickup-location" placeholder="city, airport, station, region, district..." />
        </div>
      </form>
    );
  }
}