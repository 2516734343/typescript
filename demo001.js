var age = 18;
console.log(age);
var str = "xialajiao";
console.log(str);
var flag = true;
console.log(flag);
var Person;
(function (Person) {
    Person["man"] = "\u7537";
    Person["wamen"] = "\u5973";
})(Person || (Person = {}));
console.log(Person.man);
var a = 10;
a = '小辣椒';
a = true;
console.log(a);
