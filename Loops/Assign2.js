//Using the forEach function defined for an array, find the sum of the array of numbers. [function add_all(arr) {...}]
function add_all(arr) {
var sum = 0;
for(i = 0; i < arr.length; i++) { // Changed <= to <
    sum = sum + arr[i];
}
console.log(sum);

}
add_all([1, 2, 3, 4, 5]); // 15