import { BaseSubAI } from './BaseSubAI';

export class HunterAI extends BaseSubAI {
  constructor(evolution: any) {
    super('HunterAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('HunterAI analisou demanda e ajustou campanhas.');
  }
}
