class Users {
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
const newusers = new Users('xlj', 18, Math.random(), true, 'beijingshi')
// user.setAddress('beijingshi');
// console.log(user.getAddress());
newusers.init();