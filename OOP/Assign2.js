//Write a Point function which takes x and y coordinates as arguments to define it. It should also be able to evaluate the distance from another point. We may make use of this exercise in a later assignment problem when dealing with the Document Object Model.

function Point(x, y) {
    this.x = x;
    this.y = y;

    this.distanceFrom = function(otherPoint) {
        if (!(otherPoint instanceof Point)) {
            throw new Error("Argument must be an instance of Point");
        }
        return Math.sqrt((otherPoint.x - this.x) ** 2 + (otherPoint.y - this.y) ** 2);
    };
}

// Example usage:
const point1 = new Point(10, 5);
const point2 = new Point(0, 0);

console.log(point1.distanceFrom(point2)); // Output: 5