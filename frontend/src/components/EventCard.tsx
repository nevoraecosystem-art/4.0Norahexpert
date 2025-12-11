import { api } from '../services/api';
import { useState } from 'react';

export function EventCard({ event }: { event: any }) {
  const [qty, setQty] = useState(1);
  const [ticket, setTicket] = useState<any>(null);
  const [financials, setFinancials] = useState<any>(null);

  const buy = async () => {
    const res = await api.post(`/events/${event.id}/tickets`, { buyer: 'visitante' });
    setTicket(res.data);
  };

  const simulateCheckout = async () => {
    const res = await api.get(`/events/${event.id}/financials`);
    setFinancials(res.data);
  };

  return (
    <div className="card">
      <h3>{event.name}</h3>
      <p>{event.city}</p>
      <p>Preço base: R$ {event.price}</p>
      <div className="actions">
        <input type="number" min={1} value={qty} onChange={(e) => setQty(Number(e.target.value))} />
        <button onClick={buy}>Comprar {qty} ingresso(s)</button>
        <button onClick={simulateCheckout}>Ver repasse</button>
      </div>
      {ticket && <p>Ingresso criado #{ticket.id} - hash {ticket.hash}</p>}
      {financials && <p>Receita: R$ {financials.revenue} | Nevora: R$ {financials.nevoraFee.toFixed(2)}</p>}
    </div>
  );
}
