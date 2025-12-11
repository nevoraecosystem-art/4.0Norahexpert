export type AdvisorReport = { name: string; recent: string[] };
export type AdvisorCallback = () => AdvisorReport | undefined;

export class AdvisorRegistry {
  private advisors: Record<string, AdvisorCallback> = {};

  register(name: string, callback: AdvisorCallback) {
    this.advisors[name] = callback;
  }

  collectReports(): AdvisorReport[] {
    return Object.entries(this.advisors)
      .map(([name, fn]) => fn() || { name, recent: [] })
      .filter(Boolean) as AdvisorReport[];
  }
}
