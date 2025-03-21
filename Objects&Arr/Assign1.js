//Write a javascript function named reverse which takes a string argument and returns the reversed string.
function reverse(string){
    console.log(string.split("").reverse().join(""));
}

    
reverse("DOG");

//-->string.split(""): This method splits the string into an array of its individual characters. For example, "hello" becomes ["h", "e", "l", "l", "o"].
//-->.reverse(): This method reverses the order of the elements in the array. So, ["h", "e", "l", "l", "o"] becomes ["o", "l", "l", "e", "h"].
//-->.join(""): This method joins the elements of the array back into a single string. The empty string "" as an argument means there will be no separator between the characters. So, ["o", "l", "l", "e", "h"] becomes "olleh".
//-->console.log(...): This prints the reversed string to the console.
