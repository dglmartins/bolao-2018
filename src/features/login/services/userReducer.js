import LOG_IN_OUT from './userActions';

export function user (state = {currentUser: null}, action) {
  switch (action.type) {
    case LOG_IN_OUT:
      return {
        ...state,
        currentUser: action.user
      };
    default:
      return state
  }
};
