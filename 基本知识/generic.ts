/**
 * @param arr 函数中使用泛型
 * @returns 
 */
function tack<T>(arr: T[]): T[] {
  return arr;
}
const result = tack(['1', '2'])

/**
 * 接口、类使用泛型
 */
type callback<T> = (n: T, i: number) => boolean;

const arr = [1, 2, 3, 4]
function filter<T>(arr: T[], callback: callback<T>): T[] {
  let newArr: T[] = [];
  arr.forEach((n, index) => {
    if (callback(n, index)) {
      newArr.push(n)
    }
  })
  return newArr;
  
}
const res = filter(arr, n => n % 2 !== 0);
console.log(res);


class Arrays<T> {
  constructor(private arrs: T[]){}
  getLength(){
    return this.arrs.length;
  }
}

const classArr = new Arrays([1, 2, 3, 4]);
console.log(classArr.getLength());

/**
 * 
 * @param arr1 多个泛型使用
 * @param arr2 
 * @returns 
 */
function minxArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    // return arr1.concat(arr2)
}