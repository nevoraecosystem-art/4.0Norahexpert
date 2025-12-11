import { Application } from 'express';

export function registerPricingRoutes(app: Application) {
  app.get('/api/pricing', (_req, res) => {
    res.json({ baseFee: 0.07, hunterCommission: 0.02, marketplaceCommission: 0.1, barAuditFee: '5% ou R$1500' });
  });
}
