const testData = require('../day1/testData');
const challenge1 = require('../day1/challenge1.js');
const challenge2 = require('../day1/challenge2.js');

describe('Challenge 1', () => {
  it('Should find the two entries that sum 2020 and multiply', () => {
    expect(challenge1(testData)).toBe(514579)
  })
})

describe('Challenge 2', () => {
  it('Should find the three entries that sum 2020 and multiply', () => {
    expect(challenge2(testData)).toBe(241861950)
  })
})