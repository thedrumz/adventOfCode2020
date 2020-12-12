const testData = require('../day2/testData');
const challenge1 = require('../day2/challenge1.js');
const challenge2 = require('../day2/challenge2.js');

describe('Challenge 1', () => {
  it('Should separate the string in components', () => {
    const pass = ['1-3 a: abcde']
    const result = [{
      letter: 'a',
      min: 1,
      max: 3,
      pass: 'abcde'
    }]
    expect(challenge1.formatter(pass)).toEqual(result)
  })
  
  it('Should count a letter in word, once', () => {
    const word = 'abcd'
    const letter = 'a'
    expect(challenge1.countLetter(letter, word)).toBe(1)
  })
  
  it('Should count a letter in word, repeated', () => {
    const word = 'fftfopf'
    const letter = 'f'
    expect(challenge1.countLetter(letter, word)).toBe(4)
  })
  
  it('Should count a letter in word, not exists', () => {
    const word = 'cdefg'
    const letter = 'b'
    expect(challenge1.countLetter(letter, word)).toBe(0)
  })
  
  it('Should check if number is in between min and max', () => {
    const number = 2
    const min = 1
    const max = 3
    expect(challenge1.isNumberInBetween(number, min, max)).toBe(true)
  })
  
  it('Should check if number is in between min and max, minor', () => {
    const number = 0
    const min = 1
    const max = 3
    expect(challenge1.isNumberInBetween(number, min, max)).toBe(false)
  })
  
  it('Should find words according policies', () => {
    
    expect(challenge1.finder(testData)).toBe(2)
  })
})

describe('Challenge 2', () => {
  it('Should separate string in components', () => {
    const string = ['1-3 a: abcde']
    const result = [{
      position1: 1,
      position2: 3,
      letter: 'a',
      word: 'abcde'
    }]
    expect(challenge2.formatter(string)).toEqual(result)
  })

  it('Should check if letter is in one of the positions', () => {
    const string = 'abcde'
    const letter = 'a'
    const position1 = 1
    const position2 = 3
    expect(challenge2.isInOnePosition(string, letter, [position1, position2])).toEqual(true)
  })

  it('Should check if letter is in one of the positions, repeated', () => {
    const string = 'abade'
    const letter = 'a'
    const position1 = 1
    const position2 = 3
    expect(challenge2.isInOnePosition(string, letter, [position1, position2])).toEqual(false)
  })

  it('Should check if letter is in one of the positions, repeated in no relevant positions', () => {
    const string = 'aacaa'
    const letter = 'a'
    const position1 = 1
    const position2 = 3
    expect(challenge2.isInOnePosition(string, letter, [position1, position2])).toEqual(true)
  })

  it('Should check if letter is in one of the positions, not in relevant positions', () => {
    const string = 'badae'
    const letter = 'a'
    const position1 = 1
    const position2 = 3
    expect(challenge2.isInOnePosition(string, letter, [position1, position2])).toEqual(false)
  })

  it('Should find words according policies', () => {
    expect(challenge2.finder(testData)).toEqual(1)
  })
})