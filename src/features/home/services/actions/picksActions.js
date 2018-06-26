export const GET_ROUND_ONE_PICKS = 'GET_ROUND_ONE_PICKS';
export const GET_ROUND_16_PICKS = 'GET_ROUND_16_PICKS';
export const CHANGE_PICK = 'CHANGE_PICK';
export const GET_TOP_SCORER_PICK = 'GET_TOP_SCORER_PICK';
export const GET_TEAM_PICK = 'GET_TEAM_PICK';

export function getRoundOnePicks(roundOnePicks) {
  return {
    type: GET_ROUND_ONE_PICKS,
    roundOnePicks
  }
}

export function getRound16Picks(round16Picks) {
  return {
    type: GET_ROUND_16_PICKS,
    round16Picks
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

export function getTopScorerPick(scorer) {
  return {
    type: GET_TOP_SCORER_PICK,
    scorer
  }
}

export function getTeamPick(team) {
  return {
    type: GET_TEAM_PICK,
    team
  }
}
