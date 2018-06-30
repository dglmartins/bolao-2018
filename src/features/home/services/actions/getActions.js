export const GET_STATUS = 'GET_STATUS';
export const GET_TOP_SCORERS = 'GET_TOP_SCORERS';
export const GET_TEAMS = 'GET_TEAMS';
export const GET_USERS = 'GET_USERS';
export const GET_GROUPS_STATS = "GET_GROUPS_STATS";
export const GET_ROUND16_STATS = "GET_ROUND16_STATS";
export const GET_QUARTER_STATS = 'GET_QUARTER_STATS';


export function getStatus(status) {
  return {
    type: GET_STATUS,
    status
  }
}

export function getTopScorers(scorers) {
  return {
    type: GET_TOP_SCORERS,
    scorers
  }
}

export function getTeams(teams) {
  return {
    type: GET_TEAMS,
    teams
  }
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

export function getGroupsStats(groupsStats) {
  return {
    type: GET_GROUPS_STATS,
    groupsStats
  }
}

export function getRound16Stats(round16Stats) {
  return {
    type: GET_ROUND16_STATS,
    round16Stats
  }
}

export function getQuarterStats(quarterStats) {
  return {
    type: GET_QUARTER_STATS,
    quarterStats
  }
}
