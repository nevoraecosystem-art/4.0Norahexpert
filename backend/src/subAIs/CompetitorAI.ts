import { BaseSubAI } from './BaseSubAI';

export class CompetitorAI extends BaseSubAI {
  constructor(evolution: any) {
    super('CompetitorAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('CompetitorAI mapeou movimentos de concorrentes.');
  }
}
