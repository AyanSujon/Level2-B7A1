
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







// =========================== solution-3 ===========================

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): "String" | "Number" =>{
    if(typeof input === "string"){
        return "String";
    }
    if(typeof input === "number"){
        return "Number";
    }
throw new Error("Invalid input");

}
const output3 = checkType(56); // "String"
// console.log(output3); 



// Another Solution of Problem-3
// type StringOrNumber = string | number;

// const checkType = (input: StringOrNumber): string => {
//     if (typeof input === "string") {
//         return '"String";';
//     }

//     if (typeof input === "number") {
//         return '"Number";';
//     }

//     throw new Error("Invalid input");
// };

// const output = checkType("Hello"); 
// console.log(output);








// =========================== solution-4 ===========================

function getProperty<ObjectType, KeyType extends keyof ObjectType>(
    obj: ObjectType,
    key: KeyType
): ObjectType[KeyType] {
    return obj[key];
}

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };

const output4 = getProperty(user, "name") // "John Doe"
console.log(output4); 


