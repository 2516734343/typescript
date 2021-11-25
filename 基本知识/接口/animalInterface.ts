export interface ISingleFire {
  sigleFire(): void;
}

export interface IDance{
  dance(): void;
}


// 类型保护函数
export function hasSingleFire(ani: any): ani is ISingleFire {
  if ((ani as ISingleFire).sigleFire) {
    return true
  }
  return false;
}

