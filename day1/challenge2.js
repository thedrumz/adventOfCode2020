const data = require('./data.js')

const TO_SUM = 2020

const calculateSums = data => {
  let n1, n2, n3
  for (let i = 0; i < data.length; i++) {
    if (n1 || n2 || n3) break
    for (let j = i + 1; j < data.length; j++) {
      for (let t = j + 1; t < data.length; t++) {
        if (data[i] + data[j] + data[t] === TO_SUM) {
          n1 = data[i]
          n2 = data[j]
          n3 = data[t]
          break
        }
      }    
    }
  }

  return n1 * n2 * n3
}

console.log('Day 1 - challenge 2: ' + calculateSums(data))

module.exports = calculateSums