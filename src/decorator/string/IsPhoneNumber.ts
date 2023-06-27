import { IsPhoneNumber as _IsPhoneNumber, ValidationOptions } from 'class-validator';
import { CountryCode } from 'libphonenumber-js';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsPhoneNumber(region?: CountryCode, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsPhoneNumber(region, translate(translation, 'isPhoneNumber', validationOptions));
}
