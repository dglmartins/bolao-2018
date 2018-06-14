import { GET_USERS } from '../actions/getActions';

export function users(state = {}, action) {
  const { users } = action;
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, users)
    default:
      return state;

  }
};
