import { BaseSubAI } from './BaseSubAI';

export class QuantumResearchAI extends BaseSubAI {
  constructor(evolution: any) {
    super('QuantumResearchAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('QuantumResearchAI simulou ganhos de eficiência teóricos.');
  }
}
