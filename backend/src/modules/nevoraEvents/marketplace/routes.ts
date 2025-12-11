import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerMarketplaceRoutes(app: Application) {
  app.post('/api/marketplace', (req, res) => {
    const item = { id: uuid(), name: req.body.name, category: req.body.category, price: Number(req.body.price || 0) };
    store.marketplace.push(item);
    res.status(201).json(item);
  });

  app.get('/api/marketplace', (_req, res) => {
    res.json(store.marketplace);
  });
}
