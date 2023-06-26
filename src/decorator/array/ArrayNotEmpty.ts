import { ValidationOptions, ArrayNotEmpty as _ArrayNotEmpty } from 'class-validator';
import { getTranslation } from 'i18n';
import { translate } from 'translator';

export function ArrayNotEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _ArrayNotEmpty(translate(translation.arrayNotEmpty, validationOptions));
}
