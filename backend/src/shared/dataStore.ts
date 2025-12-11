import { v4 as uuid } from 'uuid';

export type Event = { id: string; name: string; city: string; date: string; producerId: string; price: number };
export type Ticket = { id: string; eventId: string; buyer: string; status: 'valid' | 'checked-in'; hash: string };
export type Producer = { id: string; name: string; email: string };
export type Ambassador = { id: string; name: string; scope: string; earnings: number };
export type Artist = { id: string; name: string; genre: string };
export type MarketplaceItem = { id: string; name: string; category: string; price: number };
export type Municipality = { id: string; name: string; benefits: string[] };
export type BarStock = { id: string; eventId: string; item: string; qty: number };
export type Experience = { id: string; eventId: string; type: string; price: number };

export const store = {
  events: [] as Event[],
  tickets: [] as Ticket[],
  producers: [] as Producer[],
  ambassadors: [] as Ambassador[],
  artists: [] as Artist[],
  marketplace: [] as MarketplaceItem[],
  municipalities: [] as Municipality[],
  barStocks: [] as BarStock[],
  experiences: [] as Experience[],
};

export function seedDefaults() {
  if (!store.events.length) {
    const producerId = uuid();
    store.producers.push({ id: producerId, name: 'Produtor Alpha', email: 'alpha@nevora.com' });
    const eventId = uuid();
    store.events.push({ id: eventId, name: 'Nevora Opening', city: 'São Paulo', date: new Date().toISOString(), producerId, price: 120 });
    store.tickets.push({ id: uuid(), eventId, buyer: 'Visitante', status: 'valid', hash: uuid() });
  }
}
