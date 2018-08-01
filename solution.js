function checksum() {
  let sums = 0

  let data = [
    [409, 194, 207, 470, 178],
    [454, 235, 333, 511, 103],
    [474, 293, 525, 372, 408],
    [428, 4321, 2786, 6683, 3921],
    [265, 262, 6206, 2207, 5712]
  ]

  for(let i in data) {
    console.log(Math.max(...data[i]) - Math.min(...data[i]))
    sums += (Math.max(...data[i]) - Math.min(...data[i]))
  }
  console.log(sums)
  return sums
}

checksum()
