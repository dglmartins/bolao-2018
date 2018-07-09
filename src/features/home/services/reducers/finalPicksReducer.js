import { GET_FINAL_PICKS, CHANGE_FINAL_GAME_PICK, CHANGE_FINAL_TEAM_ADVANCE} from '../actions/picksActions';
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

export function finalPicks (state = initialState, action) {
  const { finalPicks, whichGame, pick, teamAdvance } = action
  switch (action.type) {
      case GET_FINAL_PICKS:
      return R.mergeDeepRight(state, finalPicks);
    case CHANGE_FINAL_GAME_PICK:
      return {
        ...state,
        [whichGame]: pick
      };
    case CHANGE_FINAL_TEAM_ADVANCE:
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
