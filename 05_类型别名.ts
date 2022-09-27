type IDType = string | number | boolean

function prindId(id: IDType) {
  console.log(id);
}

prindId(1)

type pointType = {
  x: number,
  y: number,
  z?: number
}

function printPoint(point: pointType) {
  console.log(point);
}
const point = {
  x: 1,
  y: 2
}
printPoint(point)

export { }