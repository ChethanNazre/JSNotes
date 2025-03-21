//Objects in JS
var book = {};
book["title"]= "A tale of two cities";
console.log(book["title"]);

delete book.title;
console.log(book);

//# Itirate on objects

var book = {title : "A tale of two tails", author : "charles dickens"};
for(var p in book){
    console.log(p +":"+ book[p] );
}

let alien={
    "name":"ali",
    "age":30,
    "city":"newyork",
    "country":"usa",
    "hasJob":true,
    "hasCar":false
}
console.log(alien.name, alien.age, alien['city']);