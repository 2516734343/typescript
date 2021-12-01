import "reflect-metadata"

const key = "descriptor";
export function classDescriptor(description: string) {
  return Reflect.getMetadata(key, description)
}


export function propDescriptor(description: string) {
  return Reflect.getMetadata(key, description)
}

export function descriptor(description: string) {
  return Reflect.getMetadata(key, description)
}


export function printObj(obj: any) {
  const target = obj.__proto.constructor;
  if (Reflect.hasMetadata(key, target)) {
    console.log(Reflect.getMetadata(key, target));
  } else {
    console.log(target);
  }

  if (!obj.$propDescriptions) {
    obj.$propDescriptions = [];
  }
  // 输出所有的属性描述和属性值
  for (const k in obj) {
    if (Reflect.hasMetadata(key, target, k)) {
      console.log(Reflect.getMetadata(key, target, k))
    } else {
      console.log(k, obj[k])
    }
  }
  console.log(obj.$propDescriptions);
}