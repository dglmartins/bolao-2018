export const GET_ROUND_ONE_PICKS = 'GET_ROUND_ONE_PICKS';

export function getRoundOnePicks(roundOnePicks) {
  return {
    type: GET_ROUND_ONE_PICKS,
    roundOnePicks
  }
}
