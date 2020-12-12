const testData = require('../day3/testData')
const { findPath, moveRight, countHashtag, solveChallenge1 } = require('../day3/challenge1.js')
const { solveChallenge2 } = require('../day3/challenge2.js')

describe('Challenge 1', () => {

  it('Should move pointer to right, start on initial position', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    const position = moveRight(array.length, 3, 0)
    expect(array[position]).toBe(4)
  })

  it('Should move pointer to right, start not on initial position', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    const position = moveRight(array.length, 3, 3)
    expect(array[position]).toBe(7)
  })

  it('Should move pointer to right circularily', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    const position = moveRight(array.length, 3, 6)
    expect(array[position]).toBe(3)
  })

  it('Should move pointer down on finish right movement', () => {
    const array = ['abcdefg', 'hijklmn']
    expect(findPath(array)).toEqual(['k'])
  })

  it('Should move pointer down on finish right movement, until array end', () => {
    const array = ['abcdefg', 'hijklmn', 'opqrstu']
    expect(findPath(array)).toEqual(['k', 'u'])
  })

  it('Should move pointer down on finish right movement, until array end, circularily', () => {
    const array = ['abcdefg', 'hijklmn', 'opqrstu', 'vwxyzab']
    expect(findPath(array)).toEqual(['k', 'u', 'x'])
  })

  it('Should count # in array', () => {
    const array = '..##.......'.split('')
    expect(countHashtag(array)).toBe(2)
  })

  it('Should find path and count #', () => {
    expect(solveChallenge1(testData)).toBe(7)
  })
})

describe('Challenge 2', () => {
  it('Should find path and count #, by another whay ', () => {
    const path = findPath(testData, 1, 1)
    expect(countHashtag(path)).toBe(2)
  })

  it('Should find path and count #, by another different path', () => {
    const path = findPath(testData, 1, 2)
    expect(countHashtag(path)).toBe(2)
  })
  
  it('Should solve challenge 2', () => {
    expect(solveChallenge2(testData)).toBe(336)
  })
})
