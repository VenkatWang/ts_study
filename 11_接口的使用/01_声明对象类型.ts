type Person = {
  name: string,
  age: number
}

const p1: Person = {
  name: 'venkat',
  age: 18
}

interface IPerson1 {
  readonly name: string,
  age: number
  friend?: {
    name: string
  }
}

const p2: IPerson1 = {
  name: 'vocal',
  age: 20
}
// p2.name='hhh'
console.log(p1, p2);

export { }