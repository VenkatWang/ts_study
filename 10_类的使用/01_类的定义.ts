class Person {
  // name: string=''
  // age: number=0

  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }

  eating() {
    console.log(this.name + ' eating');
  }
}

const person = new Person('venkat', 20)

console.log(person);
person.eating()


export { }

// # 类的特性:  [抽象] 封装 继承 多态 