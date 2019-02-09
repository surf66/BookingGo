const isRequesting = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_REQUESTING':
      return action.value;
    default:
      return state;
  }
}

export default isRequesting;