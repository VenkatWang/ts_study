class Person {
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

class Student extends Person {
  sno: number
  constructor(name: string, age: number, sno: number) {
    super(name, age);
    this.sno = sno 
  }
  // * 函数的重写 overwrite
  eating() {
    console.log('oh no');
    super.eating()
  }
}

const student = new Student('venkat', 18, 1234)
console.log(student);
student.eating()
