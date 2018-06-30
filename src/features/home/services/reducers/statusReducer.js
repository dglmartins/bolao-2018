import { GET_STATUS } from '../actions/getActions';
import { TEST_CLOSE_OPEN_ROUND16 } from '../actions/testActions'

const initialState = {
  roundOnePicks: false,
  "round16PicksOpen": false,
  "quarterPicksOpen": false,
  "semiPicksOpen": false,
  "threeFourPickOpen": false,
  "finalPickOpen": false,
  "showPickToOthers": false

};

export function status (state = initialState, action) {
  const { status, round16PicksOpen } = action
  switch (action.type) {
    case GET_STATUS:
      return Object.assign({}, state, status);
    case TEST_CLOSE_OPEN_ROUND16:
      return {
        ...state,
        round16PicksOpen
      }
    default:
      return state;
  }
};
