import { GET_ROUND_ONE_PICKS, CHANGE_PICK } from '../actions/picksActions';

const initialState = {
  "A": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  },
  "B": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  },
  "C": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  },
  "D": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  },
  "E": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  },
  "F": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  },
  "G": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  },
  "H": {
    firstPlacePick: "disabled",
    secondPlacePick: "disabled"
  }
}

export function roundOnePicks (state = initialState, action) {
  const { roundOnePicks, whichPick, pick, group } = action
  switch (action.type) {
    case GET_ROUND_ONE_PICKS:
      return Object.assign({}, state, roundOnePicks);
    case CHANGE_PICK:
      console.log(group, whichPick, pick)
      return {
        ...state,
        [group]: {
          ...state[group],
          [whichPick]: pick
        }
      };
    default:
    return state;
  }
};
