import { BaseSubAI } from './BaseSubAI';

export class SalesOpsAI extends BaseSubAI {
  constructor(evolution: any) {
    super('SalesOpsAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('SalesOpsAI otimizou funil de vendas e follow-ups.');
  }
}
