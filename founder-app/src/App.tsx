import { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api' });

function App() {
  const [phrase, setPhrase] = useState('SOU FUNDADOR');
  const [token, setToken] = useState('FOUNDER_MASTER_TOKEN_SAMPLE');
  const [command, setCommand] = useState('status');
  const [status, setStatus] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    api.get('/founder/status').then((res) => setStatus(res.data));
  }, []);

  const sendCommand = async () => {
    const res = await api.post('/founder/command', { phrase, token, command });
    setResponse(res.data);
  };

  return (
    <div className="app">
      <header>
        <h1>Painel do Founder</h1>
        <p>Controle total do HyperServer 3.0 e da Norah.</p>
      </header>

      <section className="grid">
        <div className="card">
          <h2>Status</h2>
          {status ? (
            <div>
              <p>HyperServer: {status.hyperServer}</p>
              <p>Sub-IAs: {status.orchestrator.activeSubAIs?.join(', ')}</p>
              <p>Projeção MRR: R$ {status.financials.projection.toFixed(2)}</p>
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>

        <div className="card">
          <h2>Logs e Simulações</h2>
          <pre>{JSON.stringify(status?.alerts, null, 2)}</pre>
        </div>
      </section>

      <section className="card">
        <h2>Comandos do Founder</h2>
        <div className="actions">
          <input value={phrase} onChange={(e) => setPhrase(e.target.value)} />
          <input value={token} onChange={(e) => setToken(e.target.value)} />
          <input value={command} onChange={(e) => setCommand(e.target.value)} />
          <button onClick={sendCommand}>Executar</button>
        </div>
        {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      </section>
    </div>
  );
}

export default App;
