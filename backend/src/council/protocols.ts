export type Recommendation = {
  title: string;
  rationale: string;
  impact: 'low' | 'medium' | 'high';
  priority: number;
};

export function evaluateRecommendation(reports: string[]): Recommendation {
  const tension = reports.length;
  const impact = tension > 3 ? 'high' : tension > 1 ? 'medium' : 'low';
  return {
    title: `Conselho avaliou ${reports.length} sinais`,
    rationale: reports.join(' | ') || 'Nenhum sinal recebido',
    impact,
    priority: Math.min(10, 2 + reports.length),
  };
}
