import { GET_ROUND_16_PICKS } from '../actions/picksActions';
const R = require('ramda');


const initialState = {
  game1: {
    team1Score: 0,
    team2Score: 1,
    teamAdvance: "disabled"
  },
  game2: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled"
  },
  game3: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled"
  },
  game4: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled"
  },
  game5: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled"
  },
  game6: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled"
  },
  game7: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled"
  },
  game8: {
    team1Score: 0,
    team2Score: 0,
    teamAdvance: "disabled"
  },
}

export function round16Picks (state = initialState, action) {
  const { round16Picks } = action
  switch (action.type) {
    case GET_ROUND_16_PICKS:
      return R.mergeDeepRight(state, round16Picks);
    // case CHANGE_PICK:
    //   console.log(group, whichPick, pick)
    //   return {
    //     ...state,
    //     [group]: {
    //       ...state[group],
    //       [whichPick]: pick
    //     }
    //   };
    default:
    return state;
  }
};
