enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM = "BOTTOM"
}

console.log(Direction);

function takeDirection(direction: Direction) {
  console.log(`向${direction}转`);
}
takeDirection(Direction.LEFT)

// # 其实enum中的每一个常量代表的是一个值,可以自定义该值