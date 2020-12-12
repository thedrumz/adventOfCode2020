const data = require('./data.js')

const TO_SUM = 2020

const calculateSums = data => {
  let n1, n2
  for (let i = 0; i < data.length; i++) {
    if (n1 || n2) break
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] === TO_SUM) {
        n1 = data[i]
        n2 = data[j]
        break
      }       
    }
  }

  return n1 * n2
}

console.log(calculateSums(data))

module.exports = calculateSums