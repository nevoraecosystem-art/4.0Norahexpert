import { BaseSubAI } from './BaseSubAI';

export class BarOpsAI extends BaseSubAI {
  constructor(evolution: any) {
    super('BarOpsAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('BarOpsAI otimizou estoque e fichas de bar.');
  }
}
