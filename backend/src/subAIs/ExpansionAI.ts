import { BaseSubAI } from './BaseSubAI';

export class ExpansionAI extends BaseSubAI {
  constructor(evolution: any) {
    super('ExpansionAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('ExpansionAI identificou novas cidades alvo.');
  }
}
