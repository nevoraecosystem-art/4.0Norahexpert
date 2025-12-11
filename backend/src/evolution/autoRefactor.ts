import { PatchSuggestion } from './patchBuilder';

export class AutoRefactor {
  private backlog: PatchSuggestion[] = [];

  queue(patch: PatchSuggestion) {
    this.backlog.push(patch);
  }

  list() {
    return this.backlog.slice(-10);
  }
}
