const minMax = (arr) => {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
};

const userInput = prompt("Enter a list of numbers separated by commas:");
const numbersArray = userInput.split(',').map(Number);

// Call the minMax function and store the result
const result = minMax(numbersArray);

// Correctly formatted console.log using template literals
console.log(`The minimum is ${result.min} and the maximum is ${result.max}.`);