export const GET_GROUPS = 'GET_GROUPS';

export function getGroups(groups) {
  return {
    type: GET_GROUPS,
    groups
  }
}
