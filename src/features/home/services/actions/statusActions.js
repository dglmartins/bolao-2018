export const GET_STATUS = 'GET_STATUS';

export function getStatus(status) {
  return {
    type: GET_STATUS,
    status
  }
}
