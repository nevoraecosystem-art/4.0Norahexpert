import { BaseSubAI } from './BaseSubAI';

export class ExperienceOpsAI extends BaseSubAI {
  constructor(evolution: any) {
    super('ExperienceOpsAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('ExperienceOpsAI afinou fluxos de experiência VIP e aventura.');
  }
}
