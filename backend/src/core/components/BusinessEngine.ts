import { EvolutionEngine } from '../../evolution/engine';

export class BusinessEngine {
  private pipelines: string[] = ['Nevora Events', 'Marketplace', 'Hunter'];
  private active = false;
  constructor(private evolution: EvolutionEngine) {}

  activate() {
    this.active = true;
    this.evolution.recordEvent('business-boot', { pipelines: this.pipelines });
  }

  routeCommand(command: string) {
    const targeted = this.pipelines.find((p) => command.toLowerCase().includes(p.toLowerCase())) || 'General';
    const note = `Command routed to ${targeted}`;
    this.evolution.recordEvent('business-command', { command, targeted });
    return { targeted, note };
  }

  getActivePipelines() {
    return this.active ? this.pipelines : [];
  }
}
