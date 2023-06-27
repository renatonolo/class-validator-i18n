import { IsAlpha as _IsAlpha, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsAlpha(locale?: ValidatorJS.AlphaLocale, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsAlpha(locale, translate(translation, 'isAlpha', validationOptions));
}
