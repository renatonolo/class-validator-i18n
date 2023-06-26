import { ArrayUniqueIdentifier, ValidationOptions, ArrayUnique as _ArrayUnique } from 'class-validator';
import { getTranslation } from 'i18n';
import { translate } from 'translator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ArrayUnique<T = any>(
  identifierOrOptions?: ArrayUniqueIdentifier<T> | ValidationOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _ArrayUnique(identifierOrOptions, translate(translation.arrayUnique, validationOptions));
}
