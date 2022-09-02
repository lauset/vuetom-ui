function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function isEqual(obj1, obj2) {
  // 如果其中没有对象
  if (!isObject(obj1) || !isObject(obj2)) {
    //值类型
      return obj1 === obj2
  }
  // 如果特意传的就是两个指向同一地址的对象
  if (obj1 === obj2) {
      return true
  }
  // 两个都是对象或者数组，而且不相等
  // 拿到对象key
  let obj1Keys = Object.keys(obj1)
  let obj2Keys = Object.keys(obj2)
      // 先判断长度就可以过滤一些
  if (obj1Keys.length !== obj2Keys.length) {
      return false
  }
  // 以obj1为基准 和 obj2 一次递归比较
  for (let key in obj1) {
      // 递归比较当前每一项
      const res = isEqual(obj1[key], obj2[key])
      // 如果碰到一个不一样的就返回 false
      if (!res) {
          // 跳出for循环
          return false
      }
  }
  // 否则全相等
  return true
}

export { isObject, isEqual }