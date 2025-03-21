//Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], write a comparator function to sort it.

const array = [{radius: 5}, {radius: 9}, {radius: 2}];

array.sort((a, b) => a.radius - b.radius);

console.log(array);

