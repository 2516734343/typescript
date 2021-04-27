# 基本知识

## 类型别名

类型别名不会出现在编译结果中

```
type User = {
  name: string,
  age: number
}

let u:User;
```

## 接口和类型兼容性

接口：interface

### 扩展类型-接口

> 扩展类型： 类型别名、枚举、接口、类

> Typescript 接口：用于约束类、对象、函数的契约（标准）

契约（标准）的形式：

- API 文档，弱标准
- 代码约束，强标准
  和类型别名一样，接口不出现在编译结果中

### 基本使用-约束对象

```
interface UserInfo {
  name: string
  age: number
}

let user: UserInfo = {
  name: '',
  age: 18
}
```

### 函数类型-约束函数

参数的顺序必须和接口定义里函数参数顺序一致，参数名称可以不一样，但是类型必须符合参数定义类型

```
// type Condition = (n: number) => boolean
// type Condition = { // 定界符
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
```

**接口可以继承**
可以通过多个接口的继承，实现多种接口的组合

```
class Banner extends React.Component {

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
```

类型别名不可以继承，可以使用`&`实现类似的组合效果，叫做交叉类型

```
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

```

接口和类型别名的区别：

- interface: 子接口不能覆盖父接口的成员
- 交叉类型会将相同成员的类型进行交叉

### 可选属性

```
interface SquareConfig {
  color?: string;
  width?: number;
}
```

### 只读属性

readonly 只读修饰符。 `ReadonlyArray<T>` 可以用类型断言重写，如`a = ro as number`

```
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

不会在编译结果中出现，只能在初始化时赋值

```
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
```

### 额外属性检查

避开额外属性检查可以使用：

- 类型断言
- 添加一个字符串索引签名
- 这个对象赋值给一个另一个变量

```
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
```

### 类型兼容性

鸭子辨性法（子结构辨型法）：目标类型需要某一些特征，赋值的类型只要能满足改特征即可。

- 基本类型：完全匹配
- 对象类型： 鸭子辨型法

当直接使用对象字面量赋值时，会进行更严格的判断

```
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
```

- 函数类型

**参数**：传递给目标函数的参数，可以少，但不可以多
**返回值**：要求返回则必须返回，且类型需一致

## 类

**属性**
**属性初始化检查**
` "strictPropertyInitialization": true`

属性的初始化的位置：

- 构造函数
- 属性默认值

**属性是可选的，也可以是只读的**

**使用访问修饰符**

访问修饰符可以控制类中的某个成员的访问权限

- public：默认的访问修饰符，公开的，所有的代码都可以访问
- private：私有的，只有在类中可以访问
- protected：

**属性简写**
如果某个属性，通过构造函数的参数传递，可以简写：在构造函数中加访问修饰符。

```
class User {
  readonly id: number;
  name: string;
  age: number;
  gender: '男' | '女' = '男'
  pid?: string

  private curNumber: number = 3;

  constructor(name: string, age: number, id: number, public sex: boolean) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
const user = new User('xlj', 18, Math.random(), true)
```

**访问器**
控制属性的读取和赋值

```
class User {
  readonly id: number;
  name: string;
  age: number;
  gender: '男' | '女' = '男'
  pid?: string

  private curNumber: number = 3;
  // private address = '';


  constructor(name: string, age: number, id: number, public sex: boolean, private _address: string) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  set address(value) {
    this._address = value;
  }
  get address() {
    return this._address;
  }
  public init() {
    console.log(this._address);
  }
}
const user = new User('xlj', 18, Math.random(), true, 'beijingshi')
```

## 泛型

是指附属于函数、类、接口、类型别名之上的类型

### 函数中使用泛型

函数名称`<T>`

```
function tack<T>(arr: T[]): T[] {
  return arr;
}
const result = tack(['1','2'])
```

### 在类、接口、类型别名中使用泛型

```
type callback<T> = (n: T, i: number) => boolean
```

```
class Arrays<T> {
  constructor(private arrs: T[]){}
  getLength(){
    return this.arrs.length;
  }
}
```
