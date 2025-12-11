import express from 'express';
import cors from 'cors';
import { orchestrator } from './core/orchestratorSingleton';
import { registerFounderRoutes } from './modules/founder/FounderRoutes';
import { registerNevoraEventRoutes } from './modules/nevoraEvents/events/routes';
import { registerTicketRoutes } from './modules/nevoraEvents/tickets/routes';
import { registerProducerRoutes } from './modules/nevoraEvents/producers/routes';
import { registerAmbassadorRoutes } from './modules/nevoraEvents/ambassadors/routes';
import { registerArtistRoutes } from './modules/nevoraEvents/artists/routes';
import { registerMarketplaceRoutes } from './modules/nevoraEvents/marketplace/routes';
import { registerMunicipalityRoutes } from './modules/nevoraEvents/municipalities/routes';
import { registerBarOpsRoutes } from './modules/nevoraEvents/barOps/routes';
import { registerExperienceOpsRoutes } from './modules/nevoraEvents/experienceOps/routes';
import { registerReportRoutes } from './modules/nevoraEvents/reports/routes';
import { registerPricingRoutes } from './modules/nevoraEvents/pricing/routes';
import { registerNorahLiteRoutes } from './shared/norahLiteRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', orchestrator: orchestrator.getStatus() });
});

registerFounderRoutes(app, orchestrator);
registerNevoraEventRoutes(app, orchestrator);
registerTicketRoutes(app);
registerProducerRoutes(app);
registerAmbassadorRoutes(app);
registerArtistRoutes(app);
registerMarketplaceRoutes(app);
registerMunicipalityRoutes(app);
registerBarOpsRoutes(app);
registerExperienceOpsRoutes(app);
registerReportRoutes(app);
registerPricingRoutes(app);
registerNorahLiteRoutes(app);

export { app };
