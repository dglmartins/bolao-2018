import { GET_SEMI_STATS } from '../actions/getActions';

export function semiStats (state = {}, action) {
  const { semiStats } = action
  switch (action.type) {
    case GET_SEMI_STATS:
      return Object.assign({}, state, semiStats);
    default:
    return state;
  }
};
