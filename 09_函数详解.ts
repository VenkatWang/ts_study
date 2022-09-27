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

export { }