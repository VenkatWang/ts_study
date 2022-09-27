// # number类型
let num: number = 1
let num2: number = 0b1    // 2进制
let num8: number = 0o1    // 8进制
let num16: number = 0x1   // 16进制
console.log(num, num2, num8, num16);


// # boolean类型
let flag: boolean = true;
flag = false;
flag = 20 > 30;
console.log(flag);


// # string类型
let message: string = "Hello World"

// # 数组类型
let names: string[] = ['abc', 'cba', 'cas']
let names2: Array<string> = ['vocal', 'kevin', 'venkat']

// # object类型
// * 不能从中获取数据，也不能设置类型
let myInfo: object = {
  name: 'venkat',
  age: 18,
  height: 185
}
// myInfo['name'] = 'vocal';
// console.log(myInfo.name);

// # symbol类型
const s1: symbol = Symbol('title')
const s2: symbol = Symbol('title')
const person = {
  [s1]: 'coder',
  [s2]: 'worker'
}
console.log(person);

// # undefined , null
let n: null = null;
let u: undefined = undefined
console.log(n, u);

// # any类型
let a: any
a = 123;
a = 'venkat'
a = true

// # unknown
// * unkonwn只能赋值给any和unkonwn类型，any类型可以赋值给任意类型
function foo(): string {
  return 'foo'
}
function bar(): number {
  return 123
}
let flags = true
let result: unknown
if (flags) {
  result = foo()
} else {
  result = bar()
}
const result_copy: unknown = result

// # void类型
// * 指定函数没有返回值
function sum(num1: number, num2: number): void {
  console.log(num1 + num2);
  // return num1 + num2
}
sum(1, 2)
// sum('a', 'b')

// # never
// * 永远不会有返回值,永远不会有赋值过程
function neverfoo(): never {
  // * 死循环
  // while (true) {

  // }
  // * 抛出异常
  throw new Error()
}

function handlerMessage(message: number | string | boolean) {
  switch (typeof message) {
    case 'string':
      return message
    case 'number':
      return message
    // default:
    //   const defaultValue: never = message
    //   break;
  }
}
handlerMessage(true)