import { Translations } from 'interfaces/translations';
import { translations as enUS } from './en-US/translations';
import { translations as ptBR } from './pt-BR/translations';

export function getTranslation(): Translations {
  const language = process.env.CLASS_VALIDATOR_I18N_LANGUAGE;

  switch (language) {
    case 'pt-BR':
      return ptBR;
    case 'en-US':
      return enUS;
    default:
      return enUS;
  }
}
