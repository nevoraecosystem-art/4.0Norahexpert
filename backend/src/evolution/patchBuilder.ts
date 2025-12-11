export type PatchSuggestion = {
  id: string;
  type: 'process' | 'product' | 'security';
  target: string;
  description: string;
};

export function buildPatch(type: PatchSuggestion['type'], target: string, description: string): PatchSuggestion {
  return { id: `${type}-${Date.now()}`, type, target, description };
}
