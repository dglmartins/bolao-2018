import { GET_GROUPS } from '../actions/groupsActions';

export function groups (state = {}, action) {
  const { groups } = action
  switch (action.type) {
    case GET_GROUPS:
      return Object.assign({}, state, groups);
    default:
    return state;
  }
};
