export const LOG_IN_OUT = 'LOG_IN_OUT';

export function logInOut({uid, email}) {
  return {
    type: LOG_IN_OUT,
    uid,
    email
  }
}
