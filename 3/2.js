// Let circy=new Circle(11)
// Circy.getArea()
//should return 380.132711084365
/////////////////////////////////////////////
// Let circy =new Circle(4.44)
// Circy.getPerimeter()
//should return 27.897342763877365

class Circle {
	constructor(R){
		this.radius = R
	}
	getArea() { return Math.PI * Math.pow(this.radius,2) }
	getPerimeter() { return 2 * Math.PI * this.radius }
}

let circle = new Circle(4.44);
console.log(circle.getArea()); // 61.93210093580775
console.log(circle.getPerimeter()); // 27.897342763877365


// class Rectangle {
//     constructor(x, y) {
//       this.x = x
//       this.y = y
//     }
//     getArea(){ return this.x * this.y }
//     getPerimeter(){ return (this.x + this.y)*2 }
// }

