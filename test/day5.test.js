const testData = require('../day1/testData');
const { getLowerHalf, getUpperHalf, findRowFromInstructions, findColumnFromInstructions, getSeatId, solveChallenge1 } = require('../day5/challenge1.js');
// const challenge2 = require('../day1/challenge2.js');

describe('Challenge 1', () => {
  it('Should divide range in two parts and get lower half, starting in 0', () => {
    expect(getLowerHalf([0, 127])).toEqual([0, 63])
  })

  it('Should divide range in two parts and get lower half, not starting in 0', () => {
    expect(getLowerHalf([32, 63])).toEqual([32, 47])
  })

  it('Should divide range in two parts and get lower half, diff one', () => {
    expect(getLowerHalf([44, 45])).toEqual([44, 44])
  })

  it('Should divide range in two parts and get upper half', () => {
    expect(getUpperHalf([0, 63])).toEqual([32, 63])
    expect(getUpperHalf([32, 47])).toEqual([40, 47])
    expect(getUpperHalf([40, 47])).toEqual([44, 47])
  })

  it('Should find the row following instructions', () => {
    expect(findRowFromInstructions('FBFBBFF')).toEqual(44)
    expect(findRowFromInstructions('BFFFBBF')).toEqual(70)
    expect(findRowFromInstructions('FFFBBBF')).toEqual(14)
  })

  it('Should find the column following instructions', () => {
    expect(findColumnFromInstructions('RLR')).toEqual(5)
    expect(findColumnFromInstructions('RRR')).toEqual(7)
    expect(findColumnFromInstructions('RLL')).toEqual(4)
  })

  it('Should get seat ID', () => {
    expect(getSeatId('FBFBBFFRLR')).toEqual(357)
    expect(getSeatId('BFFFBBFRRR')).toEqual(567)
    expect(getSeatId('FFFBBBFRRR')).toEqual(119)
    expect(getSeatId('BBFFBBFRLL')).toEqual(820)
  })

  it('Should solve challenge 1', () => {
    const data = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']
    expect(solveChallenge1(data)).toEqual(820)
  })
})