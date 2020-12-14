const path = require('path')
const testFile = './data.txt'
const { textFileReader } = require('../utils/fileReader')
const data = textFileReader(path.resolve(__dirname, testFile))

const formatData = data => {
  const groups = data.split('\n\n')
  const allReponses = groups.map(g => g.replace(/\n/g, ''))
  return allReponses
}

const countUniqueCharacters = data => {
  return new Set(data.split('')).size
}

const solveChallenge1 = data => {
  const formatted = formatData(data)
  return formatted.reduce((acc, cur) => acc += countUniqueCharacters(cur), 0)
}

// console.log('Day 6 - challenge 1: ' + solveChallenge1(data))

module.exports = { formatData, countUniqueCharacters, solveChallenge1 }