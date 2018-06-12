export const LOG_IN_OUT = 'LOG_IN_OUT';

export function logInOut(currentUser) {
  return {
    type: LOG_IN_OUT,
    currentUser
  }
}
