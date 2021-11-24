var LoginUser = /** @class */ (function () {
    function LoginUser(loginId, loginPwd, name, age) {
        this.loginId = loginId;
        this.loginPwd = loginPwd;
        this.name = name;
        this.age = age;
        //需要将新建的用户加入到数组中
        LoginUser.users.push(this);
    }
    LoginUser.login = function (loginId, loginPwd) {
        return this.users.find(function (u) { return u.loginId === loginId && u.loginPwd === loginPwd; });
    };
    LoginUser.prototype.sayHello = function () {
        console.log(this.name, this.age, this.loginId);
    };
    LoginUser.users = [];
    return LoginUser;
}());
var u1 = new LoginUser('u1', '123', '旺财一号', 20);
var u2 = new LoginUser('u2', '123', '旺财二号', 20);
var u3 = new LoginUser('u3', '123', '旺财三号', 20);
// 登陆
var result = LoginUser.login('u1', '123');
if (result) {
    result.sayHello();
}
else {
    console.log('登陆失败');
}
// console.log(LoginUser.users);
