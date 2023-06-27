import { ValidationOptions, Max as _Max } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function Max(maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _Max(maxValue, translate(translation, 'max', validationOptions));
}
