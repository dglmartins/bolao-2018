export const TEST_CLOSE_OPEN_ROUND16 = 'TEST_CLOSE_ROUND16';

export function testCloseOpenRound16(round16PicksOpen) {
  return {
    type: TEST_CLOSE_OPEN_ROUND16,
    round16PicksOpen
  }
}
