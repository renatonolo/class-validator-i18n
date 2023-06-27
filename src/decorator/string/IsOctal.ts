import { IsOctal as _IsOctal, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsOctal(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsOctal(translate(translation, 'isOctal', validationOptions));
}
