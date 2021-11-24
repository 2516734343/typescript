var User = /** @class */ (function () {
    // private address = '';
    function User(name, age, id, sex, _address) {
        this.sex = sex;
        this._address = _address;
        this.gender = '男';
        this.curNumber = 3;
        this.name = name;
        this.age = age;
        this.id = id;
    }
    Object.defineProperty(User.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.init = function () {
        console.log(this._address);
    };
    return User;
}());
var user = new User('xlj', 18, Math.random(), true, 'beijingshi');
// user.setAddress('beijingshi');
// console.log(user.getAddress());
user.init();



