import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerProducerRoutes(app: Application) {
  app.post('/api/producers', (req, res) => {
    const producer = { id: uuid(), name: req.body.name, email: req.body.email };
    store.producers.push(producer);
    res.status(201).json(producer);
  });

  app.get('/api/producers', (_req, res) => {
    res.json(store.producers);
  });
}
