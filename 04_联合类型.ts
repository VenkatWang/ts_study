// # 联合类型   联合成员

// * 使用联合类型时，需要对参数进行类型判断，然后再做接下来的处理逻辑
function printID(id: number | string) {
  console.log(id);
  if(typeof id ==='string'){
    // * narrow (缩小范围)
  }
}

printID(123)