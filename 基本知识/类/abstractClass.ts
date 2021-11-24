
abstract class Chess {
  x: number = 0;
  y: number = 0;

  abstract readonly name: string;

  move(targetX: number, targetY: number): boolean {
    console.log('1.边界判断');
    console.log('2.目标位置不能有己方棋子');
    if (this.rule(targetX, targetY)) {
      this.x = targetX;
      this.y = targetY;
      return true;
    }
    return false;
  }

  protected abstract rule(targetX: number, targetY: number): boolean;

}

class Horse extends Chess {
  readonly name: string = '马';

  rule(targetX: number, targetY: number): boolean {
    return true;
  }
  
}

class Pao extends Chess {
  readonly name: string;

  constructor() {
    super();
    this.name = '炮';
  }

  rule(targetX: number, targetY: number): boolean {
    return true;
  }
  
}

class Soldier extends Chess {
  get name() {
    return '兵'
  }

  rule(targetX: number, targetY: number): boolean {
    return false;
  }
  
}

class Queen extends Chess {
  name: string = '将';
  protected rule(targetX: number, targetY: number): boolean {
    return true;
  }
  
}
