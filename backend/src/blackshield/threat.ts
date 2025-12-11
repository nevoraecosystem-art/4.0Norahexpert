export type ThreatType = 'ia-hostil' | 'juridico' | 'golpe';
export type ThreatModel = { type: ThreatType; description: string; severity: number };

export function classifyThreat(description: string): ThreatModel {
  const severity = description.toLowerCase().includes('hostil') ? 9 : 4;
  return { type: severity > 5 ? 'ia-hostil' : 'juridico', description, severity };
}
