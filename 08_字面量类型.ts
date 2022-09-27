const message = "Hello Venkat"

// # 结合联合类型 
type alignType = 'left' | 'center' | 'right'
let align: alignType = 'left'
align = 'center'

export { }


// # 字面量推理
// * 类型推导出methods的类型为string
const info = {
  url: 'www.baidu.com',
  methods: 'GET'
}
// as const

// * method的类型为字面量类型
type method = 'GET' | 'POST'
function require(url: string, method: method) {

}

// * 传值失败
// require(info.url, info.methods)

// # 字面量类型可以赋值string类型
const a: 'a' = 'a'
const b: string = a