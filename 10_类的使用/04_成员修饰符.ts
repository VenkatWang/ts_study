// # public private protected
// # public 修饰的是在任何地方可见，公有的属性和方法，默认编写的属性就是public的
// # protected 修饰的是仅在类自身以及子类中可见，受保护的属性和方法
// # private 修饰的是仅在同一类中可见，私有的属性或方法 [如需使用该值，类中添加setter和getter方法] 私有属性以下划线开头

class Person {
  private _name: string = 'venkat'
  protected age: number = 18
  set name(newValue) {
    this._name = newValue
  }
  get name() {
    return this._name
  }
}
const p = new Person()
console.log(p.name);
p.name = 'hhaha'
console.log(p.name);



class Student extends Person {
  getName() {
    // console.log(this.name);
    console.log(this.age);
  }
}


export { }