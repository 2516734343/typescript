import "reflect-metadata"


@Reflect.metadata("a", "123")
class A {

  @Reflect.metadata("prop", "login")
  prop1:string

}

const obj = new A();

Reflect.getMetadata("a", A);

Reflect.getMetadata("prop", obj, "prop1");