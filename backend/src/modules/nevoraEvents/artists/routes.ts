import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerArtistRoutes(app: Application) {
  app.post('/api/artists', (req, res) => {
    const artist = { id: uuid(), name: req.body.name, genre: req.body.genre };
    store.artists.push(artist);
    res.status(201).json(artist);
  });

  app.get('/api/artists', (_req, res) => {
    res.json(store.artists);
  });
}
