import { IsNegative as _IsNegative, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsNegative(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsNegative(translate(translation, 'isNegative', validationOptions));
}
