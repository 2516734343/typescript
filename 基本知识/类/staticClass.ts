class LoginUser {
  static users: LoginUser[] = []

  constructor(
    public loginId: string,
    public loginPwd: string,
    public name: string,
    public age: number,
  ) {
    //需要将新建的用户加入到数组中
    LoginUser.users.push(this);
  }

  static login(loginId: string, loginPwd: string): LoginUser | undefined {
    return LoginUser.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd);
  }

  sayHello() {
    console.log(this.name, this.age, this.loginId);
  }
}


const u1 = new LoginUser('u1', '123', '旺财一号', 20);
const u2 = new LoginUser('u2', '123', '旺财二号', 20);
const u3 = new LoginUser('u3','123','旺财三号', 20)


// 登陆
const result = LoginUser.login('u1', '123');
if (result) {
  result.sayHello();
} else {
  console.log('登陆失败');
}

// console.log(LoginUser.users);






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