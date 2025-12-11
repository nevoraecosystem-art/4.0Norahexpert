export type NanoLog = { timestamp: string; prototype: string; stability: number };

export function simulateNanoEngineering(): NanoLog {
  return {
    timestamp: new Date().toISOString(),
    prototype: 'sensor-adaptativo',
    stability: Number((0.4 + Math.random() * 0.5).toFixed(2)),
  };
}
