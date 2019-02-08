const searchTerm = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return action.value;
    default:
      return state;
  }
}

export default searchTerm;