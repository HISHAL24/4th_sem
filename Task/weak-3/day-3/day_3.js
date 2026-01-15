[]

const calculate = (a, b, operation) => {
    return operation(a, b);
};

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));       // 8
console.log(calculate(5, 3, multiply));  // 15


/*
========================================
2️⃣ MAP, FILTER, REDUCE
========================================
*/

// Original array
const numbers = [1, 2, 3, 4, 5];

/*
TASK 1: Transform arrays using map & filter
*/

// map → transforms each element
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

// filter → selects elements based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce → combines values into one result
const totalSum = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of Numbers:", totalSum);


let taxRate = 0.1;

const calculatePriceImpure = price => price + price * taxRate;
console.log(calculatePriceImpure(100));


const calculatePricePure = (price, taxRate) => {
    return price + price * taxRate;
};

console.log(calculatePricePure(100, 0.1));



const isAdult = age => age >= 18;

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

console.log(isAdult(20));           // true
console.log(capitalize("react"));   // React


// Before (impure)
let bonus = 500;

const getSalaryImpure = salary => salary + bonus;

// After (pure)
const getSalaryPure = (salary, bonus) => salary + bonus;

console.log(getSalaryPure(20000, 500));
