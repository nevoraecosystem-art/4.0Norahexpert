import { BaseSubAI } from './BaseSubAI';

export class ThreatDetectionAI extends BaseSubAI {
  constructor(evolution: any) {
    super('ThreatDetectionAI', evolution);
  }

  tick() {
    super.tick();
    this.learn('ThreatDetectionAI varreu tentativas de fraude e bots.');
  }
}
