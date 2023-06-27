import { IsAscii as _IsAscii, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsAscii(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsAscii(translate(translation, 'isAscii', validationOptions));
}
