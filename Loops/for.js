//while loop
var n = 0;
while(n<=10){
    console.log(n);
    n = n + 1;

} 
//for loop

for (var i = 0; i <= 10; i++) {
    if (i == 6) {

        break;

    }
    console.log(i);
}
   
   for (var i = 0; i <= 10; i++) {
    if (i == 6) {
        continue;

    }
    console.log(i);
}

function add(a,b){
    return a+b;
}