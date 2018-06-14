import { GET_TOP_SCORERS } from '../actions/getActions';
import { GET_TOP_SCORER_PICK } from '../actions/picksActions';

export function topScorers (state = {}, action) {
  const { scorers } = action
  switch (action.type) {
    case GET_TOP_SCORERS:
      return Object.assign({}, state, scorers);
    default:
    return state;
  }
};

export function topScorerPick (state = {pick: "disabled"}, action) {
  const { scorer } = action;
  switch (action.type) {
    case GET_TOP_SCORER_PICK:
      return {
        ...state,
        pick: scorer
      };
    default:
    return state;
  }
}
