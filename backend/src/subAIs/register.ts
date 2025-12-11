import { NorahOrchestrator } from '../core/NorahOrchestrator';
import { EvolutionEngine } from '../evolution/engine';
import { Council } from '../council/council';
import { HunterAI } from './HunterAI';
import { MarketOpsAI } from './MarketOpsAI';
import { SalesOpsAI } from './SalesOpsAI';
import { BarOpsAI } from './BarOpsAI';
import { ExperienceOpsAI } from './ExperienceOpsAI';
import { FinanceOpsAI } from './FinanceOpsAI';
import { QuantumResearchAI } from './QuantumResearchAI';
import { QuantumHardwareAI } from './QuantumHardwareAI';
import { NanoEngineeringAI } from './NanoEngineeringAI';
import { ThreatDetectionAI } from './ThreatDetectionAI';
import { CompetitorAI } from './CompetitorAI';
import { ExpansionAI } from './ExpansionAI';
import { CostReductionAI } from './CostReductionAI';

export function registerSubAIs(orchestrator: NorahOrchestrator, evolution: EvolutionEngine, council: Council) {
  const instances = [
    new HunterAI(evolution),
    new MarketOpsAI(evolution),
    new SalesOpsAI(evolution),
    new BarOpsAI(evolution),
    new ExperienceOpsAI(evolution),
    new FinanceOpsAI(evolution),
    new QuantumResearchAI(evolution),
    new QuantumHardwareAI(evolution),
    new NanoEngineeringAI(evolution),
    new ThreatDetectionAI(evolution),
    new CompetitorAI(evolution),
    new ExpansionAI(evolution),
    new CostReductionAI(evolution),
  ];

  instances.forEach((ai) => {
    orchestrator.registerSubAI(ai.name, ai);
    council.registerAdvisor(ai.name, () => ai.report());
    setInterval(() => ai.tick(), 15000);
  });
}
