// Arrays in JS
var myarray=[]; //array litral
myarray[0] = "zero";
myarray[1] = true;
myarray[2] = 3.14;
console.log(myarray); 

//Sparse in array
myarray[10]=false;
console.log(myarray); // [ 'zero', true, 3.14, <6 empty

// Arrays as Object
console.log(typeof myarray);
// object


myarray["5"]="abc";
console.log(myarray);


//Lenght of an Array
console.log(myarray.length); 
// 11


//Shrinking the lenght of the Array
myarray.length=5;
console.log(myarray); //5

//Iterating in Array
var myarray = [1,2,3];
myarray[10] = 11;
for (var i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
    }


for(var i in myarray){
    console.log(i);
}

// Deleting from Array
delete myarray[1];
console.log(myarray);