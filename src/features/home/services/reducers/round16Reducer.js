import { GET_ROUND16_STATS } from '../actions/getActions';

export function round16Stats (state = {}, action) {
  const { round16Stats } = action
  switch (action.type) {
    case GET_ROUND16_STATS:
      return Object.assign({}, state, round16Stats);
    default:
    return state;
  }
};
