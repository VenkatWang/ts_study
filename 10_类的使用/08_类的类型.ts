// # 类本身可以作为一种数据类型
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const p1 = new Person('venkat');
const p2: Person = {
  name: 'keven'
}

function getPersonName(p: Person) {
  console.log(p.name);
}

getPersonName({ name: 'vocal' })

export { }