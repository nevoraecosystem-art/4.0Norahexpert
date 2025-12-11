import { useState } from 'react';

export function TravelAssistant() {
  const [destination, setDestination] = useState('');
  const [plan, setPlan] = useState('');

  const generatePlan = () => {
    setPlan(`Roteiro simples para ${destination}: escolha voos flexíveis, reserve hotel próximo ao evento e separe momentos de descanso.`);
  };

  return (
    <div className="card">
      <h3>Viagens</h3>
      <div className="actions">
        <input placeholder="Destino" value={destination} onChange={(e) => setDestination(e.target.value)} />
        <button onClick={generatePlan}>Planejar</button>
      </div>
      {plan && <p>{plan}</p>}
    </div>
  );
}
