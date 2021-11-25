# 在 node 中搭建 ts 开发环境

安装：`npm install -g typescript`
编译代码：`tsc xxx.ts`

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

### 泛型约束

用于限制泛型的取值

```
function test<T extends interface>(){}

```

### 多个泛型使用

```
function minxArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    // return arr1.concat(arr2)
}
```

# 基础部分总结

## 概念部分

TS 是可选的，静态的类型系统。

- 为什么需要类型系统？
  要构建大型项目，需要很多接口和函数，如果没有类型检查，会产生大量的调试成本。类型系统可以降低调试成本，从而降低开发成本。

- 可选的
  TS 是 JS 的超集，JS 所有功能都可以在 TS 中使用，增加的部分是类型系统。
- 静态的
  TS 代码 -> 编译 ->JS 代码 在编译的时候进行类型检查

## 如何约束类型

变量、参数、函数返回值

- 基本类型: string、number、boolean、object、array、void、never、null 和 undefined

字面量类型 配合联合类型使用，达到类似枚举的效果

```
let sex: '男'|'女'
```

对象字面量可以更加细化的约束一个对象

```
type User = {
  name: string,
  age:number
}
```

- 扩展类型: 类型别名、枚举、接口、类

类型别名和接口 不产生编译结果。类型别名把真实值和逻辑名称分开了，当修改逻辑值时，真实值也会被修改

枚举和类会产生编译结果， 枚举编译的结果是对象，ts 里的类编译的结果就是 js 的类

ts 的类: 属性列表、修饰符（readonly、访问修饰符：public、private、protected）

泛型： 解除某个功能和类型的耦合

```
export class Dictory<K,S> {
  key: K,
  value: S,
  setInit: (key: K, value: S) {
    // 函数体
  }
}
```

类型断言： 开发者清楚某个东西的类型，但是 ts 难以分辨，开发者可以通过类型断言告诉 ts 这里的确切类型是什么，大多用在 ajax 请求

## 类型兼容性 （面试）

鸭子辨型法，子结构辨型法 : 并不关心到底是什么东西，满足某些特征即可。ts 里根据特征分辨是什么东西的

- 基本类型：完全匹配
- 对象类型：鸭子辨型法，字面量对象直接传递时，会有更严格的类型检查
- 函数类型：参数数量可以少，不允许多。要求返回必须返回，不要求返回，随意。

# 深入理解类和接口

## 类的继承

1. 类型匹配，鸭子辩型法

   > 子类对象始终可以赋值给父类。在面向对象中，这种现象叫做里氏替换。
   > 如果需要判断一个数据的具体子类类型，可以使用 instanceof

2. 类的修饰符
3. 单根性和传递性
   > 单根性： 每个类最多只能拥有一个父类
   > 传递性： 如果 A 是 B 的父类，B 是 C 的父类，可以认为 A 也是 C 的父类

## 抽象类

1. 为什么需要抽象类？

   > 某个类只是一个抽象的概念，主要用于提取子类共有的成员，而不能直接创建它的对象。

2. 抽象成员

   > 父类中，可能知道有些成员是必须存在的，但是不知道该成员的值或者实现是什么，因此，需要一种强约束，让继承改类的子类，必须设置值或实现。**抽象类中可以有抽象成员，抽象成员必须在子类实现。**

3. 设计模式--模版模式
   > 有些方法，所有的子类实现的流程完全一致，只是流程中的某个步骤的具体实现不一致，可以将该方法提取到父类，在父类中完成流程的实现，遇到不一致的方法时，将该方法做成抽象方法。

## 静态成员

1. 附着在类上的成员，属于某个构造函数的成员。属于某个类
2. 实例成员：属于类的 new 出来的对象
3. 静态方法中的 this 指向的是当前类
4. 单例模式： 某些类的对象，在系统中最多只能有一个，为了避免开发者造成随意创建多个类对象的错误，可以使用单例模式进行强约束。

```js
class Board{
  width: number = 500;
  height: number = 700;


  // 单例模式 ，构造函数私有化
  private constructor() { }

  private static _board?: Board;

  // 方法一： 使用静态方法创建一个私有实例, 常用
  static createBoard(): Board {
    if (this._board) {
      return this._board;
    }
    this._board = new Board();
    return this._board;
  }

  // 方法二：static + readonly
  static readonly singleBoard = new Board();

}

const b1 = Board.createBoard();
const b2 = Board.createBoard();
console.log(b1 === b2); /// true
```

## 再谈接口

> 约束类、对象、函数

1. 不使用接口实现时：

- 对成员函数没有强约束
- 类型和方法耦合严重

系统中缺少对函数的定义--接口

> 某个类具有某个方法，就是实现某种接口

> 类型保护函数: 通过调用该函数，会触发 ts 的类型保护，函数返回值为 boolean

```js
animalInterface.ts
// 类型保护函数
export function hasSingleFire(ani: any): ani is ISingleFire {
  if ((ani as ISingleFire).sigleFire) {
    return true
  }
  return false;
}
```

> 接口可以被类实现，但类型别名不行

> 接口可以继承类，表示该类的所有成员都在接口中

## 索引器

`对象[键名]` 成员表达式

在 ts 中，默认情况下，不对索引器做严格类型检查, 可以配置`noImpliciAny`，索引器应该写在所有的属性之前。

隐式 any：ts 根据实际情况推导出类型

` [prop: string|number]: any;`键的类型可以是 string 或 number

ts 中索引器的作用：

- 在严格的检查下，可以实现为类动态增加成员
- 可以实现动态操作类成员

在 js 中，对象的键都属于 string 类型

## this 指向约束

配置`noImplicitThis: true`表示不允许 this 隐式地指向 any
在 ts 中允许在对象中函数声明时，手动指明 this 指向,将 this 设置为函数第一个参数

```js
sayHello(this: User):void
```
