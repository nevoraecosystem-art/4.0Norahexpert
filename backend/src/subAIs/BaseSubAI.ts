import { EvolutionEngine } from '../evolution/engine';

export abstract class BaseSubAI {
  protected learnings: string[] = [];
  constructor(public name: string, protected evolution: EvolutionEngine) {}

  tick() {
    const insight = `${this.name} tick at ${new Date().toISOString()}`;
    this.learnings.push(insight);
    this.evolution.recordEvent('subai-tick', { name: this.name, insight });
  }

  learn(event: string) {
    this.learnings.push(event);
    this.evolution.recordEvent('subai-learn', { name: this.name, event });
  }

  report() {
    return {
      name: this.name,
      recent: this.learnings.slice(-3),
    };
  }
}
