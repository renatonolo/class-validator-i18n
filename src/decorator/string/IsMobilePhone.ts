import { IsMobilePhone as _IsMobilePhone, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsMobilePhone(
  locale?: ValidatorJS.MobilePhoneLocale,
  options?: ValidatorJS.IsMobilePhoneOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsMobilePhone(locale, options, translate(translation, 'isMobilePhone', validationOptions));
}
