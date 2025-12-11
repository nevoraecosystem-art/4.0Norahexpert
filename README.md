# Nevora Ecosystem 3.0

Monorepo com HyperServer 3.0 (backend), site público Nevora Events, Painel do Founder e Norah Lite.

## Estrutura
- `backend/` – HyperServer 3.0 em TypeScript + Express com NorahOrchestrator, Sub-IAs, Council, Evolution Engine, Black Shield e domínio Nevora Events.
- `frontend/` – Site público Nevora Events (Vite + React).
- `founder-app/` – Painel do Founder com comandos e status do sistema.
- `norah-lite-app/` – Experiência de usuário final com onboarding, agenda, chat e viagens.

## Requisitos
- Node.js 18+

## Instalação
```bash
cd backend && npm install
cd ../frontend && npm install
cd ../founder-app && npm install
cd ../norah-lite-app && npm install
```

## Execução
Abra quatro terminais separados ou use processos paralelos:
```bash
# Backend (porta 4000)
cd backend && npm run dev

# Frontend público (porta 5173)
cd frontend && npm run dev

# Founder app (porta 5174)
cd founder-app && npm run dev

# Norah Lite app (porta 5175)
cd norah-lite-app && npm run dev
```

Defina `VITE_API_URL` nos apps para apontar para o backend se necessário (default `http://localhost:4000/api`).

## Funcionalidades principais
- **Backend**: NorahOrchestrator inicializa Governança, Segurança, Neural, Evolution, Business Engine, NLE e Council. Sub-IAs simulam ciclos de aprendizado. Módulo Founder permite comandos com autenticação de frase e token. Nevora Events implementa criação e gestão de eventos, ingressos com check-in offline, produtores, embaixadores, artistas, marketplace, prefeituras, operações de bar/experiência, relatórios e regras de pricing.
- **Frontend**: fluxo de criação e listagem de eventos, cartões de compra e simulação de checkout, tabela de comissões e conteúdos para produtores, artistas e prefeituras.
- **Founder App**: login via frase/token, dashboard de status e comandos para a Norah.
- **Norah Lite**: onboarding, agenda, lembretes, orientações de viagem e chat leve com Norah.
