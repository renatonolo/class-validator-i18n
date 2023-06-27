import { IsAlphanumeric as _IsAlphanumeric, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsAlphanumeric(
  locale?: ValidatorJS.AlphanumericLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsAlphanumeric(locale, translate(translation, 'isAlphanumeric', validationOptions));
}
