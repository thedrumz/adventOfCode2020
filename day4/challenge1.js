const path = require('path')
const testFile = './data.txt'
const { textFileReader } = require('../utils/fileReader')
const data = textFileReader(path.resolve(__dirname, testFile))

const formatData = data => {
  const docs = data.split('\n\n')
  const formattedDocs = docs.map(doc => {
    const formattedDoc = {}
    const parts = doc.replace(/\n/g, ' ').split(' ')
    parts.forEach(p => {
      const [key, value] = p.split(':')
      formattedDoc[key] = value
    })
    return formattedDoc
  })
  return formattedDocs
}

const checkDockHasRequiredFields = doc => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

  return !requiredFields.find(reqField => !doc[reqField])
}

const solveChallenge1 = data => {
  const formattedData = formatData(data)
  let count = 0
  formattedData.forEach(d => checkDockHasRequiredFields(d) && count++)
  return count
}

console.log('Day 4 - challenge 1: ' + solveChallenge1(data))

module.exports = { formatData, checkDockHasRequiredFields, solveChallenge1 }