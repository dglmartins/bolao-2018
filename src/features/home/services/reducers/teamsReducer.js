import { GET_TEAMS } from '../actions/getActions';
import { GET_TEAM_PICK } from '../actions/picksActions';

export function teams (state = {}, action) {
  const { teams } = action
  switch (action.type) {
    case GET_TEAMS:
      return Object.assign({}, state, teams);
    default:
    return state;
  }
};

export function teamPick (state = {pick: "disabled"}, action) {
  const { team } = action;
  switch (action.type) {
    case GET_TEAM_PICK:
      return {
        ...state,
        pick: team
      };
    default:
    return state;
  }
}
