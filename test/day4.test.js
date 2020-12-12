const path = require('path')
const { textFileReader } = require('../utils/fileReader')
// Load testData
const testFile = '../day4/testData.txt'
const testData = textFileReader(path.resolve(__dirname, testFile))
// Load testValidDocs
const testValidDocsFile = '../day4/testValidDocs.txt'
const testValidDocs = textFileReader(path.resolve(__dirname, testValidDocsFile))
// Load testInvalidDocs
const testInvalidDocsFile = '../day4/testInvalidDocs.txt'
const testInvalidDocs = textFileReader(path.resolve(__dirname, testInvalidDocsFile))

const { formatData, checkDockHasRequiredFields, solveChallenge1 } = require('../day4/challenge1.js')
const { validateHGT, validateHCL, testDocValidity, solveChallenge2 } = require('../day4/challenge2.js')

describe('Challenge 1', () => {

  it('Should split data by empty lines', () => {
    expect(formatData(testData).length).toBe(4)
  })

  it('Should create object value document', () => {
    const data = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
    byr:1937 iyr:2017 cid:147 hgt:183cm`
    const result = [{
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      cid: '147',
      hgt: '183cm'
    }]
    expect(formatData(data)).toEqual(result)
  })

  it('Should check if doc is valid', () => {
    const doc = {
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      cid: '147',
      hgt: '183cm'
    }
    expect(checkDockHasRequiredFields(doc)).toBe(true)
  })

  it('Should check if doc is valid, with invalid doc', () => {
    const doc = {
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      cid: '147'
    }
    expect(checkDockHasRequiredFields(doc)).toBe(false)
  })

  it('Should check if doc is valid, with missing not required field', () => {
    const doc = {
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      hgt: '183cm'
    }
    expect(checkDockHasRequiredFields(doc)).toBe(true)
  })

  it('Should solve challenge', () => {
    expect(solveChallenge1(testData)).toBe(2)
  })
})

describe.only('Challenge 1', () => {
  describe('Validate HGT', () => {

    it('Should ends with units cm or in', () => {
      const validHgt = '60in'
      const invalidHgt = '190'
      expect(validateHGT(validHgt)).toBe(true)
      expect(validateHGT(invalidHgt)).toBe(false)
    })

    it('Should be between 150 and 193 for cm', () => {
      const validHgt = '190cm'
      const invalidHgt = '194cm'
      expect(validateHGT(validHgt)).toBe(true)
      expect(validateHGT(invalidHgt)).toBe(false)
    })
  })
  describe('Validate HCL', () => {

    it('Should start with #', () => {
      const validHcl = '#123abc'
      const invalidHcl = '123abc'
      expect(validateHCL(validHcl)).toBe(true)
      expect(validateHCL(invalidHcl)).toBe(false)
    })

    it('Should start with # followed by exactly six characters 0-9 or a-f', () => {
      const validHcl1 = '#123abc'
      const validHcl2 = '#a1b2c3'
      const invalidHcl1 = '#123abz'
      const invalidHcl2 = '#123abcd'
      expect(validateHCL(validHcl1)).toBe(true)
      expect(validateHCL(validHcl2)).toBe(true)
      expect(validateHCL(invalidHcl1)).toBe(false)
      expect(validateHCL(invalidHcl2)).toBe(false)
    })
  })

  it('Should test entire doc validity', () => {
    const validDocs = formatData(testValidDocs)
    const invalidDocs = formatData(testInvalidDocs)
    expect(testDocValidity(validDocs[0])).toBe(true)
    expect(testDocValidity(validDocs[1])).toBe(true)
    expect(testDocValidity(validDocs[2])).toBe(true)
    expect(testDocValidity(validDocs[3])).toBe(true)
    expect(testDocValidity(invalidDocs[0])).toBe(false)
    expect(testDocValidity(invalidDocs[1])).toBe(false)
    expect(testDocValidity(invalidDocs[2])).toBe(false)
    expect(testDocValidity(invalidDocs[3])).toBe(false)
  })

  it('Should solve challenge 2', () => {
    const data = `${testValidDocs}\n\n${testInvalidDocs}`
    expect(solveChallenge2(data)).toBe(4)
  })
})