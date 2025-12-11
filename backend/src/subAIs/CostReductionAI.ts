import { BaseSubAI } from './BaseSubAI';

export class CostReductionAI extends BaseSubAI {
  constructor(evolution: any) {
    super('CostReductionAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('CostReductionAI renegociou contratos e otimizou custos.');
  }
}
