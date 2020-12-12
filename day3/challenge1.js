const data = require('./data')

const findPath = (array, toRight = 3, toBottom = 1) => {
  const formattedArray = array.map(word2array)
  const length = formattedArray[0].length

  let result = []
  let downPosition = 0
  let rightPosition = 0
  for (let i = 0; i < formattedArray.length - 1; i++) {
    rightPosition = moveRight(length, toRight, rightPosition)
    downPosition += toBottom

    if (!formattedArray[downPosition]) break

    result.push(formattedArray[downPosition][rightPosition])
  }
  return result
}

const moveRight = (arrayLength, toRight, start) => {
  return (toRight + start) % arrayLength
}

const word2array = word => word.split('')

const countHashtag = array => array.filter(el => el === '#').length

const solveChallenge1 = data => countHashtag(findPath(data))

console.log('Day 3 - challenge 1: ' + solveChallenge1(data))

module.exports = { moveRight, findPath, countHashtag, solveChallenge1 }