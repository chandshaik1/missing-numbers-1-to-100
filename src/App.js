// App.js

const numbers = [...Array(101).keys()].slice(1) // Create an array of numbers from 1 to 100
const missingNumber = Math.floor(Math.random() * 100) + 1 // Generate a random missing number
const shuffledNumbers = numbers
  .filter(num => num !== missingNumber)
  .sort(() => Math.random() - 0.5) // Shuffle the numbers and remove the missing number

console.log('Original Numbers:', numbers)
console.log('Missing Number:', missingNumber)
console.log('Shuffled Numbers:', shuffledNumbers)

const findMissingNumber = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  const totalSum = ((arr.length + 1) * (arr.length + 2)) / 2 // Sum of numbers from 1 to 100
  const missingNumber = totalSum - sum
  return missingNumber
}

const foundMissingNumber = findMissingNumber(shuffledNumbers)
console.log('Found Missing Number:', foundMissingNumber)
