const data = require('../day2/data');

const finder = data => {
  const formatedData = formatter(data)
  return formatedData.filter(d => isNumberInBetween(countLetter(d.letter, d.pass), d.min, d.max)).length
}

const formatter = array => {
  return array.map(elem => {
    const [policy, pass] = elem.split(':')
    const [minMax, letter] = policy.split(' ')
    const [min, max] = minMax.split('-')
    return { letter, min: parseInt(min), max: parseInt(max), pass: pass.trim() }
  })
}

const countLetter = (letter, word) => {
  let count = 0
  word.split('').forEach(l => l === letter && count++)
  return count
}

const isNumberInBetween = (number, min, max) => {
  return min <= number && number <= max
}

console.log('Day 2 - challenge 1: ' + finder(data))

module.exports = { formatter, countLetter, isNumberInBetween, finder }