function requsetAdd(a, b) {
  return new Promise((resolve) => {
    resolve(a + b);
  })
}
// 实现一个加法
// function add() {
//   let sum = 0;
//   let arr = Array.from(arguments);
//   arr.forEach(it => {
//     // console.log(sum);
//     requsetAdd(sum, it).then((res) => {
//       sum = res;
//       console.log(sum, res);
//       requsetAdd(sum, res);
//       console.log(res);
//     })
//   })
//   // console.log(sum);
//   return sum;
// }
function add() {
  const args = [...arguments];
  function childMethodsAdd(a, b) {
    return new Promise((resolve, reject) => {
      requsetAdd(a, b).then((sum) => {
        if (args.length === 0) {
          resolve(sum);
        } else {
          childMethodsAdd(sum, args.shift()).then((_sum) => {
            resolve(_sum);
          });
        }
      })
    });
  }
  return new Promise((resolve, reject) => {
    childMethodsAdd(args.shift(), args.shift()).then((sum) => {
      resolve(sum);
    })
  })
}
async function test() {
  res1 = await add(1, 2, 3, 5, 9, 10)
  console.log(res1);
  // res2 = await add(1, 6, 3, 5, 7, 10)
  // console.log(res1, res2);
  // res1 = await add(2, 6, 12, 9, 9, 8)
  // res1 = await add(3, 5, 12, 16, 8, 9)
}
test();