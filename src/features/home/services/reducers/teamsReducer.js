import { GET_TEAMS } from '../actions/getActions';
// import { GET_TOP_SCORER_PICK } from '../actions/picksActions';

export function teams (state = {}, action) {
  const { teams } = action
  switch (action.type) {
    case GET_TEAMS:
      return Object.assign({}, state, teams);
    default:
    return state;
  }
};

// export function topScorerPick (state = {pick: "disabled"}, action) {
//   const { scorer } = action;
//   switch (action.type) {
//     case GET_TOP_SCORER_PICK:
//       return {
//         ...state,
//         pick: scorer
//       };
//     default:
//     return state;
//   }
// }
