function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

// Example callback functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : 'Cannot divide by zero'; }

// Usage examples
console.log(calculate(10, 5, add));       // Output: 15
console.log(calculate(10, 5, subtract));  // Output: 5
console.log(calculate(10, 5, multiply));  // Output: 50
console.log(calculate(10, 5, divide));    // Output: 2
