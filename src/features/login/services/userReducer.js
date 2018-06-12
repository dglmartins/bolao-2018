import { LOG_IN_OUT } from './userActions';

export function user (state = {currentUser: null}, action) {
  const { currentUser } = action
  switch (action.type) {
    case LOG_IN_OUT:
      return {
        ...state,
        currentUser
      };
    default:
      return state
  }
};
