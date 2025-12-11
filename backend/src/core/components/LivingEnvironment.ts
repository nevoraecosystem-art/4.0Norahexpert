export class LivingEnvironment {
  private signals: string[] = [];

  spin() {
    this.signals.push('heartbeat-' + new Date().toISOString());
    setInterval(() => {
      this.signals.push('pulse-' + new Date().toISOString());
    }, 10000);
  }

  latestSignals() {
    return this.signals.slice(-5);
  }
}
