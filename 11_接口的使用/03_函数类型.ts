type fnType = (num1: number, num2: number) => number

const fn: fnType = (num1, num2) => {
  return num1 + num2
}
fn(1, 2)

interface IFn {
  (num1: number, num2: number): number
}

const fn1: IFn = (num1, num2) => {
  return num1 + num2
}

fn1(1, 3)