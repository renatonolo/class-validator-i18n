import { IsPositive as _IsPositive, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsPositive(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsPositive(translate(translation, 'isPositive', validationOptions));
}
