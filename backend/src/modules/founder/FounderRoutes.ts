import { Application, Request, Response } from 'express';
import { NorahOrchestrator } from '../../core/NorahOrchestrator';
import { FounderAuth } from './FounderAuth';
import { FounderCommandCenter } from './FounderCommandCenter';
import { FOUNDER_MASTER_TOKEN } from '../../blackshield/identity';

const auth = new FounderAuth();

export function registerFounderRoutes(app: Application, orchestrator: NorahOrchestrator) {
  const commandCenter = new FounderCommandCenter(orchestrator);

  app.post('/api/founder/command', (req: Request, res: Response) => {
    const { phrase, token, command } = req.body;
    if (!auth.authenticate(phrase, token)) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const result = commandCenter.execute(command || '');
    return res.json(result);
  });

  app.get('/api/founder/status', (_req, res) => {
    const orchestratorStatus = orchestrator.getStatus();
    const revenue = 150000 + orchestratorStatus.activeSubAIs.length * 2000;
    res.json({
      hyperServer: 'online',
      orchestrator: orchestratorStatus,
      financials: { mrr: revenue, projection: revenue * 1.2 },
      alerts: commandCenter.execute('ping').blackshield,
      hint: `Use frase "SOU FUNDADOR" e token ${FOUNDER_MASTER_TOKEN}`,
    });
  });
}
