// #静态属性 s-> 可以直接通过类访问的属性和方法

class Person {
  static time: string = 'venkat'
  static eating() {
    console.log('eating');
  }
}

console.log(Person.time);
Person.eating()


export { }