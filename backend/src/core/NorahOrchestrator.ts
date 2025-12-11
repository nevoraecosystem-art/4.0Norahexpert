import { GovernanceCore } from './components/GovernanceCore';
import { SecurityCore } from './components/SecurityCore';
import { NeuralCore } from './components/NeuralCore';
import { EvolutionEngine } from '../evolution/engine';
import { BusinessEngine } from './components/BusinessEngine';
import { LivingEnvironment } from './components/LivingEnvironment';
import { registerSubAIs } from '../subAIs/register';
import { Council } from '../council/council';

export class NorahOrchestrator {
  private governance: GovernanceCore;
  private security: SecurityCore;
  private neural: NeuralCore;
  private evolution: EvolutionEngine;
  private business: BusinessEngine;
  private nle: LivingEnvironment;
  private council: Council;
  private started = false;

  constructor() {
    this.evolution = new EvolutionEngine();
    this.governance = new GovernanceCore();
    this.security = new SecurityCore();
    this.neural = new NeuralCore(this.evolution);
    this.business = new BusinessEngine(this.evolution);
    this.nle = new LivingEnvironment();
    this.council = new Council(this.evolution);
  }

  async start() {
    if (this.started) return;
    this.started = true;
    this.governance.boot();
    this.security.enableGuards();
    this.neural.warmup();
    this.nle.spin();
    this.business.activate();
    registerSubAIs(this, this.evolution, this.council);
    this.council.scheduleSession();
  }

  executeFounderCommand(command: string) {
    const governanceVerdict = this.governance.evaluateCommand(command);
    const neuralResponse = this.neural.respond(command);
    const businessResponse = this.business.routeCommand(command);
    const suggestions = this.evolution.collectLatestPatches();
    return {
      command,
      governanceVerdict,
      neuralResponse,
      businessResponse,
      suggestions,
      timestamp: new Date().toISOString(),
    };
  }

  registerSubAI(name: string, instance: { name: string; tick: () => void }) {
    this.council.registerAdvisor(name, () => instance.report?.());
    this.neural.trackSubAI(name);
  }

  getStatus() {
    return {
      started: this.started,
      modules: [
        'GovernanceCore',
        'SecurityCore',
        'NeuralCore',
        'EvolutionEngine',
        'BusinessEngine',
        'LivingEnvironment',
        'Council',
      ],
      activeSubAIs: this.neural.listSubAIs(),
      councilInsights: this.council.getStrategicInsights(),
      patchBacklog: this.evolution.collectLatestPatches(),
    };
  }
}
