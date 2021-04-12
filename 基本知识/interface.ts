interface UserInfo {
  name: string
  age: number,
  // sayHello: () => void
  sayHello(): void
}

let user: UserInfo = {
  name: '',
  age: 18,
  sayHello: function () {
    console.log(user.name)
  }
}
// type Condition = (n: number) => boolean
// type Condition = {// 定界符
//   (n: number) : boolean
// }
// 约束函数
interface Condition {
  (n: number): boolean
}
function sum(numbers: number[], callBack: Condition) {
  let n = numbers[0];
  if (callBack(n)) {
    //
  }
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

interface A {
  name: string
}
interface B {
  age: number
}
interface C extends A, B {
  sex: boolean
}

let users: C = {
  name: '',
  age: 18,
  sex: false
}

type As = {
  name: string
}
type Bs = {
  age: number
}
type Cs = {
  name: number;
  sex: boolean
} & As & Bs

// let c1: Cs = {
//   name:0, //类型组合了，string & number
// }

interface Users {
  readonly id: string;
  name: string;
  readonly arr: readonly string[],
}
let usersInfo: Users = {
  id: '1',
  name: 'xlj',
  arr: ['1','2']
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propsName: string]: any; // 添加字符串索引
}

function getSquare(config: SquareConfig) {

}
// getSquare({colour: '#f42', width: 100}) // 类型“{ colour: string; width: number; }”的参数不能赋给类型“SquareConfig”的参数。对象文字只能指定已知的属性，但“colour”中不存在类型“SquareConfig”。是否要写入 color?

// 使用类型断言
getSquare({ colour: '#f42', width: 100 } as SquareConfig)

// 这个对象赋值给另外一个变量

const obj = { colour: '#f42', width: 100 }
getSquare(obj);


interface Dark {
  sound: string,
  swing:() => void
}
let person =  {
  name: 'string',
  age: 'number',
  sound: 'string',
  swing: () => {
    console.log(111)
  }
}
let dark: Dark = person;
// dark.sound