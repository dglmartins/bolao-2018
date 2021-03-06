import { GET_QUARTER_PICKS, CHANGE_QUARTER_GAME_PICK, CHANGE_QUARTER_TEAM_ADVANCE} from '../actions/picksActions';
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
  },
  game3: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  },
  game4: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  }
}

export function quarterPicks (state = initialState, action) {
  const { quarterPicks, whichGame, pick, teamAdvance } = action
  switch (action.type) {
      case GET_QUARTER_PICKS:
      return R.mergeDeepRight(state, quarterPicks);
    case CHANGE_QUARTER_GAME_PICK:
      return {
        ...state,
        [whichGame]: pick
      };
    case CHANGE_QUARTER_TEAM_ADVANCE:
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
