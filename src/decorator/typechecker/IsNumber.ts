import { IsNumberOptions, ValidationOptions, IsNumber as _IsNumber } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsNumber(options: IsNumberOptions = {}, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsNumber(options, translate(translation, 'isNumber', validationOptions));
}
