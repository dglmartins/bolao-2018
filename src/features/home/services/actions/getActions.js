export const GET_STATUS = 'GET_STATUS';
export const GET_TOP_SCORERS = 'GET_TOP_SCORERS';
export const GET_TEAMS = 'GET_TEAMS';
export const GET_USERS = 'GET_USERS';


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
