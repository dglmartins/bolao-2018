import { GET_FINAL_STATS } from '../actions/getActions';

export function finalStats (state = {}, action) {
  const { finalStats } = action
  switch (action.type) {
    case GET_FINAL_STATS:
      return Object.assign({}, state, finalStats);
    default:
    return state;
  }
};
