import { BaseSubAI } from './BaseSubAI';

export class MarketOpsAI extends BaseSubAI {
  constructor(evolution: any) {
    super('MarketOpsAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('MarketOpsAI balanceou oferta e demanda no marketplace.');
  }
}
