import { ValidationOptions } from 'class-validator';

export function translate(which: string, validationOptions?: ValidationOptions): ValidationOptions {
  if (validationOptions?.message) return validationOptions;

  const message = () => {
    const eachPrefix = validationOptions && validationOptions.each ? 'cada valor em ' : '';
    return eachPrefix + which;
  };

  return { ...validationOptions, message: message };
}
