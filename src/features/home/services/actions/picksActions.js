export const GET_ROUND_ONE_PICKS = 'GET_ROUND_ONE_PICKS';
export const GET_ROUND_16_PICKS = 'GET_ROUND_16_PICKS';
export const GET_QUARTER_PICKS = 'GET_QUARTER_PICKS';
export const GET_SEMI_PICKS = 'GET_SEMI_PICKS';
export const GET_FINAL_PICKS = 'GET_FINAL_PICKS';


export const CHANGE_PICK = 'CHANGE_PICK';
export const CHANGE_ROUND_16_GAME_PICK = 'CHANGE_ROUND_16_GAME_PICK';
export const CHANGE_QUARTER_GAME_PICK = 'CHANGE_QUARTER_GAME_PICK';
export const CHANGE_SEMI_GAME_PICK = 'CHANGE_SEMI_GAME_PICK';
export const CHANGE_FINAL_GAME_PICK = 'CHANGE_FINAL_GAME_PICK';



export const CHANGE_ROUND_16_TEAM_ADVANCE = 'CHANGE_ROUND_16_TEAM_ADVANCE';
export const CHANGE_QUARTER_TEAM_ADVANCE = 'CHANGE_QUARTER_TEAM_ADVANCE';
export const CHANGE_SEMI_TEAM_ADVANCE = 'CHANGE_SEMI_TEAM_ADVANCE';
export const CHANGE_FINAL_TEAM_ADVANCE = 'CHANGE_FINAL_TEAM_ADVANCE';



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

export function getQuarterPicks(quarterPicks) {
  return {
    type: GET_QUARTER_PICKS,
    quarterPicks
  }
}

export function getSemiPicks(semiPicks) {
  return {
    type: GET_SEMI_PICKS,
    semiPicks
  }
}

export function getFinalPicks(finalPicks) {
  return {
    type: GET_FINAL_PICKS,
    finalPicks
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

export function changeRound16GamePick({whichGame, pick}) {
  return {
    type: CHANGE_ROUND_16_GAME_PICK,
    whichGame,
    pick
  }
}

export function changeQuarterGamePick({whichGame, pick}) {
  return {
    type: CHANGE_QUARTER_GAME_PICK,
    whichGame,
    pick
  }
}

export function changeSemiGamePick({whichGame, pick}) {
  return {
    type: CHANGE_SEMI_GAME_PICK,
    whichGame,
    pick
  }
}

export function changeFinalGamePick({whichGame, pick}) {
  return {
    type: CHANGE_FINAL_GAME_PICK,
    whichGame,
    pick
  }
}

export function changeRound16TeamAdvance({whichGame, teamAdvance}) {
  return {
    type: CHANGE_ROUND_16_TEAM_ADVANCE,
    whichGame,
    teamAdvance
  }
}

export function changeQuarterTeamAdvance({whichGame, teamAdvance}) {
  return {
    type: CHANGE_QUARTER_TEAM_ADVANCE,
    whichGame,
    teamAdvance
  }
}

export function changeSemiTeamAdvance({whichGame, teamAdvance}) {
  return {
    type: CHANGE_SEMI_TEAM_ADVANCE,
    whichGame,
    teamAdvance
  }
}

export function changeFinalTeamAdvance({whichGame, teamAdvance}) {
  return {
    type: CHANGE_FINAL_TEAM_ADVANCE,
    whichGame,
    teamAdvance
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
