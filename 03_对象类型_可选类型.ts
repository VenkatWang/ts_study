function printPoint(point: { x: number, y: number, z?: number }) {
  // return point
  console.log(point);
}

printPoint({ x: 123, y: 234 })
// # z为可选类型
printPoint({ x: 123, y: 234, z: 456 })

// # 当参数是可选类型时,可以传入undefined,类似于与undefined的联合类型
function foo(x?: number) {
  console.log(x);
}
function foo1(x: number | undefined) {
  console.log(x);
}
foo(undefined)
// # x: number | undefined 联合类型时,参数必传
foo1(1)