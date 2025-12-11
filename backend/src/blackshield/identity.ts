const FOUNDER_PHRASE = 'SOU FUNDADOR';
const FOUNDER_MASTER_TOKEN = 'FOUNDER_MASTER_TOKEN_SAMPLE';

export function validateFounderIdentity(phrase: string, token: string) {
  return phrase === FOUNDER_PHRASE && token === FOUNDER_MASTER_TOKEN;
}

export { FOUNDER_MASTER_TOKEN };
