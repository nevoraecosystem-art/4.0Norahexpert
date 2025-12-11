import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerBarOpsRoutes(app: Application) {
  app.post('/api/bar', (req, res) => {
    const stock = { id: uuid(), eventId: req.body.eventId, item: req.body.item, qty: Number(req.body.qty || 0) };
    store.barStocks.push(stock);
    res.status(201).json(stock);
  });

  app.get('/api/bar/:eventId', (req, res) => {
    const items = store.barStocks.filter((s) => s.eventId === req.params.eventId);
    res.json(items);
  });
}
