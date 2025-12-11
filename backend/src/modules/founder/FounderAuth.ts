import { validateFounderIdentity, FOUNDER_MASTER_TOKEN } from '../../blackshield/identity';

export class FounderAuth {
  authenticate(phrase: string, token: string) {
    return validateFounderIdentity(phrase, token);
  }

  getPublicHint() {
    return FOUNDER_MASTER_TOKEN;
  }
}
