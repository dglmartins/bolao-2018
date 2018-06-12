import { LOG_IN_OUT } from './userActions';

export function user (state = null, action) {
  switch (action.type) {
    case LOG_IN_OUT:
      return {
        ...state,
        uid: action.uid,
        email: action.email
      };
    default:
      return state
  }
};
