import { useEffect, useState } from 'react';
import { AxiosInstance } from 'axios';

type Props = { api: AxiosInstance; userId: string | null };

export function Agenda({ api, userId }: Props) {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState({ title: '', when: '' });

  useEffect(() => {
    if (userId) {
      api.get(`/norah-lite/${userId}/agenda`).then((res) => setItems(res.data));
    }
  }, [userId, api]);

  const add = async () => {
    if (!userId) return;
    const res = await api.post(`/norah-lite/${userId}/agenda`, form);
    setItems((prev) => [...prev, res.data]);
  };

  return (
    <div className="card">
      <h3>Agenda</h3>
      <div className="actions">
        <input placeholder="Título" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Quando" value={form.when} onChange={(e) => setForm({ ...form, when: e.target.value })} />
        <button onClick={add}>Salvar</button>
      </div>
      <ul>
        {items.map((i) => (
          <li key={i.id}>{i.title} - {i.when}</li>
        ))}
      </ul>
    </div>
  );
}
