import { v4 as uuid } from 'uuid';

export type CampaignResult = { id: string; revenue: number; ticketsSold: number; notes: string };

export function runMatrixRound(): CampaignResult {
  const revenue = Math.round(5000 + Math.random() * 15000);
  const ticketsSold = Math.round(revenue / 50);
  return {
    id: uuid(),
    revenue,
    ticketsSold,
    notes: 'Campanha simulada para novos eventos',
  };
}
