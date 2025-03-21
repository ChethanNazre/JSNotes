//Write a factorial function that returns the factorial of a given number, n. Make sure you return the calculated value and not just print it. [function factorial(n){...}]

function factorial(n){
    if(n == 0){
        return 1;
    } else {
        let result = 1;
        for(i = n; i > 1; i--){
            result *= i;
        }
        return result;
    }
}
console.log(factorial(4));
