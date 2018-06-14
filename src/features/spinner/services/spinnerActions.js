export const SPINNER_ON_OFF = 'SPINNER_ON_OFF';

export function spinnerOnOff (spinnerOn) {
  return {
    type: SPINNER_ON_OFF,
    spinnerOn
  }
};
