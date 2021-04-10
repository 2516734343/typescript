function search(age) {
    return '小辣椒今年' + age + '岁';
}
var age = 18;
var result = search(age);
console.log(result);
//可选参数的函数
// 默认参数
//有剩余参数的函数
function searchSth(age, status) {
    if (age === void 0) { age = 22; }
    if (status === void 0) { status = '很可爱'; }
    var str = '';
    str = '小辣椒今年' + age + '岁';
    if (status != undefined) {
        str = str + status;
    }
    return str;
}
// var status:string = '是一个小仙女';
var result = searchSth();
console.log(result);
function searchAgain() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var str = '小辣椒今年';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += '、';
        }
    }
    return str;
}
var result = searchAgain('22岁', '可爱', '美丽', '大方');
console.log(result);
//函数声明法
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
//函数表达式法
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(1, 2));
// 箭头函数
var add1 = function (n1, n2) {
    return n1 + n2;
};
console.log(add1(1, 4));
//函数作用域
//全局变量
var mode = '小仙女';
function transfrom() {
    console.log('小辣椒是' + mode);
}
transfrom();
//局部变量
var mode = '小仙女';
function transfroms() {
    console.log('小辣椒是' + mode);
    var mode = '小可爱';
    console.log('小辣椒是' + mode);
}
transfroms();
function zhengXing() {
    var yangzia = '刘德华';
    {
        var yangzib = '小沈阳';
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
    console.log('技术胖整形成了' + yangzib + '的样子');
}
zhengXing();
