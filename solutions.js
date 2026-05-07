"use strict";
// Problem 1:
// Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.
// Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])
// Sample Output:
// [2, 4, 6]
// =========================== solution-1 ===========================
const filterEvenNumbers = (array) => {
    const approvedNumbers = [];
    for (const number of array) {
        if (number / 2) {
            approvedNumbers.push(number);
        }
    }
    return approvedNumbers;
};
const output = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(output);
