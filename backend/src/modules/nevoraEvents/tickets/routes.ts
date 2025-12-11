import { Application } from 'express';
import { v4 as uuid } from 'uuid';
import { store } from '../../../shared/dataStore';

export function registerTicketRoutes(app: Application) {
  app.post('/api/events/:id/tickets', (req, res) => {
    const event = store.events.find((e) => e.id === req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    const { buyer } = req.body;
    const ticket = { id: uuid(), eventId: event.id, buyer, status: 'valid' as const, hash: uuid() };
    store.tickets.push(ticket);
    res.status(201).json(ticket);
  });

  app.post('/api/events/:id/checkin', (req, res) => {
    const { hash } = req.body;
    const ticket = store.tickets.find((t) => t.hash === hash);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    ticket.status = 'checked-in';
    res.json({ message: 'Check-in realizado', ticket });
  });

  app.get('/api/events/:id/offline-list', (req, res) => {
    const tickets = store.tickets.filter((t) => t.eventId === req.params.id);
    const offlineHashes = tickets.map((t) => ({ hash: t.hash, status: t.status }));
    res.json({ eventId: req.params.id, offlineHashes });
  });
}
