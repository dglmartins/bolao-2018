export const LOG_IN_OUT = 'LOG_IN_OUT';

export function logInOut(user) {
  return {
    type: LOG_IN_OUT,
    user
  }
}
