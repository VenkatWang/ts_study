// # 如果interface与type都用来定义对象类型

// ~ interface可以重复的对某个接口来定义属性和方法
// ~ type定义的是别名，别名是不能重复的


// * 定义相同的接口相当于是定义的所有相同的接口的合并
interface Person {
  name: string
}
interface Person {
  age: number
}
// const pp: Person = { name: 'venkat' }

type Person1 = {}

// type Person1 = {}

export { }