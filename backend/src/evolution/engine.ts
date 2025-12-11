import { buildPatch, PatchSuggestion } from './patchBuilder';
import { AutoRefactor } from './autoRefactor';

export class EvolutionEngine {
  private events: any[] = [];
  private autoRefactor = new AutoRefactor();

  recordEvent(type: string, payload: any) {
    const event = { type, payload, ts: new Date().toISOString() };
    this.events.push(event);
    if (type.includes('threat')) {
      this.autoRefactor.queue(buildPatch('security', 'blackshield', 'Refinar regras contra ameaças.'));
    }
    if (this.events.length % 5 === 0) {
      this.autoRefactor.queue(buildPatch('process', 'council', 'Melhorar ritmo de sessões.'));
    }
  }

  collectLatestPatches(): PatchSuggestion[] {
    return this.autoRefactor.list();
  }
}
