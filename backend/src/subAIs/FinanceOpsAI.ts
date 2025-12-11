import { BaseSubAI } from './BaseSubAI';

export class FinanceOpsAI extends BaseSubAI {
  constructor(evolution: any) {
    super('FinanceOpsAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('FinanceOpsAI revisou fluxo de caixa e comissões.');
  }
}
