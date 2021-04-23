class User {
  readonly id: number;
  name: string;
  age: number;
  gender: '男' | '女' = '男'
  pid?: string

  private curNumber: number = 3;
  // private address = '';
  set _address(value) {
    this._address = value;
  }
  get _address() {
    return this._address;
  }

  constructor(name: string, age: number, id: number, public sex: boolean) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
const user = new User('xlj', 18, Math.random(), true)
// user.setAddress('beijingshi');
// console.log(user.getAddress());
user._address = '北京市'