import { ThreatModel } from './threat';

export class CounterIA {
  private playbook: string[] = [];

  designResponse(threat: ThreatModel) {
    const action = threat.severity > 7 ? 'Isolar canais críticos' : 'Monitorar e notificar fundador';
    this.playbook.push(`${new Date().toISOString()} - ${action}`);
    return action;
  }

  getPlaybook() {
    return this.playbook.slice(-5);
  }
}
