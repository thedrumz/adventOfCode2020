const data = require('../day2/data');

const finder = data => {
  const formatedData = formatter(data)
  return formatedData.filter(d => isInOnePosition(d.word, d.letter, [d.position1, d.position2])).length
}

const formatter = array => {
  return array.map(elem => {
    const [policy, word] = elem.split(':')
    const [positions, letter] = policy.split(' ')
    const [pos1, pos2] = positions.split('-')
    return { letter, position1: parseInt([pos1]), position2: parseInt(pos2), word: word.trim() }
  })
}

const isInOnePosition = (string, letter, positions) => {
  let count = 0
  positions.forEach(p => string[p - 1] === letter && count++)
  return count === 1
}

console.log('Day 2 - challenge 2: ' + finder(data))

module.exports = { formatter, isInOnePosition, finder }