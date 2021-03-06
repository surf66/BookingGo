import React from 'react';
import SearchField from './search-field';
import SuggestionList from './suggestion-list';

const Form = () => {
  return(
    <section>
      <form className="pickup-form">
        <h1>Let's find your ideal car</h1>
        <div className="search">
          <SearchField />
          <SuggestionList />
        </div>
      </form>
    </section>
  );
}

export default Form;