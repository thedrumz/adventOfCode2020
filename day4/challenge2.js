const path = require('path')
const testFile = './data.txt'
const { textFileReader } = require('../utils/fileReader')
const data = textFileReader(path.resolve(__dirname, testFile))
const { formatData, checkDockHasRequiredFields } = require('./challenge1.js')

const validateStringLength = (string, length) => {
  return string.trim().length === length
}

const validateNumberBetweenMinAndMax = (number, min, max) => {
  return Number(number) >= min && Number(number) <= max
}

const validateBYR = byr => validateStringLength(byr, 4) && validateNumberBetweenMinAndMax(byr, 1920, 2002)

const validateIYR = iyr => validateStringLength(iyr, 4) && validateNumberBetweenMinAndMax(iyr, 2010, 2020)

const validateEYR = eyr => validateStringLength(eyr, 4) && validateNumberBetweenMinAndMax(eyr, 2020, 2030)

const validateHGT = hgt => {
  const validUnits = ['cm', 'in']
  const units = hgt.slice(-2)
  const number = Number(hgt.replace(units, ''))
  
  if (!validUnits.includes(units)) return false
  if (units === 'cm') return validateNumberBetweenMinAndMax(number, 150, 193)
  else return validateNumberBetweenMinAndMax(number, 59, 76)
}

const validateHCL = hcl => {
  return /^#[0-9|a-f]{6}$/.test(hcl)
}

const validateECL = ecl => {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)
}

const validatePID = pid => validateStringLength(pid, 9)

const testDocValidity = doc => {
  return validateBYR(doc.byr) && validateIYR(doc.iyr) &&
    validateEYR(doc.eyr) && validateHGT(doc.hgt) &&
    validateHCL(doc.hcl) && validateECL(doc.ecl) &&
    validatePID(doc.pid)
}

const solveChallenge2 = data => {
  const formattedData = formatData(data)
  let count = 0
  formattedData.forEach(d =>
    checkDockHasRequiredFields(d) && testDocValidity(d) && count++
  )
  return count
}

console.log('Day 4 - challenge 2: ' + solveChallenge2(data))

module.exports = { validateHGT, validateHCL, testDocValidity, solveChallenge2 }