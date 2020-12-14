const path = require('path')
const testFile = './data.txt'
const { textFileReader } = require('../utils/fileReader')
const data = textFileReader(path.resolve(__dirname, testFile))

const challenge1 = require('./challenge1')

const formatData = data => {
  const groups = data.split('\n\n')
  return groups.map(g => g.split('\n'))
}

const solveChallenge2 = data => {
  const allRes = challenge1.formatData(data)
  const groupedRes = formatData(data)

  groupedRes.forEach((g, i) => {
    g.forEach(w => {
      const array = w.split('')
      allRes[i].split('').forEach(l => {
        !array.includes(l) && (allRes[i] = allRes[i].replace(l, ''))
      })
    })
  })
  return allRes.reduce((acc, cur) => acc += challenge1.countUniqueCharacters(cur), 0)
}

console.log('Day 6 - challenge 2: ' + solveChallenge2(data))

module.exports = { formatData, solveChallenge2 }