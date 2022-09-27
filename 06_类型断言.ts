
// # 通过类型断言将 相对广泛 的类型 转换为 相对具体 的类型
const el = document.getElementById('venkat') as HTMLImageElement

el.src = "www.baidu.com"

// ~
class Person {

}

class Studet extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Studet).studying()
}
const stu = new Studet()
sayHello(stu)

// # 通过类型断言将 相对具体 的类型 转换为 相对不具体 的类型
// ~ 一般情况下不使用
let message = 'Hello World'
// message = (1 as any) as string
message = (1 as unknown) as string
