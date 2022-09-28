interface IPerson {
  name: string
}

const p1: IPerson = {
  name: 'venkat',
  // age: 18
}

// # 将变量标识符赋值给其他变量时，会进行freshness擦除的操作
// * 将类型检测多余的变量在类型检测时去除
const p2_ = {
  name: 'venkat',
  age: 19
}

const p2: IPerson = p2_

console.log(p1, p2);
// # 但是不可以调用被擦除掉的属性(类型检测会报错)
// console.log(p2.age);


export { }