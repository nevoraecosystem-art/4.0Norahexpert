import { classifyThreat, ThreatModel } from './threat';

export class EspionageScanner {
  private alerts: ThreatModel[] = [];

  scan(activity: string) {
    if (activity.toLowerCase().includes('suspicious')) {
      this.alerts.push(classifyThreat(activity));
    }
  }

  listAlerts() {
    return this.alerts.slice(-5);
  }
}
