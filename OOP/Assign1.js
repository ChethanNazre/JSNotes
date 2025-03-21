//Write a constructor function to represent a Rectangle, which can calculate its area and perimeter.

function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.area = function(){console.log(this.length*this.breadth);}
    this.perimeter = function(){console.log(2*(this.length + this.breadth));}
}
var a = new Rectangle(3,4);

a.area();
a.perimeter();

