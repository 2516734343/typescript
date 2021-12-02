import { classDescriptor, printObj, propDescriptor } from "./Descriptor";

import "reflect-metadata"
import { IsNotEmpty, Max, MaxLength, Min, MinLength, validate } from "class-validator";
import { Type } from "class-transformer";

@classDescriptor('用户')
class User {

  @propDescriptor('账号')
  @IsNotEmpty({ message: '账号不可以为空' })
  @MinLength(5, { message: '账号最少为5个字符' })
  @MaxLength(12, { message: '账号最多为12个字符' })
  loginId: string

  @propDescriptor('密码')
  loginPwd: string

  @Max(100, {message: '年龄最大为100'})
  @Min(0, { message: '年龄最小为0' })
  @Type(() => Number) // 运行时这个属性的类型
  age: number;


}


const u = new User();
u.loginId = '123';
u.loginPwd = '456';

validate(u).then(error => {
  console.log(error);
})

printObj(u)




// 参数装饰器
class MyMath {

  sum(a: number, @test b: number) {

  }
}

function test(target: any, method: string, index: number) {

}