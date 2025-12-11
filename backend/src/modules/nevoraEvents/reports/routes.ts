import { Application } from 'express';
import { store } from '../../../shared/dataStore';

export function registerReportRoutes(app: Application) {
  app.get('/api/reports/summary', (_req, res) => {
    const totalRevenue = store.events.reduce((acc, event) => {
      const tickets = store.tickets.filter((t) => t.eventId === event.id);
      return acc + tickets.length * event.price;
    }, 0);
    const nevoraFee = totalRevenue * 0.07;
    res.json({ events: store.events.length, totalRevenue, nevoraFee, ambassadors: store.ambassadors.length });
  });
}
