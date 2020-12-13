const data = require('./data')
const { getSeatId } = require('./challenge1')

const solveChallenge2 = data => {
  const seatIds = new Set()
  data.forEach(d => seatIds.add(getSeatId(d)))
  const sorted = Array.from(seatIds).sort((a, b) => a - b)

  let count = sorted[0]
  let finded
  for (let i = 0; i < sorted.length; i++) {
    if (count !== sorted[i]) {
      finded = count
      break
    }
    count++
  }

  return finded
}

console.log(solveChallenge2(data))