import { IsPassportNumber as _IsPassportNumber, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsPassportNumber(countryCode: string, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsPassportNumber(countryCode, translate(translation, 'isPassportNumber', validationOptions));
}
