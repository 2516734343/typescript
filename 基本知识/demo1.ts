
type Gender = "男" | "女"

type User = {
  name: string;
  age: number;
  sex: Gender
}
let u:User
function getUser(sex: Gender): User[] {
  return [{
    name: '111',
    age: 18,
    sex: sex
  }]
}

getUser("女");