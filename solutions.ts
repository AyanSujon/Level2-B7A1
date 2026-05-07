
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
const output1 = filterEvenNumbers([1, 2, 3, 4, 5, 6])

// console.log(output);





// =========================== solution-2 ===========================

const reverseString = (input: string) => {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    let reversedString: string = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    return reversedString;

}

const output2 = reverseString("typescript")

// console.log(output2);







// =========================== solution-2 ===========================






