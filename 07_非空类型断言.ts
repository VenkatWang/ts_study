// # 非空类型断言

// * 确定某个标识符是有值的，跳过ts在编译阶段对它的检测

function printMessageLength(message?: string) {
  console.log(message!.length);
  // 类型缩小
  // if (message) {
  //   console.log(message.length)
  // }
}

printMessageLength('venkat')