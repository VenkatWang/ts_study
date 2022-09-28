// # readonly
class Person1 {
  readonly name: string = '124'
}

const p = new Person1()
console.log(p.name);
// p.name = 'hahha'

// # readony可以在constructor中修改一次
// # 属性本身不能进行修改，但是如果他是对象类型，对象中的属性(该属性不是readonly)是可以修改的
class Person2 {
  readonly name: string
  age?: number
  readonly friend?: Person2
  constructor(name: string, age: number, friend?: Person2) {
    this.name = name
    this.age = age
    if (friend) {
      this.friend = friend
    }
  }
}

const p2 = new Person2('venkat', 20, new Person2('why', 18))
// p2.name = 'keven'
console.log(p2);
if (p2.friend) {
  p2.friend.age = 19
}

