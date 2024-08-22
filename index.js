// function that takes integger and returns the sum of the  individual digits
function sumOfDigits(number) {
  // Convert the numbers to string and split intividal digits
  const digits = Math.abs(number).toString().split("");

  // Adding the individual digits using reduce
  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

  // return the sum of numbers
  return sum;
}

// Test cases
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(9876)); // Output: 30
console.log(sumOfDigits(0)); // Output: 0
console.log(sumOfDigits(1001)); // Output: 2
