import { ValidationOptions } from 'class-validator';
import { Translations } from 'interfaces/translations';

export function translate(
  translation: Translations,
  which: keyof Translations,
  validationOptions?: ValidationOptions
): ValidationOptions {
  if (validationOptions?.message) return validationOptions;

  const message = () => {
    const eachPrefix = validationOptions && validationOptions.each ? translation['eachPrefix'] : '';
    return translation[which].replace('$eachPrefix', eachPrefix);
  };

  return { ...validationOptions, message: message };
}
