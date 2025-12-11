import { BaseSubAI } from './BaseSubAI';

export class NanoEngineeringAI extends BaseSubAI {
  constructor(evolution: any) {
    super('NanoEngineeringAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('NanoEngineeringAI projetou sensores para eventos.');
  }
}
