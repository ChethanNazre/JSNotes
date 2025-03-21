//Async-Await
async function myFunction() {
    return 'Hello World';
}

myFunction().then(
    function(value) {
        console.log(value);
    },
    function(error) {
        console.log(error);
    }
);

//Async-Await with try-catch
try {
    let result = await myFunction();
    console.log(result);
}
catch(error) {
    console.log(error);
}
