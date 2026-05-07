
// =========================== solution-1 ===========================


const filterEvenNumbers = (array: number[]) => {

    if (!Array.isArray(array)) {
        throw new Error("Input must be an array of numbers");
    }
    const approvedNumbers: number[] = [];
    for (const item of array) {
        const number = Number(item);

        if (isNaN(number)) {
            throw new Error("All elements must be valid numbers");
        }

        if (number % 2 === 0) {
            approvedNumbers.push(number)
        }
    }
    return approvedNumbers

};
const output = filterEvenNumbers([1, 2, 3, 4, 5, 6])

// console.log(output);






// =========================== solution-2 ===========================






















