import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store, seedDefaults } from '../../../shared/dataStore';
import { NorahOrchestrator } from '../../../core/NorahOrchestrator';

seedDefaults();

export function registerNevoraEventRoutes(app: Application, orchestrator: NorahOrchestrator) {
  app.post('/api/events', (req, res) => {
    const { name, city, date, producerId, price } = req.body;
    const event = { id: uuid(), name, city, date, producerId, price };
    store.events.push(event);
    res.status(201).json(event);
  });

  app.get('/api/events', (_req, res) => {
    res.json(store.events);
  });

  app.get('/api/events/:id', (req, res) => {
    const event = store.events.find((e) => e.id === req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  });

  app.put('/api/events/:id', (req, res) => {
    const idx = store.events.findIndex((e) => e.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Event not found' });
    store.events[idx] = { ...store.events[idx], ...req.body };
    res.json(store.events[idx]);
  });

  app.get('/api/events/:id/financials', (req, res) => {
    const event = store.events.find((e) => e.id === req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    const tickets = store.tickets.filter((t) => t.eventId === event.id);
    const revenue = tickets.length * event.price;
    const nevoraFee = revenue * 0.07;
    const hunterFee = revenue * 0.02;
    orchestrator.executeFounderCommand('analisar evento ' + event.name);
    res.json({ revenue, nevoraFee, hunterFee, takeHome: revenue - nevoraFee - hunterFee });
  });
}
