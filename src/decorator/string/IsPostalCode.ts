import { IsPostalCode as _IsPostalCode, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsPostalCode(
  locale?: 'any' | ValidatorJS.PostalCodeLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsPostalCode(locale, translate(translation, 'isPostalCode', validationOptions));
}
