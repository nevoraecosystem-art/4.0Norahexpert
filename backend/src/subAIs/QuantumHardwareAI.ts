import { BaseSubAI } from './BaseSubAI';

export class QuantumHardwareAI extends BaseSubAI {
  constructor(evolution: any) {
    super('QuantumHardwareAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('QuantumHardwareAI avaliou maturidade de hardware parceiro.');
  }
}
