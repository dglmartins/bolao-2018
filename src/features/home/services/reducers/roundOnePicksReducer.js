import { GET_ROUND_ONE_PICKS } from '../actions/picksActions';

export function roundOnePicks (state = {}, action) {
  const { roundOnePicks } = action
  switch (action.type) {
    case GET_ROUND_ONE_PICKS:
      return Object.assign({}, state, roundOnePicks);
    default:
    return state;
  }
};
