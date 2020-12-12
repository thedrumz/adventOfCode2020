const data = require('./data')
const { findPath, countHashtag } = require('./challenge1')

const solveChallenge2 = data => {
  const path1 = findPath(data, 1, 1)
  const count1 = countHashtag(path1)
  const path2 = findPath(data, 3, 1)
  const count2 = countHashtag(path2)
  const path3 = findPath(data, 5, 1)
  const count3 = countHashtag(path3)
  const path4 = findPath(data, 7, 1)
  const count4 = countHashtag(path4)
  const path5 = findPath(data, 1, 2)
  const count5 = countHashtag(path5)

  return count1 * count2 * count3 * count4 * count5
}

console.log('Day 3 - challenge 2: ' + solveChallenge2(data))

module.exports = { solveChallenge2 }