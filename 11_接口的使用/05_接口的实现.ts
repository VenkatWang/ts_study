// # 接口定义后是可以被类实现的(一个接口实现多个接口时，相对与时将多个接口的属性进行了合并)
// # 如果接口被一个类实现,那么在之后需要传入接口的地方，都可以将这个类传入

interface ISwim {
  swinmming: () => void
}

interface IRun {
  running: () => void
}

class Person implements ISwim, IRun {
  running() {
    console.log('running');
  }
  swinmming() {
    console.log('swimming');
  }
}
function swim(swimmer: ISwim) {
  swimmer.swinmming()
}
swim({
  swinmming() {
    console.log('hjhh');
  }
})

// # 如果接口被一个类实现,那么在之后需要传入接口的地方，都可以将这个类传入
swim(new Person)

export { }