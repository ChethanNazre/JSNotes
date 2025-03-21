// Methods in Array

// Concat Method
var a = [1,3,5];
var b = [2,4,6];
console.log(a.concat(b));

var c = [7,9,11];
console.log(a.concat(b,c));

//Join Method
a;
console.log(a.join("|"));

//Push Method --> adds New element at the end of the Array
a.push(13);
console.log(a);

//Un-shift Method --> adds New element at the start of the Array
a.unshift(11);
console.log(a);

//POP Method --> removes element from the last index
a.pop();
console.log(a);

//Shift Method --> removes element from first index
a.shift();
console.log(a);

//Slice Method 
console.log(a.slice(0,2));

//Splice Method 
a.splice(1);
console.log(a);

//Sorting In Array
var a = [3,6,1,8,2];
console.log(a.sort());

// sorting using comparator
var a = [3,6,1,8,2];
function num_comparator(a,b)
{
    return b-a;
}
console.log(a.sort(num_comparator));
