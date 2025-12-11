import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerAmbassadorRoutes(app: Application) {
  app.post('/api/ambassadors', (req, res) => {
    const ambassador = { id: uuid(), name: req.body.name, scope: req.body.scope, earnings: 0 };
    store.ambassadors.push(ambassador);
    res.status(201).json(ambassador);
  });

  app.post('/api/ambassadors/:id/earnings', (req, res) => {
    const ambassador = store.ambassadors.find((a) => a.id === req.params.id);
    if (!ambassador) return res.status(404).json({ error: 'Not found' });
    ambassador.earnings += Number(req.body.amount || 0);
    res.json(ambassador);
  });

  app.get('/api/ambassadors', (_req, res) => {
    res.json(store.ambassadors);
  });
}
