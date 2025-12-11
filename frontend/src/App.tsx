import { useEffect, useState } from 'react';
import { EventCard } from './components/EventCard';
import { AmbassadorTable } from './components/AmbassadorTable';
import { api } from './services/api';

function App() {
  const [events, setEvents] = useState<any[]>([]);
  const [form, setForm] = useState({ name: '', city: '', date: '', price: 120, producerId: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/events').then((res) => setEvents(res.data));
  }, []);

  const createEvent = async () => {
    const res = await api.post('/events', { ...form });
    setEvents((prev) => [...prev, res.data]);
    setMessage('Evento criado e publicado.');
  };

  return (
    <div className="app">
      <header>
        <h1>Nevora Events</h1>
        <p>A plataforma inteligente para eventos, produtores, artistas e prefeituras.</p>
      </header>

      <section className="grid">
        <div className="card">
          <h2>Crie seu evento</h2>
          <input placeholder="Nome" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Cidade" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
          <input placeholder="Data" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <input type="number" placeholder="Preço" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
          <input placeholder="Produtor ID" value={form.producerId} onChange={(e) => setForm({ ...form, producerId: e.target.value })} />
          <button onClick={createEvent}>Publicar</button>
          {message && <p>{message}</p>}
        </div>

        <div className="card">
          <h2>Visão para produtores</h2>
          <ul>
            <li>Fluxo de criação e monetização com taxas transparentes.</li>
            <li>Check-in online e offline para segurança.</li>
            <li>IA Hunter impulsiona vendas com comissionamento justo.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Benefícios para prefeituras e artistas</h2>
          <p>Operação segura de eventos gratuitos, relatórios de impacto e oportunidades de patrocínio.</p>
          <p>Artistas contam com gestão de agenda, visibilidade e inteligência de cachês.</p>
        </div>
      </section>

      <section>
        <h2>Eventos em destaque</h2>
        <div className="grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="grid">
        <AmbassadorTable />
        <div className="card">
          <h3>Marketplace e operações</h3>
          <p>Conecte prestadores, controle de bar, experiências VIP e relatórios em um só lugar.</p>
          <p>Monetização: 7% por ingresso, comissão do Hunter quando atuando, taxas de marketplace e auditoria.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
