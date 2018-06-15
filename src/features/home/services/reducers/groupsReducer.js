import { GET_GROUPS } from '../actions/groupsActions';
import { GET_GROUPS_STATS } from '../actions/getActions';

export function groups (state = {}, action) {
  const { groups } = action
  switch (action.type) {
    case GET_GROUPS:
      return Object.assign({}, state, groups);
    default:
    return state;
  }
};

export function groupsStats (state = {}, action) {
  const { groupsStats } = action
  switch (action.type) {
    case GET_GROUPS_STATS:
      return Object.assign({}, state, groupsStats);
    default:
    return state;
  }
};
