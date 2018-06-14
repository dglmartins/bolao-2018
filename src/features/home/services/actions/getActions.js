export const GET_STATUS = 'GET_STATUS';
export const GET_TOP_SCORERS = 'GET_TOP_SCORERS';


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
