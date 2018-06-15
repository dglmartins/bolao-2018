import { GET_GROUPS_STATS } from '../actions/getActions';

export function groupsStats (state = {}, action) {
  const { groupsStats } = action
  switch (action.type) {
    case GET_GROUPS_STATS:
      return Object.assign({}, state, groupsStats);
    default:
    return state;
  }
};
