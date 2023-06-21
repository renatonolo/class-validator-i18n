import { ValidationOptions } from 'class-validator';
import { Translations } from './translations';

export function translate(which: Translations, validationOptions?: ValidationOptions): ValidationOptions {
  if (validationOptions?.message) return validationOptions;

  const message = () => {
    const eachPrefix = validationOptions && validationOptions.each ? 'cada valor em ' : '';
    return eachPrefix + which;
  };

  return { ...validationOptions, message: message };
}
