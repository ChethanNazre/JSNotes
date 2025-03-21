//Write a javascript function named length_of_array, which takes an array as argument and returns the number of elements in that array (as opposed to what is given by the length property of the array). Remember undefined can also be an element if it is explicitly set at some index, e.g. x[5] = undefined;. This undefined should be counted, but elements which are not present in the array (as arrays can be sparse), should not be counted.

function length_of_array(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr.hasOwnProperty(i)) {
            count++;
        }
    }
    return count;
}

console.log(length_of_array(["2","3","4",undefined,"6"]));
