
function test(target: new (...args: any[]) => object) {
  return class B {

  }
}

function d1() {
  console.log('d1')
  return function (target: new () => object) {
    console.log('d1 decorator')
  }
}
function d2() {
  console.log('d2')
  return function (target: new () => object) {
    console.log('d2 decorator')
  }
}
@d1()
@d2()
  
  // d1 d2 、d2 decorator、d1 decorator
class A {

}


function descorator(target: any, key: string) {
  // console.log(target, key)
  if (!target.__props) {
    target.__props = [];
  }
  target.__props.push(key);
}

function enumerable(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = true;
}

function useless(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function () {
    console.warn('方法已经过期')
  }
}

// 装饰属性
class P {

  @descorator
  prop1: string

  @descorator
  static prop2: string


  @enumerable
  method() {

  }

  @enumerable
  @useless
  method2() {

  }


}
