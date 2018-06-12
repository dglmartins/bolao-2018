import { CHANGE_HEADER_NAME_SHOWING } from './headerActions';

export function header (state = {}, action) {
  switch (action.type) {

    case CHANGE_HEADER_NAME_SHOWING:
      return {
        ...state,
        nameShowing: action.nameShowing
      }

    default:
      return state;
  }
};
