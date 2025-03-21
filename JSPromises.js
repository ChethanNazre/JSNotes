//Promises in JS
//Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
//Promises are the ideal choice for handling asynchronous operations in the simplest manner.
//Promises have three states:
//Pending: Initial State, before the Promise succeeds or fails
//Resolved: Completed Promise
//Rejected: Failed Promise

//Syntax:
//new Promise( /* executor */ function(resolve, reject) { ... } );

//Parameters:
//executor: A function that takes two arguments, resolve and reject. It is used to handle the
//promise. The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object).
//resolve: This is a function that is called when the Promise is resolved.
//reject: This is a function that is called when the Promise is rejected.

//Example:
//Creating a Promise
const promise = new Promise((resolve, reject) => {
    // code that takes some time
    // If the task is successful then call resolve
    // If the task is unsuccessful then call reject
    const task = false;
    if (task) {
        resolve('Task is done successfully.');
    } else {
        reject('Task is not done.');
    }
}
); 
//Using Promises
promise.then((message) => {
    // code to be executed if the promise is resolved
    console.log(message);
}).catch((error) => {
    // code to be executed if the promise is rejected
    console.log(error);
});



