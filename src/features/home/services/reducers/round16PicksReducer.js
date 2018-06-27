import { GET_ROUND_16_PICKS, CHANGE_ROUND_16_GAME_PICK, CHANGE_ROUND_16_TEAM_ADVANCE} from '../actions/picksActions';
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
  },
  game5: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  },
  game6: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  },
  game7: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  },
  game8: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled",
    set: false
  },
}

export function round16Picks (state = initialState, action) {
  const { round16Picks, whichGame, pick, teamAdvance } = action
  switch (action.type) {
    case GET_ROUND_16_PICKS:
      return R.mergeDeepRight(state, round16Picks);
    case CHANGE_ROUND_16_GAME_PICK:
      return {
        ...state,
        [whichGame]: pick
      };
    case CHANGE_ROUND_16_TEAM_ADVANCE:
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
