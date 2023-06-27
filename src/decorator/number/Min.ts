import { ValidationOptions, Min as _Min } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function Min(minValue: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _Min(minValue, translate(translation, 'min', validationOptions));
}
