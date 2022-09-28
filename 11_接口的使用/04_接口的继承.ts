interface Person {
  name: string
  eating: () => void
}

interface Animal {
  name: string
  running: () => void
}
// # 接口的继承支持多继承(类不支持多继承)
interface Student extends Person, Animal {
  sno: String
}
// # 多继承相当于将继承的多个接口的属性合并在一起,如果存在一个变量继承的多个接口中的类型是不同的，那么这个继承会报错
const stu: Student = {
  sno: '123',
  name: 'void',
  eating() {
    console.log('hhh');
  },
  running() {
    console.log('runningf');
  }
}

export { }