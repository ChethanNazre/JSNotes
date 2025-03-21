//Write javascript code so that we can check if a string object is a palindrome. E.g. "xyx".isPalindrome() should return true.

function isPalindrome(string){
    console.log(string === string.split('').reverse().join(''));
    }

    isPalindrome("232");
