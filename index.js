//a point with a x,y coordinate plane
class Point {

  constructor(x, y) {
    this.x = x,
      this.y = y
  }
  toString() {
    return `${this.x}, ${this.y}`
    //"x,y" that is passed in
  }

}

class Shape {

  addToPlane(x, y) {
    this.position = new Point(x, y)
    //the shape's position
  }
  move(x, y) {
    this.position = new Point(x, y)
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius
  }
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.area = function() {
  return Math.PI * this.radius ^ 2
}

Circle.prototype.diameter = function() {
  return this.radius * 2
}


Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

class Polygon {
  constructor(sides) {
    this.sides = sides
  }
}

Polygon.prototype = Object.create(Shape.prototype)

class Side {
  constructor(length) {
    this.length = length
  }
}

Polygon.prototype.perimeter = function() {
  var total = 0;
  for (var i = 0; i < this.sides.length; i++) {
    total += this.sides[i].length
  }
  return total;
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(
        side4)]
  }

}

Quadrilateral.prototype = Object.create(Polygon.prototype)
class Rectangle {
  constructor(w, h) {
    this.sides = [new Side(w), new Side(w), new Side(h), new Side(h)]
    this.width = w
    this.height = h
  }
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = function() {
  return this.width * this.height
}

class Square {
  constructor(h) {
    this.sides = [new Side(h), new Side(h), new Side(h), new Side(h)]
    this.width = h
    this.height = h
  }
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.listProperties = function() {

}

class Triangle {
  constructor(s1, s2, s3) {
    this.sides = [new Side(s1), new Side(s2), new Side(s3)]
  }
}

Triangle.prototype = Object.create(Polygon.prototype)
