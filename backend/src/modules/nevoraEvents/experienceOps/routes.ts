import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerExperienceOpsRoutes(app: Application) {
  app.post('/api/experiences', (req, res) => {
    const exp = { id: uuid(), eventId: req.body.eventId, type: req.body.type, price: Number(req.body.price || 0) };
    store.experiences.push(exp);
    res.status(201).json(exp);
  });

  app.get('/api/experiences/:eventId', (req, res) => {
    const exps = store.experiences.filter((e) => e.eventId === req.params.eventId);
    res.json(exps);
  });
}
