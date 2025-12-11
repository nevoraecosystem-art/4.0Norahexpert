export class SecurityCore {
  private guardsActive = false;
  private auditLog: string[] = [];

  enableGuards() {
    this.guardsActive = true;
    this.auditLog.push(`guards-enabled-${new Date().toISOString()}`);
  }

  verifyAccess(token?: string) {
    const valid = this.guardsActive && !!token;
    if (!valid) this.auditLog.push('denied-access-' + new Date().toISOString());
    return valid;
  }

  getAuditLog() {
    return this.auditLog.slice(-10);
  }
}
