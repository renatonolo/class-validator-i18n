import { ValidationOptions, ArrayNotContains as _ArrayNotContains } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function ArrayNotContains(values: any[], validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _ArrayNotContains(values, translate(translation, 'arrayNotContains', validationOptions));
}
