import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function AmbassadorTable() {
  const [ambassadors, setAmbassadors] = useState<any[]>([]);

  useEffect(() => {
    api.get('/ambassadors').then((res) => setAmbassadors(res.data));
  }, []);

  return (
    <div className="card">
      <h3>Comissões de Embaixadores</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Escopo</th>
            <th>Ganhos</th>
          </tr>
        </thead>
        <tbody>
          {ambassadors.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.scope}</td>
              <td>R$ {a.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Comissão válida para os 3 primeiros eventos pagos do produtor indicado.</p>
    </div>
  );
}
