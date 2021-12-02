
class User {
  loginId: string
  loginPwd: string
}

let u1: InstanceType<typeof User> // u1的类型为User

function createUser(cls: typeof User): User {
  return new cls()
}

const u = createUser(User);



interface User {
  loginId: string
  loginPwd: string
  age: number
}

type Obj = {
  [p in keyof User]?: User[p]
}

const obj: Obj = {
  loginId: '123',
  loginPwd: 'qqq',
  // age: 20,
}


type Partical<T> = {
  [p in keyof T]?: T[p]
}

type ReadOnly<T> = {
  readonly [p in keyof T]: T[p]
}



let user: Partical<User>
user = {
  loginId: '123'
}

let a : Exclude<'a'| 'b' | 'c', 'a'>

