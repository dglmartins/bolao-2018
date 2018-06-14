export const GET_ROUND_ONE_PICKS = 'GET_ROUND_ONE_PICKS';
export const CHANGE_PICK = 'CHANGE_PICK';

export function getRoundOnePicks(roundOnePicks) {
  return {
    type: GET_ROUND_ONE_PICKS,
    roundOnePicks
  }
}

export function changePick({group, whichPick, pick}) {
  return {
    type: CHANGE_PICK,
    group,
    whichPick,
    pick
  }
}
