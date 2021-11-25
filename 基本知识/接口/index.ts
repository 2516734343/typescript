import { Animal, Dog, Lain } from "./animal";
import { hasSingleFire } from "./animalInterface";

const animals: Animal[] = [
  new Dog('一号', 2),
  new Dog('二号', 1),
  new Lain('三号', 3),
]

// 类型保护函数hasSingleFire


animals.forEach(a => {
  if (hasSingleFire(a)) {
    a.sigleFire();
  }
})