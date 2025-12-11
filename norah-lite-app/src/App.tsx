import { useState } from 'react';
import axios from 'axios';
import { Agenda } from './components/Agenda';
import { TravelAssistant } from './components/TravelAssistant';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api' });

function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const [profile, setProfile] = useState({ name: '', goal: '' });
  const [chat, setChat] = useState('');
  const [chatReply, setChatReply] = useState('');

  const signup = async () => {
    const res = await api.post('/norah-lite/signup', profile);
    setUserId(res.data.userId);
  };

  const sendChat = async () => {
    const res = await api.post('/norah-lite/chat', { message: chat });
    setChatReply(res.data.reply);
  };

  return (
    <div className="app">
      <header>
        <h1>Norah Lite</h1>
        <p>Sua IA pessoal para agenda, lembretes e bem-estar.</p>
      </header>

      <section className="card">
        <h2>Onboarding</h2>
        <div className="actions">
          <input placeholder="Nome" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
          <input placeholder="Meta" value={profile.goal} onChange={(e) => setProfile({ ...profile, goal: e.target.value })} />
          <button onClick={signup}>Criar perfil</button>
        </div>
        {userId && <p>Perfil criado #{userId}</p>}
      </section>

      <section className="grid">
        <Agenda api={api} userId={userId} />
        <TravelAssistant />
      </section>

      <section className="card">
        <h2>Chat com Norah</h2>
        <div className="actions">
          <input value={chat} onChange={(e) => setChat(e.target.value)} />
          <button onClick={sendChat}>Enviar</button>
        </div>
        {chatReply && <p>{chatReply}</p>}
      </section>
    </div>
  );
}

export default App;
