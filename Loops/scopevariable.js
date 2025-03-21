// Block scope example
{
    let blockVariable = "I am inside a block";
    console.log(blockVariable); // Output: I am inside a block
}
// console.log(blockVariable); // Uncaught ReferenceError: blockVariable is not defined

// Function scope example
function myFunction() {
    var functionVariable = "I am inside a function";
    console.log(functionVariable); // Output: I am inside a function
}
myFunction();
// console.log(functionVariable); // Uncaught ReferenceError: functionVariable is not defined