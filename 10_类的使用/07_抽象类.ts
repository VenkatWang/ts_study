// # 抽象类是使用abstract声明的类
// # 抽象类是不能被实例化的

// # 抽象类中的方法如果有实现体则不需要设置为抽象方法

// # 抽象方法必须存在在抽象类中
// # 抽象方法必须被子类实现

abstract class Shape {
  abstract getArea(): number
}

class Rectangle extends Shape {
  width: number
  height: number
  constructor(width: number, height: number) {
    super()
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height
  }
}

const rectangle = new Rectangle(20, 30)

class Circle extends Shape {
  r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea(): number {
    return Math.PI * this.r ** 2
  }
}

const circle = new Circle(10)

function getShapeArea(shape: Shape) {
  console.log(shape.getArea())
}

getShapeArea(rectangle)
getShapeArea(circle)