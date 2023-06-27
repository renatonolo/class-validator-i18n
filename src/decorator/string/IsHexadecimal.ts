import { IsHexadecimal as _IsHexadecimal, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsHexadecimal(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsHexadecimal(translate(translation, 'isHexadecimal', validationOptions));
}
