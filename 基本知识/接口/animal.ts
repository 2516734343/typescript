import { IDance, ISingleFire } from "./animalInterface";

export abstract class Animal {
  
  abstract type: string;

  constructor(
    public name: string,
    public age: number,
  ) { }
  

  sayHello() {
    console.log(this.type, this.name, this.age);
  }



}


export class Lain extends Animal implements ISingleFire{
  sigleFire(): void {
    console.log('sigleFire')
  }
  type: string = 'lain';
  
}

export class Dog extends Animal implements IDance{
  dance(): void {
    throw new Error("Method not implemented.");
  }
  type: string = 'dog';
  
}