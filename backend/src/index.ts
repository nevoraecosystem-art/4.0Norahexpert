import dotenv from 'dotenv';
import http from 'http';
import { app } from './server';
import { orchestrator } from './core/orchestratorSingleton';

dotenv.config();

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  await orchestrator.start();
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`HyperServer 3.0 running on port ${PORT}`);
    console.log('NorahOrchestrator is online with modules:', orchestrator.getStatus().modules.join(', '));
  });
}

bootstrap();

export { orchestrator };
