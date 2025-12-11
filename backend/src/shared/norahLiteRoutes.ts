import { Application } from 'express';
import { v4 as uuid } from 'uuid';

const agendas: Record<string, any[]> = {};

export function registerNorahLiteRoutes(app: Application) {
  app.post('/api/norah-lite/signup', (req, res) => {
    const userId = uuid();
    agendas[userId] = [];
    res.status(201).json({ userId, profile: req.body });
  });

  app.post('/api/norah-lite/:userId/agenda', (req, res) => {
    const { userId } = req.params;
    if (!agendas[userId]) agendas[userId] = [];
    const item = { id: uuid(), ...req.body };
    agendas[userId].push(item);
    res.status(201).json(item);
  });

  app.get('/api/norah-lite/:userId/agenda', (req, res) => {
    res.json(agendas[req.params.userId] || []);
  });

  app.post('/api/norah-lite/chat', (req, res) => {
    const { message } = req.body;
    res.json({ reply: `Norah Lite te ouviu: ${message}`, tips: ['Respire fundo', 'Priorize o essencial'] });
  });
}
