function search(age:number):string {
    return '小辣椒今年' + age + '岁';
}
var age:number = 18;
var result:string = search(age);
console.log(result);

//可选参数的函数
// 默认参数
//有剩余参数的函数
function searchSth(age:number=22,status:string='很可爱'):string {
    var str:string = '';
    str = '小辣椒今年'+ age + '岁';
    if(status != undefined) {
        str = str+status
    }
    return str;
}
// var status:string = '是一个小仙女';
var result:string = searchSth();
console.log(result);

function searchAgain(...arr:string[]):string {
    let str:string = '小辣椒今年';
    for (let i=0;i<arr.length;i++){
        str += arr[i];
        if(i < arr.length - 1){
            str += '、';
        }
    }
    return str;
}
var result:string = searchAgain('22岁','可爱','美丽','大方');
console.log(result);

//函数声明法
function add(num1:number,num2:number):number {
    return num1+num2;
}
console.log(add(1,2));

//函数表达式法
var sum = function (num1:number,num2:number):number{
    return num1+num2;

}
console.log(sum(1,2));
// 箭头函数
var add1 = (n1:number,n2:number):number=>{
    return n1+n2
}

console.log(add1(1,4));

//函数作用域
//全局变量
var mode = '小仙女';
function transfrom():void {
    console.log('小辣椒是' + mode);
}
transfrom();
//局部变量  变量提升
var mode = '小仙女';
function transfroms():void {
    console.log('小辣椒是' + mode);
    var mode = '小可爱';
    console.log('小辣椒是' + mode);
}
transfroms();

// 编译会报错，但是运行不会，转化成es5了。
function zhengXing():void{
    var yangzia:string = '刘德华'
    {
        let  yangzib:string = '小沈阳'
        console.log('技术胖整形成了'+yangzib+'的样子')
    }

    console.log('技术胖整形成了'+yangzia+'的样子')
    console.log('技术胖整形成了'+yangzib+'的样子')
}
zhengXing()
