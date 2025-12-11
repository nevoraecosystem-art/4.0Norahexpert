import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerMunicipalityRoutes(app: Application) {
  app.post('/api/municipalities', (req, res) => {
    const municipality = { id: uuid(), name: req.body.name, benefits: req.body.benefits || [] };
    store.municipalities.push(municipality);
    res.status(201).json(municipality);
  });

  app.get('/api/municipalities', (_req, res) => {
    res.json(store.municipalities);
  });
}
