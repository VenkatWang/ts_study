// # 函数的类型

// ~1.函数作为参数时，在参数中编写类型
function foo() {

}
type FooFnType = () => void

function bar(fn: FooFnType) {
  fn()
}

bar(foo)

// ~2.定义箭头函数时，编写函数的类型
type AddFnType = (num1: number, num2: number) => number

const add: AddFnType = (num1, num2) => {
  return num1 + num2
}
console.log(add(1, 2))

// ~案例
type calcFnType = (num1: number, num2: number) => void

function calc(num1: number, num2: number, fn: calcFnType) {
  console.log(fn(num1, num2));
}

// -----------
function sum(num1: number, num2: number): number {
  return num1 + num2
}

calc(20, 30, sum)

// # 参数的可选类型
// * 可选类型必须写在必选类型的后边
function foo_(x: number, y?: number) {
  console.log(x, y);
}
foo_(1)

// # 参数的默认值
function foo__(x: number = 20, y: number) {
  console.log(x, y);
}
foo__(undefined, 2)

function foo__1(x: number, y: number = 20) {
  console.log(x);
}
foo__1(3)

// # 必选参数，参数默认值，可选参数

// # 函数的重载
// ~ 函数的名称相同，但是参数不同的几个函数，就是函数的重载
// ~ 使用联合类型可以简单实现的没有必要使用函数的重载

// * 普通用法，使用联合类型以及进行类型的缩小进行编写，相对来说比较麻烦
function add_(a1: number | string, a2: number | string) {
  // return a1 + a2
  if (typeof a1 === 'number' && typeof a2 === 'number') {
    return a1 + a2
  }
  if (typeof a1 === 'string' && typeof a2 === 'string') {
    return a1 + a2
  }
}
// * 函数的重载
// * 从上往下依次查找
function _add(num1: number, num2: number): number;
function _add(num1: string, num2: string): string;

function _add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}
const result = _add(10, 20);
const result1 = _add('hello', 'venkat');

// * 在函数的重载中，实现函数是不能直接被调用的
// _add({ name: 'venkat' }, { name: 'keven' })

console.log(result, result1);

export { }