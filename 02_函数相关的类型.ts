// # 函数参数以及返回值类型
// * 返回值类型可以省略，会自动推导出返回类型
function sum(num1: number, num2: number): number {
  return num1 + num2
}

// # 函数执行的上下文可以帮助确定参数和返回值的类型
// * 这里forEach中的函数不需要指定函数参数的类型，会根据上下文推导
const names = ['venkat', 'keven', 'vocal']
names.forEach(item => {
  console.log(item);
});