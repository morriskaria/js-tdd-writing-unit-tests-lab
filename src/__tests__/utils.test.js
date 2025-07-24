// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('returns true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });
});