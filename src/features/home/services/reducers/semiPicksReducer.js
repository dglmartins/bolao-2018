import { GET_SEMI_PICKS, CHANGE_SEMI_GAME_PICK, CHANGE_SEMI_TEAM_ADVANCE} from '../actions/picksActions';
const R = require('ramda');


const initialState = {
  game1: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  },
  game2: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  }
}

export function semiPicks (state = initialState, action) {
  const { semiPicks, whichGame, pick, teamAdvance } = action
  switch (action.type) {
      case GET_SEMI_PICKS:
      return R.mergeDeepRight(state, semiPicks);
    case CHANGE_SEMI_GAME_PICK:
      return {
        ...state,
        [whichGame]: pick
      };
    case CHANGE_SEMI_TEAM_ADVANCE:
      return {
        ...state,
        [whichGame]: {
          ...state[whichGame],
          teamAdvance: teamAdvance
        }
      };
    default:
    return state;
  }
};
