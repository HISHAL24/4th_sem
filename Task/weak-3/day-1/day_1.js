// DAY 1 – Modern JavaScript Syntax (React Essentials)

// Normal Function → Arrow Function
const add = (a, b) => a + b;
console.log(`Addition Result: ${add(5, 3)}`);


// Template Literals (Dynamic Message)
const name = "Hishal";
const course = "CSE";
const year = 2026;

console.log(`My name is ${name}. I study ${course} and my batch year is ${year}.`);


// Ternary Operator (if-else replacement)
const marks = 72;
const status = marks >= 50 ? "Pass" : "Fail";

console.log(`Exam Status: ${status}`);


// Destructuring Objects
const student = {
    studentName: "Hishal",
    age: 20,
    branch: "CSE"
};

const { studentName, branch } = student;
console.log(`Student: ${studentName}, Branch: ${branch}`);


// Destructuring Arrays
const numbers = [10, 20, 30];
const [first, second] = numbers;

console.log(`First Number: ${first}, Second Number: ${second}`);
