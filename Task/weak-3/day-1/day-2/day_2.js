// DAY 2 – Execution Context, Scope & Closures
// React Essentials – Core JavaScript Understanding

/*
========================================
1️⃣ EXECUTION CONTEXT (Basic Understanding)
========================================
JavaScript runs code in 2 phases:
1. Memory Creation Phase (Hoisting)
2. Execution Phase

- Variables declared with var are hoisted (initialized as undefined)
- let & const are hoisted but stay in Temporal Dead Zone
*/

// Example:
console.log(a);   // undefined (hoisted)
var a = 10;
// console.log(b); // ❌ ReferenceError (TDZ)
// let b = 20;


/*
========================================
2️⃣ GLOBAL vs BLOCK SCOPE
========================================
Global Scope → accessible everywhere
Block Scope → accessible only inside {}
*/

var globalVar = "I am global";

if (true) {
    let blockVar = "I am block scoped";
    const blockConst = "Me too";
    console.log(blockVar);   // ✅ Accessible here
}

console.log(globalVar); // ✅ Works
// console.log(blockVar);  // ❌ Error (block scope)


/*
========================================
3️⃣ HOISTING (Predict the Output)
========================================
*/

// Function Hoisting
sayHello(); // ✅ Works because function is hoisted

function sayHello() {
    console.log("Hello from hoisted function");
}

// Variable Hoisting
console.log(x); // undefined
var x = 5;

// console.log(y); // ❌ ReferenceError
// let y = 10;


/*
========================================
4️⃣ CLOSURES
========================================
A closure is created when a function remembers
variables from its outer scope even after the outer
function has finished execution.
*/

// TASK 2: Counter using Closures
const createCounter = () => {
    let count = 0; // private variable

    return () => {
        count++;
        console.log(`Counter value: ${count}`);
    };
};

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3