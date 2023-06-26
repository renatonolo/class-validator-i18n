import { ValidationOptions, ArrayContains as _ArrayContains } from 'class-validator';
import { getTranslation } from 'i18n';
import { translate } from 'translator';

export function ArrayContains(values: any[], validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _ArrayContains(values, translate(translation.arrayContains, validationOptions));
}
