//Write a javascript function named is_integer which checks if the passed argument is an integer. You can use any mathematical operator or functions defined in the Math object.

function is_integer(num) {
    if (num % 1 === 0) {
        console.log("The number is an integer");
    } else {
        console.log("The number is not an integer");
    }
    
}
is_integer(1.34); 