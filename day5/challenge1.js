const data = require('./data')

const getLowerHalf = ([from, to] = fromTo) => {
  return [from, ((to - from + 1) / 2) - 1 + from]
}

const getUpperHalf = ([from, to] = fromTo) => {
  return [((to - from + 1) / 2) + from, to]
}

const findRowFromInstructions = string => {
  const array = string.split('')
  return array.reduce((prev, curr) => {
    if (curr === 'F') prev = getLowerHalf(prev) 
    if (curr === 'B') prev = getUpperHalf(prev)
    return prev
  }, [0, 127])[0]
}

const findColumnFromInstructions = string => {
  const array = string.split('')
  return array.reduce((prev, curr) => {
    if (curr === 'L') prev = getLowerHalf(prev) 
    if (curr === 'R') prev = getUpperHalf(prev)
    return prev
  }, [0, 7])[0]
}

const getSeatId = string => {
  const rowInstructions = string.slice(0, 7)
  const columnInstructions = string.slice(-3)

  return findRowFromInstructions(rowInstructions) * 8 + findColumnFromInstructions(columnInstructions)
}

const solveChallenge1 = data => {
  const seatIds = new Set()
  data.forEach(d => seatIds.add(getSeatId(d)))
  return Math.max(...seatIds)
}

console.log('Day 5 - challenge 1: ' + solveChallenge1(data))

module.exports = { getLowerHalf, getUpperHalf, findRowFromInstructions, findColumnFromInstructions, getSeatId, solveChallenge1 }