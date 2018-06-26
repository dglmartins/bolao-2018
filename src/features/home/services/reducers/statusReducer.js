import { GET_STATUS } from '../actions/getActions';

const initialState = {
  roundOnePicks: false,
  "round16PicksOpen": false,
  "quarterPicksOpen": false,
  "semiPicksOpen": false,
  "threeFourPickOpen": false,
  "finalPickOpen": false,

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
