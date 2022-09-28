// # 交叉通常是对对象类型进行交叉，相当于是对与交叉的类型的合并
interface Person {
  height: number
}

interface Animal {
  actions: () => void
}

type NewType = Person & Animal

const obj: NewType = {
  height: 188,
  actions() {
    console.log('action');
  }
}

export { }