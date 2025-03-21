//JSON - JavaScript Object Notation
// JSON is a format for storing and transporting data
// JSON is often used when data is sent from a server to a web page

// JavaScript Object
const jsObject = { name: "John", age: 30, city: "New York" };

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(jsObject);
console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// Convert JSON string to JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: 'John', age: 30, city: 'New York' }