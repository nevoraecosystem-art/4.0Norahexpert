import { EvolutionEngine } from '../evolution/engine';
import { AdvisorRegistry } from './advisor';
import { evaluateRecommendation, Recommendation } from './protocols';

export class Council {
  private registry = new AdvisorRegistry();
  private lastRecommendation: Recommendation | null = null;

  constructor(private evolution: EvolutionEngine) {}

  registerAdvisor(name: string, callback: () => any) {
    this.registry.register(name, callback);
  }

  scheduleSession() {
    setInterval(() => this.runSession(), 20000);
  }

  private runSession() {
    const reports = this.registry.collectReports();
    const signals = reports.flatMap((r) => r.recent);
    this.lastRecommendation = evaluateRecommendation(signals);
    this.evolution.recordEvent('council-session', { recommendation: this.lastRecommendation });
  }

  getStrategicInsights() {
    return this.lastRecommendation || { title: 'Nenhum insight ainda', rationale: '', impact: 'low', priority: 1 };
  }
}
