import { classDescriptor, printObj, propDescriptor } from "./Descriptor";


@classDescriptor('用户')
class User {

  @propDescriptor('账号')
  loginId: string

  @propDescriptor('密码')
  loginPwd: string


}


const u = new User();
u.loginId = '123';
u.loginPwd = '456';

printObj(u)