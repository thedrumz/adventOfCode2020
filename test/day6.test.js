const path = require('path')
const { textFileReader } = require('../utils/fileReader')
// Load testData
const testFile = '../day6/testData.txt'
const testData = textFileReader(path.resolve(__dirname, testFile))

const challenge1 = require('../day6/challenge1.js')
const challenge2 = require('../day6/challenge2.js')

describe('Challenge 1', () => {
  const { formatData, countUniqueCharacters, solveChallenge1 } = challenge1

  it('Should format to array', () => {
    const data = `abc`

    expect(formatData(data)).toEqual(['abc'])
  })

  it('Should format to array, multiple break lines', () => {
    const data = `ab\nac`

    expect(formatData(data)).toEqual(['abac'])
  })

  it('Should split from empty break lines', () => {
    const data = `ab\nac\n\nabc`

    expect(formatData(data)).toEqual(['abac', 'abc'])
  })

  it('Should count characters', () => {
    const data = 'abc'

    expect(countUniqueCharacters(data)).toBe(3)
  })

  it('Should count unique characters', () => {
    const data = 'abac'

    expect(countUniqueCharacters(data)).toBe(3)
  })

  it('Should solve challenge 1', () => {
    expect(solveChallenge1(testData)).toBe(11)
  })
})

describe.only('Challenge 2', () => {
  const { formatData, solveChallenge2 } = challenge2

  it('Should format each line to array', () => {
    const data = `abc`
    expect(formatData(data)).toEqual([['abc']])
  })

  it('Should split break lines into array values', () => {
    const data = `a\na\na\na`
    expect(formatData(data)).toEqual([['a', 'a', 'a', 'a']])
  })

  it('Should split break lines into array values, more than one character per line', () => {
    const data = `ab\nac`
    expect(formatData(data)).toEqual([['ab', 'ac']])
  })

  it('Should split empty break lines into group arrays', () => {
    const data = `ab\nac\n\na\nab`
    expect(formatData(data)).toEqual([['ab', 'ac'], ['a', 'ab']])
  })

  it('Should count characters of each word', () => {
    const data = `ab\nac\n\nabc`
    expect(solveChallenge2(data)).toBe(4)
  })

  it('Should count characters of each word and discard not in all words', () => {
    expect(solveChallenge2(testData)).toBe(6)
  })
})
