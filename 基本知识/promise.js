function requsetAdd(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 0)
  })
}
// 实现一个加法
function add() {
  let sum = 0;
  let arr = Array.from(arguments);
  function itemAdd(a, b) {
    return new Promise((resolve, reject) => {
      requsetAdd(a, b).then(res => {
        // console.log(res);
        if (arr.length === 0) {
          resolve(res);
        } else {
          resolve(itemAdd(res, arr.shift()))
        }
      })
    })
  }
  return new Promise((resolve, reject) => {
    itemAdd(sum, arr.shift()).then(res => {
      // console.log(res);
      resolve(res);
    })
  })
}

async function test() {
  res1 = await add(1, 2, 3, 5, 9, 10)
  res2 = await add(1, 6, 3, 5, 7, 10)
  console.log(res1, res2);
  // res1 = await add(2, 6, 12, 9, 9, 8)
  // res1 = await add(3, 5, 12, 16, 8, 9)
}
test();