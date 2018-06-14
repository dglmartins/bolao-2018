import { GET_STATUS } from '../actions/getActions';

const initialState = {
  roundOnePicks: false
};

export function status (state = initialState, action) {
  const { status } = action
  switch (action.type) {
    case GET_STATUS:
      return Object.assign({}, state, status);
    default:
    return state;
  }
};
