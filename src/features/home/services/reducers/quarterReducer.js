import { GET_QUARTER_STATS } from '../actions/getActions';

export function quarterStats (state = {}, action) {
  const { quarterStats } = action
  switch (action.type) {
    case GET_QUARTER_STATS:
      return Object.assign({}, state, quarterStats);
    default:
    return state;
  }
};
